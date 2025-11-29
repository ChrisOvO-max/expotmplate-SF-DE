

import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { FontAwesome6 } from '@expo/vector-icons';
import styles from './styles';

interface DataItemProps {
  icon: string;
  iconColor: string;
  title: string;
  subtitle: string;
  value: string;
  status: string;
  statusColor: string;
}

const DataItem: React.FC<DataItemProps> = ({
  icon,
  iconColor,
  title,
  subtitle,
  value,
  status,
  statusColor,
}) => {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.7}>
      <View style={styles.leftSection}>
        <View style={[styles.iconContainer, { backgroundColor: `${iconColor}1A` }]}>
          <FontAwesome6 name={icon} size={16} color={iconColor} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
      </View>
      <View style={styles.rightSection}>
        <Text style={styles.value}>{value}</Text>
        <Text style={[styles.status, { color: statusColor }]}>{status}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default DataItem;

