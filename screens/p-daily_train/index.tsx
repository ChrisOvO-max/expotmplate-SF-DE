

import React, { useState, useCallback } from 'react';
import { View, Text, ScrollView, TouchableOpacity, RefreshControl, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { FontAwesome6 } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './styles';
import TrainingPlanItem from './components/TrainingPlanItem';

interface TrainingPlan {
  id: string;
  title: string;
  time: string;
  icon: string;
  iconColor: string;
  iconBgColor: string;
  progress: number;
  status: 'completed' | 'in-progress' | 'pending';
  completedText: string;
}

const DailyTrainScreen = () => {
  const router = useRouter();
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [trainingPlans, setTrainingPlans] = useState<TrainingPlan[]>([
    {
      id: 'plan-001',
      title: '晨练 - 俯卧撑',
      time: '07:00 - 07:30',
      icon: 'sun',
      iconColor: '#00f289',
      iconBgColor: 'rgba(0, 242, 137, 0.1)',
      progress: 100,
      status: 'completed',
      completedText: '已完成 3 组 × 15 次',
    },
    {
      id: 'plan-002',
      title: '力量训练 - 深蹲',
      time: '12:00 - 12:30',
      icon: 'dumbbell',
      iconColor: '#02f2ce',
      iconBgColor: 'rgba(2, 242, 206, 0.1)',
      progress: 100,
      status: 'completed',
      completedText: '已完成 4 组 × 20 次',
    },
    {
      id: 'plan-003',
      title: '核心训练 - 平板支撑',
      time: '16:00 - 16:20',
      icon: 'fire',
      iconColor: '#0296f2e6',
      iconBgColor: 'rgba(2, 150, 242, 0.1)',
      progress: 50,
      status: 'in-progress',
      completedText: '进行中 2/4 组 × 60 秒',
    },
    {
      id: 'plan-004',
      title: '有氧运动 - 跑步',
      time: '19:00 - 19:30',
      icon: 'person-running',
      iconColor: '#9ca3af',
      iconBgColor: '#f3f4f6',
      progress: 0,
      status: 'pending',
      completedText: '待完成 30 分钟',
    },
  ]);

  const completedCount = trainingPlans.filter(plan => plan.status === 'completed').length;
  const inProgressCount = trainingPlans.filter(plan => plan.status === 'in-progress').length;
  const totalCount = trainingPlans.length;

  const handleRefresh = useCallback(async () => {
    setIsRefreshing(true);
    try {
      // 模拟刷新数据
      await new Promise(resolve => setTimeout(resolve, 1000));
    } catch (error) {
      console.error('刷新失败:', error);
    } finally {
      setIsRefreshing(false);
    }
  }, []);

  const handlePlanItemPress = useCallback((planId: string) => {
    router.push(`/p-train_detail?planId=${planId}`);
  }, [router]);

  const handleTrainingLibraryPress = useCallback(() => {
    router.push('/p-training_library');
  }, [router]);

  const handlePlanStatusToggle = useCallback((planId: string) => {
    setTrainingPlans(prevPlans =>
      prevPlans.map(plan => {
        if (plan.id === planId) {
          let newStatus: 'completed' | 'in-progress' | 'pending';
          let newProgress: number;
          let newCompletedText: string;

          if (plan.status === 'completed') {
            newStatus = 'pending';
            newProgress = 0;
            newCompletedText = '待完成';
          } else if (plan.status === 'in-progress') {
            newStatus = 'completed';
            newProgress = 100;
            newCompletedText = '已完成';
          } else {
            newStatus = 'in-progress';
            newProgress = 50;
            newCompletedText = '进行中';
          }

          return {
            ...plan,
            status: newStatus,
            progress: newProgress,
            completedText: newCompletedText,
          };
        }
        return plan;
      })
    );
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        refreshControl={
          <RefreshControl
            refreshing={isRefreshing}
            onRefresh={handleRefresh}
            colors={['#02f2ce']}
            tintColor="#02f2ce"
          />
        }
        showsVerticalScrollIndicator={false}
      >
        {/* 顶部标题区域 */}
        <View style={styles.header}>
          <View style={styles.headerContent}>
            <View style={styles.headerTextContainer}>
              <Text style={styles.pageTitle}>每日训练</Text>
              <Text style={styles.pageSubtitle}>坚持训练，塑造更好的自己</Text>
            </View>
            <View style={styles.headerIconContainer}>
              <FontAwesome6 name="dumbbell" size={20} color="#00f289" />
            </View>
          </View>
        </View>

        {/* 今日训练概览 */}
        <View style={styles.overviewSection}>
          <View style={styles.overviewCard}>
            <View style={styles.overviewGrid}>
              <View style={styles.overviewItem}>
                <Text style={styles.overviewNumber}>{completedCount}</Text>
                <Text style={styles.overviewLabel}>已完成</Text>
              </View>
              <View style={styles.overviewItem}>
                <Text style={[styles.overviewNumber, { color: '#00f289' }]}>
                  {inProgressCount}
                </Text>
                <Text style={styles.overviewLabel}>进行中</Text>
              </View>
              <View style={styles.overviewItem}>
                <Text style={[styles.overviewNumber, { color: '#0296f2e6' }]}>
                  {totalCount}
                </Text>
                <Text style={styles.overviewLabel}>总计划</Text>
              </View>
            </View>
          </View>
        </View>

        {/* 训练计划列表 */}
        <View style={styles.plansSection}>
          <View style={styles.plansHeader}>
            <Text style={styles.plansTitle}>今日训练计划</Text>
            <Text style={styles.plansCount}>
              {completedCount}/{totalCount} 已完成
            </Text>
          </View>

          <View style={styles.plansList}>
            {trainingPlans.map((plan) => (
              <TrainingPlanItem
                key={plan.id}
                plan={plan}
                onPress={() => handlePlanItemPress(plan.id)}
                onStatusToggle={() => handlePlanStatusToggle(plan.id)}
              />
            ))}
          </View>
        </View>

        {/* 训练项目库入口 */}
        <View style={styles.librarySection}>
          <TouchableOpacity
            style={styles.libraryButton}
            onPress={handleTrainingLibraryPress}
            activeOpacity={0.7}
          >
            <View style={styles.libraryContent}>
              <LinearGradient
                colors={['#00f289', '#02f2ce']}
                style={styles.libraryIconContainer}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
              >
                <FontAwesome6 name="book-open" size={18} color="#ffffff" />
              </LinearGradient>
              <View style={styles.libraryTextContainer}>
                <Text style={styles.libraryTitle}>训练项目库</Text>
                <Text style={styles.librarySubtitle}>浏览更多训练项目</Text>
              </View>
            </View>
            <FontAwesome6 name="chevron-right" size={14} color="#6b7280" />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DailyTrainScreen;

