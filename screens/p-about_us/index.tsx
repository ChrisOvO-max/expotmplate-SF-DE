

import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useState } from 'react';
import { Modal, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { useRouter } from 'expo-router';
import { FontAwesome6 } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './styles';

interface LegalModalContent {
  title: string;
  content: React.ReactNode;
}

const AboutUsScreen = () => {
  const router = useRouter();
  const [isLegalModalVisible, setIsLegalModalVisible] = useState(false);
  const [currentModalContent, setCurrentModalContent] = useState<LegalModalContent>({
    title: '',
    content: null,
  });

  const handleBackPress = () => {
    if (router.canGoBack()) {
      router.back();
    }
  };

  const showLegalModal = (title: string, content: React.ReactNode) => {
    setCurrentModalContent({ title, content });
    setIsLegalModalVisible(true);
  };

  const hideLegalModal = () => {
    setIsLegalModalVisible(false);
  };

  const handlePrivacyPolicyPress = () => {
    showLegalModal('隐私政策', (
      <View style={styles.modalContentContainer}>
        <Text style={styles.modalContentTitle}>隐私政策</Text>
        <Text style={styles.modalContentDate}>最后更新时间：2024年1月15日</Text>
        <Text style={styles.modalContentText}>
          SF科技有限公司（以下简称"我们"）深知个人信息对您的重要性，并会尽全力保护您的个人信息安全可靠。我们致力于维持您对我们的信任，恪守以下原则，保护您的个人信息：权责一致原则、目的明确原则、选择同意原则、最少够用原则、确保安全原则、主体参与原则、公开透明原则等。
        </Text>
        <Text style={styles.modalContentText}>
          本隐私政策适用于SF-DE应用程序及相关服务。请您仔细阅读本隐私政策，了解我们如何收集、使用、存储和保护您的个人信息。
        </Text>
      </View>
    ));
  };

  const handleUserAgreementPress = () => {
    showLegalModal('用户协议', (
      <View style={styles.modalContentContainer}>
        <Text style={styles.modalContentTitle}>用户协议</Text>
        <Text style={styles.modalContentDate}>最后更新时间：2024年1月15日</Text>
        <Text style={styles.modalContentText}>
          欢迎使用SF-DE应用程序！在使用我们的服务前，请您仔细阅读并充分理解本用户协议（以下简称"本协议"）。
        </Text>
        <Text style={styles.modalContentText}>
          本协议是您与SF科技有限公司之间关于使用SF-DE应用程序及相关服务所订立的协议。您点击"同意"按钮或开始使用我们的服务，即表示您已阅读、理解并同意接受本协议的全部条款。
        </Text>
      </View>
    ));
  };

  const handleTermsServicePress = () => {
    showLegalModal('服务条款', (
      <View style={styles.modalContentContainer}>
        <Text style={styles.modalContentTitle}>服务条款</Text>
        <Text style={styles.modalContentDate}>最后更新时间：2024年1月15日</Text>
        <Text style={styles.modalContentText}>
          SF-DE为用户提供自律习惯养成相关的服务，包括但不限于目标管理、时间管理、学习、健身、健康管理等功能。
        </Text>
        <Text style={styles.modalContentText}>
          我们致力于为用户提供优质的服务体验，但不保证服务的绝对稳定性和准确性。用户在使用我们的服务时，应遵守相关法律法规，不得从事违法违规活动。
        </Text>
      </View>
    ));
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
        <Text style={styles.headerTitle}>关于我们</Text>
        <View style={styles.headerPlaceholder} />
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* App Logo 和基本信息 */}
        <View style={styles.appInfoSection}>
          <View style={styles.appLogoContainer}>
            <LinearGradient
              colors={['#02f2ce', '#00f289']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.appLogo}
            >
              <FontAwesome6 name="dumbbell" size={32} color="#ffffff" />
            </LinearGradient>
          </View>
          
          <Text style={styles.appName}>SF-DE</Text>
          <Text style={styles.appSlogan}>让自律成为一种生活方式</Text>
          
          <LinearGradient
            colors={['#0296f2e6', '#02f2ce']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.versionBadge}
          >
            <Text style={styles.versionText}>版本 1.0.0</Text>
          </LinearGradient>
        </View>

        {/* 产品介绍 */}
        <View style={styles.sectionCard}>
          <View style={styles.sectionHeader}>
            <FontAwesome6 name="circle-info" size={16} color="#02f2ce" />
            <Text style={styles.sectionTitle}>产品介绍</Text>
          </View>
          <Text style={styles.sectionContent}>
            SF-DE 是一款集目标管理、时间管理、学习、健身、健康管理及数据可视化于一体的移动端自律习惯养成工具。通过正向反馈和个性化建议，帮助用户高效管理每日目标，培养自律习惯，提升生活品质。
          </Text>
        </View>

        {/* 公司信息 */}
        <View style={styles.sectionCard}>
          <View style={styles.sectionHeader}>
            <FontAwesome6 name="building" size={16} color="#02f2ce" />
            <Text style={styles.sectionTitle}>公司信息</Text>
          </View>
          <View style={styles.companyInfoContainer}>
            <View style={styles.companyInfoRow}>
              <Text style={styles.companyInfoLabel}>开发商</Text>
              <Text style={styles.companyInfoValue}>SF科技有限公司</Text>
            </View>
            <View style={styles.companyInfoRow}>
              <Text style={styles.companyInfoLabel}>客服邮箱</Text>
              <Text style={styles.companyInfoValue}>support@sf-de.com</Text>
            </View>
            <View style={styles.companyInfoRow}>
              <Text style={styles.companyInfoLabel}>官方网站</Text>
              <Text style={styles.companyInfoValue}>www.sf-de.com</Text>
            </View>
          </View>
        </View>

        {/* 法律条款 */}
        <View style={styles.sectionCard}>
          <View style={styles.sectionHeaderWithBorder}>
            <FontAwesome6 name="scale-balanced" size={16} color="#02f2ce" />
            <Text style={styles.sectionTitle}>法律条款</Text>
          </View>
          
          <View style={styles.infoItemsContainer}>
            <TouchableOpacity
              style={styles.infoItem}
              onPress={handlePrivacyPolicyPress}
              activeOpacity={0.7}
            >
              <Text style={styles.infoItemText}>隐私政策</Text>
              <FontAwesome6 name="chevron-right" size={14} color="#6b7280" />
            </TouchableOpacity>
            
            <View style={styles.infoItemSeparator} />
            
            <TouchableOpacity
              style={styles.infoItem}
              onPress={handleUserAgreementPress}
              activeOpacity={0.7}
            >
              <Text style={styles.infoItemText}>用户协议</Text>
              <FontAwesome6 name="chevron-right" size={14} color="#6b7280" />
            </TouchableOpacity>
            
            <View style={styles.infoItemSeparator} />
            
            <TouchableOpacity
              style={styles.infoItem}
              onPress={handleTermsServicePress}
              activeOpacity={0.7}
            >
              <Text style={styles.infoItemText}>服务条款</Text>
              <FontAwesome6 name="chevron-right" size={14} color="#6b7280" />
            </TouchableOpacity>
          </View>
        </View>

        {/* 其他信息 */}
        <View style={styles.sectionCard}>
          <View style={styles.sectionHeaderWithBorder}>
            <FontAwesome6 name="gear" size={16} color="#02f2ce" />
            <Text style={styles.sectionTitle}>其他信息</Text>
          </View>
          
          <View style={styles.infoItemsContainer}>
            <View style={styles.infoItem}>
              <Text style={styles.infoItemText}>构建版本</Text>
              <Text style={styles.infoItemValue}>20240115.001</Text>
            </View>
            
            <View style={styles.infoItemSeparator} />
            
            <View style={styles.infoItem}>
              <Text style={styles.infoItemText}>兼容系统</Text>
              <Text style={styles.infoItemValue}>iOS 12.0+, Android 8.0+</Text>
            </View>
            
            <View style={styles.infoItemSeparator} />
            
            <View style={styles.infoItem}>
              <Text style={styles.infoItemText}>应用大小</Text>
              <Text style={styles.infoItemValue}>45.2 MB</Text>
            </View>
          </View>
        </View>

        {/* 版权信息 */}
        <View style={styles.copyrightSection}>
          <Text style={styles.copyrightText}>
            © 2024 SF科技有限公司
          </Text>
          <Text style={styles.copyrightSubText}>
            保留所有权利
          </Text>
        </View>
      </ScrollView>

      {/* 法律条款弹窗 */}
      <Modal
        visible={isLegalModalVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={hideLegalModal}
      >
        <TouchableOpacity
          style={styles.modalOverlay}
          activeOpacity={1}
          onPress={hideLegalModal}
        >
          <View style={styles.modalContainer}>
            <TouchableOpacity activeOpacity={1}>
              <View style={styles.modalHeader}>
                <Text style={styles.modalTitle}>{currentModalContent.title}</Text>
                <TouchableOpacity
                  style={styles.modalCloseButton}
                  onPress={hideLegalModal}
                  activeOpacity={0.7}
                >
                  <FontAwesome6 name="xmark" size={16} color="#6b7280" />
                </TouchableOpacity>
              </View>
              <ScrollView style={styles.modalContent} showsVerticalScrollIndicator={false}>
                {currentModalContent.content}
              </ScrollView>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>
    </SafeAreaView>
  );
};

export default AboutUsScreen;

