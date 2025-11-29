

import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { FontAwesome6 } from '@expo/vector-icons';
import styles from './styles';

const DataStatisticsScreen = () => {
  const router = useRouter();

  const handleStudyTimePress = () => {
    router.push('/p-learning_data');
  };

  const handleTrainingVolumePress = () => {
    router.push('/p-training_data');
  };

  const handleStreakPress = () => {
    router.push('/p-checkin_history');
  };

  const handleFocusTimePress = () => {
    router.push('/p-focus_data');
  };

  const handleFitnessModulePress = () => {
    router.push('/p-fitness_data');
  };

  const handleLearningModulePress = () => {
    router.push('/p-learning_data');
  };

  const handleTrainingModulePress = () => {
    router.push('/p-training_data');
  };

  const handleHealthModulePress = () => {
    router.push('/p-health_data');
  };

  const handleFocusModulePress = () => {
    router.push('/p-focus_data');
  };

  const handleCheckinModulePress = () => {
    router.push('/p-checkin_history');
  };

  const handleMoodModulePress = () => {
    router.push('/p-mood_calendar');
  };

  const handleAiAdvicePress = () => {
    router.push('/p-ai_advice');
  };

  const handleSuccessStoriesPress = () => {
    router.push('/p-success_stories');
  };

  const handleReviewAnalysisPress = () => {
    router.push('/p-review_analysis');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* 顶部标题区域 */}
        <View style={styles.header}>
          <View style={styles.headerContent}>
            <View style={styles.headerTextContainer}>
              <Text style={styles.pageTitle}>数据统计</Text>
              <Text style={styles.pageSubtitle}>查看你的成长轨迹</Text>
            </View>
            <View style={styles.headerIconContainer}>
              <FontAwesome6 name="chart-line" size={20} color="#02f2ce" />
            </View>
          </View>
        </View>

        {/* 数据概览 */}
        <View style={styles.overviewSection}>
          <Text style={styles.sectionTitle}>数据概览</Text>
          <View style={styles.overviewGrid}>
            {/* 总学习时长 */}
            <TouchableOpacity style={styles.dataCard} onPress={handleStudyTimePress}>
              <View style={styles.dataCardHeader}>
                <View style={[styles.dataCardIcon, styles.primaryIconBg]}>
                  <FontAwesome6 name="book" size={16} color="#02f2ce" />
                </View>
                <View style={styles.dataCardBadge}>
                  <Text style={styles.dataCardBadgeText}>+12h</Text>
                </View>
              </View>
              <Text style={styles.dataCardValue}>156h</Text>
              <Text style={styles.dataCardLabel}>总学习时长</Text>
            </TouchableOpacity>

            {/* 总训练量 */}
            <TouchableOpacity style={styles.dataCard} onPress={handleTrainingVolumePress}>
              <View style={styles.dataCardHeader}>
                <View style={[styles.dataCardIcon, styles.secondaryIconBg]}>
                  <FontAwesome6 name="dumbbell" size={16} color="#00f289" />
                </View>
                <View style={styles.dataCardBadge}>
                  <Text style={styles.dataCardBadgeText}>+5次</Text>
                </View>
              </View>
              <Text style={styles.dataCardValue}>128次</Text>
              <Text style={styles.dataCardLabel}>总训练次数</Text>
            </TouchableOpacity>

            {/* 连续打卡天数 */}
            <TouchableOpacity style={styles.dataCard} onPress={handleStreakPress}>
              <View style={styles.dataCardHeader}>
                <View style={[styles.dataCardIcon, styles.accentIconBg]}>
                  <FontAwesome6 name="fire" size={16} color="#0296f2e6" />
                </View>
                <View style={styles.dataCardBadge}>
                  <Text style={styles.dataCardBadgeText}>🔥</Text>
                </View>
              </View>
              <Text style={styles.dataCardValue}>15天</Text>
              <Text style={styles.dataCardLabel}>连续打卡</Text>
            </TouchableOpacity>

            {/* 专注时长 */}
            <TouchableOpacity style={styles.dataCard} onPress={handleFocusTimePress}>
              <View style={styles.dataCardHeader}>
                <View style={[styles.dataCardIcon, styles.purpleIconBg]}>
                  <FontAwesome6 name="clock" size={16} color="#8b5cf6" />
                </View>
                <View style={styles.dataCardBadge}>
                  <Text style={styles.dataCardBadgeText}>+8h</Text>
                </View>
              </View>
              <Text style={styles.dataCardValue}>89h</Text>
              <Text style={styles.dataCardLabel}>专注时长</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* 详细数据 */}
        <View style={styles.modulesSection}>
          <Text style={styles.sectionTitle}>详细数据</Text>
          <View style={styles.modulesList}>
            {/* 健身数据 */}
            <TouchableOpacity style={styles.moduleItem} onPress={handleFitnessModulePress}>
              <View style={styles.moduleItemContent}>
                <View style={[styles.moduleItemIcon, styles.primaryIconBg]}>
                  <FontAwesome6 name="weight-scale" size={18} color="#02f2ce" />
                </View>
                <View style={styles.moduleItemTextContainer}>
                  <Text style={styles.moduleItemTitle}>健身数据</Text>
                  <Text style={styles.moduleItemSubtitle}>BMI指数 · 体重变化</Text>
                </View>
              </View>
              <FontAwesome6 name="chevron-right" size={14} color="#6b7280" />
            </TouchableOpacity>

            {/* 学习数据 */}
            <TouchableOpacity style={styles.moduleItem} onPress={handleLearningModulePress}>
              <View style={styles.moduleItemContent}>
                <View style={[styles.moduleItemIcon, styles.secondaryIconBg]}>
                  <FontAwesome6 name="graduation-cap" size={18} color="#00f289" />
                </View>
                <View style={styles.moduleItemTextContainer}>
                  <Text style={styles.moduleItemTitle}>学习数据</Text>
                  <Text style={styles.moduleItemSubtitle}>学习时长 · 掌握情况</Text>
                </View>
              </View>
              <FontAwesome6 name="chevron-right" size={14} color="#6b7280" />
            </TouchableOpacity>

            {/* 训练数据 */}
            <TouchableOpacity style={styles.moduleItem} onPress={handleTrainingModulePress}>
              <View style={styles.moduleItemContent}>
                <View style={[styles.moduleItemIcon, styles.accentIconBg]}>
                  <FontAwesome6 name="person-running" size={18} color="#0296f2e6" />
                </View>
                <View style={styles.moduleItemTextContainer}>
                  <Text style={styles.moduleItemTitle}>训练数据</Text>
                  <Text style={styles.moduleItemSubtitle}>训练频率 · 进步曲线</Text>
                </View>
              </View>
              <FontAwesome6 name="chevron-right" size={14} color="#6b7280" />
            </TouchableOpacity>

            {/* 健康数据 */}
            <TouchableOpacity style={styles.moduleItem} onPress={handleHealthModulePress}>
              <View style={styles.moduleItemContent}>
                <View style={[styles.moduleItemIcon, styles.pinkIconBg]}>
                  <FontAwesome6 name="heart" size={18} color="#ec4899" />
                </View>
                <View style={styles.moduleItemTextContainer}>
                  <Text style={styles.moduleItemTitle}>健康数据</Text>
                  <Text style={styles.moduleItemSubtitle}>水分摄入 · 睡眠质量</Text>
                </View>
              </View>
              <FontAwesome6 name="chevron-right" size={14} color="#6b7280" />
            </TouchableOpacity>

            {/* 专注数据 */}
            <TouchableOpacity style={styles.moduleItem} onPress={handleFocusModulePress}>
              <View style={styles.moduleItemContent}>
                <View style={[styles.moduleItemIcon, styles.purpleIconBg]}>
                  <FontAwesome6 name="brain" size={18} color="#8b5cf6" />
                </View>
                <View style={styles.moduleItemTextContainer}>
                  <Text style={styles.moduleItemTitle}>专注数据</Text>
                  <Text style={styles.moduleItemSubtitle}>番茄钟 · 专注时长</Text>
                </View>
              </View>
              <FontAwesome6 name="chevron-right" size={14} color="#6b7280" />
            </TouchableOpacity>

            {/* 打卡数据 */}
            <TouchableOpacity style={styles.moduleItem} onPress={handleCheckinModulePress}>
              <View style={styles.moduleItemContent}>
                <View style={[styles.moduleItemIcon, styles.orangeIconBg]}>
                  <FontAwesome6 name="calendar-check" size={18} color="#f97316" />
                </View>
                <View style={styles.moduleItemTextContainer}>
                  <Text style={styles.moduleItemTitle}>打卡数据</Text>
                  <Text style={styles.moduleItemSubtitle}>打卡率 · 连续天数</Text>
                </View>
              </View>
              <FontAwesome6 name="chevron-right" size={14} color="#6b7280" />
            </TouchableOpacity>

            {/* 心情数据 */}
            <TouchableOpacity style={styles.moduleItem} onPress={handleMoodModulePress}>
              <View style={styles.moduleItemContent}>
                <View style={[styles.moduleItemIcon, styles.yellowIconBg]}>
                  <FontAwesome6 name="face-smile" size={18} color="#eab308" />
                </View>
                <View style={styles.moduleItemTextContainer}>
                  <Text style={styles.moduleItemTitle}>心情数据</Text>
                  <Text style={styles.moduleItemSubtitle}>心情趋势 · 情绪分析</Text>
                </View>
              </View>
              <FontAwesome6 name="chevron-right" size={14} color="#6b7280" />
            </TouchableOpacity>
          </View>
        </View>

        {/* 智能功能 */}
        <View style={styles.aiSection}>
          <Text style={styles.sectionTitle}>智能功能</Text>
          <View style={styles.aiGrid}>
            {/* AI建议 */}
            <TouchableOpacity style={styles.aiCard} onPress={handleAiAdvicePress}>
              <View style={[styles.aiCardIcon, styles.blueIconBg]}>
                <FontAwesome6 name="robot" size={18} color="#3b82f6" />
              </View>
              <Text style={styles.aiCardTitle}>AI建议</Text>
              <Text style={styles.aiCardSubtitle}>个性化指导</Text>
            </TouchableOpacity>

            {/* 成功案例 */}
            <TouchableOpacity style={styles.aiCard} onPress={handleSuccessStoriesPress}>
              <View style={[styles.aiCardIcon, styles.greenIconBg]}>
                <FontAwesome6 name="trophy" size={18} color="#10b981" />
              </View>
              <Text style={styles.aiCardTitle}>成功案例</Text>
              <Text style={styles.aiCardSubtitle}>学习他人经验</Text>
            </TouchableOpacity>

            {/* 复盘分析 */}
            <TouchableOpacity style={styles.aiCard} onPress={handleReviewAnalysisPress}>
              <View style={[styles.aiCardIcon, styles.indigoIconBg]}>
                <FontAwesome6 name="chart-pie" size={18} color="#6366f1" />
              </View>
              <Text style={styles.aiCardTitle}>复盘分析</Text>
              <Text style={styles.aiCardSubtitle}>定期总结改进</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DataStatisticsScreen;

