

import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { FontAwesome6 } from '@expo/vector-icons';
import styles from './styles';

interface StatCardProps {
  icon: string;
  iconColor: string;
  value: string;
  label: string;
  change: string;
}

const StatCard: React.FC<StatCardProps> = ({
  icon,
  iconColor,
  value,
  label,
  change,
}) => {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.7}>
      <View style={styles.header}>
        <View style={[styles.iconContainer, { backgroundColor: `${iconColor}1A` }]}>
          <FontAwesome6 name={icon} size={14} color={iconColor} />
        </View>
        <Text style={styles.changeText}>{change}</Text>
      </View>
      <Text style={styles.valueText}>{value}</Text>
      <Text style={styles.labelText}>{label}</Text>
    </TouchableOpacity>
  );
};

export default StatCard;

