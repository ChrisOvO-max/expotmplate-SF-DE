

import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { FontAwesome6 } from '@expo/vector-icons';
import Svg, { Path, Circle, Defs, LinearGradient, Stop, Text as SvgText } from 'react-native-svg';
import styles from './styles';

type PeriodType = 'day' | 'week' | 'month';

interface WaterData {
  avg: string;
  max: string;
  rate: string;
}

interface SleepData {
  avg: string;
  quality: string;
  efficiency: string;
}

const HealthDataScreen = () => {
  const router = useRouter();
  const [selectedPeriod, setSelectedPeriod] = useState<PeriodType>('week');

  const waterData: Record<PeriodType, WaterData> = {
    day: { avg: '2000ml', max: '2000ml', rate: '100%' },
    week: { avg: '1850ml', max: '2200ml', rate: '92.5%' },
    month: { avg: '1780ml', max: '2300ml', rate: '89%' }
  };

  const sleepData: Record<PeriodType, SleepData> = {
    day: { avg: '7.5小时', quality: '88%', efficiency: '94%' },
    week: { avg: '7.2小时', quality: '85%', efficiency: '92%' },
    month: { avg: '7.0小时', quality: '82%', efficiency: '90%' }
  };

  const getPeriodText = (period: PeriodType): string => {
    switch (period) {
      case 'day': return '今日';
      case 'week': return '本周';
      case 'month': return '本月';
      default: return '本周';
    }
  };

  const handleBackPress = () => {
    if (router.canGoBack()) {
      router.back();
    }
  };

  const handlePeriodPress = (period: PeriodType) => {
    setSelectedPeriod(period);
  };

  const renderPeriodSelector = () => (
    <View style={styles.periodSelectorContainer}>
      <View style={styles.periodSelector}>
        <TouchableOpacity
          style={[
            styles.periodTab,
            selectedPeriod === 'day' && styles.periodTabActive
          ]}
          onPress={() => handlePeriodPress('day')}
        >
          <Text style={[
            styles.periodTabText,
            selectedPeriod === 'day' && styles.periodTabTextActive
          ]}>
            日
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.periodTab,
            selectedPeriod === 'week' && styles.periodTabActive
          ]}
          onPress={() => handlePeriodPress('week')}
        >
          <Text style={[
            styles.periodTabText,
            selectedPeriod === 'week' && styles.periodTabTextActive
          ]}>
            周
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.periodTab,
            selectedPeriod === 'month' && styles.periodTabActive
          ]}
          onPress={() => handlePeriodPress('month')}
        >
          <Text style={[
            styles.periodTabText,
            selectedPeriod === 'month' && styles.periodTabTextActive
          ]}>
            月
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  const renderWaterChart = () => (
    <View style={styles.chartContainer}>
      <Svg width="100%" height="200" viewBox="0 0 320 160">
        <Defs>
          <LinearGradient id="waterGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <Stop offset="0%" stopColor="#0296f2e6" stopOpacity="0.8" />
            <Stop offset="100%" stopColor="#0296f2e6" stopOpacity="0.1" />
          </LinearGradient>
        </Defs>
        <Path
          d="M20,120 Q80,80 140,100 T260,90"
          stroke="#0296f2e6"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
        />
        <Path
          d="M20,120 Q80,80 140,100 T260,90 L260,160 L20,160 Z"
          fill="url(#waterGradient)"
          opacity="0.3"
        />
        <Circle cx="20" cy="120" r="4" fill="#0296f2e6" stroke="white" strokeWidth="2" />
        <Circle cx="80" cy="80" r="4" fill="#0296f2e6" stroke="white" strokeWidth="2" />
        <Circle cx="140" cy="100" r="4" fill="#0296f2e6" stroke="white" strokeWidth="2" />
        <Circle cx="200" cy="70" r="4" fill="#0296f2e6" stroke="white" strokeWidth="2" />
        <Circle cx="260" cy="90" r="4" fill="#0296f2e6" stroke="white" strokeWidth="2" />
        
        <SvgText x="10" y="20" textAnchor="end" fontSize="12" fill="#6b7280">2500ml</SvgText>
        <SvgText x="10" y="60" textAnchor="end" fontSize="12" fill="#6b7280">2000ml</SvgText>
        <SvgText x="10" y="100" textAnchor="end" fontSize="12" fill="#6b7280">1500ml</SvgText>
        <SvgText x="10" y="140" textAnchor="end" fontSize="12" fill="#6b7280">1000ml</SvgText>
        
        <SvgText x="20" y="155" textAnchor="middle" fontSize="12" fill="#6b7280">周一</SvgText>
        <SvgText x="80" y="155" textAnchor="middle" fontSize="12" fill="#6b7280">周二</SvgText>
        <SvgText x="140" y="155" textAnchor="middle" fontSize="12" fill="#6b7280">周三</SvgText>
        <SvgText x="200" y="155" textAnchor="middle" fontSize="12" fill="#6b7280">周四</SvgText>
        <SvgText x="260" y="155" textAnchor="middle" fontSize="12" fill="#6b7280">周五</SvgText>
      </Svg>
    </View>
  );

  const renderSleepChart = () => (
    <View style={styles.chartContainer}>
      <Svg width="100%" height="200" viewBox="0 0 320 160">
        <Defs>
          <LinearGradient id="sleepGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <Stop offset="0%" stopColor="#00f289" stopOpacity="0.8" />
            <Stop offset="100%" stopColor="#00f289" stopOpacity="0.1" />
          </LinearGradient>
        </Defs>
        <Path
          d="M20,100 Q80,70 140,80 T260,75"
          stroke="#00f289"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
        />
        <Path
          d="M20,100 Q80,70 140,80 T260,75 L260,160 L20,160 Z"
          fill="url(#sleepGradient)"
          opacity="0.3"
        />
        <Circle cx="20" cy="100" r="4" fill="#00f289" stroke="white" strokeWidth="2" />
        <Circle cx="80" cy="70" r="4" fill="#00f289" stroke="white" strokeWidth="2" />
        <Circle cx="140" cy="80" r="4" fill="#00f289" stroke="white" strokeWidth="2" />
        <Circle cx="200" cy="65" r="4" fill="#00f289" stroke="white" strokeWidth="2" />
        <Circle cx="260" cy="75" r="4" fill="#00f289" stroke="white" strokeWidth="2" />
        
        <SvgText x="10" y="20" textAnchor="end" fontSize="12" fill="#6b7280">9小时</SvgText>
        <SvgText x="10" y="50" textAnchor="end" fontSize="12" fill="#6b7280">7.5小时</SvgText>
        <SvgText x="10" y="80" textAnchor="end" fontSize="12" fill="#6b7280">6小时</SvgText>
        <SvgText x="10" y="110" textAnchor="end" fontSize="12" fill="#6b7280">4.5小时</SvgText>
        <SvgText x="10" y="140" textAnchor="end" fontSize="12" fill="#6b7280">3小时</SvgText>
        
        <SvgText x="20" y="155" textAnchor="middle" fontSize="12" fill="#6b7280">周一</SvgText>
        <SvgText x="80" y="155" textAnchor="middle" fontSize="12" fill="#6b7280">周二</SvgText>
        <SvgText x="140" y="155" textAnchor="middle" fontSize="12" fill="#6b7280">周三</SvgText>
        <SvgText x="200" y="155" textAnchor="middle" fontSize="12" fill="#6b7280">周四</SvgText>
        <SvgText x="260" y="155" textAnchor="middle" fontSize="12" fill="#6b7280">周五</SvgText>
      </Svg>
    </View>
  );

  const renderWaterSection = () => (
    <View style={styles.sectionContainer}>
      <View style={styles.sectionHeader}>
        <View style={styles.sectionTitleContainer}>
          <FontAwesome6 name="droplet" style={styles.sectionIcon} />
          <Text style={styles.sectionTitle}>水分摄入</Text>
        </View>
        <Text style={styles.sectionUnit}>{getPeriodText(selectedPeriod)}</Text>
      </View>
      
      {renderWaterChart()}
      
      <View style={styles.statsContainer}>
        <View style={styles.statItem}>
          <Text style={styles.statValue}>{waterData[selectedPeriod].avg}</Text>
          <Text style={styles.statLabel}>平均摄入</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statValue}>{waterData[selectedPeriod].max}</Text>
          <Text style={styles.statLabel}>最高摄入</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statValue}>{waterData[selectedPeriod].rate}</Text>
          <Text style={styles.statLabel}>目标达成率</Text>
        </View>
      </View>
    </View>
  );

  const renderSleepSection = () => (
    <View style={styles.sectionContainer}>
      <View style={styles.sectionHeader}>
        <View style={styles.sectionTitleContainer}>
          <FontAwesome6 name="moon" style={styles.sectionIcon} />
          <Text style={styles.sectionTitle}>睡眠质量</Text>
        </View>
        <Text style={styles.sectionUnit}>{getPeriodText(selectedPeriod)}</Text>
      </View>
      
      {renderSleepChart()}
      
      <View style={styles.statsContainer}>
        <View style={styles.statItem}>
          <Text style={styles.statValue}>{sleepData[selectedPeriod].avg}</Text>
          <Text style={styles.statLabel}>平均睡眠</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statValue}>{sleepData[selectedPeriod].quality}</Text>
          <Text style={styles.statLabel}>睡眠质量</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statValue}>{sleepData[selectedPeriod].efficiency}</Text>
          <Text style={styles.statLabel}>睡眠效率</Text>
        </View>
      </View>
    </View>
  );

  const renderProgressRing = () => (
    <View style={styles.progressRingContainer}>
      <Svg width="64" height="64" viewBox="0 0 36 36">
        <Path
          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
          stroke="#e5e7eb"
          strokeWidth="8"
          fill="transparent"
        />
        <Path
          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
          stroke="#8b5cf6"
          strokeWidth="8"
          fill="transparent"
          strokeLinecap="round"
          strokeDasharray="85, 100"
          transform="rotate(-90 18 18)"
        />
      </Svg>
      <View style={styles.progressRingText}>
        <Text style={styles.progressRingValue}>85%</Text>
      </View>
    </View>
  );

  const renderOverviewCards = () => (
    <View style={styles.overviewContainer}>
      <View style={styles.overviewGrid}>
        <TouchableOpacity style={styles.overviewCard}>
          <View style={styles.cardHeader}>
            <View style={[styles.cardIcon, styles.waterCardIcon]}>
              <FontAwesome6 name="droplet" style={styles.waterIcon} />
            </View>
            <View style={styles.statusBadgeCompleted}>
              <Text style={styles.statusBadgeText}>已完成</Text>
            </View>
          </View>
          <Text style={styles.cardTitle}>今日水分</Text>
          <View style={styles.cardValueContainer}>
            <Text style={styles.cardValue}>2000</Text>
            <Text style={styles.cardValueUnit}>/2000ml</Text>
          </View>
          <View style={styles.progressBarContainer}>
            <View style={styles.progressBar} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.overviewCard}>
          <View style={styles.cardHeader}>
            <View style={[styles.cardIcon, styles.sleepCardIcon]}>
              <FontAwesome6 name="moon" style={styles.sleepIcon} />
            </View>
            <View style={styles.statusBadgeGood}>
              <Text style={styles.statusBadgeText}>良好</Text>
            </View>
          </View>
          <Text style={styles.cardTitle}>昨晚睡眠</Text>
          <View style={styles.cardValueContainer}>
            <Text style={styles.cardValue}>7.5</Text>
            <Text style={styles.cardValueUnit}>小时</Text>
          </View>
          <Text style={styles.cardSubtext}>深度睡眠: 2.3小时</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.overviewCard}>
          <View style={styles.cardHeader}>
            <View style={[styles.cardIcon, styles.avgCardIcon]}>
              <FontAwesome6 name="chart-line" style={styles.avgIcon} />
            </View>
            <View style={styles.statusBadgeTrend}>
              <Text style={styles.statusBadgeText}>趋势</Text>
            </View>
          </View>
          <Text style={styles.cardTitle}>本周平均</Text>
          <View style={styles.cardDetails}>
            <View style={styles.cardDetailRow}>
              <Text style={styles.cardDetailLabel}>水分:</Text>
              <Text style={styles.cardDetailValue}>1850ml</Text>
            </View>
            <View style={styles.cardDetailRow}>
              <Text style={styles.cardDetailLabel}>睡眠:</Text>
              <Text style={styles.cardDetailValue}>7.2小时</Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.overviewCard}>
          <View style={styles.cardHeader}>
            <View style={[styles.cardIcon, styles.goalCardIcon]}>
              <FontAwesome6 name="trophy" style={styles.goalIcon} />
            </View>
            <View style={styles.statusBadgeCompleted}>
              <Text style={styles.statusBadgeText}>优秀</Text>
            </View>
          </View>
          <Text style={styles.cardTitle}>目标达成</Text>
          {renderProgressRing()}
          <Text style={styles.cardSubtextCenter}>健康目标达成率</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
          <FontAwesome6 name="arrow-left" style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>健康数据</Text>
        <View style={styles.headerPlaceholder} />
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Period Selector */}
        {renderPeriodSelector()}

        {/* Water Section */}
        {renderWaterSection()}

        {/* Sleep Section */}
        {renderSleepSection()}

        {/* Overview Cards */}
        {renderOverviewCards()}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HealthDataScreen;

