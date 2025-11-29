

import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const StrengthProgress: React.FC = () => {
  const strengthData = [
    {
      name: '最大卧推',
      current: '当前 65kg',
      target: '目标 80kg',
      progress: 81,
      gradientColors: ['#02f2ce', '#00f289'],
    },
    {
      name: '最大硬拉',
      current: '当前 85kg',
      target: '目标 120kg',
      progress: 71,
      gradientColors: ['#00f289', '#0296f2e6'],
    },
    {
      name: '最大深蹲',
      current: '当前 75kg',
      target: '目标 100kg',
      progress: 75,
      gradientColors: ['#0296f2e6', '#02f2ce'],
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>力量进步曲线</Text>
      <View style={styles.progressList}>
        {strengthData.map((item, index) => (
          <View key={index} style={styles.progressItem}>
            <View style={styles.progressHeader}>
              <Text style={styles.progressName}>{item.name}</Text>
              <Text style={styles.currentValue}>{item.current}</Text>
            </View>
            <View style={styles.progressBarContainer}>
              <View 
                style={[
                  styles.progressBar, 
                  { 
                    width: `${item.progress}%`,
                    backgroundColor: item.gradientColors[0],
                  }
                ]} 
              />
            </View>
            <Text style={styles.targetValue}>{item.target}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default StrengthProgress;

