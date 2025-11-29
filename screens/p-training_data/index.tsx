

import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { FontAwesome6 } from '@expo/vector-icons';
import styles from './styles';
import PeriodSelector from './components/PeriodSelector';
import DataCard from './components/DataCard';
import FrequencyChart from './components/FrequencyChart';
import DurationTrend from './components/DurationTrend';
import ExerciseVolume from './components/ExerciseVolume';
import StrengthProgress from './components/StrengthProgress';

type PeriodType = 'day' | 'week' | 'month';

const TrainingDataScreen = () => {
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
        <Text style={styles.headerTitle}>训练数据</Text>
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
        <View style={styles.overviewSection}>
          <View style={styles.dataGrid}>
            <DataCard
              icon="calendar-check"
              value="28"
              label="总训练天数"
              progress={75}
              iconColor="#02f2ce"
            />
            <DataCard
              icon="clock"
              value="45"
              label="平均训练时长(分钟)"
              progress={90}
              iconColor="#00f289"
            />
            <DataCard
              icon="dumbbell"
              value="12.5"
              label="总训练量(吨)"
              progress={85}
              iconColor="#0296f2e6"
            />
            <DataCard
              icon="bullseye"
              value="89%"
              label="计划完成率"
              progress={80}
              iconColor="#ff6b6b"
            />
          </View>
        </View>

        {/* 训练频率图表 */}
        <FrequencyChart />

        {/* 训练时长趋势 */}
        <DurationTrend />

        {/* 项目训练量 */}
        <ExerciseVolume />

        {/* 力量进步曲线 */}
        <StrengthProgress />
      </ScrollView>
    </SafeAreaView>
  );
};

export default TrainingDataScreen;

