

import React from 'react';
import { View, Text } from 'react-native';
import { FontAwesome6 } from '@expo/vector-icons';
import styles from './styles';

interface SettingItemProps {
  icon: string;
  iconColor: string;
  iconBackgroundColor: string;
  title: string;
  subtitle: string;
  rightComponent?: React.ReactNode;
  bottomComponent?: React.ReactNode;
}

const SettingItem: React.FC<SettingItemProps> = ({
  icon,
  iconColor,
  iconBackgroundColor,
  title,
  subtitle,
  rightComponent,
  bottomComponent,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.leftSection}>
          <View style={[styles.iconContainer, { backgroundColor: iconBackgroundColor }]}>
            <FontAwesome6 name={icon} size={18} color={iconColor} />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subtitle}>{subtitle}</Text>
          </View>
        </View>
        {rightComponent && (
          <View style={styles.rightSection}>
            {rightComponent}
          </View>
        )}
      </View>
      {bottomComponent && (
        <View style={styles.bottomSection}>
          {bottomComponent}
        </View>
      )}
    </View>
  );
};

export default SettingItem;

