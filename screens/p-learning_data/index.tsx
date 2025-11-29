

import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { FontAwesome6 } from '@expo/vector-icons';
import styles from './styles';
import PeriodSelector from './components/PeriodSelector';
import StudyTimeChart from './components/StudyTimeChart';
import VocabularyChart from './components/VocabularyChart';
import ProgressChart from './components/ProgressChart';
import DataCard from './components/DataCard';

type PeriodType = 'day' | 'week' | 'month';

interface DataOverview {
  totalStudyTime: string;
  totalVocabulary: string;
  avgGrammar: string;
  avgListening: string;
}

const LearningDataScreen: React.FC = () => {
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

  const handleDataCardPress = (cardType: string) => {
    console.log(`查看${cardType}详情`);
  };

  const getDataOverview = (): DataOverview => {
    switch (selectedPeriod) {
      case 'day':
        return {
          totalStudyTime: '2.8小时',
          totalVocabulary: '35个',
          avgGrammar: '89%',
          avgListening: '24分'
        };
      case 'week':
        return {
          totalStudyTime: '128小时',
          totalVocabulary: '1,245个',
          avgGrammar: '85%',
          avgListening: '22.5分'
        };
      case 'month':
        return {
          totalStudyTime: '128小时',
          totalVocabulary: '1,245个',
          avgGrammar: '82%',
          avgListening: '21.8分'
        };
      default:
        return {
          totalStudyTime: '128小时',
          totalVocabulary: '1,245个',
          avgGrammar: '85%',
          avgListening: '22.5分'
        };
    }
  };

  const dataOverview = getDataOverview();

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
        <Text style={styles.headerTitle}>学习数据</Text>
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

        {/* 学习时长趋势图 */}
        <StudyTimeChart selectedPeriod={selectedPeriod} />

        {/* 掌握单词量 */}
        <VocabularyChart selectedPeriod={selectedPeriod} />

        {/* 语法正确率 */}
        <ProgressChart
          title="语法正确率"
          value={`${selectedPeriod === 'day' ? '今日: ' : selectedPeriod === 'week' ? '本周平均: ' : '本月平均: '}${dataOverview.avgGrammar}`}
          data={[
            { label: '四级语法', value: 88, displayValue: '88%' },
            { label: '六级语法', value: 82, displayValue: '82%' }
          ]}
        />

        {/* 听力得分 */}
        <ProgressChart
          title="听力得分"
          value={`${selectedPeriod === 'day' ? '今日: ' : selectedPeriod === 'week' ? '本周平均: ' : '本月平均: '}${dataOverview.avgListening}`}
          data={[
            { label: '四级听力', value: 78, displayValue: '23.5分' },
            { label: '六级听力', value: 72, displayValue: '21.5分' }
          ]}
        />

        {/* 数据概览 */}
        <View style={styles.dataOverviewSection}>
          <Text style={styles.sectionTitle}>数据概览</Text>
          <View style={styles.dataCardsGrid}>
            <DataCard
              icon="clock"
              iconColor="#02f2ce"
              iconBgColor="rgba(2, 242, 206, 0.1)"
              title="总学习时长"
              value={dataOverview.totalStudyTime}
              valueColor="#02f2ce"
              onPress={() => handleDataCardPress('总学习时长')}
            />
            <DataCard
              icon="book"
              iconColor="#00f289"
              iconBgColor="rgba(0, 242, 137, 0.1)"
              title="掌握单词"
              value={dataOverview.totalVocabulary}
              valueColor="#00f289"
              onPress={() => handleDataCardPress('掌握单词')}
            />
            <DataCard
              icon="check-circle"
              iconColor="#0296f2e6"
              iconBgColor="rgba(2, 150, 242, 0.1)"
              title="语法正确率"
              value={dataOverview.avgGrammar}
              valueColor="#0296f2e6"
              onPress={() => handleDataCardPress('语法正确率')}
            />
            <DataCard
              icon="headphones"
              iconColor="#f59e0b"
              iconBgColor="rgba(245, 158, 11, 0.1)"
              title="听力平均分"
              value={dataOverview.avgListening}
              valueColor="#f59e0b"
              onPress={() => handleDataCardPress('听力平均分')}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LearningDataScreen;

