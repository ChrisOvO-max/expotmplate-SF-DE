

import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './styles';

interface TomatoChartProps {
  data: number[];
  labels: string[];
}

const TomatoChart: React.FC<TomatoChartProps> = ({ data, labels }) => {
  const handleBarPress = (index: number) => {
    console.log('点击图表柱子:', index);
  };

  return (
    <View style={styles.container}>
      <View style={styles.chartContainer}>
        {data.map((height, index) => (
          <View key={index} style={styles.barWrapper}>
            <TouchableOpacity
              style={styles.barTouchable}
              onPress={() => handleBarPress(index)}
              activeOpacity={0.8}
            >
              <LinearGradient
                colors={['#02f2ce', '#00f289']}
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
                style={[styles.bar, { height: `${height}%` }]}
              />
            </TouchableOpacity>
            <Text style={styles.label}>{labels[index]}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default TomatoChart;

