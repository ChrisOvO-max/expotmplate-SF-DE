

import React, { useCallback } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { FontAwesome6 } from '@expo/vector-icons';
import styles from './styles';

interface TrainingItemData {
  id: string;
  title: string;
  description: string;
  category: 'strength' | 'cardio' | 'flexibility' | 'custom';
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  icon: string;
  iconColor: string;
}

interface TrainingItemProps {
  item: TrainingItemData;
  onPress: () => void;
}

const TrainingItem: React.FC<TrainingItemProps> = ({ item, onPress }) => {
  const getCategoryBadgeStyle = useCallback((category: string) => {
    switch (category) {
      case 'strength':
        return styles.categoryBadgeStrength;
      case 'cardio':
        return styles.categoryBadgeCardio;
      case 'flexibility':
        return styles.categoryBadgeFlexibility;
      default:
        return styles.categoryBadgeCustom;
    }
  }, []);

  const getCategoryLabel = useCallback((category: string) => {
    switch (category) {
      case 'strength':
        return '力量';
      case 'cardio':
        return '有氧';
      case 'flexibility':
        return '柔韧性';
      default:
        return '自定义';
    }
  }, []);

  const getDifficultyLabel = useCallback((difficulty: string) => {
    switch (difficulty) {
      case 'beginner':
        return '基础';
      case 'intermediate':
        return '中级';
      case 'advanced':
        return '进阶';
      default:
        return '基础';
    }
  }, []);

  const getIconBackgroundColor = useCallback((iconColor: string) => {
    // 将颜色转换为带透明度的背景色
    return iconColor + '1A'; // 10% 透明度
  }, []);

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <View style={styles.content}>
        <View
          style={[
            styles.iconContainer,
            {
              backgroundColor: getIconBackgroundColor(item.iconColor),
            },
          ]}
        >
          <FontAwesome6
            name={item.icon as any}
            size={18}
            color={item.iconColor}
          />
        </View>
        
        <View style={styles.textContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.description}>{item.description}</Text>
          <View style={styles.badgeContainer}>
            <View
              style={[
                styles.categoryBadge,
                getCategoryBadgeStyle(item.category),
              ]}
            >
              <Text style={styles.categoryBadgeText}>
                {getCategoryLabel(item.category)}
              </Text>
            </View>
            <Text style={styles.difficultyText}>
              {getDifficultyLabel(item.difficulty)}
            </Text>
          </View>
        </View>
        
        <FontAwesome6
          name="chevron-right"
          size={14}
          color="#6b7280"
        />
      </View>
    </TouchableOpacity>
  );
};

export default TrainingItem;

