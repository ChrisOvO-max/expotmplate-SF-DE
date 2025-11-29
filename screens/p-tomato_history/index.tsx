

import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { FontAwesome6 } from '@expo/vector-icons';
import styles from './styles';
import PeriodTabs from './components/PeriodTabs';
import StatsOverview from './components/StatsOverview';
import HistoryList from './components/HistoryList';

type PeriodType = 'day' | 'week' | 'month';

const TomatoHistoryScreen = () => {
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

  return (
    <SafeAreaView style={styles.container}>
      {/* 顶部导航 */}
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton} 
          onPress={handleBackPress}
          activeOpacity={0.7}
        >
          <FontAwesome6 name="arrow-left" size={18} color="#6b7280" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>番茄记录</Text>
        <View style={styles.headerPlaceholder} />
      </View>

      <ScrollView 
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* 统计概览 */}
        <View style={styles.statsSection}>
          <PeriodTabs 
            selectedPeriod={selectedPeriod}
            onPeriodChange={handlePeriodChange}
          />
          <StatsOverview selectedPeriod={selectedPeriod} />
        </View>

        {/* 历史记录列表 */}
        <View style={styles.historySection}>
          <Text style={styles.historyTitle}>历史记录</Text>
          <HistoryList selectedPeriod={selectedPeriod} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default TomatoHistoryScreen;

