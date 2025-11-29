

import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { FontAwesome6 } from '@expo/vector-icons';
import styles from './styles';
import SettingItem from './components/SettingItem';
import LogoutModal from './components/LogoutModal';
import CacheToast from './components/CacheToast';

const SettingsScreen = () => {
  const router = useRouter();
  const [isLogoutModalVisible, setIsLogoutModalVisible] = useState(false);
  const [isCacheToastVisible, setIsCacheToastVisible] = useState(false);

  const handleBackPress = () => {
    if (router.canGoBack()) {
      router.back();
    }
  };

  const handleNotificationSettingsPress = () => {
    router.push('/p-notification_settings');
  };

  const handleMiniappEntryPress = () => {
    router.push('/p-miniapp_entry');
  };

  const handleAboutUsPress = () => {
    router.push('/p-about_us');
  };

  const handlePrivacyPolicyPress = () => {
    console.log('打开隐私政策');
    // 在实际应用中，这里会打开隐私政策页面或弹窗
  };

  const handleUserAgreementPress = () => {
    console.log('打开用户协议');
    // 在实际应用中，这里会打开用户协议页面或弹窗
  };

  const handleClearCachePress = () => {
    console.log('清除缓存');
    setIsCacheToastVisible(true);
    setTimeout(() => {
      setIsCacheToastVisible(false);
    }, 2000);
  };

  const handleLogoutPress = () => {
    setIsLogoutModalVisible(true);
  };

  const handleConfirmLogout = () => {
    console.log('确认退出登录');
    setIsLogoutModalVisible(false);
    // 清除用户登录状态
    // AsyncStorage.removeItem('userToken');
    // 跳转到登录页面
    router.replace('/p-login_register');
  };

  const handleCancelLogout = () => {
    setIsLogoutModalVisible(false);
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
        <Text style={styles.headerTitle}>设置</Text>
        <View style={styles.headerPlaceholder} />
      </View>

      {/* 设置列表 */}
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          {/* 通知设置 */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>通知设置</Text>
            <View style={styles.card}>
              <SettingItem
                icon="bell"
                iconColor="#02f2ce"
                iconBackgroundColor="rgba(2, 242, 206, 0.1)"
                title="通知设置"
                subtitle="管理应用通知偏好"
                onPress={handleNotificationSettingsPress}
              />
            </View>
          </View>

          {/* 功能入口 */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>功能入口</Text>
            <View style={styles.card}>
              <SettingItem
                icon="mobile-screen"
                iconColor="#00f289"
                iconBackgroundColor="rgba(0, 242, 137, 0.1)"
                title="小程序入口"
                subtitle="访问SF-DE小程序"
                onPress={handleMiniappEntryPress}
              />
            </View>
          </View>

          {/* 关于与帮助 */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>关于与帮助</Text>
            <View style={styles.card}>
              <SettingItem
                icon="circle-info"
                iconColor="#0296f2e6"
                iconBackgroundColor="rgba(2, 150, 242, 0.1)"
                title="关于我们"
                subtitle="版本信息与应用介绍"
                onPress={handleAboutUsPress}
              />
              <View style={styles.separator} />
              <SettingItem
                icon="shield-halved"
                iconColor="#9333ea"
                iconBackgroundColor="rgba(147, 51, 234, 0.1)"
                title="隐私政策"
                subtitle="了解我们如何保护您的隐私"
                onPress={handlePrivacyPolicyPress}
              />
              <View style={styles.separator} />
              <SettingItem
                icon="file-contract"
                iconColor="#2563eb"
                iconBackgroundColor="rgba(37, 99, 235, 0.1)"
                title="用户协议"
                subtitle="查看用户服务协议"
                onPress={handleUserAgreementPress}
              />
            </View>
          </View>

          {/* 系统设置 */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>系统设置</Text>
            <View style={styles.card}>
              <SettingItem
                icon="broom"
                iconColor="#ea580c"
                iconBackgroundColor="rgba(234, 88, 12, 0.1)"
                title="清除缓存"
                subtitle="清理应用缓存数据"
                rightText="128 MB"
                onPress={handleClearCachePress}
              />
            </View>
          </View>

          {/* 账户操作 */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>账户操作</Text>
            <View style={styles.card}>
              <TouchableOpacity 
                style={styles.logoutButton} 
                onPress={handleLogoutPress}
                activeOpacity={0.7}
              >
                <FontAwesome6 name="right-from-bracket" size={18} color="#dc2626" />
                <Text style={styles.logoutButtonText}>退出登录</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* 退出登录确认弹窗 */}
      <LogoutModal
        visible={isLogoutModalVisible}
        onConfirm={handleConfirmLogout}
        onCancel={handleCancelLogout}
      />

      {/* 清除缓存成功提示 */}
      <CacheToast visible={isCacheToastVisible} />
    </SafeAreaView>
  );
};

export default SettingsScreen;

