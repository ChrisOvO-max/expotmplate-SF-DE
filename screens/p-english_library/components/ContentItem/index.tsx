

import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { FontAwesome6 } from '@expo/vector-icons';
import { ContentItemProps } from '../../types';
import styles from './styles';

const ContentItem: React.FC<ContentItemProps> = ({ data, onPress }) => {
  const getTypeTagStyle = (type: string) => {
    switch (type) {
      case 'vocabulary':
        return styles.typeVocabulary;
      case 'grammar':
        return styles.typeGrammar;
      case 'listening':
        return styles.typeListening;
      case 'reading':
        return styles.typeReading;
      case 'writing':
        return styles.typeWriting;
      default:
        return styles.typeVocabulary;
    }
  };

  const getTypeTagText = (type: string) => {
    switch (type) {
      case 'vocabulary':
        return '词汇';
      case 'grammar':
        return '语法';
      case 'listening':
        return '听力';
      case 'reading':
        return '阅读';
      case 'writing':
        return '写作';
      default:
        return '词汇';
    }
  };

  const getDifficultyTagStyle = (difficulty: string) => {
    switch (difficulty) {
      case 'easy':
        return styles.difficultyEasy;
      case 'medium':
        return styles.difficultyMedium;
      case 'hard':
        return styles.difficultyHard;
      default:
        return styles.difficultyEasy;
    }
  };

  const getDifficultyTagText = (difficulty: string) => {
    switch (difficulty) {
      case 'easy':
        return '简单';
      case 'medium':
        return '中等';
      case 'hard':
        return '困难';
      default:
        return '简单';
    }
  };

  const getProgressText = (progress: number) => {
    if (progress === 0) {
      return '未开始';
    }
    return `已完成 ${progress}%`;
  };

  const getProgressIcon = (progress: number) => {
    if (progress === 0) {
      return 'circle';
    }
    return 'check-circle';
  };

  const getProgressIconColor = (progress: number) => {
    if (progress === 0) {
      return '#d1d5db';
    }
    return '#10b981';
  };

  return (
    <TouchableOpacity 
      style={styles.container} 
      onPress={onPress}
      activeOpacity={0.7}
    >
      <View style={styles.contentHeader}>
        <View style={styles.contentInfo}>
          <View style={[styles.iconContainer, { backgroundColor: `${data.iconColor}1A` }]}>
            <FontAwesome6 name={data.icon} size={18} color={data.iconColor} />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.title}>{data.title}</Text>
            <Text style={styles.description}>{data.description}</Text>
          </View>
        </View>
        <View style={styles.tagsContainer}>
          <View style={[styles.typeTag, getTypeTagStyle(data.type)]}>
            <Text style={styles.typeTagText}>{getTypeTagText(data.type)}</Text>
          </View>
          <View style={[styles.difficultyTag, getDifficultyTagStyle(data.difficulty)]}>
            <Text style={styles.difficultyTagText}>{getDifficultyTagText(data.difficulty)}</Text>
          </View>
        </View>
      </View>
      
      <View style={styles.contentFooter}>
        <View style={styles.durationContainer}>
          <FontAwesome6 name="clock" size={12} color="#6b7280" />
          <Text style={styles.durationText}>预计学习 {data.duration} 分钟</Text>
        </View>
        <View style={styles.progressContainer}>
          <FontAwesome6 
            name={getProgressIcon(data.progress)} 
            size={12} 
            color={getProgressIconColor(data.progress)} 
          />
          <Text style={styles.progressText}>{getProgressText(data.progress)}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ContentItem;

