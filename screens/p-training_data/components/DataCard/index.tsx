

import React from 'react';
import { View, Text } from 'react-native';
import { FontAwesome6 } from '@expo/vector-icons';
import Svg, { Circle } from 'react-native-svg';
import styles from './styles';

interface DataCardProps {
  icon: string;
  value: string;
  label: string;
  progress: number;
  iconColor: string;
}

const DataCard: React.FC<DataCardProps> = ({
  icon,
  value,
  label,
  progress,
  iconColor,
}) => {
  const radius = 32;
  const strokeWidth = 4;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Svg width={64} height={64} style={styles.progressRing}>
          <Circle
            cx={32}
            cy={32}
            r={radius}
            stroke="#f3f4f6"
            strokeWidth={strokeWidth}
            fill="none"
          />
          <Circle
            cx={32}
            cy={32}
            r={radius}
            stroke={iconColor}
            strokeWidth={strokeWidth}
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            transform="rotate(-90 32 32)"
          />
        </Svg>
        <View style={styles.iconWrapper}>
          <FontAwesome6 name={icon} size={20} color={iconColor} />
        </View>
      </View>
      <Text style={styles.value}>{value}</Text>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
};

export default DataCard;

