

import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

interface ProgressItem {
  label: string;
  value: number;
  displayValue: string;
}

interface ProgressChartProps {
  title: string;
  value: string;
  data: ProgressItem[];
}

const ProgressChart: React.FC<ProgressChartProps> = ({ title, value, data }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.value}>{value}</Text>
      </View>
      <View style={styles.progressContainer}>
        {data.map((item, index) => (
          <View key={index} style={styles.progressItem}>
            <View style={styles.progressHeader}>
              <Text style={styles.progressLabel}>{item.label}</Text>
              <Text style={styles.progressValue}>{item.displayValue}</Text>
            </View>
            <View style={styles.progressBarContainer}>
              <View
                style={[
                  styles.progressBar,
                  { width: `${item.value}%` },
                ]}
              />
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

export default ProgressChart;

