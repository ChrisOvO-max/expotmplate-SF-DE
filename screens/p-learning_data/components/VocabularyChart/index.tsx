

import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

type PeriodType = 'day' | 'week' | 'month';

interface VocabularyChartProps {
  selectedPeriod: PeriodType;
}

const VocabularyChart: React.FC<VocabularyChartProps> = ({ selectedPeriod }) => {
  const getChartValue = (): string => {
    switch (selectedPeriod) {
      case 'day':
        return '今日: 35个';
      case 'week':
        return '总计: 1,245个';
      case 'month':
        return '总计: 1,245个';
      default:
        return '总计: 1,245个';
    }
  };

  const getBarHeights = (): number[] => {
    switch (selectedPeriod) {
      case 'day':
        return [0, 0, 0, 100, 0, 0, 0]; // 今日数据 - 单根柱子
      case 'week':
        return [60, 75, 50, 90, 80, 95, 70]; // 周数据
      case 'month':
        return [40, 60, 80, 90, 70, 85, 95]; // 月数据
      default:
        return [60, 75, 50, 90, 80, 95, 70];
    }
  };

  const weekLabels = ['周一', '周二', '周三', '周四', '周五', '周六', '周日'];
  const barHeights = getBarHeights();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>掌握单词量</Text>
        <Text style={styles.value}>{getChartValue()}</Text>
      </View>
      <View style={styles.chartContainer}>
        <View style={styles.barChart}>
          {barHeights.map((height, index) => (
            <View
              key={index}
              style={[
                styles.bar,
                {
                  height: `${height}%`,
                  opacity: selectedPeriod === 'day' ? (height > 0 ? 1 : 0.3) : 1,
                },
              ]}
            />
          ))}
        </View>
      </View>
      <View style={styles.labelsContainer}>
        {weekLabels.map((label, index) => (
          <Text key={index} style={styles.label}>
            {label}
          </Text>
        ))}
      </View>
    </View>
  );
};

export default VocabularyChart;

