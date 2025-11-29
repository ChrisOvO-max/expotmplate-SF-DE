

import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { FontAwesome6 } from '@expo/vector-icons';
import styles from './styles';

interface SettingItemProps {
  icon: string;
  iconColor: string;
  iconBackgroundColor: string;
  title: string;
  subtitle: string;
  rightText?: string;
  onPress: () => void;
}

const SettingItem: React.FC<SettingItemProps> = ({
  icon,
  iconColor,
  iconBackgroundColor,
  title,
  subtitle,
  rightText,
  onPress,
}) => {
  return (
    <TouchableOpacity 
      style={styles.container} 
      onPress={onPress}
      activeOpacity={0.7}
    >
      <View style={styles.leftContent}>
        <View style={[styles.iconContainer, { backgroundColor: iconBackgroundColor }]}>
          <FontAwesome6 name={icon} size={16} color={iconColor} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
      </View>
      <View style={styles.rightContent}>
        {rightText && <Text style={styles.rightText}>{rightText}</Text>}
        <FontAwesome6 name="chevron-right" size={14} color="#6b7280" />
      </View>
    </TouchableOpacity>
  );
};

export default SettingItem;

