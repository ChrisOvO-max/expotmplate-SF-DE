

import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { FontAwesome6 } from '@expo/vector-icons';
import styles from './styles';

interface TomatoItemProps {
  id: string;
  title: string;
  time: string;
  duration: string;
  status: string;
  icon: string;
}

const TomatoItem: React.FC<TomatoItemProps> = ({
  id,
  title,
  time,
  duration,
  status,
  icon,
}) => {
  const handleItemPress = () => {
    console.log('点击番茄记录项:', id);
    // 可以添加查看详情的逻辑
  };

  return (
    <TouchableOpacity 
      style={styles.container} 
      onPress={handleItemPress}
      activeOpacity={0.7}
    >
      <View style={styles.content}>
        <View style={styles.leftSection}>
          <View style={styles.iconContainer}>
            <FontAwesome6 name={icon} size={16} color="#02f2ce" />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.time}>{time}</Text>
          </View>
        </View>
        <View style={styles.rightSection}>
          <Text style={styles.duration}>{duration}</Text>
          <Text style={styles.status}>{status}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default TomatoItem;

