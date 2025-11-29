

import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, Modal, TextInput, Alert, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { FontAwesome6 } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import styles from './styles';

interface UserProfileData {
  nickname: string;
  uid: string;
  avatar: string;
  gender: string;
  birthday: string;
  bio: string;
  checkinDays: number;
  completionRate: number;
  totalCheckins: number;
  bmi: number;
  height: number;
  weight: number;
}

interface EditModalData {
  isVisible: boolean;
  title: string;
  currentValue: string;
  field: keyof UserProfileData | '';
}

const UserProfileScreen: React.FC = () => {
  const router = useRouter();

  const [userProfileData, setUserProfileData] = useState<UserProfileData>({
    nickname: '小明',
    uid: '123456789',
    avatar: 'https://s.coze.cn/image/L46mv3jU4jw/',
    gender: '男',
    birthday: '1998年6月15日',
    bio: '努力成为更好的自己，每天进步一点点',
    checkinDays: 15,
    completionRate: 89,
    totalCheckins: 126,
    bmi: 22.5,
    height: 175,
    weight: 70,
  });

  const [editModalData, setEditModalData] = useState<EditModalData>({
    isVisible: false,
    title: '',
    currentValue: '',
    field: '',
  });

  const [editInputValue, setEditInputValue] = useState<string>('');

  const handleBackPress = () => {
    if (router.canGoBack()) {
      router.back();
    }
  };

  const handleAvatarEdit = async () => {
    try {
      const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
      
      if (!permissionResult.granted) {
        Alert.alert('权限提示', '需要访问相册权限来更换头像');
        return;
      }

      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 0.8,
      });

      if (!result.canceled && result.assets[0]) {
        setUserProfileData(prev => ({
          ...prev,
          avatar: result.assets[0].uri,
        }));
      }
    } catch (error) {
      Alert.alert('错误', '更换头像失败，请重试');
    }
  };

  const showEditModal = (field: keyof UserProfileData, title: string) => {
    const currentValue = userProfileData[field];
    setEditModalData({
      isVisible: true,
      title,
      currentValue: currentValue.toString(),
      field,
    });
    setEditInputValue(currentValue.toString());
  };

  const hideEditModal = () => {
    setEditModalData({
      isVisible: false,
      title: '',
      currentValue: '',
      field: '',
    });
    setEditInputValue('');
  };

  const saveEditValue = () => {
    const trimmedValue = editInputValue.trim();
    if (!trimmedValue) return;

    if (editModalData.field) {
      setUserProfileData(prev => ({
        ...prev,
        [editModalData.field]: trimmedValue,
      }));
    }

    hideEditModal();
    showToast('保存成功');
  };

  const showToast = (message: string) => {
    Alert.alert('提示', message);
  };

  const handleBodyDataPress = () => {
    router.push('/p-body_data_input');
  };

  const handleSettingsPress = () => {
    router.push('/p-settings');
  };

  const renderProfileItem = (
    icon: string,
    iconColor: string,
    iconBgColor: string,
    title: string,
    value: string,
    onPress: () => void,
    isLast = false
  ) => (
    <TouchableOpacity
      style={[styles.profileItem, isLast && styles.profileItemLast]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <View style={styles.profileItemLeft}>
        <View style={[styles.profileItemIcon, { backgroundColor: iconBgColor }]}>
          <FontAwesome6 name={icon} size={16} color={iconColor} />
        </View>
        <View style={styles.profileItemContent}>
          <Text style={styles.profileItemTitle}>{title}</Text>
          <Text style={styles.profileItemValue}>{value}</Text>
        </View>
      </View>
      <FontAwesome6 name="chevron-right" size={14} color="#6b7280" />
    </TouchableOpacity>
  );

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
        <Text style={styles.headerTitle}>个人资料</Text>
        <View style={styles.headerPlaceholder} />
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* 用户基本信息区域 */}
        <View style={styles.userBasicInfoCard}>
          <View style={styles.avatarContainer}>
            <Image source={{ uri: userProfileData.avatar }} style={styles.avatar} />
            <TouchableOpacity
              style={styles.avatarEditButton}
              onPress={handleAvatarEdit}
              activeOpacity={0.8}
            >
              <FontAwesome6 name="camera" size={12} color="#ffffff" />
            </TouchableOpacity>
          </View>

          <View style={styles.userInfoContainer}>
            <Text style={styles.userNickname}>{userProfileData.nickname}</Text>
            <Text style={styles.userUid}>UID: {userProfileData.uid}</Text>
          </View>

          <View style={styles.statsContainer}>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>{userProfileData.checkinDays}</Text>
              <Text style={styles.statLabel}>连续打卡</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={[styles.statValue, { color: '#00f289' }]}>
                {userProfileData.completionRate}%
              </Text>
              <Text style={styles.statLabel}>完成率</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={[styles.statValue, { color: '#0296f2e6' }]}>
                {userProfileData.totalCheckins}
              </Text>
              <Text style={styles.statLabel}>总打卡</Text>
            </View>
          </View>
        </View>

        {/* 个人信息编辑 */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>个人信息</Text>
          <View style={styles.profileCard}>
            {renderProfileItem(
              'user',
              '#02f2ce',
              'rgba(2, 242, 206, 0.1)',
              '昵称',
              userProfileData.nickname,
              () => showEditModal('nickname', '编辑昵称')
            )}
            {renderProfileItem(
              'venus-mars',
              '#00f289',
              'rgba(0, 242, 137, 0.1)',
              '性别',
              userProfileData.gender,
              () => showEditModal('gender', '编辑性别')
            )}
            {renderProfileItem(
              'birthday-cake',
              '#0296f2e6',
              'rgba(2, 150, 242, 0.1)',
              '生日',
              userProfileData.birthday,
              () => showEditModal('birthday', '编辑生日')
            )}
            {renderProfileItem(
              'edit',
              '#f59e0b',
              'rgba(245, 158, 11, 0.1)',
              '简介',
              userProfileData.bio,
              () => showEditModal('bio', '编辑简介'),
              true
            )}
          </View>
        </View>

        {/* 身体数据 */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>身体数据</Text>
          <TouchableOpacity
            style={styles.bodyDataCard}
            onPress={handleBodyDataPress}
            activeOpacity={0.9}
          >
            <View style={styles.bodyDataHeader}>
              <Text style={styles.bodyDataTitle}>BMI指数</Text>
              <View style={styles.bmiStatusContainer}>
                <View style={styles.bmiIndicator} />
                <Text style={styles.bmiStatusText}>正常</Text>
              </View>
            </View>

            <View style={styles.bodyDataValues}>
              <View style={styles.bodyDataValueItem}>
                <Text style={styles.bodyDataValue}>{userProfileData.bmi}</Text>
                <Text style={styles.bodyDataLabel}>BMI值</Text>
              </View>
              <View style={styles.bodyDataValueItem}>
                <Text style={styles.bodyDataValue}>{userProfileData.height}cm</Text>
                <Text style={styles.bodyDataLabel}>身高</Text>
              </View>
              <View style={styles.bodyDataValueItem}>
                <Text style={styles.bodyDataValue}>{userProfileData.weight}kg</Text>
                <Text style={styles.bodyDataLabel}>体重</Text>
              </View>
            </View>

            <View style={styles.bodyDataFooter}>
              <Text style={styles.bodyDataFooterText}>健康状态良好，继续保持！</Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* 设置入口 */}
        <View style={[styles.section, styles.lastSection]}>
          <Text style={styles.sectionTitle}>设置</Text>
          <View style={styles.settingsCard}>
            <TouchableOpacity
              style={styles.settingsItem}
              onPress={handleSettingsPress}
              activeOpacity={0.7}
            >
              <View style={styles.settingsItemLeft}>
                <View style={styles.settingsItemIcon}>
                  <FontAwesome6 name="gear" size={16} color="#6b7280" />
                </View>
                <View style={styles.settingsItemContent}>
                  <Text style={styles.settingsItemTitle}>设置</Text>
                  <Text style={styles.settingsItemValue}>通知、隐私等设置</Text>
                </View>
              </View>
              <FontAwesome6 name="chevron-right" size={14} color="#6b7280" />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      {/* 编辑弹窗 */}
      <Modal
        visible={editModalData.isVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={hideEditModal}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>{editModalData.title}</Text>
            <TextInput
              style={styles.modalInput}
              value={editInputValue}
              onChangeText={setEditInputValue}
              placeholder={`请输入${editModalData.title.replace('编辑', '')}`}
              multiline={editModalData.field === 'bio'}
              maxLength={editModalData.field === 'bio' ? 200 : 50}
              autoFocus={true}
              onSubmitEditing={saveEditValue}
            />
            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={styles.modalCancelButton}
                onPress={hideEditModal}
                activeOpacity={0.7}
              >
                <Text style={styles.modalCancelButtonText}>取消</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.modalSaveButton}
                onPress={saveEditValue}
                activeOpacity={0.7}
              >
                <Text style={styles.modalSaveButtonText}>保存</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default UserProfileScreen;

