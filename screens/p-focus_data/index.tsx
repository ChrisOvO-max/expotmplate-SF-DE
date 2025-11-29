

import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { FontAwesome6 } from '@expo/vector-icons';
import styles from './styles';
import PeriodSelector from './components/PeriodSelector';
import StatCard from './components/StatCard';
import TomatoChart from './components/TomatoChart';
import FocusTimeChart from './components/FocusTimeChart';
import DataItem from './components/DataItem';

type PeriodType = 'day' | 'week' | 'month';

interface StatData {
  tomatoes: number;
  focusTime: number;
  tomatoesChange: string;
  focusTimeChange: string;
}

interface ChartData {
  tomatoHeights: number[];
  focusPoints: number[];
}

const FocusDataScreen: React.FC = () => {
  const router = useRouter();
  const [selectedPeriod, setSelectedPeriod] = useState<PeriodType>('day');

  const handleBackPress = () => {
    if (router.canGoBack()) {
      router.back();
    }
  };

  const handlePeriodChange = (period: PeriodType) => {
    setSelectedPeriod(period);
  };

  const getStatData = (): StatData => {
    switch (selectedPeriod) {
      case 'day':
        return {
          tomatoes: 8,
          focusTime: 200,
          tomatoesChange: '+2',
          focusTimeChange: '+30分钟'
        };
      case 'week':
        return {
          tomatoes: 45,
          focusTime: 1125,
          tomatoesChange: '+8',
          focusTimeChange: '+2小时15分钟'
        };
      case 'month':
        return {
          tomatoes: 168,
          focusTime: 4200,
          tomatoesChange: '+32',
          focusTimeChange: '+8小时30分钟'
        };
      default:
        return {
          tomatoes: 8,
          focusTime: 200,
          tomatoesChange: '+2',
          focusTimeChange: '+30分钟'
        };
    }
  };

  const getChartData = (): ChartData => {
    switch (selectedPeriod) {
      case 'day':
        return {
          tomatoHeights: [60, 80, 40, 100, 70, 50, 90],
          focusPoints: [80, 60, 90, 50, 70, 40, 60]
        };
      case 'week':
        return {
          tomatoHeights: [70, 85, 60, 90, 75, 80, 95],
          focusPoints: [60, 75, 50, 85, 65, 70, 80]
        };
      case 'month':
        return {
          tomatoHeights: [80, 85, 90, 75, 80, 95, 90],
          focusPoints: [70, 75, 80, 65, 70, 85, 80]
        };
      default:
        return {
          tomatoHeights: [60, 80, 40, 100, 70, 50, 90],
          focusPoints: [80, 60, 90, 50, 70, 40, 60]
        };
    }
  };

  const getChartLabels = (): string[] => {
    switch (selectedPeriod) {
      case 'day':
        return ['09:00', '10:00', '14:00', '15:00', '16:00', '19:00', '20:00'];
      case 'week':
        return ['周一', '周二', '周三', '周四', '周五', '周六', '周日'];
      case 'month':
        return ['第1周', '第2周', '第3周', '第4周', '第5周'];
      default:
        return ['09:00', '10:00', '14:00', '15:00', '16:00', '19:00', '20:00'];
    }
  };

  const statData = getStatData();
  const chartData = getChartData();
  const chartLabels = getChartLabels();

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
        <Text style={styles.headerTitle}>专注数据</Text>
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

        {/* 数据概览 */}
        <View style={styles.statsOverview}>
          <View style={styles.statsGrid}>
            <StatCard
              icon="clock"
              iconColor="#02f2ce"
              value={statData.tomatoes.toString()}
              label="完成番茄数"
              change={statData.tomatoesChange}
            />
            <StatCard
              icon="hourglass-half"
              iconColor="#00f289"
              value={statData.focusTime.toString()}
              label="专注时长(分钟)"
              change={statData.focusTimeChange}
            />
          </View>
        </View>

        {/* 番茄数量图表 */}
        <View style={styles.chartSection}>
          <View style={styles.chartHeader}>
            <Text style={styles.chartTitle}>番茄钟完成数量</Text>
            <Text style={styles.chartUnit}>个</Text>
          </View>
          <TomatoChart 
            data={chartData.tomatoHeights}
            labels={chartLabels}
          />
          <View style={styles.chartFooter}>
            <Text style={styles.chartFooterText}>时间段</Text>
            <Text style={styles.chartFooterText}>平均每小时完成 1.1 个番茄钟</Text>
          </View>
        </View>

        {/* 专注时长趋势图 */}
        <View style={styles.chartSection}>
          <View style={styles.chartHeader}>
            <Text style={styles.chartTitle}>专注时长趋势</Text>
            <Text style={styles.chartUnit}>分钟</Text>
          </View>
          <FocusTimeChart data={chartData.focusPoints} />
          <View style={styles.chartFooter}>
            <Text style={styles.chartFooterText}>时间</Text>
            <Text style={styles.chartFooterText}>趋势向上，平均专注时长稳步提升</Text>
          </View>
        </View>

        {/* 详细数据 */}
        <View style={styles.detailedDataSection}>
          <Text style={styles.detailedDataTitle}>详细数据</Text>
          <View style={styles.detailedDataList}>
            <DataItem
              icon="chart-line"
              iconColor="#02f2ce"
              title="平均专注时长"
              subtitle="每次番茄钟"
              value="25分钟"
              status="标准时长"
              statusColor="#10b981"
            />
            <DataItem
              icon="bullseye"
              iconColor="#00f289"
              title="专注效率"
              subtitle="完成率"
              value="92%"
              status="优秀"
              statusColor="#10b981"
            />
            <DataItem
              icon="clock"
              iconColor="#0296f2e6"
              title="最长专注时间"
              subtitle="单次连续"
              value="4小时"
              status="非常出色"
              statusColor="#10b981"
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default FocusDataScreen;

