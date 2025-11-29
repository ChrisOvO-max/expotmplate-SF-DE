

import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { FontAwesome6 } from '@expo/vector-icons';
import ToggleSwitch from '../ToggleSwitch';
import styles from './styles';

interface NotificationItemProps {
  title: string;
  description: string;
  icon: string;
  iconColor: string;
  iconBackgroundColor: string;
  isEnabled: boolean;
  onToggle: (isEnabled: boolean) => void;
  isDisabled?: boolean;
}

const NotificationItem: React.FC<NotificationItemProps> = ({
  title,
  description,
  icon,
  iconColor,
  iconBackgroundColor,
  isEnabled,
  onToggle,
  isDisabled = false,
}) => {
  const handlePress = () => {
    if (!isDisabled) {
      onToggle(!isEnabled);
    }
  };

  return (
    <TouchableOpacity
      style={[styles.container, isDisabled && styles.disabledContainer]}
      onPress={handlePress}
      activeOpacity={0.7}
      disabled={isDisabled}
    >
      <View style={styles.content}>
        <View style={styles.leftSection}>
          <View style={[styles.iconContainer, { backgroundColor: iconBackgroundColor }]}>
            <FontAwesome6 name={icon} size={18} color={iconColor} />
          </View>
          <View style={styles.textContainer}>
            <Text style={[styles.title, isDisabled && styles.disabledTitle]}>{title}</Text>
            <Text style={[styles.description, isDisabled && styles.disabledDescription]}>
              {description}
            </Text>
          </View>
        </View>
        <ToggleSwitch
          isEnabled={isEnabled}
          onToggle={onToggle}
          isDisabled={isDisabled}
        />
      </View>
    </TouchableOpacity>
  );
};

export default NotificationItem;

