

import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Modal, Alert, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { FontAwesome6 } from '@expo/vector-icons';
import styles from './styles';

interface PlanData {
  id: string;
  name: string;
  type: string;
  icon: string;
  status: string;
  description: string;
  time: string;
  duration: string;
  repeat: string;
  repeatDetail: string;
  reminder: string;
  reminderDetail: string;
  goal: string;
  goalDetail: string;
  checkedIn: boolean;
  consecutiveDays: number;
}

const PlanDetailScreen = () => {
  const router = useRouter();
  const { plan_id } = useLocalSearchParams();
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  const [planData, setPlanData] = useState<PlanData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // 模拟计划数据
  const mockPlans: Record<string, PlanData> = {
    plan1: {
      id: 'plan1',
      name: '英语四级词汇',
      type: '学习',
      icon: 'book',
      status: '已完成',
      description: '每日学习30个四级词汇，通过单词卡片和例句加深记忆，提高英语水平。',
      time: '09:00 - 10:00',
      duration: '60分钟',
      repeat: '每日',
      repeatDetail: '每周7天',
      reminder: '已开启',
      reminderDetail: '提前10分钟',
      goal: '30个单词',
      goalDetail: '已完成30个',
      checkedIn: true,
      consecutiveDays: 7,
    },
    plan2: {
      id: 'plan2',
      name: '晨练 - 俯卧撑',
      type: '训练',
      icon: 'dumbbell',
      status: '已完成',
      description: '每日晨练俯卧撑，增强上肢力量和核心稳定性。',
      time: '07:00 - 07:30',
      duration: '30分钟',
      repeat: '每日',
      repeatDetail: '每周7天',
      reminder: '已开启',
      reminderDetail: '提前5分钟',
      goal: '3组 × 15次',
      goalDetail: '已完成3组',
      checkedIn: true,
      consecutiveDays: 5,
    },
    plan3: {
      id: 'plan3',
      name: '每日饮水',
      type: '健康',
      icon: 'droplet',
      status: '已完成',
      description: '保持充足水分摄入，促进新陈代谢和身体健康。',
      time: '全天',
      duration: '全天',
      repeat: '每日',
      repeatDetail: '每周7天',
      reminder: '已开启',
      reminderDetail: '每2小时',
      goal: '2000ml',
      goalDetail: '已完成2000ml',
      checkedIn: true,
      consecutiveDays: 12,
    },
    plan4: {
      id: 'plan4',
      name: '番茄钟专注',
      type: '时间管理',
      icon: 'clock',
      status: '进行中',
      description: '使用番茄工作法提高学习和工作效率，保持专注状态。',
      time: '14:00 - 16:00',
      duration: '120分钟',
      repeat: '每日',
      repeatDetail: '每周5天',
      reminder: '已开启',
      reminderDetail: '提前15分钟',
      goal: '4个番茄钟',
      goalDetail: '0/4个',
      checkedIn: false,
      consecutiveDays: 3,
    },
  };

  useEffect(() => {
    const loadPlanDetails = async () => {
      try {
        setIsLoading(true);
        // 模拟API调用延迟
        await new Promise(resolve => setTimeout(resolve, 500));
        
        const planId = (plan_id as string) || 'plan1';
        const plan = mockPlans[planId] || mockPlans.plan1;
        setPlanData(plan);
      } catch (error) {
        console.error('加载计划详情失败:', error);
        Alert.alert('错误', '加载计划详情失败，请重试');
      } finally {
        setIsLoading(false);
      }
    };

    loadPlanDetails();
  }, [plan_id]);

  const handleBackPress = () => {
    if (router.canGoBack()) {
      router.back();
    } else {
      router.replace('/p-home');
    }
  };

  const handleEditPress = () => {
    if (planData) {
      router.push(`/p-plan_add?plan_id=${planData.id}`);
    }
  };

  const handleDeletePress = () => {
    setIsDeleteModalVisible(true);
  };

  const handleCancelDelete = () => {
    setIsDeleteModalVisible(false);
  };

  const handleConfirmDelete = () => {
    setIsDeleteModalVisible(false);
    // 这里应该调用删除API
    Alert.alert('成功', '计划已删除', [
      {
        text: '确定',
        onPress: () => router.replace('/p-home'),
      },
    ]);
  };

  const handleCheckinPress = () => {
    if (planData && !planData.checkedIn) {
      router.push(`/p-checkin_success?plan_id=${planData.id}`);
    }
  };

  const getPlanTypeColor = (type: string) => {
    switch (type) {
      case '学习':
        return '#02f2ce';
      case '训练':
        return '#00f289';
      case '健康':
        return '#0296f2e6';
      case '时间管理':
        return '#8b5cf6';
      default:
        return '#02f2ce';
    }
  };

  const getStatusBadgeStyle = (status: string) => {
    if (status === '已完成') {
      return styles.statusBadgeCompleted;
    } else if (status === '进行中') {
      return styles.statusBadgeInProgress;
    } else {
      return styles.statusBadgePending;
    }
  };

  if (isLoading) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.loadingContainer}>
          <Text style={styles.loadingText}>加载中...</Text>
        </View>
      </SafeAreaView>
    );
  }

  if (!planData) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>计划不存在</Text>
          <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
            <Text style={styles.backButtonText}>返回</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* 顶部导航栏 */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButtonContainer} onPress={handleBackPress}>
          <FontAwesome6 name="arrow-left" size={18} color="#1f2937" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>计划详情</Text>
        <View style={styles.headerActions}>
          <TouchableOpacity style={styles.editButton} onPress={handleEditPress}>
            <FontAwesome6 name="pen" size={14} color="#ffffff" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.deleteButton} onPress={handleDeletePress}>
            <FontAwesome6 name="trash" size={14} color="#ffffff" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* 计划信息卡片 */}
        <View style={styles.planInfoSection}>
          {/* 计划状态和基本信息 */}
          <View style={styles.planStatusCard}>
            <View style={styles.planHeader}>
              <View style={styles.planMainInfo}>
                <View style={[styles.planIcon, { backgroundColor: `${getPlanTypeColor(planData.type)}1A` }]}>
                  <FontAwesome6 
                    name={planData.icon as any} 
                    size={18} 
                    color={getPlanTypeColor(planData.type)} 
                  />
                </View>
                <View style={styles.planTitleContainer}>
                  <Text style={styles.planName}>{planData.name}</Text>
                  <View style={[styles.statusBadge, getStatusBadgeStyle(planData.status)]}>
                    <Text style={styles.statusBadgeText}>{planData.status}</Text>
                  </View>
                </View>
              </View>
              <View style={styles.planCategoryContainer}>
                <View style={[styles.planCategory, { backgroundColor: `${getPlanTypeColor(planData.type)}1A` }]}>
                  <Text style={[styles.planCategoryText, { color: getPlanTypeColor(planData.type) }]}>
                    {planData.type}
                  </Text>
                </View>
              </View>
            </View>
            
            {/* 计划描述 */}
            <View style={styles.planDescriptionContainer}>
              <Text style={styles.planDescription}>{planData.description}</Text>
            </View>
          </View>

          {/* 计划详情 */}
          <View style={styles.planDetailsCard}>
            <Text style={styles.sectionTitle}>计划详情</Text>
            
            <View style={styles.detailsContainer}>
              {/* 时间安排 */}
              <View style={styles.detailItem}>
                <View style={styles.detailLeft}>
                  <View style={[styles.detailIcon, styles.timeIcon]}>
                    <FontAwesome6 name="clock" size={14} color="#0296f2e6" />
                  </View>
                  <View style={styles.detailInfo}>
                    <Text style={styles.detailLabel}>时间安排</Text>
                    <Text style={styles.detailSubLabel}>每日固定时间</Text>
                  </View>
                </View>
                <View style={styles.detailRight}>
                  <Text style={styles.detailValue}>{planData.time}</Text>
                  <Text style={styles.detailSubValue}>{planData.duration}</Text>
                </View>
              </View>

              {/* 重复周期 */}
              <View style={styles.detailItem}>
                <View style={styles.detailLeft}>
                  <View style={[styles.detailIcon, styles.repeatIcon]}>
                    <FontAwesome6 name="arrow-rotate-right" size={14} color="#00f289" />
                  </View>
                  <View style={styles.detailInfo}>
                    <Text style={styles.detailLabel}>重复周期</Text>
                    <Text style={styles.detailSubLabel}>计划执行频率</Text>
                  </View>
                </View>
                <View style={styles.detailRight}>
                  <Text style={styles.detailValue}>{planData.repeat}</Text>
                  <Text style={styles.detailSubValue}>{planData.repeatDetail}</Text>
                </View>
              </View>

              {/* 提醒设置 */}
              <View style={styles.detailItem}>
                <View style={styles.detailLeft}>
                  <View style={[styles.detailIcon, styles.reminderIcon]}>
                    <FontAwesome6 name="bell" size={14} color="#f59e0b" />
                  </View>
                  <View style={styles.detailInfo}>
                    <Text style={styles.detailLabel}>提醒设置</Text>
                    <Text style={styles.detailSubLabel}>通知提醒</Text>
                  </View>
                </View>
                <View style={styles.detailRight}>
                  <Text style={styles.detailValue}>{planData.reminder}</Text>
                  <Text style={styles.detailSubValue}>{planData.reminderDetail}</Text>
                </View>
              </View>

              {/* 目标设置 */}
              <View style={styles.detailItem}>
                <View style={styles.detailLeft}>
                  <View style={[styles.detailIcon, styles.goalIcon]}>
                    <FontAwesome6 name="bullseye" size={14} color="#8b5cf6" />
                  </View>
                  <View style={styles.detailInfo}>
                    <Text style={styles.detailLabel}>学习目标</Text>
                    <Text style={styles.detailSubLabel}>每日任务量</Text>
                  </View>
                </View>
                <View style={styles.detailRight}>
                  <Text style={styles.detailValue}>{planData.goal}</Text>
                  <Text style={styles.detailSubValue}>{planData.goalDetail}</Text>
                </View>
              </View>
            </View>
          </View>

          {/* 打卡记录 */}
          <View style={styles.checkinRecordCard}>
            <View style={styles.checkinHeader}>
              <Text style={styles.sectionTitle}>打卡记录</Text>
              <View style={styles.consecutiveDaysContainer}>
                <Text style={styles.consecutiveDaysLabel}>连续打卡</Text>
                <Text style={styles.consecutiveDaysValue}>{planData.consecutiveDays}天</Text>
              </View>
            </View>
            
            {/* 最近打卡 */}
            <View style={styles.recentCheckinsContainer}>
              <View style={styles.checkinItem}>
                <View style={styles.checkinLeft}>
                  <View style={styles.checkinIcon}>
                    <FontAwesome6 name="check" size={14} color="#10b981" />
                  </View>
                  <View style={styles.checkinInfo}>
                    <Text style={styles.checkinDate}>今天</Text>
                    <Text style={styles.checkinTime}>09:30 完成</Text>
                  </View>
                </View>
                <Text style={styles.checkinStatus}>已打卡</Text>
              </View>
              
              <View style={styles.checkinItem}>
                <View style={styles.checkinLeft}>
                  <View style={styles.checkinIcon}>
                    <FontAwesome6 name="check" size={14} color="#10b981" />
                  </View>
                  <View style={styles.checkinInfo}>
                    <Text style={styles.checkinDate}>昨天</Text>
                    <Text style={styles.checkinTime}>09:15 完成</Text>
                  </View>
                </View>
                <Text style={styles.checkinStatus}>已打卡</Text>
              </View>
              
              <View style={styles.checkinItem}>
                <View style={styles.checkinLeft}>
                  <View style={styles.checkinIcon}>
                    <FontAwesome6 name="check" size={14} color="#10b981" />
                  </View>
                  <View style={styles.checkinInfo}>
                    <Text style={styles.checkinDate}>1月13日</Text>
                    <Text style={styles.checkinTime}>10:00 完成</Text>
                  </View>
                </View>
                <Text style={styles.checkinStatus}>已打卡</Text>
              </View>
            </View>
          </View>
        </View>

        {/* 底部间距，为固定按钮留空间 */}
        <View style={styles.bottomSpacer} />
      </ScrollView>

      {/* 底部操作按钮 */}
      <View style={styles.bottomActions}>
        <TouchableOpacity 
          style={[
            styles.checkinButton, 
            planData.checkedIn ? styles.checkinButtonCompleted : styles.checkinButtonActive
          ]} 
          onPress={handleCheckinPress}
          disabled={planData.checkedIn}
        >
          <FontAwesome6 name="check" size={16} color="#ffffff" style={styles.checkinButtonIcon} />
          <Text style={styles.checkinButtonText}>
            {planData.checkedIn ? '已完成打卡' : '立即打卡'}
          </Text>
        </TouchableOpacity>
      </View>

      {/* 删除确认弹窗 */}
      <Modal
        visible={isDeleteModalVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={handleCancelDelete}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <View style={styles.modalHeader}>
                <View style={styles.modalIcon}>
                  <FontAwesome6 name="triangle-exclamation" size={24} color="#ef4444" />
                </View>
                <Text style={styles.modalTitle}>确认删除</Text>
                <Text style={styles.modalMessage}>删除后将无法恢复，确定要删除这个计划吗？</Text>
              </View>
              
              <View style={styles.modalActions}>
                <TouchableOpacity style={styles.modalCancelButton} onPress={handleCancelDelete}>
                  <Text style={styles.modalCancelText}>取消</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.modalConfirmButton} onPress={handleConfirmDelete}>
                  <Text style={styles.modalConfirmText}>删除</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default PlanDetailScreen;

