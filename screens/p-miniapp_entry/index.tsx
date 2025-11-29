

import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Modal, Alert, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { FontAwesome6 } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './styles';

const MiniAppEntryScreen = () => {
  const router = useRouter();
  const [isQRCodeModalVisible, setIsQRCodeModalVisible] = useState(false);
  const [isJumping, setIsJumping] = useState(false);

  const handleBackPress = () => {
    if (router.canGoBack()) {
      router.back();
    }
  };

  const handleQRCodePress = () => {
    setIsQRCodeModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsQRCodeModalVisible(false);
  };

  const handleJumpPress = async () => {
    setIsJumping(true);
    
    try {
      // 模拟跳转过程
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // 显示提示信息
      Alert.alert(
        '跳转提示',
        '跳转功能需要在实际设备上使用微信打开才能正常工作',
        [{ text: '确定', style: 'default' }]
      );
    } catch (error) {
      Alert.alert('错误', '跳转失败，请稍后重试');
    } finally {
      setIsJumping(false);
    }
  };

  const renderQRCodePattern = () => {
    const pattern = [];
    const patternData = [
      1, 0, 1, 1, 0, 1, 0, 1,
      0, 1, 0, 0, 1, 0, 1, 0,
      1, 0, 1, 1, 0, 1, 0, 1,
      0, 1, 0, 0, 1, 0, 1, 0,
      1, 0, 1, 1, 0, 1, 0, 1,
      0, 1, 0, 0, 1, 0, 1, 0,
      1, 0, 1, 1, 0, 1, 0, 1,
      0, 1, 0, 0, 1, 0, 1, 0,
    ];

    for (let i = 0; i < 64; i++) {
      pattern.push(
        <View
          key={i}
          style={[
            styles.qrCodeBlock,
            { backgroundColor: patternData[i] ? '#000000' : '#ffffff' }
          ]}
        />
      );
    }

    return pattern;
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
        <Text style={styles.headerTitle}>小程序入口</Text>
        <View style={styles.headerPlaceholder} />
      </View>

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* 小程序介绍卡片 */}
        <View style={styles.introCard}>
          <View style={styles.introContent}>
            {/* 小程序图标 */}
            <LinearGradient
              colors={['#02f2ce', '#00f289']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.appIcon}
            >
              <FontAwesome6 name="mobile-screen" size={32} color="#ffffff" />
            </LinearGradient>
            
            {/* 小程序名称 */}
            <Text style={styles.appName}>SF-DE 自律助手</Text>
            
            {/* 小程序简介 */}
            <Text style={styles.appDescription}>
              随时随地管理您的自律计划，支持番茄钟专注、学习打卡、健身记录等功能，与主App数据实时同步。
            </Text>
          </View>
        </View>

        {/* 小程序二维码区域 */}
        <View style={styles.qrCodeSection}>
          <View style={styles.qrCodeContent}>
            <View style={styles.qrCodeHeader}>
              <Text style={styles.qrCodeTitle}>扫描二维码进入小程序</Text>
              <Text style={styles.qrCodeSubtitle}>使用微信扫描下方二维码</Text>
            </View>
            
            {/* 二维码容器 */}
            <TouchableOpacity
              style={styles.qrCodeContainer}
              onPress={handleQRCodePress}
              activeOpacity={0.8}
            >
              <View style={styles.qrCodeWrapper}>
                <View style={styles.qrCodePattern}>
                  {renderQRCodePattern()}
                </View>
                
                {/* 二维码中心Logo */}
                <View style={styles.qrCodeCenterLogo}>
                  <LinearGradient
                    colors={['#02f2ce', '#00f289']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    style={styles.centerLogoGradient}
                  >
                    <FontAwesome6 name="mobile-screen" size={20} color="#ffffff" />
                  </LinearGradient>
                </View>
              </View>
              
              {/* 点击放大提示 */}
              <Text style={styles.qrCodeTip}>点击二维码可放大查看</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* 功能特点 */}
        <View style={styles.featuresSection}>
          <Text style={styles.featuresTitle}>小程序功能特点</Text>
          <View style={styles.featuresList}>
            <View style={styles.featureItem}>
              <View style={[styles.featureIcon, styles.featureIconPrimary]}>
                <FontAwesome6 name="arrows-rotate" size={16} color="#02f2ce" />
              </View>
              <View style={styles.featureContent}>
                <Text style={styles.featureTitle}>数据同步</Text>
                <Text style={styles.featureDescription}>与主App数据实时同步</Text>
              </View>
            </View>
            
            <View style={styles.featureItem}>
              <View style={[styles.featureIcon, styles.featureIconSecondary]}>
                <FontAwesome6 name="clock" size={16} color="#00f289" />
              </View>
              <View style={styles.featureContent}>
                <Text style={styles.featureTitle}>番茄钟专注</Text>
                <Text style={styles.featureDescription}>随时随地开始专注</Text>
              </View>
            </View>
            
            <View style={styles.featureItem}>
              <View style={[styles.featureIcon, styles.featureIconAccent]}>
                <FontAwesome6 name="circle-check" size={16} color="#0296f2e6" />
              </View>
              <View style={styles.featureContent}>
                <Text style={styles.featureTitle}>快速打卡</Text>
                <Text style={styles.featureDescription}>一键完成每日任务</Text>
              </View>
            </View>
          </View>
        </View>

        {/* 立即跳转按钮 */}
        <View style={styles.actionSection}>
          <TouchableOpacity
            style={[styles.jumpButton, isJumping && styles.jumpButtonDisabled]}
            onPress={handleJumpPress}
            disabled={isJumping}
            activeOpacity={0.8}
          >
            <LinearGradient
              colors={['#02f2ce', '#00f289']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.jumpButtonGradient}
            >
              <FontAwesome6 
                name={isJumping ? "spinner" : "external-link"} 
                size={16} 
                color="#ffffff" 
                style={isJumping ? styles.spinningIcon : undefined}
              />
              <Text style={styles.jumpButtonText}>
                {isJumping ? '正在跳转...' : '立即跳转到小程序'}
              </Text>
            </LinearGradient>
          </TouchableOpacity>
          
          <Text style={styles.jumpTip}>
            若无法跳转，请手动复制链接或使用微信扫描二维码
          </Text>
        </View>

        {/* 使用说明 */}
        <View style={styles.usageTips}>
          <Text style={styles.tipsTitle}>使用说明</Text>
          <View style={styles.tipsList}>
            <View style={styles.tipItem}>
              <View style={styles.tipNumber}>
                <Text style={styles.tipNumberText}>1</Text>
              </View>
              <Text style={styles.tipText}>打开微信，点击右上角"+"号</Text>
            </View>
            
            <View style={styles.tipItem}>
              <View style={styles.tipNumber}>
                <Text style={styles.tipNumberText}>2</Text>
              </View>
              <Text style={styles.tipText}>选择"扫一扫"功能</Text>
            </View>
            
            <View style={styles.tipItem}>
              <View style={styles.tipNumber}>
                <Text style={styles.tipNumberText}>3</Text>
              </View>
              <Text style={styles.tipText}>扫描上方二维码即可进入</Text>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* 二维码放大模态框 */}
      <Modal
        visible={isQRCodeModalVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={handleCloseModal}
      >
        <TouchableOpacity
          style={styles.modalOverlay}
          activeOpacity={1}
          onPress={handleCloseModal}
        >
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>小程序二维码</Text>
            <View style={styles.enlargedQRCodeContainer}>
              <View style={styles.enlargedQRCodeWrapper}>
                <View style={styles.enlargedQRCodePattern}>
                  {renderQRCodePattern()}
                </View>
              </View>
            </View>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={handleCloseModal}
              activeOpacity={0.7}
            >
              <Text style={styles.closeButtonText}>关闭</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>
    </SafeAreaView>
  );
};

export default MiniAppEntryScreen;

