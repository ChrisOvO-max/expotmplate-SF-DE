

import React, { useState, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Modal, Alert, KeyboardAvoidingView, Platform, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { FontAwesome6 } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './styles';

interface TrainingItem {
  name: string;
  category: string;
  description: string;
  isCustom: boolean;
  createdAt: string;
}

const TrainingAddScreen = () => {
  const router = useRouter();
  
  // 表单状态
  const [itemName, setItemName] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [itemDescription, setItemDescription] = useState('');
  
  // 验证状态
  const [showNameError, setShowNameError] = useState(false);
  const [showCategoryError, setShowCategoryError] = useState(false);
  
  // UI状态
  const [isSuccessModalVisible, setIsSuccessModalVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  // 输入框引用
  const nameInputRef = useRef<TextInput>(null);
  
  // 类别选项配置
  const categoryOptions = [
    {
      id: 'strength',
      label: '力量',
      icon: 'dumbbell',
      color: '#02f2ce',
    },
    {
      id: 'cardio',
      label: '有氧',
      icon: 'person-running',
      color: '#00f289',
    },
    {
      id: 'flexibility',
      label: '柔韧性',
      icon: 'person-practicing-yoga',
      color: '#0296f2e6',
    },
  ];
  
  // 处理返回按钮
  const handleBackPress = () => {
    if (router.canGoBack()) {
      router.back();
    }
  };
  
  // 处理项目名称输入
  const handleItemNameChange = (text: string) => {
    setItemName(text);
    if (text.trim().length > 0) {
      setShowNameError(false);
    }
  };
  
  // 处理类别选择
  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    setShowCategoryError(false);
  };
  
  // 处理项目说明输入
  const handleDescriptionChange = (text: string) => {
    setItemDescription(text);
  };
  
  // 验证表单
  const validateForm = (): boolean => {
    let isValid = true;
    
    if (!itemName.trim()) {
      setShowNameError(true);
      nameInputRef.current?.focus();
      isValid = false;
    }
    
    if (!selectedCategory) {
      setShowCategoryError(true);
      isValid = false;
    }
    
    return isValid;
  };
  
  // 处理表单提交
  const handleFormSubmit = async () => {
    if (!validateForm()) {
      return;
    }
    
    setIsLoading(true);
    
    try {
      // 模拟保存数据
      const newTrainingItem: TrainingItem = {
        name: itemName.trim(),
        category: selectedCategory,
        description: itemDescription.trim(),
        isCustom: true,
        createdAt: new Date().toISOString(),
      };
      
      console.log('添加自定义训练项目:', newTrainingItem);
      
      // 模拟API调用延迟
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // 显示成功模态框
      setIsSuccessModalVisible(true);
    } catch (error) {
      Alert.alert('错误', '添加项目失败，请重试');
    } finally {
      setIsLoading(false);
    }
  };
  
  // 处理成功模态框确定
  const handleSuccessModalConfirm = () => {
    setIsSuccessModalVisible(false);
    if (router.canGoBack()) {
      router.back();
    }
  };
  
  // 检查表单是否可提交
  const isFormValid = itemName.trim().length > 0 && selectedCategory.length > 0;
  
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.keyboardAvoidingView}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        {/* 顶部导航栏 */}
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={handleBackPress}
            activeOpacity={0.7}
          >
            <FontAwesome6 name="arrow-left" size={18} color="#1f2937" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>添加自定义项目</Text>
          <View style={styles.headerPlaceholder} />
        </View>
        
        {/* 表单内容 */}
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {/* 项目名称 */}
          <View style={styles.formSection}>
            <Text style={styles.formLabel}>
              项目名称 <Text style={styles.requiredMark}>*</Text>
            </Text>
            <TextInput
              ref={nameInputRef}
              style={[
                styles.textInput,
                showNameError && styles.textInputError,
              ]}
              value={itemName}
              onChangeText={handleItemNameChange}
              placeholder="请输入训练项目名称，如：哑铃卧推"
              placeholderTextColor="#6b7280"
              maxLength={50}
              returnKeyType="next"
            />
            {showNameError && (
              <Text style={styles.errorText}>项目名称不能为空</Text>
            )}
            <Text style={styles.characterCounter}>
              {itemName.length}/50
            </Text>
          </View>
          
          {/* 项目类别 */}
          <View style={styles.formSection}>
            <Text style={styles.formLabel}>
              项目类别 <Text style={styles.requiredMark}>*</Text>
            </Text>
            <View style={styles.categoryGrid}>
              {categoryOptions.map((option) => (
                <TouchableOpacity
                  key={option.id}
                  style={[
                    styles.categoryOption,
                    selectedCategory === option.label && styles.categoryOptionSelected,
                  ]}
                  onPress={() => handleCategorySelect(option.label)}
                  activeOpacity={0.7}
                >
                  <View
                    style={[
                      styles.categoryIconContainer,
                      { backgroundColor: `${option.color}1A` },
                    ]}
                  >
                    <FontAwesome6
                      name={option.icon as any}
                      size={16}
                      color={option.color}
                    />
                  </View>
                  <Text style={styles.categoryLabel}>{option.label}</Text>
                </TouchableOpacity>
              ))}
            </View>
            {showCategoryError && (
              <Text style={styles.errorText}>请选择项目类别</Text>
            )}
          </View>
          
          {/* 项目说明 */}
          <View style={styles.formSection}>
            <Text style={styles.formLabel}>项目说明</Text>
            <TextInput
              style={styles.textArea}
              value={itemDescription}
              onChangeText={handleDescriptionChange}
              placeholder="请描述训练项目的动作要领、注意事项等（可选）"
              placeholderTextColor="#6b7280"
              maxLength={200}
              multiline
              numberOfLines={4}
              textAlignVertical="top"
            />
            <Text style={styles.characterCounter}>
              {itemDescription.length}/200
            </Text>
          </View>
          
          {/* 提示信息 */}
          <View style={styles.tipSection}>
            <View style={styles.tipContent}>
              <FontAwesome6 name="circle-info" size={16} color="#3b82f6" />
              <View style={styles.tipTextContainer}>
                <Text style={styles.tipTitle}>温馨提示</Text>
                <Text style={styles.tipDescription}>
                  添加的自定义项目将出现在训练项目库中，您可以在创建训练计划时选择使用。
                </Text>
              </View>
            </View>
          </View>
          
          {/* 底部占位空间 */}
          <View style={styles.bottomSpacer} />
        </ScrollView>
        
        {/* 底部保存按钮 */}
        <View style={styles.bottomActions}>
          <TouchableOpacity
            style={[
              styles.saveButtonContainer,
              !isFormValid && styles.saveButtonDisabled,
            ]}
            onPress={handleFormSubmit}
            disabled={!isFormValid || isLoading}
            activeOpacity={0.8}
          >
            <LinearGradient
              colors={['#02f2ce', '#00f289']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.saveButton}
            >
              <FontAwesome6 name="plus" size={16} color="#ffffff" />
              <Text style={styles.saveButtonText}>
                {isLoading ? '添加中...' : '添加项目'}
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
      
      {/* 成功提示模态框 */}
      <Modal
        visible={isSuccessModalVisible}
        transparent
        animationType="fade"
        onRequestClose={handleSuccessModalConfirm}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <View style={styles.successIconContainer}>
              <FontAwesome6 name="check" size={24} color="#10b981" />
            </View>
            <Text style={styles.modalTitle}>添加成功</Text>
            <Text style={styles.modalDescription}>
              自定义训练项目已添加到项目库中
            </Text>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={handleSuccessModalConfirm}
              activeOpacity={0.8}
            >
              <Text style={styles.modalButtonText}>确定</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default TrainingAddScreen;

