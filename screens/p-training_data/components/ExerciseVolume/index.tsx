

import React from 'react';
import { View, Text } from 'react-native';
import { FontAwesome6 } from '@expo/vector-icons';
import styles from './styles';

const ExerciseVolume: React.FC = () => {
  const exerciseData = [
    {
      icon: 'dumbbell',
      name: '俯卧撑',
      completed: '本周完成 450 次',
      improvement: '+12%',
      iconColor: '#02f2ce',
    },
    {
      icon: 'person-running',
      name: '跑步',
      completed: '本周完成 28 公里',
      improvement: '+8%',
      iconColor: '#00f289',
    },
    {
      icon: 'weight-scale',
      name: '深蹲',
      completed: '本周完成 360 次',
      improvement: '+15%',
      iconColor: '#0296f2e6',
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>项目训练量</Text>
      <View style={styles.exerciseList}>
        {exerciseData.map((exercise, index) => (
          <View key={index} style={styles.exerciseItem}>
            <View style={styles.exerciseInfo}>
              <View style={[styles.iconContainer, { backgroundColor: `${exercise.iconColor}1A` }]}>
                <FontAwesome6 name={exercise.icon} size={16} color={exercise.iconColor} />
              </View>
              <View style={styles.textInfo}>
                <Text style={styles.exerciseName}>{exercise.name}</Text>
                <Text style={styles.completedText}>{exercise.completed}</Text>
              </View>
            </View>
            <View style={styles.improvementInfo}>
              <Text style={[styles.improvementValue, { color: exercise.iconColor }]}>
                {exercise.improvement}
              </Text>
              <Text style={styles.improvementLabel}>较上周</Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

export default ExerciseVolume;

