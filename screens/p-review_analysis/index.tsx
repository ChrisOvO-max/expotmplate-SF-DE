

import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, TextInput, Modal, Alert, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { FontAwesome6 } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './styles';

type PeriodType = 'day' | 'week' | 'month';

interface ReviewData {
  completionRate: string;
  totalTasks: string;
  improvement: string;
  averagePomodoros: string;
  consecutiveDays: string;
  pomodorosImprovement: string;
  daysImprovement: string;
}

const ReviewAnalysisScreen = () => {
  const router = useRouter();
  const [selectedPeriod, setSelectedPeriod] = useState<PeriodType>('week');
  const [isReportModalVisible, setIsReportModalVisible] = useState(false);
  const [question1, setQuestion1] = useState('');
  const [question2, setQuestion2] = useState('');
  const [question3, setQuestion3] = useState('');
  const [isGeneratingReport, setIsGeneratingReport] = useState(false);

  const reviewData: Record<PeriodType, ReviewData> = {
    day: {
      completionRate: '92%',
      totalTasks: '5',
      improvement: '+8%',
      averagePomodoros: '3.8',
      consecutiveDays: '3',
      pomodorosImprovement: '+0.5',
      daysImprovement: '+1天',
    },
    week: {
      completionRate: '85%',
      totalTasks: '12',
      improvement: '+5%',
      averagePomodoros: '4.2',
      consecutiveDays: '7',
      pomodorosImprovement: '+0.3',
      daysImprovement: '+2天',
    },
    month: {
      completionRate: '78%',
      totalTasks: '45',
      improvement: '+3%',
      averagePomodoros: '3.9',
      consecutiveDays: '22',
      pomodorosImprovement: '+0.2',
      daysImprovement: '+5天',
    },
  };

  const currentData = reviewData[selectedPeriod];

  const handleBackPress = () => {
    if (router.canGoBack()) {
      router.back();
    }
  };

  const handlePeriodChange = (period: PeriodType) => {
    setSelectedPeriod(period);
  };

  const handleGenerateReport = async () => {
    setIsGeneratingReport(true);
    try {
      // 模拟生成报告的延迟
      await new Promise(resolve => setTimeout(resolve, 1000));
      setIsReportModalVisible(true);
    } catch (error) {
      Alert.alert('错误', '生成报告失败，请重试');
    } finally {
      setIsGeneratingReport(false);
    }
  };

  const handleCloseReport = () => {
    setIsReportModalVisible(false);
  };

  const handleSaveReport = () => {
    Alert.alert('成功', '报告已保存');
  };

  const handleShareReport = () => {
    Alert.alert('分享', '分享功能');
  };

  const renderPeriodTab = (period: PeriodType, label: string) => {
    const isActive = selectedPeriod === period;
    return (
      <TouchableOpacity
        key={period}
        style={[styles.periodTab, isActive && styles.periodTabActive]}
        onPress={() => handlePeriodChange(period)}
        activeOpacity={0.7}
      >
        <Text style={[styles.periodTabText, isActive && styles.periodTabTextActive]}>
          {label}
        </Text>
      </TouchableOpacity>
    );
  };

  const renderChartBar = (height: number, index: number) => (
    <View key={index} style={styles.chartBarContainer}>
      <LinearGradient
        colors={['#02f2ce', '#00f289']}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={[styles.chartBar, { height: `${height}%` }]}
      />
    </View>
  );

  const chartData = [60, 80, 45, 90, 75, 85, 95];
  const weekDays = ['周一', '周二', '周三', '周四', '周五', '周六', '周日'];

  return (
    <SafeAreaView style={styles.container}>
      {/* 顶部导航 */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={handleBackPress}
          activeOpacity={0.7}
        >
          <FontAwesome6 name="arrow-left" size={18} color="#1f2937" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>复盘分析</Text>
        <View style={styles.headerPlaceholder} />
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* 周期选择器 */}
        <View style={styles.periodSelector}>
          <View style={styles.periodTabsContainer}>
            {renderPeriodTab('day', '日复盘')}
            {renderPeriodTab('week', '周复盘')}
            {renderPeriodTab('month', '月复盘')}
          </View>
        </View>

        {/* 目标完成率概览 */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>目标完成率</Text>
          <View style={styles.completionCard}>
            <View style={styles.completionStats}>
              <View style={styles.statItem}>
                <Text style={styles.statValue}>{currentData.completionRate}</Text>
                <Text style={styles.statLabel}>本周完成率</Text>
              </View>
              <View style={styles.statItem}>
                <Text style={styles.statValueSecondary}>{currentData.totalTasks}</Text>
                <Text style={styles.statLabel}>总完成任务</Text>
              </View>
              <View style={styles.statItem}>
                <Text style={styles.statValueAccent}>{currentData.improvement}</Text>
                <Text style={styles.statLabel}>较上周提升</Text>
              </View>
            </View>
            <View style={styles.progressBarContainer}>
              <LinearGradient
                colors={['#02f2ce', '#00f289']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={[
                  styles.progressBar,
                  { width: currentData.completionRate as any }
                ]}
              />
            </View>
          </View>
        </View>

        {/* 关键指标变化趋势 */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>关键指标趋势</Text>
          <View style={styles.metricsCard}>
            {/* 学习时长趋势 */}
            <View style={styles.learningTrend}>
              <View style={styles.trendHeader}>
                <Text style={styles.trendTitle}>每日学习时长</Text>
                <Text style={styles.trendImprovement}>+15分钟</Text>
              </View>
              <View style={styles.chartContainer}>
                {chartData.map((height, index) => renderChartBar(height, index))}
              </View>
              <View style={styles.chartLabels}>
                {weekDays.map((day, index) => (
                  <Text key={index} style={styles.chartLabel}>
                    {day}
                  </Text>
                ))}
              </View>
            </View>

            {/* 其他指标 */}
            <View style={styles.otherMetrics}>
              <View style={styles.metricCard}>
                <Text style={styles.metricValue}>{currentData.averagePomodoros}</Text>
                <Text style={styles.metricLabel}>平均番茄钟</Text>
                <Text style={styles.metricImprovement}>{currentData.pomodorosImprovement}</Text>
              </View>
              <View style={styles.metricCard}>
                <Text style={styles.metricValueSecondary}>{currentData.consecutiveDays}</Text>
                <Text style={styles.metricLabel}>连续打卡</Text>
                <Text style={styles.metricImprovement}>{currentData.daysImprovement}</Text>
              </View>
            </View>
          </View>
        </View>

        {/* 问题点自动识别 */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>问题与改进</Text>
          <View style={styles.problemsContainer}>
            {/* 问题点 */}
            <View style={styles.problemCard}>
              <View style={styles.problemIconContainer}>
                <FontAwesome6 name="triangle-exclamation" size={14} color="#f59e0b" />
              </View>
              <View style={styles.problemContent}>
                <Text style={styles.problemTitle}>周三学习效率较低</Text>
                <Text style={styles.problemDescription}>
                  建议：调整学习时间安排，避免在疲劳时段进行高强度学习
                </Text>
              </View>
            </View>

            {/* 改进建议 */}
            <View style={styles.improvementCard}>
              <View style={styles.improvementIconContainer}>
                <FontAwesome6 name="lightbulb" size={14} color="#3b82f6" />
              </View>
              <View style={styles.improvementContent}>
                <Text style={styles.improvementTitle}>周末训练强度可提升</Text>
                <Text style={styles.improvementDescription}>
                  建议：增加周末训练时长，充分利用空闲时间提升训练效果
                </Text>
              </View>
            </View>
          </View>
        </View>

        {/* 复盘问卷 */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>复盘问卷</Text>
          <View style={styles.questionnaireCard}>
            <View style={styles.questionContainer}>
              <Text style={styles.questionLabel}>本周最大收获</Text>
              <TextInput
                style={styles.questionInput}
                value={question1}
                onChangeText={setQuestion1}
                placeholder="记录本周的主要收获和成长..."
                multiline
                numberOfLines={3}
                textAlignVertical="top"
              />
            </View>

            <View style={styles.questionContainer}>
              <Text style={styles.questionLabel}>遇到的主要问题</Text>
              <TextInput
                style={styles.questionInput}
                value={question2}
                onChangeText={setQuestion2}
                placeholder="反思本周遇到的困难和挑战..."
                multiline
                numberOfLines={3}
                textAlignVertical="top"
              />
            </View>

            <View style={styles.questionContainer}>
              <Text style={styles.questionLabel}>下周改进计划</Text>
              <TextInput
                style={styles.questionInput}
                value={question3}
                onChangeText={setQuestion3}
                placeholder="制定下周的改进措施和目标..."
                multiline
                numberOfLines={3}
                textAlignVertical="top"
              />
            </View>

            <TouchableOpacity
              style={styles.generateButton}
              onPress={handleGenerateReport}
              disabled={isGeneratingReport}
              activeOpacity={0.8}
            >
              <LinearGradient
                colors={['#02f2ce', '#00f289']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.generateButtonGradient}
              >
                <FontAwesome6 name="chart-line" size={16} color="#ffffff" />
                <Text style={styles.generateButtonText}>
                  {isGeneratingReport ? '生成中...' : '生成复盘报告'}
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      {/* 复盘报告弹窗 */}
      <Modal
        visible={isReportModalVisible}
        transparent
        animationType="fade"
        onRequestClose={handleCloseReport}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>复盘报告</Text>
              <TouchableOpacity
                style={styles.closeButton}
                onPress={handleCloseReport}
                activeOpacity={0.7}
              >
                <FontAwesome6 name="xmark" size={16} color="#9ca3af" />
              </TouchableOpacity>
            </View>

            <ScrollView style={styles.reportContent} showsVerticalScrollIndicator={false}>
              <View style={styles.reportSummary}>
                <Text style={styles.reportSummaryTitle}>本周总结</Text>
                <Text style={styles.reportSummaryText}>
                  目标完成率：85% | 连续打卡：7天
                </Text>
              </View>

              <View style={styles.reportSection}>
                <Text style={styles.reportSectionTitle}>主要收获</Text>
                <Text style={styles.reportSectionText}>
                  {question1 || '本周在英语学习方面取得了显著进步，词汇量增加了50个。'}
                </Text>
              </View>

              <View style={styles.reportSection}>
                <Text style={styles.reportSectionTitle}>遇到的问题</Text>
                <Text style={styles.reportSectionText}>
                  {question2 || '周三因为工作繁忙，学习计划未能完全执行。'}
                </Text>
              </View>

              <View style={styles.reportSection}>
                <Text style={styles.reportSectionTitle}>改进计划</Text>
                <Text style={styles.reportSectionText}>
                  {question3 || '下周将调整时间安排，确保每天都有固定的学习时间。'}
                </Text>
              </View>

              <View style={styles.reportHighlight}>
                <View style={styles.reportHighlightHeader}>
                  <FontAwesome6 name="trophy" size={16} color="#059669" />
                  <Text style={styles.reportHighlightTitle}>本周亮点</Text>
                </View>
                <Text style={styles.reportHighlightText}>
                  连续7天完成训练计划，创造了新的个人记录！
                </Text>
              </View>
            </ScrollView>

            <View style={styles.modalActions}>
              <TouchableOpacity
                style={styles.saveButton}
                onPress={handleSaveReport}
                activeOpacity={0.7}
              >
                <FontAwesome6 name="download" size={14} color="#1f2937" />
                <Text style={styles.saveButtonText}>保存</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.shareButton}
                onPress={handleShareReport}
                activeOpacity={0.7}
              >
                <FontAwesome6 name="share" size={14} color="#ffffff" />
                <Text style={styles.shareButtonText}>分享</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default ReviewAnalysisScreen;

