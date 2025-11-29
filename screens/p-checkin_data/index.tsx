

import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { FontAwesome6 } from '@expo/vector-icons';
import styles from './styles';

type PeriodType = 'day' | 'week' | 'month';

const CheckinDataScreen = () => {
  const router = useRouter();
  const [selectedPeriod, setSelectedPeriod] = useState<PeriodType>('week');

  const handleBackPress = () => {
    if (router.canGoBack()) {
      router.back();
    }
  };

  const handlePeriodChange = (period: PeriodType) => {
    setSelectedPeriod(period);
    // 这里可以添加数据更新逻辑
  };

  const renderPeriodSelector = () => (
    <View style={styles.periodSelectorContainer}>
      <View style={styles.periodTabsContainer}>
        <TouchableOpacity
          style={[
            styles.periodTab,
            selectedPeriod === 'day' ? styles.periodTabActive : styles.periodTabInactive
          ]}
          onPress={() => handlePeriodChange('day')}
        >
          <Text style={[
            styles.periodTabText,
            selectedPeriod === 'day' ? styles.periodTabTextActive : styles.periodTabTextInactive
          ]}>
            日
          </Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={[
            styles.periodTab,
            selectedPeriod === 'week' ? styles.periodTabActive : styles.periodTabInactive
          ]}
          onPress={() => handlePeriodChange('week')}
        >
          <Text style={[
            styles.periodTabText,
            selectedPeriod === 'week' ? styles.periodTabTextActive : styles.periodTabTextInactive
          ]}>
            周
          </Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={[
            styles.periodTab,
            selectedPeriod === 'month' ? styles.periodTabActive : styles.periodTabInactive
          ]}
          onPress={() => handlePeriodChange('month')}
        >
          <Text style={[
            styles.periodTabText,
            selectedPeriod === 'month' ? styles.periodTabTextActive : styles.periodTabTextInactive
          ]}>
            月
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  const renderDataCard = (
    icon: string,
    iconColor: string,
    iconBgColor: string,
    value: string,
    label: string,
    badgeText: string,
    badgeColor: string,
    badgeBgColor: string
  ) => (
    <View style={styles.dataCard}>
      <View style={styles.dataCardHeader}>
        <View style={[styles.dataCardIconContainer, { backgroundColor: iconBgColor }]}>
          <FontAwesome6 name={icon} size={16} color={iconColor} />
        </View>
        <View style={[styles.dataCardBadge, { backgroundColor: badgeBgColor }]}>
          <Text style={[styles.dataCardBadgeText, { color: badgeColor }]}>
            {badgeText}
          </Text>
        </View>
      </View>
      <Text style={styles.dataCardValue}>{value}</Text>
      <Text style={styles.dataCardLabel}>{label}</Text>
    </View>
  );

  const renderDataOverview = () => (
    <View style={styles.dataOverviewContainer}>
      <View style={styles.dataCardsGrid}>
        {renderDataCard(
          'check-circle',
          '#02f2ce',
          'rgba(2, 242, 206, 0.1)',
          '156',
          '总打卡次数',
          '+12%',
          '#059669',
          'rgba(5, 150, 105, 0.1)'
        )}
        
        {renderDataCard(
          'fire',
          '#00f289',
          'rgba(0, 242, 137, 0.1)',
          '28',
          '连续打卡天数',
          '新纪录',
          '#ea580c',
          'rgba(234, 88, 12, 0.1)'
        )}
        
        {renderDataCard(
          'chart-line',
          '#0296f2e6',
          'rgba(2, 150, 242, 0.1)',
          '89%',
          '平均打卡率',
          '稳定',
          '#2563eb',
          'rgba(37, 99, 235, 0.1)'
        )}
        
        {renderDataCard(
          'trophy',
          '#9333ea',
          'rgba(147, 51, 234, 0.1)',
          '45',
          '最长连续天数',
          '历史最高',
          '#9333ea',
          'rgba(147, 51, 234, 0.1)'
        )}
      </View>
    </View>
  );

  const renderChartBar = (height: number, label: string, isToday: boolean = false) => (
    <View style={styles.chartBarContainer}>
      <View style={[
        styles.chartBar,
        {
          height: `${height}%`,
          backgroundColor: isToday ? '#00f289' : '#02f2ce'
        }
      ]} />
      <Text style={styles.chartBarLabel}>{label}</Text>
    </View>
  );

  const renderCheckinRateChart = () => (
    <View style={styles.chartContainer}>
      <Text style={styles.chartTitle}>打卡率趋势</Text>
      <View style={styles.chartArea}>
        {renderChartBar(60, '周一')}
        {renderChartBar(80, '周二')}
        {renderChartBar(75, '周三')}
        {renderChartBar(90, '周四')}
        {renderChartBar(85, '周五')}
        {renderChartBar(70, '周六')}
        {renderChartBar(95, '今天', true)}
      </View>
      <View style={styles.chartLegend}>
        <Text style={styles.chartLegendText}>本周平均: 82%</Text>
        <Text style={styles.chartLegendText}>较上周: +5%</Text>
      </View>
    </View>
  );

  const renderStreakMilestone = (
    icon: string,
    iconColor: string,
    iconBgColor: string,
    title: string,
    progress?: { current: number; total: number },
    isCompleted: boolean = false
  ) => (
    <View style={styles.streakMilestone}>
      <View style={styles.streakMilestoneLeft}>
        <View style={[styles.streakMilestoneIcon, { backgroundColor: iconBgColor }]}>
          <FontAwesome6 name={icon} size={14} color={iconColor} />
        </View>
        <Text style={styles.streakMilestoneTitle}>{title}</Text>
      </View>
      <View style={styles.streakMilestoneRight}>
        {isCompleted ? (
          <View style={styles.streakMilestoneCompleted}>
            <Text style={styles.streakMilestoneCompletedText}>已达成</Text>
          </View>
        ) : progress ? (
          <View style={styles.streakMilestoneProgress}>
            <View style={styles.streakMilestoneProgressBar}>
              <View 
                style={[
                  styles.streakMilestoneProgressFill,
                  { width: `${(progress.current / progress.total) * 100}%` }
                ]} 
              />
            </View>
            <Text style={styles.streakMilestoneProgressText}>
              {progress.current}/{progress.total}
            </Text>
          </View>
        ) : null}
      </View>
    </View>
  );

  const renderStreakDisplay = () => (
    <View style={styles.streakContainer}>
      <Text style={styles.streakTitle}>连续打卡记录</Text>
      
      <View style={styles.streakBadgeContainer}>
        <View style={styles.streakBadge}>
          <Text style={styles.streakBadgeNumber}>28</Text>
          <View style={styles.streakBadgeFire}>
            <FontAwesome6 name="fire" size={12} color="#ffffff" />
          </View>
        </View>
        <Text style={styles.streakBadgeLabel}>连续打卡天数</Text>
      </View>

      <View style={styles.streakMilestonesContainer}>
        {renderStreakMilestone(
          'medal',
          '#059669',
          'rgba(5, 150, 105, 0.1)',
          '坚持7天',
          undefined,
          true
        )}
        
        {renderStreakMilestone(
          'star',
          '#2563eb',
          'rgba(37, 99, 235, 0.1)',
          '坚持30天',
          { current: 28, total: 30 }
        )}
        
        {renderStreakMilestone(
          'crown',
          '#9333ea',
          'rgba(147, 51, 234, 0.1)',
          '坚持100天',
          { current: 28, total: 100 }
        )}
      </View>
    </View>
  );

  const renderDetailedStats = () => (
    <View style={styles.detailedStatsContainer}>
      <Text style={styles.detailedStatsTitle}>详细统计</Text>
      
      <View style={styles.detailedStatsContent}>
        <View style={styles.detailedStatsCard}>
          <Text style={styles.detailedStatsCardTitle}>按类型统计</Text>
          <View style={styles.detailedStatsList}>
            <View style={styles.detailedStatsItem}>
              <View style={styles.detailedStatsItemLeft}>
                <View style={[styles.detailedStatsItemIcon, { backgroundColor: 'rgba(2, 242, 206, 0.1)' }]}>
                  <FontAwesome6 name="book" size={14} color="#02f2ce" />
                </View>
                <Text style={styles.detailedStatsItemText}>学习打卡</Text>
              </View>
              <View style={styles.detailedStatsItemRight}>
                <Text style={styles.detailedStatsItemValue}>52次</Text>
                <Text style={styles.detailedStatsItemRate}>92%</Text>
              </View>
            </View>
            
            <View style={styles.detailedStatsItem}>
              <View style={styles.detailedStatsItemLeft}>
                <View style={[styles.detailedStatsItemIcon, { backgroundColor: 'rgba(0, 242, 137, 0.1)' }]}>
                  <FontAwesome6 name="dumbbell" size={14} color="#00f289" />
                </View>
                <Text style={styles.detailedStatsItemText}>训练打卡</Text>
              </View>
              <View style={styles.detailedStatsItemRight}>
                <Text style={styles.detailedStatsItemValue}>48次</Text>
                <Text style={styles.detailedStatsItemRate}>86%</Text>
              </View>
            </View>
            
            <View style={styles.detailedStatsItem}>
              <View style={styles.detailedStatsItemLeft}>
                <View style={[styles.detailedStatsItemIcon, { backgroundColor: 'rgba(2, 150, 242, 0.1)' }]}>
                  <FontAwesome6 name="heart" size={14} color="#0296f2e6" />
                </View>
                <Text style={styles.detailedStatsItemText}>健康打卡</Text>
              </View>
              <View style={styles.detailedStatsItemRight}>
                <Text style={styles.detailedStatsItemValue}>56次</Text>
                <Text style={styles.detailedStatsItemRate}>98%</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.detailedStatsCard}>
          <Text style={styles.detailedStatsCardTitle}>最佳表现</Text>
          <View style={styles.detailedStatsList}>
            <View style={styles.detailedStatsItem}>
              <Text style={styles.detailedStatsItemText}>最佳月份</Text>
              <Text style={styles.detailedStatsItemValue}>12月 (95%)</Text>
            </View>
            <View style={styles.detailedStatsItem}>
              <Text style={styles.detailedStatsItemText}>最佳周</Text>
              <Text style={styles.detailedStatsItemValue}>第51周 (92%)</Text>
            </View>
            <View style={styles.detailedStatsItem}>
              <Text style={styles.detailedStatsItemText}>单日最多</Text>
              <Text style={styles.detailedStatsItemValue}>6次打卡</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* 顶部导航栏 */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
          <FontAwesome6 name="arrow-left" size={18} color="#1f2937" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>打卡数据</Text>
        <View style={styles.headerPlaceholder} />
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* 周期选择器 */}
        {renderPeriodSelector()}

        {/* 数据概览卡片 */}
        {renderDataOverview()}

        {/* 打卡率趋势图 */}
        {renderCheckinRateChart()}

        {/* 连续打卡展示 */}
        {renderStreakDisplay()}

        {/* 详细统计 */}
        {renderDetailedStats()}
      </ScrollView>
    </SafeAreaView>
  );
};

export default CheckinDataScreen;

