

import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import ProgressBar from '../ProgressBar';
import WeekChart from '../WeekChart';

type PeriodType = 'day' | 'week' | 'month';

interface StatsOverviewProps {
  selectedPeriod: PeriodType;
}

const StatsOverview: React.FC<StatsOverviewProps> = ({ selectedPeriod }) => {
  const renderDayStats = () => (
    <View style={styles.statsCard}>
      <Text style={styles.statsTitle}>今日统计</Text>
      <View style={styles.statsGrid}>
        <View style={styles.statItem}>
          <Text style={styles.statValue}>6</Text>
          <Text style={styles.statLabel}>完成番茄数</Text>
          <ProgressBar progress={75} />
          <Text style={styles.statTarget}>目标: 8个</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={[styles.statValue, styles.statValueSecondary]}>2.5h</Text>
          <Text style={styles.statLabel}>专注时长</Text>
          <ProgressBar progress={83} />
          <Text style={styles.statTarget}>目标: 3h</Text>
        </View>
      </View>
    </View>
  );

  const renderWeekStats = () => (
    <View style={styles.statsCard}>
      <Text style={styles.statsTitle}>本周统计</Text>
      <View style={styles.statsGrid}>
        <View style={styles.statItem}>
          <Text style={styles.statValue}>38</Text>
          <Text style={styles.statLabel}>总番茄数</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={[styles.statValue, styles.statValueSecondary]}>15.8h</Text>
          <Text style={styles.statLabel}>总专注时长</Text>
        </View>
      </View>
      
      <View style={styles.chartSection}>
        <Text style={styles.chartTitle}>每日番茄数</Text>
        <WeekChart />
      </View>
    </View>
  );

  const renderMonthStats = () => (
    <View style={styles.statsCard}>
      <Text style={styles.statsTitle}>本月统计</Text>
      <View style={styles.statsGrid}>
        <View style={styles.statItem}>
          <Text style={styles.statValue}>126</Text>
          <Text style={styles.statLabel}>总番茄数</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={[styles.statValue, styles.statValueSecondary]}>52.5h</Text>
          <Text style={styles.statLabel}>总专注时长</Text>
        </View>
      </View>
      
      <View style={styles.monthlyStatsGrid}>
        <View style={styles.monthlyStatCard}>
          <Text style={styles.monthlyStatLabel}>平均每日</Text>
          <Text style={styles.monthlyStatValue}>4.2个</Text>
        </View>
        <View style={styles.monthlyStatCard}>
          <Text style={styles.monthlyStatLabel}>最长连续</Text>
          <Text style={[styles.monthlyStatValue, styles.monthlyStatValueSecondary]}>12天</Text>
        </View>
      </View>
    </View>
  );

  const renderStats = () => {
    switch (selectedPeriod) {
      case 'day':
        return renderDayStats();
      case 'week':
        return renderWeekStats();
      case 'month':
        return renderMonthStats();
      default:
        return renderDayStats();
    }
  };

  return <View style={styles.container}>{renderStats()}</View>;
};

export default StatsOverview;

