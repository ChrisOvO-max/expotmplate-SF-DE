

import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { FontAwesome6 } from '@expo/vector-icons';
import Svg, { Defs, LinearGradient, Stop, G, Line, Text as SvgText, Path, Circle, Rect } from 'react-native-svg';
import styles from './styles';

type PeriodType = 'day' | 'week' | 'month';

const MoodDataScreen = () => {
  const router = useRouter();
  const [selectedPeriod, setSelectedPeriod] = useState<PeriodType>('week');

  const handleBackPress = () => {
    if (router.canGoBack()) {
      router.back();
    }
  };

  const handlePeriodChange = (period: PeriodType) => {
    setSelectedPeriod(period);
  };

  const getTrendPath = () => {
    switch (selectedPeriod) {
      case 'day':
        return 'M50,80 Q100,60 150,80 T250,60 Q300,40 350,70';
      case 'week':
        return 'M50,120 Q100,80 150,100 T250,60 Q300,40 350,80';
      case 'month':
        return 'M50,100 Q100,80 150,90 T250,70 Q300,60 350,80';
      default:
        return 'M50,120 Q100,80 150,100 T250,60 Q300,40 350,80';
    }
  };

  const getTrendArea = () => {
    switch (selectedPeriod) {
      case 'day':
        return 'M50,80 Q100,60 150,80 T250,60 Q300,40 350,70 L350,180 L50,180 Z';
      case 'week':
        return 'M50,120 Q100,80 150,100 T250,60 Q300,40 350,80 L350,180 L50,180 Z';
      case 'month':
        return 'M50,100 Q100,80 150,90 T250,70 Q300,60 350,80 L350,180 L50,180 Z';
      default:
        return 'M50,120 Q100,80 150,100 T250,60 Q300,40 350,80 L350,180 L50,180 Z';
    }
  };

  const getXLabels = () => {
    switch (selectedPeriod) {
      case 'day':
        return ['09:00', '12:00', '15:00', '18:00', '21:00', '24:00', '03:00'];
      case 'week':
        return ['周一', '周二', '周三', '周四', '周五', '周六', '周日'];
      case 'month':
        return ['第1周', '第2周', '第3周', '第4周', '第5周', '第6周', '第7周'];
      default:
        return ['周一', '周二', '周三', '周四', '周五', '周六', '周日'];
    }
  };

  const renderPeriodTab = (period: PeriodType, label: string) => {
    const isActive = selectedPeriod === period;
    return (
      <TouchableOpacity
        key={period}
        style={[styles.periodTab, isActive ? styles.periodTabActive : styles.periodTabInactive]}
        onPress={() => handlePeriodChange(period)}
        activeOpacity={0.7}
      >
        <Text style={[styles.periodTabText, isActive ? styles.periodTabTextActive : styles.periodTabTextInactive]}>
          {label}
        </Text>
      </TouchableOpacity>
    );
  };

  const renderTrendChart = () => {
    const xLabels = getXLabels();
    
    return (
      <Svg width="100%" height="200" viewBox="0 0 400 200">
        <Defs>
          <LinearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <Stop offset="0%" stopColor="#02f2ce" stopOpacity="0.8" />
            <Stop offset="100%" stopColor="#02f2ce" stopOpacity="0.1" />
          </LinearGradient>
        </Defs>
        
        {/* 网格线 */}
        <G stroke="#e5e7eb" strokeWidth="1" opacity="0.5">
          <Line x1="50" y1="40" x2="350" y2="40" />
          <Line x1="50" y1="80" x2="350" y2="80" />
          <Line x1="50" y1="120" x2="350" y2="120" />
          <Line x1="50" y1="160" x2="350" y2="160" />
        </G>
        
        {/* Y轴标签 */}
        <G fill="#6b7280" fontSize="12">
          <SvgText x="40" y="45" textAnchor="end">开心</SvgText>
          <SvgText x="40" y="85" textAnchor="end">平静</SvgText>
          <SvgText x="40" y="125" textAnchor="end">专注</SvgText>
          <SvgText x="40" y="165" textAnchor="end">疲惫</SvgText>
        </G>
        
        {/* 趋势线 */}
        <Path d={getTrendPath()} stroke="#02f2ce" strokeWidth="3" fill="none" strokeLinecap="round" />
        
        {/* 填充区域 */}
        <Path d={getTrendArea()} fill="url(#gradient)" opacity="0.3" />
        
        {/* 数据点 */}
        <G>
          <Circle cx="50" cy="120" r="4" fill="#02f2ce" stroke="white" strokeWidth="2" />
          <Circle cx="100" cy="80" r="4" fill="#02f2ce" stroke="white" strokeWidth="2" />
          <Circle cx="150" cy="100" r="4" fill="#02f2ce" stroke="white" strokeWidth="2" />
          <Circle cx="200" cy="90" r="4" fill="#02f2ce" stroke="white" strokeWidth="2" />
          <Circle cx="250" cy="60" r="4" fill="#02f2ce" stroke="white" strokeWidth="2" />
          <Circle cx="300" cy="40" r="4" fill="#02f2ce" stroke="white" strokeWidth="2" />
          <Circle cx="350" cy="80" r="4" fill="#02f2ce" stroke="white" strokeWidth="2" />
        </G>
        
        {/* X轴标签 */}
        <G fill="#6b7280" fontSize="12">
          {xLabels.map((label, index) => (
            <SvgText key={index} x={50 + index * 50} y="195" textAnchor="middle">
              {label}
            </SvgText>
          ))}
        </G>
      </Svg>
    );
  };

  const renderComparisonChart = () => {
    return (
      <Svg width="100%" height="200" viewBox="0 0 400 200">
        {/* Y轴 */}
        <Line x1="50" y1="20" x2="50" y2="180" stroke="#e5e7eb" strokeWidth="1" />
        
        {/* Y轴标签 */}
        <G fill="#6b7280" fontSize="12">
          <SvgText x="45" y="25" textAnchor="end">100%</SvgText>
          <SvgText x="45" y="65" textAnchor="end">75%</SvgText>
          <SvgText x="45" y="105" textAnchor="end">50%</SvgText>
          <SvgText x="45" y="145" textAnchor="end">25%</SvgText>
          <SvgText x="45" y="185" textAnchor="end">0%</SvgText>
        </G>
        
        {/* 柱状图数据 */}
        <G>
          {/* 周一 */}
          <Rect x="80" y="80" width="20" height="80" fill="#02f2ce" />
          <Rect x="110" y="60" width="20" height="100" fill="#fbbf24" />
          
          {/* 周二 */}
          <Rect x="140" y="60" width="20" height="100" fill="#02f2ce" />
          <Rect x="170" y="40" width="20" height="120" fill="#3b82f6" />
          
          {/* 周三 */}
          <Rect x="200" y="100" width="20" height="60" fill="#02f2ce" />
          <Rect x="230" y="80" width="20" height="80" fill="#10b981" />
          
          {/* 周四 */}
          <Rect x="260" y="80" width="20" height="80" fill="#02f2ce" />
          <Rect x="290" y="100" width="20" height="60" fill="#6b7280" />
          
          {/* 周五 */}
          <Rect x="320" y="40" width="20" height="120" fill="#02f2ce" />
          <Rect x="350" y="60" width="20" height="100" fill="#fbbf24" />
        </G>
        
        {/* X轴标签 */}
        <G fill="#6b7280" fontSize="12">
          <SvgText x="100" y="195" textAnchor="middle">周一</SvgText>
          <SvgText x="160" y="195" textAnchor="middle">周二</SvgText>
          <SvgText x="220" y="195" textAnchor="middle">周三</SvgText>
          <SvgText x="280" y="195" textAnchor="middle">周四</SvgText>
          <SvgText x="340" y="195" textAnchor="middle">周五</SvgText>
        </G>
        
        {/* 图例 */}
        <G fill="#6b7280" fontSize="12">
          <Rect x="80" y="10" width="12" height="12" fill="#02f2ce" />
          <SvgText x="100" y="20" textAnchor="start">任务完成率</SvgText>
          
          <Rect x="200" y="10" width="12" height="12" fill="#fbbf24" />
          <SvgText x="220" y="20" textAnchor="start">心情指数</SvgText>
        </G>
      </Svg>
    );
  };

  const renderKeyFinding = (color: string, text: string) => (
    <View style={styles.findingItem}>
      <View style={[styles.findingDot, { backgroundColor: color }]} />
      <Text style={styles.findingText}>{text}</Text>
    </View>
  );

  const renderSuggestion = (icon: string, iconColor: string, iconBgColor: string, title: string, description: string) => (
    <View style={styles.suggestionItem}>
      <View style={[styles.suggestionIcon, { backgroundColor: iconBgColor }]}>
        <FontAwesome6 name={icon} size={14} color={iconColor} />
      </View>
      <View style={styles.suggestionContent}>
        <Text style={styles.suggestionTitle}>{title}</Text>
        <Text style={styles.suggestionDescription}>{description}</Text>
      </View>
    </View>
  );

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
        <Text style={styles.headerTitle}>心情分析</Text>
        <View style={styles.headerPlaceholder} />
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* 周期选择器 */}
        <View style={styles.periodSelector}>
          <View style={styles.periodTabs}>
            {renderPeriodTab('day', '日')}
            {renderPeriodTab('week', '周')}
            {renderPeriodTab('month', '月')}
          </View>
        </View>

        {/* 心情趋势图 */}
        <View style={styles.chartSection}>
          <Text style={styles.sectionTitle}>心情变化趋势</Text>
          <View style={styles.chartContainer}>
            {renderTrendChart()}
          </View>
        </View>

        {/* 心情与任务完成率对比 */}
        <View style={styles.chartSection}>
          <Text style={styles.sectionTitle}>心情与任务完成率</Text>
          <View style={styles.chartContainer}>
            {renderComparisonChart()}
          </View>
        </View>

        {/* 分析报告 */}
        <View style={styles.reportSection}>
          <Text style={styles.sectionTitle}>分析报告</Text>
          
          {/* 关键发现 */}
          <View style={styles.reportCard}>
            <View style={styles.reportCardHeader}>
              <FontAwesome6 name="lightbulb" size={16} color="#fbbf24" />
              <Text style={styles.reportCardTitle}>关键发现</Text>
            </View>
            <View style={styles.findingsList}>
              {renderKeyFinding('#10b981', '当心情状态为"开心"时，任务完成率平均提升23%')}
              {renderKeyFinding('#3b82f6', '专注状态下的学习效率最高，平均每小时完成15个单词')}
              {renderKeyFinding('#f59e0b', '疲惫状态下的训练效果明显下降，建议适当休息')}
            </View>
          </View>
          
          {/* 改进建议 */}
          <View style={styles.reportCard}>
            <View style={styles.reportCardHeader}>
              <FontAwesome6 name="chart-line" size={16} color="#02f2ce" />
              <Text style={styles.reportCardTitle}>改进建议</Text>
            </View>
            <View style={styles.suggestionsList}>
              {renderSuggestion('sun', '#059669', '#d1fae5', '保持积极心态', '建议在开始学习前进行5分钟冥想，提升心情状态')}
              {renderSuggestion('bed', '#2563eb', '#dbeafe', '保证充足睡眠', '睡眠质量直接影响心情，建议每晚保持7-8小时睡眠')}
              {renderSuggestion('music', '#7c3aed', '#ede9fe', '音乐调节心情', '在心情低落时，可播放轻音乐改善情绪状态')}
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MoodDataScreen;

