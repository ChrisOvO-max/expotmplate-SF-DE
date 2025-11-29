

import React, { useState, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Alert, Modal, Image, Platform, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { FontAwesome6 } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import styles from './styles';

interface UploadedImage {
  uri: string;
  fileName?: string;
  fileSize?: number;
}

const StoryShareScreen = () => {
  const router = useRouter();
  
  // 表单状态
  const [storyTitle, setStoryTitle] = useState('');
  const [storyContent, setStoryContent] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [uploadedImages, setUploadedImages] = useState<UploadedImage[]>([]);
  
  // UI状态
  const [isPublishing, setIsPublishing] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState('网络错误，请稍后重试');
  
  // 输入框引用
  const titleInputRef = useRef<TextInput>(null);
  const contentInputRef = useRef<TextInput>(null);

  // 可选标签
  const availableTags = ['学习', '健身', '自律', '时间管理', '健康生活', '坚持'];

  // 检查是否有未保存的更改
  const hasUnsavedChanges = (): boolean => {
    return storyTitle.trim() !== '' || 
           storyContent.trim() !== '' || 
           uploadedImages.length > 0 || 
           selectedTags.length > 0;
  };

  // 表单验证
  const isFormValid = (): boolean => {
    return storyTitle.trim().length >= 5 && storyContent.trim().length >= 20;
  };

  // 返回按钮处理
  const handleBackPress = () => {
    if (hasUnsavedChanges()) {
      Alert.alert(
        '确认离开',
        '你有未保存的内容，确定要离开吗？',
        [
          { text: '取消', style: 'cancel' },
          { 
            text: '确定', 
            style: 'destructive',
            onPress: () => router.back()
          }
        ]
      );
    } else {
      router.back();
    }
  };

  // 图片选择处理
  const handleImagePicker = async () => {
    if (uploadedImages.length >= 3) {
      Alert.alert('提示', '最多只能上传3张图片');
      return;
    }

    try {
      // 请求相册权限
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      
      if (status !== 'granted') {
        Alert.alert('权限不足', '需要访问相册权限才能上传图片');
        return;
      }

      // 选择图片
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsMultipleSelection: true,
        quality: 0.8,
        allowsEditing: false,
      });

      if (!result.canceled && result.assets) {
        const newImages: UploadedImage[] = result.assets.map(asset => ({
          uri: asset.uri,
          fileName: asset.fileName,
          fileSize: asset.fileSize,
        }));

        const totalImages = uploadedImages.length + newImages.length;
        
        if (totalImages > 3) {
          Alert.alert('提示', '最多只能上传3张图片');
          const allowedCount = 3 - uploadedImages.length;
          setUploadedImages(prev => [...prev, ...newImages.slice(0, allowedCount)]);
        } else {
          setUploadedImages(prev => [...prev, ...newImages]);
        }
      }
    } catch (error) {
      console.error('图片选择失败:', error);
      Alert.alert('错误', '图片选择失败，请重试');
    }
  };

  // 删除图片
  const handleRemoveImage = (index: number) => {
    setUploadedImages(prev => prev.filter((_, i) => i !== index));
  };

  // 标签选择
  const handleTagPress = (tag: string) => {
    if (selectedTags.includes(tag)) {
      // 取消选择
      setSelectedTags(prev => prev.filter(t => t !== tag));
    } else {
      // 选择标签
      if (selectedTags.length < 3) {
        setSelectedTags(prev => [...prev, tag]);
      } else {
        Alert.alert('提示', '最多只能选择3个标签');
      }
    }
  };

  // 移除选中的标签
  const handleRemoveSelectedTag = (tag: string) => {
    setSelectedTags(prev => prev.filter(t => t !== tag));
  };

  // 发布处理
  const handlePublish = async () => {
    if (!isFormValid()) {
      Alert.alert('提示', '请完善标题和内容');
      return;
    }

    if (storyTitle.trim().length < 5) {
      Alert.alert('提示', '标题至少需要5个字符');
      return;
    }

    if (storyContent.trim().length < 20) {
      Alert.alert('提示', '内容至少需要20个字符');
      return;
    }

    setIsPublishing(true);

    try {
      // 模拟发布过程
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // 模拟发布成功
      setShowSuccessModal(true);
    } catch (error) {
      console.error('发布失败:', error);
      setErrorMessage('发布失败，请稍后重试');
      setShowErrorModal(true);
    } finally {
      setIsPublishing(false);
    }
  };

  // 成功模态框确定
  const handleSuccessModalOk = () => {
    setShowSuccessModal(false);
    router.back();
  };

  // 错误模态框确定
  const handleErrorModalOk = () => {
    setShowErrorModal(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* 顶部导航栏 */}
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={handleBackPress}
          activeOpacity={0.7}
        >
          <FontAwesome6 name="arrow-left" size={18} color="#1f2937" />
        </TouchableOpacity>
        
        <Text style={styles.headerTitle}>分享我的案例</Text>
        
        <TouchableOpacity
          style={[
            styles.publishButton,
            (!isFormValid() || isPublishing) && styles.publishButtonDisabled
          ]}
          onPress={handlePublish}
          disabled={!isFormValid() || isPublishing}
          activeOpacity={0.8}
        >
          <Text style={styles.publishButtonText}>
            {isPublishing ? '发布中...' : '发布'}
          </Text>
        </TouchableOpacity>
      </View>

      {/* 表单内容 */}
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* 标题输入 */}
        <View style={styles.formSection}>
          <Text style={styles.formLabel}>
            案例标题 <Text style={styles.requiredMark}>*</Text>
          </Text>
          <TextInput
            ref={titleInputRef}
            style={styles.titleInput}
            value={storyTitle}
            onChangeText={setStoryTitle}
            placeholder="请输入案例标题，如：坚持锻炼100天的收获"
            placeholderTextColor="#6b7280"
            maxLength={50}
            multiline={false}
          />
          <Text style={styles.characterCounter}>
            {storyTitle.length}/50
          </Text>
        </View>

        {/* 内容输入 */}
        <View style={styles.formSection}>
          <Text style={styles.formLabel}>
            案例内容 <Text style={styles.requiredMark}>*</Text>
          </Text>
          <TextInput
            ref={contentInputRef}
            style={styles.contentInput}
            value={storyContent}
            onChangeText={setStoryContent}
            placeholder="分享你的成功经历、心得体会，让更多人受到启发..."
            placeholderTextColor="#6b7280"
            maxLength={1000}
            multiline={true}
            textAlignVertical="top"
          />
          <Text style={styles.characterCounter}>
            {storyContent.length}/1000
          </Text>
        </View>

        {/* 图片上传 */}
        <View style={styles.formSection}>
          <Text style={styles.formLabel}>
            上传图片 <Text style={styles.optionalMark}>(可选，最多3张)</Text>
          </Text>
          
          {/* 上传区域 */}
          <TouchableOpacity
            style={[
              styles.uploadArea,
              uploadedImages.length >= 3 && styles.uploadAreaDisabled
            ]}
            onPress={handleImagePicker}
            disabled={uploadedImages.length >= 3}
            activeOpacity={0.7}
          >
            <View style={styles.uploadPlaceholder}>
              <View style={styles.uploadIconContainer}>
                <FontAwesome6 name="cloud-arrow-up" size={24} color="#02f2ce" />
              </View>
              <Text style={styles.uploadTitle}>点击上传图片</Text>
              <Text style={styles.uploadSubtitle}>
                支持 JPG、PNG 格式，单张不超过 5MB
              </Text>
            </View>
          </TouchableOpacity>
          
          {/* 图片预览 */}
          {uploadedImages.length > 0 && (
            <View style={styles.imagePreviewContainer}>
              {uploadedImages.map((image, index) => (
                <View key={index} style={styles.imagePreviewItem}>
                  <Image source={{ uri: image.uri }} style={styles.previewImage} />
                  <TouchableOpacity
                    style={styles.removeImageButton}
                    onPress={() => handleRemoveImage(index)}
                    activeOpacity={0.8}
                  >
                    <FontAwesome6 name="xmark" size={12} color="#ffffff" />
                  </TouchableOpacity>
                </View>
              ))}
            </View>
          )}
        </View>

        {/* 标签选择 */}
        <View style={styles.formSection}>
          <Text style={styles.formLabel}>
            选择标签 <Text style={styles.optionalMark}>(可选)</Text>
          </Text>
          
          {/* 标签按钮 */}
          <View style={styles.tagsContainer}>
            {availableTags.map((tag) => (
              <TouchableOpacity
                key={tag}
                style={[
                  styles.tagButton,
                  selectedTags.includes(tag) && styles.tagButtonSelected
                ]}
                onPress={() => handleTagPress(tag)}
                activeOpacity={0.7}
              >
                <Text style={[
                  styles.tagButtonText,
                  selectedTags.includes(tag) && styles.tagButtonTextSelected
                ]}>
                  {tag}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
          
          {/* 选中的标签 */}
          {selectedTags.length > 0 && (
            <View style={styles.selectedTagsContainer}>
              {selectedTags.map((tag) => (
                <View key={tag} style={styles.selectedTag}>
                  <Text style={styles.selectedTagText}>{tag}</Text>
                  <TouchableOpacity
                    style={styles.removeTagButton}
                    onPress={() => handleRemoveSelectedTag(tag)}
                    activeOpacity={0.7}
                  >
                    <FontAwesome6 name="xmark" size={10} color="#02f2ce" />
                  </TouchableOpacity>
                </View>
              ))}
            </View>
          )}
        </View>

        {/* 温馨提示 */}
        <View style={styles.tipsSection}>
          <View style={styles.tipsContent}>
            <FontAwesome6 name="circle-info" size={16} color="#3b82f6" style={styles.tipsIcon} />
            <View style={styles.tipsTextContainer}>
              <Text style={styles.tipsTitle}>温馨提示</Text>
              <View style={styles.tipsList}>
                <Text style={styles.tipsItem}>• 请确保分享的内容真实、积极向上</Text>
                <Text style={styles.tipsItem}>• 避免涉及个人隐私信息</Text>
                <Text style={styles.tipsItem}>• 优质案例将有机会被推荐到首页</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* 成功模态框 */}
      <Modal
        visible={showSuccessModal}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setShowSuccessModal(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <View style={styles.successIconContainer}>
              <FontAwesome6 name="check" size={24} color="#10b981" />
            </View>
            <Text style={styles.modalTitle}>发布成功！</Text>
            <Text style={styles.modalMessage}>
              感谢你的分享，你的案例将激励更多人
            </Text>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={handleSuccessModalOk}
              activeOpacity={0.8}
            >
              <Text style={styles.modalButtonText}>确定</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* 错误模态框 */}
      <Modal
        visible={showErrorModal}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setShowErrorModal(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <View style={styles.errorIconContainer}>
              <FontAwesome6 name="triangle-exclamation" size={24} color="#ef4444" />
            </View>
            <Text style={styles.modalTitle}>发布失败</Text>
            <Text style={styles.modalMessage}>{errorMessage}</Text>
            <TouchableOpacity
              style={[styles.modalButton, styles.modalButtonError]}
              onPress={handleErrorModalOk}
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

export default StoryShareScreen;

