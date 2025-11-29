

import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { FontAwesome6 } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './styles';

interface TrainingPlan {
  id: string;
  title: string;
  time: string;
  icon: string;
  iconColor: string;
  iconBgColor: string;
  progress: number;
  status: 'completed' | 'in-progress' | 'pending';
  completedText: string;
}

interface TrainingPlanItemProps {
  plan: TrainingPlan;
  onPress: () => void;
  onStatusToggle: () => void;
}

const TrainingPlanItem: React.FC<TrainingPlanItemProps> = ({
  plan,
  onPress,
  onStatusToggle,
}) => {
  const getStatusIcon = () => {
    switch (plan.status) {
      case 'completed':
        return 'check';
      case 'in-progress':
        return 'play';
      default:
        return 'play';
    }
  };

  const getStatusIconColor = () => {
    switch (plan.status) {
      case 'completed':
        return '#ffffff';
      case 'in-progress':
        return '#0296f2e6';
      default:
        return '#9ca3af';
    }
  };

  const getStatusButtonStyle = () => {
    switch (plan.status) {
      case 'completed':
        return [styles.statusButton, styles.statusButtonCompleted];
      case 'in-progress':
        return [styles.statusButton, styles.statusButtonInProgress];
      default:
        return [styles.statusButton, styles.statusButtonPending];
    }
  };

  return (
    <TouchableOpacity
      style={[
        styles.container,
        plan.status === 'completed' && styles.containerCompleted,
      ]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <View style={styles.content}>
        <View style={styles.header}>
          <View style={styles.titleContainer}>
            <View style={[styles.iconContainer, { backgroundColor: plan.iconBgColor }]}>
              <FontAwesome6 name={plan.icon} size={16} color={plan.iconColor} />
            </View>
            <View style={styles.textContainer}>
              <Text
                style={[
                  styles.title,
                  plan.status === 'completed' && styles.titleCompleted,
                ]}
              >
                {plan.title}
              </Text>
              <Text style={styles.time}>{plan.time}</Text>
            </View>
          </View>
          <TouchableOpacity
            style={getStatusButtonStyle()}
            onPress={onStatusToggle}
            activeOpacity={0.7}
          >
            <FontAwesome6
              name={getStatusIcon()}
              size={10}
              color={getStatusIconColor()}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.progressContainer}>
          <View style={styles.progressBarBackground}>
            <LinearGradient
              colors={['#02f2ce', '#00f289']}
              style={[styles.progressBar, { width: `${plan.progress}%` }]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
            />
          </View>
          <Text style={styles.progressText}>{plan.completedText}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default TrainingPlanItem;

