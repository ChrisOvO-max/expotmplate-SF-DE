

import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { FontAwesome6 } from '@expo/vector-icons';
import styles from './styles';

interface PlanData {
  id: string;
  title: string;
  time: string;
  icon: string;
  iconColor: string;
  status: 'completed' | 'pending';
  progress: number;
  progressText: string;
}

interface PlanItemProps {
  plan: PlanData;
  onPress: () => void;
}

const PlanItem: React.FC<PlanItemProps> = ({ plan, onPress }) => {
  const getProgressBarColor = () => {
    if (plan.status === 'completed') {
      return plan.iconColor;
    }
    return '#d1d5db';
  };

  const getStatusText = () => {
    return plan.status === 'completed' ? '已完成' : '待完成';
  };

  const getStatusBadgeStyle = () => {
    return plan.status === 'completed' ? styles.statusBadgeCompleted : styles.statusBadgePending;
  };

  const getStatusTextStyle = () => {
    return plan.status === 'completed' ? styles.statusTextCompleted : styles.statusTextPending;
  };

  return (
    <TouchableOpacity
      style={styles.planItem}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <View style={styles.planHeader}>
        <View style={styles.planInfo}>
          <View style={[styles.iconContainer, { backgroundColor: `${plan.iconColor}1A` }]}>
            <FontAwesome6 
              name={plan.icon as any} 
              size={16} 
              color={plan.iconColor} 
            />
          </View>
          <View style={styles.planDetails}>
            <Text style={styles.planTitle}>{plan.title}</Text>
            <Text style={styles.planTime}>{plan.time}</Text>
          </View>
        </View>
        <View style={styles.planActions}>
          <View style={getStatusBadgeStyle()}>
            <Text style={getStatusTextStyle()}>{getStatusText()}</Text>
          </View>
          <FontAwesome6 name="chevron-right" size={12} color="#9ca3af" />
        </View>
      </View>
      
      <View style={styles.progressContainer}>
        <View style={styles.progressBar}>
          <View 
            style={[
              styles.progressFill, 
              { 
                width: `${plan.progress}%`,
                backgroundColor: getProgressBarColor(),
              }
            ]} 
          />
        </View>
        <Text style={styles.progressText}>{plan.progressText}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PlanItem;

