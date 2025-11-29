

import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { FontAwesome6 } from '@expo/vector-icons';
import PeriodSelector from './components/PeriodSelector';
import ChartCard from './components/ChartCard';
import DataOverviewCard from './components/DataOverviewCard';
import styles from './styles';

type PeriodType = 'day' | 'week' | 'month';

interface ChartData {
  labels: string[];
  datasets: Array<{
    data: number[];
    borderColor: string;
    backgroundColor: string;
  }>;
}

const FitnessDataScreen = () => {
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

  const getBMIChartData = (): ChartData => {
    switch (selectedPeriod) {
      case 'day':
        return {
          labels: ['08:00', '12:00', '16:00', '20:00'],
          datasets: [{
            data: [22.5, 22.5, 22.4, 22.5],
            borderColor: '#02f2ce',
            backgroundColor: 'rgba(2, 242, 206, 0.1)'
          }]
        };
      case 'week':
        return {
          labels: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
          datasets: [{
            data: [22.8, 22.7, 22.6, 22.5, 22.5, 22.4, 22.5],
            borderColor: '#02f2ce',
            backgroundColor: 'rgba(2, 242, 206, 0.1)'
          }]
        };
      case 'month':
        return {
          labels: ['第1周', '第2周', '第3周', '第4周'],
          datasets: [{
            data: [23.2, 22.9, 22.6, 22.5],
            borderColor: '#02f2ce',
            backgroundColor: 'rgba(2, 242, 206, 0.1)'
          }]
        };
      default:
        return { labels: [], datasets: [] };
    }
  };

  const getWeightChartData = (): ChartData => {
    switch (selectedPeriod) {
      case 'day':
        return {
          labels: ['08:00', '12:00', '16:00', '20:00'],
          datasets: [{
            data: [68.5, 68.4, 68.3, 68.5],
            borderColor: '#00f289',
            backgroundColor: 'rgba(0, 242, 137, 0.1)'
          }]
        };
      case 'week':
        return {
          labels: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
          datasets: [{
            data: [69.2, 69.0, 68.8, 68.6, 68.5, 68.4, 68.5],
            borderColor: '#00f289',
            backgroundColor: 'rgba(0, 242, 137, 0.1)'
          }]
        };
      case 'month':
        return {
          labels: ['第1周', '第2周', '第3周', '第4周'],
          datasets: [{
            data: [69.8, 69.2, 68.9, 68.5],
            borderColor: '#00f289',
            backgroundColor: 'rgba(0, 242, 137, 0.1)'
          }]
        };
      default:
        return { labels: [], datasets: [] };
    }
  };

  const overviewData = [
    {
      id: 'avg-weight',
      icon: 'weight-scale',
      iconColor: '#00f289',
      value: '68.7',
      label: '平均体重(kg)',
      change: '↓ 0.2kg',
      changeColor: '#10b981'
    },
    {
      id: 'bmi-range',
      icon: 'chart-line',
      iconColor: '#02f2ce',
      value: '21.8-23.2',
      label: 'BMI范围',
      change: '正常',
      changeColor: '#10b981'
    },
    {
      id: 'record-days',
      icon: 'calendar-check',
      iconColor: '#0296f2e6',
      value: '28',
      label: '本月记录天数',
      change: '+3天',
      changeColor: '#10b981'
    },
    {
      id: 'goal-rate',
      icon: 'bullseye',
      iconColor: '#eab308',
      value: '85%',
      label: '目标达成率',
      change: '+5%',
      changeColor: '#10b981'
    }
  ];

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
        <Text style={styles.headerTitle}>健身数据</Text>
        <View style={styles.headerPlaceholder} />
      </View>

      <ScrollView 
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* 周期选择器 */}
        <PeriodSelector
          selectedPeriod={selectedPeriod}
          onPeriodChange={handlePeriodChange}
        />

        {/* BMI指数图表 */}
        <ChartCard
          title="BMI指数趋势"
          currentValue="22.5"
          status="正常"
          statusType="normal"
          chartData={getBMIChartData()}
          chartType="line"
        />

        {/* 体重变化图表 */}
        <ChartCard
          title="体重变化"
          currentValue="68.5"
          unit="kg"
          change="-0.3kg 本周"
          changeType="decrease"
          chartData={getWeightChartData()}
          chartType="line"
        />

        {/* 数据概览 */}
        <View style={styles.overviewSection}>
          <Text style={styles.overviewTitle}>数据概览</Text>
          <View style={styles.overviewGrid}>
            {overviewData.map((item) => (
              <DataOverviewCard
                key={item.id}
                icon={item.icon}
                iconColor={item.iconColor}
                value={item.value}
                label={item.label}
                change={item.change}
                changeColor={item.changeColor}
              />
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default FitnessDataScreen;

