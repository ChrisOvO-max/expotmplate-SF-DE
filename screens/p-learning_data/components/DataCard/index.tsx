

import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { FontAwesome6 } from '@expo/vector-icons';
import styles from './styles';

interface DataCardProps {
  icon: string;
  iconColor: string;
  iconBgColor: string;
  title: string;
  value: string;
  valueColor: string;
  onPress: () => void;
}

const DataCard: React.FC<DataCardProps> = ({
  icon,
  iconColor,
  iconBgColor,
  title,
  value,
  valueColor,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <View style={styles.content}>
        <View style={[styles.iconContainer, { backgroundColor: iconBgColor }]}>
          <FontAwesome6 name={icon} size={18} color={iconColor} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={[styles.value, { color: valueColor }]}>{value}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default DataCard;

