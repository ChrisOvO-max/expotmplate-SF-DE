

import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const WeekChart: React.FC = () => {
  const weekData = [
    { day: '周一', value: 40 },
    { day: '周二', value: 60 },
    { day: '周三', value: 80 },
    { day: '周四', value: 100 },
    { day: '周五', value: 75 },
    { day: '周六', value: 30 },
    { day: '周日', value: 20 },
  ];

  return (
    <View style={styles.container}>
      {weekData.map((item, index) => (
        <View key={index} style={styles.chartItem}>
          <View 
            style={[
              styles.chartBar, 
              { height: `${item.value}%` }
            ]} 
          />
          <Text style={styles.chartLabel}>{item.day}</Text>
        </View>
      ))}
    </View>
  );
};

export default WeekChart;

