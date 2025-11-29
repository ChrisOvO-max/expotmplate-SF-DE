

import React from 'react';
import { View, Text } from 'react-native';
import Svg, { Polyline, Circle, Defs, LinearGradient, Stop } from 'react-native-svg';
import styles from './styles';

const DurationTrend: React.FC = () => {
  const trendPoints = [
    { x: 20, y: 150 },
    { x: 60, y: 120 },
    { x: 100, y: 90 },
    { x: 140, y: 110 },
    { x: 180, y: 80 },
    { x: 220, y: 60 },
    { x: 260, y: 70 },
  ];

  const pointsString = trendPoints
    .map(point => `${point.x},${point.y}`)
    .join(' ');

  const weekLabels = ['第1周', '第2周', '第3周', '第4周'];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>训练时长趋势</Text>
      <View style={styles.chartContainer}>
        <Svg width="100%" height="100%" viewBox="0 0 300 200">
          <Defs>
            <LinearGradient id="trendGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <Stop offset="0%" stopColor="#02f2ce" stopOpacity="0.3" />
              <Stop offset="100%" stopColor="#02f2ce" stopOpacity="0" />
            </LinearGradient>
          </Defs>
          <Polyline
            fill="url(#trendGradient)"
            stroke="#02f2ce"
            strokeWidth="3"
            points={pointsString}
          />
          {trendPoints.map((point, index) => (
            <Circle
              key={index}
              cx={point.x}
              cy={point.y}
              r="4"
              fill="#02f2ce"
            />
          ))}
        </Svg>
        <View style={styles.labelContainer}>
          {weekLabels.map((label, index) => (
            <Text key={index} style={styles.weekLabel}>
              {label}
            </Text>
          ))}
        </View>
      </View>
    </View>
  );
};

export default DurationTrend;

