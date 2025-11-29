

import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { FontAwesome6 } from '@expo/vector-icons';
import styles from './styles';

interface DataOverviewCardProps {
  icon: string;
  iconColor: string;
  value: string;
  label: string;
  change: string;
  changeColor: string;
}

const DataOverviewCard: React.FC<DataOverviewCardProps> = ({
  icon,
  iconColor,
  value,
  label,
  change,
  changeColor,
}) => {
  const handleCardPress = () => {
    console.log('点击数据卡片:', label);
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={handleCardPress}
      activeOpacity={0.7}
    >
      <View style={styles.header}>
        <View style={[styles.iconContainer, { backgroundColor: `${iconColor}1A` }]}>
          <FontAwesome6 name={icon} size={16} color={iconColor} />
        </View>
        <View style={[styles.changeBadge, { backgroundColor: '#f0fdf4' }]}>
          <Text style={[styles.changeText, { color: changeColor }]}>{change}</Text>
        </View>
      </View>
      <Text style={styles.value}>{value}</Text>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

export default DataOverviewCard;

