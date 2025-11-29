

import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

type PeriodType = 'day' | 'week' | 'month';

interface StudyTimeChartProps {
  selectedPeriod: PeriodType;
}

const StudyTimeChart: React.FC<StudyTimeChartProps> = ({ selectedPeriod }) => {
  const getChartValue = (): string => {
    switch (selectedPeriod) {
      case 'day':
        return '今日: 2.8小时';
      case 'week':
        return '本周平均: 2.5小时';
      case 'month':
        return '本月平均: 2.2小时';
      default:
        return '本周平均: 2.5小时';
    }
  };

  const weekLabels = ['周一', '周二', '周三', '周四', '周五', '周六', '周日'];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>学习时长趋势</Text>
        <Text style={styles.value}>{getChartValue()}</Text>
      </View>
      <View style={styles.chartContainer}>
        <View style={styles.lineChart} />
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

export default StudyTimeChart;

