

import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Modal, Alert, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { FontAwesome6 } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './styles';

interface BMIResult {
  value: number;
  category: string;
  suggestion: string;
  color: string;
}

const BodyDataInputScreen = () => {
  const router = useRouter();
  
  // 状态管理
  const [heightValue, setHeightValue] = useState('175.0');
  const [weightValue, setWeightValue] = useState('65.0');
  const [isSuccessModalVisible, setIsSuccessModalVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [heightErrorMessage, setHeightErrorMessage] = useState('');
  const [weightErrorMessage, setWeightErrorMessage] = useState('');
  const [bmiResult, setBmiResult] = useState<BMIResult>({
    value: 21.2,
    category: '正常范围',
    suggestion: '您的BMI指数在正常范围内，保持良好的生活习惯和适度运动即可。',
    color: '#00f289'
  });

  // BMI分类数据
  const bmiCategories = [
    { min: 0, max: 18.4, category: '偏瘦', color: '#0296f2e6', suggestion: '建议适当增加营养摄入，保持均衡饮食，适度进行力量训练。' },
    { min: 18.5, max: 23.9, category: '正常范围', color: '#00f289', suggestion: '您的BMI指数在正常范围内，保持良好的生活习惯和适度运动即可。' },
    { min: 24.0, max: 27.9, category: '超重', color: '#ffc107', suggestion: '建议控制饮食热量摄入，增加有氧运动，保持规律的运动习惯。' },
    { min: 28.0, max: Infinity, category: '肥胖', color: '#dc3545', suggestion: '建议咨询专业医生或营养师，制定科学的减重计划，增加运动量。' }
  ];

  // 计算BMI
  const calculateBMI = (): BMIResult | null => {
    const height = parseFloat(heightValue);
    const weight = parseFloat(weightValue);
    
    if (!height || !weight || height <= 0 || weight <= 0) {
      return null;
    }
    
    const heightM = height / 100;
    const bmi = weight / (heightM * heightM);
    
    const category = bmiCategories.find(cat => bmi >= cat.min && bmi <= cat.max);
    if (category) {
      return {
        value: parseFloat(bmi.toFixed(1)),
        category: category.category,
        suggestion: category.suggestion,
        color: category.color
      };
    }
    
    return null;
  };

  // 验证输入
  const validateInputs = (): boolean => {
    const height = parseFloat(heightValue);
    const weight = parseFloat(weightValue);
    
    let isValid = true;
    
    if (height < 100 || height > 250 || !height) {
      setHeightErrorMessage('请输入有效的身高（100-250cm）');
      isValid = false;
    } else {
      setHeightErrorMessage('');
    }
    
    if (weight < 30 || weight > 200 || !weight) {
      setWeightErrorMessage('请输入有效的体重（30-200kg）');
      isValid = false;
    } else {
      setWeightErrorMessage('');
    }
    
    return isValid;
  };

  // 更新BMI显示
  const updateBMI = () => {
    const isValid = validateInputs();
    const bmi = calculateBMI();
    
    if (bmi && isValid) {
      setBmiResult(bmi);
    } else {
      setBmiResult({
        value: 0,
        category: '请输入有效数据',
        suggestion: '请输入有效的身高和体重数据',
        color: '#02f2ce'
      });
    }
  };

  // 监听输入变化
  useEffect(() => {
    updateBMI();
  }, [heightValue, weightValue]);

  // 处理返回按钮
  const handleBackButtonPress = () => {
    if (router.canGoBack()) {
      router.back();
    }
  };

  // 处理保存按钮
  const handleSaveButtonPress = async () => {
    if (!validateInputs()) {
      return;
    }
    
    setIsLoading(true);
    
    try {
      // 模拟保存数据
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log('保存身体数据:', {
        height: heightValue,
        weight: weightValue,
        bmi: bmiResult.value
      });
      
      setIsSuccessModalVisible(true);
    } catch (error) {
      Alert.alert('保存失败', '请稍后重试');
    } finally {
      setIsLoading(false);
    }
  };

  // 处理模态框关闭
  const handleModalClose = () => {
    setIsSuccessModalVisible(false);
    if (router.canGoBack()) {
      router.back();
    }
  };

  // 检查表单是否有效
  const isFormValid = (): boolean => {
    const height = parseFloat(heightValue);
    const weight = parseFloat(weightValue);
    return height >= 100 && height <= 250 && weight >= 30 && weight <= 200;
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* 顶部导航栏 */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={handleBackButtonPress}
          activeOpacity={0.7}
        >
          <FontAwesome6 name="arrow-left" size={18} color="#1f2937" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>身体数据</Text>
        <View style={styles.headerPlaceholder} />
      </View>

      {/* 主要内容区域 */}
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* 身高输入 */}
        <View style={styles.inputSection}>
          <Text style={styles.inputLabel}>身高</Text>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.textInput}
              placeholder="请输入身高"
              value={heightValue}
              onChangeText={setHeightValue}
              keyboardType="numeric"
              placeholderTextColor="#9ca3af"
            />
            <Text style={styles.inputUnit}>cm</Text>
          </View>
          {heightErrorMessage ? (
            <Text style={styles.errorText}>{heightErrorMessage}</Text>
          ) : null}
        </View>

        {/* 体重输入 */}
        <View style={styles.inputSection}>
          <Text style={styles.inputLabel}>体重</Text>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.textInput}
              placeholder="请输入体重"
              value={weightValue}
              onChangeText={setWeightValue}
              keyboardType="numeric"
              placeholderTextColor="#9ca3af"
            />
            <Text style={styles.inputUnit}>kg</Text>
          </View>
          {weightErrorMessage ? (
            <Text style={styles.errorText}>{weightErrorMessage}</Text>
          ) : null}
        </View>

        {/* BMI 显示卡片 */}
        <LinearGradient
          colors={[bmiResult.color, bmiResult.color]}
          style={styles.bmiCard}
        >
          <View style={styles.bmiContent}>
            <Text style={styles.bmiTitle}>BMI 指数</Text>
            <Text style={styles.bmiValue}>
              {bmiResult.value > 0 ? bmiResult.value : '--'}
            </Text>
            <Text style={styles.bmiCategory}>{bmiResult.category}</Text>
            <Text style={styles.bmiRange}>正常范围：18.5 - 23.9</Text>
            
            {/* BMI 健康建议 */}
            <View style={styles.bmiSuggestion}>
              <Text style={styles.suggestionTitle}>健康建议</Text>
              <Text style={styles.suggestionText}>{bmiResult.suggestion}</Text>
            </View>
          </View>
        </LinearGradient>

        {/* 数据说明 */}
        <View style={styles.tipsCard}>
          <View style={styles.tipsContent}>
            <View style={styles.tipsIcon}>
              <FontAwesome6 name="info" size={14} color="#02f2ce" />
            </View>
            <View style={styles.tipsTextContainer}>
              <Text style={styles.tipsTitle}>温馨提示</Text>
              <View style={styles.tipsList}>
                <Text style={styles.tipsItem}>• 建议在每天相同时间测量体重</Text>
                <Text style={styles.tipsItem}>• 早晨空腹时测量结果更为准确</Text>
                <Text style={styles.tipsItem}>• BMI仅供参考，具体健康状况请咨询专业医生</Text>
              </View>
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
            styles.saveButton,
            !isFormValid() && styles.saveButtonDisabled
          ]}
          onPress={handleSaveButtonPress}
          disabled={!isFormValid() || isLoading}
          activeOpacity={0.8}
        >
          <LinearGradient
            colors={['#02f2ce', '#00f289']}
            style={styles.saveButtonGradient}
          >
            <FontAwesome6 name="floppy-disk" size={16} color="#ffffff" />
            <Text style={styles.saveButtonText}>
              {isLoading ? '保存中...' : '保存数据'}
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>

      {/* 成功提示模态框 */}
      <Modal
        visible={isSuccessModalVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={handleModalClose}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <View style={styles.modalIcon}>
              <FontAwesome6 name="check" size={24} color="#10b981" />
            </View>
            <Text style={styles.modalTitle}>保存成功</Text>
            <Text style={styles.modalMessage}>身体数据已更新</Text>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={handleModalClose}
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

export default BodyDataInputScreen;

