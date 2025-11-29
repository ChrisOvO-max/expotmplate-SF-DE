

import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const FrequencyChart: React.FC = () => {
  const chartData = [
    { day: '周一', height: 60 },
    { day: '周二', height: 80 },
    { day: '周三', height: 40 },
    { day: '周四', height: 90 },
    { day: '周五', height: 70 },
    { day: '周六', height: 50 },
    { day: '周日', height: 30 },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>训练频率</Text>
      <View style={styles.chartContainer}>
        {chartData.map((item, index) => (
          <View key={index} style={styles.barContainer}>
            <View 
              style={[
                styles.bar, 
                { height: `${item.height}%` }
              ]} 
            />
            <Text style={styles.dayLabel}>{item.day}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default FrequencyChart;

