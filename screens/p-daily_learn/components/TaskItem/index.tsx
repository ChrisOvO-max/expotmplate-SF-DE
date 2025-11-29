

import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { FontAwesome6 } from '@expo/vector-icons';
import styles from './styles';

interface Task {
  id: string;
  title: string;
  description: string;
  icon: string;
  iconColor: string;
  iconBgColor: string;
  progress: number;
  progressText: string;
  completed: boolean;
  taskId: string;
}

interface TaskItemProps {
  task: Task;
  onPress: () => void;
  onToggle: () => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onPress, onToggle }) => {
  const handlePress = () => {
    onPress();
  };

  const handleTogglePress = (event: any) => {
    event.stopPropagation();
    onToggle();
  };

  return (
    <TouchableOpacity
      style={[
        styles.taskItem,
        task.completed && styles.taskItemCompleted
      ]}
      onPress={handlePress}
      activeOpacity={0.8}
    >
      <View style={styles.taskHeader}>
        <View style={styles.taskInfo}>
          <View style={[styles.taskIcon, { backgroundColor: task.iconBgColor }]}>
            <FontAwesome6
              name={task.icon as any}
              size={16}
              color={task.iconColor}
            />
          </View>
          <View style={styles.taskDetails}>
            <Text style={[
              styles.taskTitle,
              task.completed && styles.taskTitleCompleted
            ]}>
              {task.title}
            </Text>
            <Text style={styles.taskDescription}>
              {task.description}
            </Text>
          </View>
        </View>
        
        <TouchableOpacity
          style={[
            styles.checkButton,
            task.completed && styles.checkButtonCompleted
          ]}
          onPress={handleTogglePress}
          activeOpacity={0.7}
        >
          <FontAwesome6
            name="check"
            size={12}
            color={task.completed ? '#ffffff' : 'transparent'}
          />
        </TouchableOpacity>
      </View>
      
      <View style={styles.progressContainer}>
        <View style={styles.progressBarContainer}>
          <View
            style={[
              styles.progressBar,
              { width: `${task.progress}%` }
            ]}
          />
        </View>
        <Text style={styles.progressText}>
          {task.progressText}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default TaskItem;

