

import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { FontAwesome6 } from '@expo/vector-icons';
import Svg, { Path } from 'react-native-svg';
import styles from './styles';

interface SleepData {
  date: string;
  dayLabel: string;
  sleepQuality: number;
  sleepDuration: number;
  bedtime: string;
  deepSleep: string;
  lightSleep: string;
  qualityLabel: string;
}

interface TrendData {
  date: string;
  value: number;
}

const SleepRecordScreen = () => {
  const router = useRouter();
  
  const [selectedDateIndex, setSelectedDateIndex] = useState(0);
  const [selectedTrendView, setSelectedTrendView] = useState<'day' | 'week' | 'month'>('day');
  
  const dateOptions = [
    { date: '15', dayLabel: '今天' },
    { date: '14', dayLabel: '昨天' },
    { date: '13', dayLabel: '13' },
    { date: '12', dayLabel: '12' },
    { date: '11', dayLabel: '11' },
    { date: '10', dayLabel: '10' },
  ];

  const sleepData: SleepData = {
    date: '15',
    dayLabel: '今天',
    sleepQuality: 85,
    sleepDuration: 7.5,
    bedtime: '23:15',
    deepSleep: '2小时30分钟',
    lightSleep: '4小时15分钟',
    qualityLabel: '优质',
  };

  const trendData: TrendData[] = [
    { date: '10日', value: 60 },
    { date: '11日', value: 75 },
    { date: '12日', value: 65 },
    { date: '13日', value: 90 },
    { date: '14日', value: 70 },
    { date: '15日', value: 85 },
    { date: '16日', value: 80 },
  ];

  const handleBackPress = () => {
    if (router.canGoBack()) {
      router.back();
    }
  };

  const handleDateSelect = (index: number) => {
    setSelectedDateIndex(index);
    // 这里可以添加数据更新逻辑
  };

  const handleTrendViewChange = (view: 'day' | 'week' | 'month') => {
    setSelectedTrendView(view);
    // 这里可以添加趋势数据更新逻辑
  };

  const renderProgressRing = () => {
    const radius = 24;
    const strokeWidth = 3;
    const circumference = 2 * Math.PI * radius;
    const strokeDasharray = `${(sleepData.sleepQuality / 100) * circumference}, ${circumference}`;

    return (
      <View style={styles.progressRingContainer}>
        <Svg width={64} height={64} style={styles.progressRing}>
          <Path
            d={`M${radius + strokeWidth} ${strokeWidth}
               a ${radius} ${radius} 0 0 1 0 ${2 * radius}
               a ${radius} ${radius} 0 0 1 0 -${2 * radius}`}
            stroke="#e5e7eb"
            strokeWidth={strokeWidth}
            fill="transparent"
          />
          <Path
            d={`M${radius + strokeWidth} ${strokeWidth}
               a ${radius} ${radius} 0 0 1 0 ${2 * radius}
               a ${radius} ${radius} 0 0 1 0 -${2 * radius}`}
            stroke="#00f289"
            strokeWidth={strokeWidth}
            fill="transparent"
            strokeDasharray={strokeDasharray}
            strokeLinecap="round"
            transform={`rotate(-90 ${radius + strokeWidth} ${radius + strokeWidth})`}
          />
        </Svg>
        <View style={styles.progressRingText}>
          <Text style={styles.progressRingPercentage}>{sleepData.sleepQuality}%</Text>
        </View>
      </View>
    );
  };

  const renderTrendChart = () => {
    return (
      <View style={styles.trendChartContainer}>
        <View style={styles.chartBarsContainer}>
          {trendData.map((item, index) => (
            <View
              key={index}
              style={[
                styles.chartBar,
                {
                  height: `${item.value}%`,
                  opacity: item.value / 100,
                },
              ]}
            />
          ))}
        </View>
        <View style={styles.chartLabelsContainer}>
          {trendData.map((item, index) => (
            <Text key={index} style={styles.chartLabel}>
              {item.date}
            </Text>
          ))}
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* 顶部导航 */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
            <FontAwesome6 name="arrow-left" size={16} color="#6b7280" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>睡眠记录</Text>
          <View style={styles.headerPlaceholder} />
        </View>

        {/* 日期选择器 */}
        <View style={styles.dateSelectorSection}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.dateSelector}
            contentContainerStyle={styles.dateSelectorContent}
          >
            {dateOptions.map((option, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.dateItem,
                  selectedDateIndex === index && styles.dateItemActive,
                ]}
                onPress={() => handleDateSelect(index)}
              >
                <Text style={styles.dateItemLabel}>{option.dayLabel}</Text>
                <Text style={styles.dateItemDate}>{option.date}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* 睡眠概览 */}
        <View style={styles.sleepOverviewSection}>
          <View style={styles.sleepOverviewCard}>
            <View style={styles.sleepOverviewHeader}>
              <Text style={styles.sectionTitle}>睡眠概览</Text>
              <View style={styles.qualityIndicator}>
                <View style={styles.qualityDot} />
                <Text style={styles.qualityLabel}>{sleepData.qualityLabel}</Text>
              </View>
            </View>

            <View style={styles.sleepMetricsGrid}>
              <View style={styles.metricItem}>
                {renderProgressRing()}
                <Text style={styles.metricLabel}>睡眠质量</Text>
              </View>

              <View style={styles.metricItem}>
                <Text style={styles.metricValue}>{sleepData.sleepDuration}</Text>
                <Text style={styles.metricLabel}>睡眠时长(小时)</Text>
              </View>

              <View style={styles.metricItem}>
                <Text style={styles.metricValue}>{sleepData.bedtime}</Text>
                <Text style={styles.metricLabel}>入睡时间</Text>
              </View>
            </View>

            <View style={styles.sleepTypesContainer}>
              <View style={styles.sleepTypeItem}>
                <View style={styles.sleepTypeIcon}>
                  <FontAwesome6 name="moon" size={16} color="#02f2ce" />
                </View>
                <View style={styles.sleepTypeInfo}>
                  <Text style={styles.sleepTypeName}>深度睡眠</Text>
                  <Text style={styles.sleepTypeDuration}>{sleepData.deepSleep}</Text>
                </View>
              </View>

              <View style={styles.sleepTypeItem}>
                <View style={[styles.sleepTypeIcon, styles.lightSleepIcon]}>
                  <FontAwesome6 name="cloud" size={16} color="#0296f2e6" />
                </View>
                <View style={styles.sleepTypeInfo}>
                  <Text style={styles.sleepTypeName}>浅度睡眠</Text>
                  <Text style={styles.sleepTypeDuration}>{sleepData.lightSleep}</Text>
                </View>
              </View>
            </View>
          </View>
        </View>

        {/* 睡眠趋势 */}
        <View style={styles.sleepTrendsSection}>
          <View style={styles.sleepTrendsCard}>
            <View style={styles.trendHeader}>
              <Text style={styles.sectionTitle}>睡眠趋势</Text>
              <View style={styles.trendTabs}>
                <TouchableOpacity
                  style={[
                    styles.trendTab,
                    selectedTrendView === 'day' && styles.trendTabActive,
                  ]}
                  onPress={() => handleTrendViewChange('day')}
                >
                  <Text
                    style={[
                      styles.trendTabText,
                      selectedTrendView === 'day' && styles.trendTabTextActive,
                    ]}
                  >
                    日
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles.trendTab,
                    selectedTrendView === 'week' && styles.trendTabActive,
                  ]}
                  onPress={() => handleTrendViewChange('week')}
                >
                  <Text
                    style={[
                      styles.trendTabText,
                      selectedTrendView === 'week' && styles.trendTabTextActive,
                    ]}
                  >
                    周
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles.trendTab,
                    selectedTrendView === 'month' && styles.trendTabActive,
                  ]}
                  onPress={() => handleTrendViewChange('month')}
                >
                  <Text
                    style={[
                      styles.trendTabText,
                      selectedTrendView === 'month' && styles.trendTabTextActive,
                    ]}
                  >
                    月
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            {renderTrendChart()}
          </View>
        </View>

        {/* 睡眠分析报告 */}
        <View style={styles.sleepAnalysisSection}>
          <View style={styles.sleepAnalysisCard}>
            <Text style={styles.sectionTitle}>睡眠分析</Text>

            <View style={styles.analysisCardsContainer}>
              <View style={styles.analysisCard}>
                <View style={styles.analysisCardContent}>
                  <View style={styles.analysisIcon}>
                    <FontAwesome6 name="thumbs-up" size={14} color="#00f289" />
                  </View>
                  <View style={styles.analysisTextContainer}>
                    <Text style={styles.analysisTitle}>优点</Text>
                    <Text style={styles.analysisDescription}>
                      深度睡眠时间充足，睡眠质量良好，入睡时间规律。
                    </Text>
                  </View>
                </View>
              </View>

              <View style={[styles.analysisCard, styles.analysisCardWarning]}>
                <View style={styles.analysisCardContent}>
                  <View style={[styles.analysisIcon, styles.analysisIconWarning]}>
                    <FontAwesome6 name="circle-info" size={14} color="#f59e0b" />
                  </View>
                  <View style={styles.analysisTextContainer}>
                    <Text style={styles.analysisTitle}>建议</Text>
                    <Text style={styles.analysisDescription}>
                      可以尝试提前15分钟入睡，进一步提升睡眠质量。
                    </Text>
                  </View>
                </View>
              </View>

              <View style={[styles.analysisCard, styles.analysisCardInfo]}>
                <View style={styles.analysisCardContent}>
                  <View style={[styles.analysisIcon, styles.analysisIconInfo]}>
                    <FontAwesome6 name="chart-line" size={14} color="#0296f2e6" />
                  </View>
                  <View style={styles.analysisTextContainer}>
                    <Text style={styles.analysisTitle}>趋势</Text>
                    <Text style={styles.analysisDescription}>
                      本周平均睡眠时长7.2小时，较上周提升0.3小时。
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SleepRecordScreen;

