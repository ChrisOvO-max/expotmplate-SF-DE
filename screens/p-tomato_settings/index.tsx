

import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Modal, FlatList, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { FontAwesome6 } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './styles';

interface DurationConfig {
  title: string;
  options: number[];
  unit: string;
}

interface Task {
  id: string;
  name: string;
  category: string;
  time: string;
  icon: string;
  iconColor: string;
}

interface Settings {
  workDuration: number;
  shortBreak: number;
  longBreak: number;
  longBreakInterval: number;
  associatedTask: Task | null;
}

const TomatoSettingsScreen = () => {
  const router = useRouter();

  const [currentSettings, setCurrentSettings] = useState<Settings>({
    workDuration: 25,
    shortBreak: 5,
    longBreak: 15,
    longBreakInterval: 4,
    associatedTask: null,
  });

  const [isDurationModalVisible, setIsDurationModalVisible] = useState(false);
  const [isTaskModalVisible, setIsTaskModalVisible] = useState(false);
  const [selectedDurationType, setSelectedDurationType] = useState<keyof Settings | null>(null);
  const [selectedDurationValue, setSelectedDurationValue] = useState(0);
  const [selectedTaskId, setSelectedTaskId] = useState<string | null>(null);

  const durationConfigs: Record<keyof Settings, DurationConfig> = {
    workDuration: {
      title: '设置工作时长',
      options: [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60],
      unit: '分钟'
    },
    shortBreak: {
      title: '设置短休息时长',
      options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 20],
      unit: '分钟'
    },
    longBreak: {
      title: '设置长休息时长',
      options: [5, 10, 15, 20, 25, 30, 35, 40, 45, 60],
      unit: '分钟'
    },
    longBreakInterval: {
      title: '设置长休息间隔',
      options: [1, 2, 3, 4, 5, 6, 7, 8],
      unit: '个番茄'
    },
    associatedTask: {
      title: '',
      options: [],
      unit: ''
    }
  };

  const availableTasks: Task[] = [
    {
      id: 'task1',
      name: '英语四级词汇学习',
      category: '学习',
      time: '09:00 - 10:00',
      icon: 'book',
      iconColor: '#02f2ce'
    },
    {
      id: 'task2',
      name: '编程练习',
      category: '工作',
      time: '14:00 - 16:00',
      icon: 'code',
      iconColor: '#00f289'
    },
    {
      id: 'task3',
      name: '阅读专业书籍',
      category: '学习',
      time: '19:00 - 20:00',
      icon: 'book-open',
      iconColor: '#0296f2e6'
    },
    {
      id: 'task4',
      name: '日语学习',
      category: '学习',
      time: '20:30 - 21:30',
      icon: 'language',
      iconColor: '#9333ea'
    }
  ];

  const handleBackPress = () => {
    if (router.canGoBack()) {
      router.back();
    }
  };

  const handleHistoryPress = () => {
    router.push('/p-tomato_history');
  };

  const handleDurationButtonPress = (type: keyof Settings) => {
    setSelectedDurationType(type);
    setSelectedDurationValue(currentSettings[type]);
    setIsDurationModalVisible(true);
  };

  const handleDurationOptionPress = (value: number) => {
    setSelectedDurationValue(value);
  };

  const handleDurationConfirm = () => {
    if (selectedDurationType) {
      setCurrentSettings(prev => ({
        ...prev,
        [selectedDurationType]: selectedDurationValue
      }));
    }
    setIsDurationModalVisible(false);
  };

  const handleTaskSelectPress = () => {
    setIsTaskModalVisible(true);
    setSelectedTaskId(currentSettings.associatedTask?.id || null);
  };

  const handleTaskOptionPress = (taskId: string) => {
    setSelectedTaskId(taskId);
  };

  const handleTaskConfirm = () => {
    if (selectedTaskId) {
      const selectedTask = availableTasks.find(task => task.id === selectedTaskId);
      setCurrentSettings(prev => ({
        ...prev,
        associatedTask: selectedTask || null
      }));
    }
    setIsTaskModalVisible(false);
  };

  const handleRemoveTask = () => {
    setCurrentSettings(prev => ({
      ...prev,
      associatedTask: null
    }));
  };

  const handleStartTomato = () => {
    const params = new URLSearchParams({
      workDuration: currentSettings.workDuration.toString(),
      shortBreak: currentSettings.shortBreak.toString(),
      longBreak: currentSettings.longBreak.toString(),
      longBreakInterval: currentSettings.longBreakInterval.toString(),
      associatedTaskId: currentSettings.associatedTask?.id || ''
    });
    
    router.push(`/p-tomato_focus?${params.toString()}`);
  };

  const renderDurationOption = ({ item }: { item: number }) => {
    const config = selectedDurationType ? durationConfigs[selectedDurationType] : null;
    const isSelected = item === selectedDurationValue;
    
    return (
      <TouchableOpacity
        style={[styles.durationOption, isSelected && styles.durationOptionSelected]}
        onPress={() => handleDurationOptionPress(item)}
      >
        <Text style={[styles.durationOptionText, isSelected && styles.durationOptionTextSelected]}>
          {item}{config?.unit}
        </Text>
      </TouchableOpacity>
    );
  };

  const renderTaskOption = ({ item }: { item: Task }) => {
    const isSelected = item.id === selectedTaskId;
    
    return (
      <TouchableOpacity
        style={[styles.taskOption, isSelected && styles.taskOptionSelected]}
        onPress={() => handleTaskOptionPress(item.id)}
      >
        <View style={styles.taskOptionContent}>
          <FontAwesome6 name={item.icon} style={[styles.taskOptionIcon, { color: item.iconColor }]} />
          <View style={styles.taskOptionInfo}>
            <Text style={[styles.taskOptionName, isSelected && styles.taskOptionNameSelected]}>
              {item.name}
            </Text>
            <Text style={[styles.taskOptionDetails, isSelected && styles.taskOptionDetailsSelected]}>
              {item.category} • {item.time}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const renderSettingItem = (
    icon: string,
    iconColor: string,
    title: string,
    subtitle: string,
    value: number,
    unit: string,
    onPress: () => void
  ) => (
    <View style={styles.settingItem}>
      <View style={styles.settingItemHeader}>
        <View style={styles.settingItemInfo}>
          <View style={[styles.settingItemIcon, { backgroundColor: `${iconColor}1A` }]}>
            <FontAwesome6 name={icon} style={[styles.settingItemIconText, { color: iconColor }]} />
          </View>
          <View style={styles.settingItemText}>
            <Text style={styles.settingItemTitle}>{title}</Text>
            <Text style={styles.settingItemSubtitle}>{subtitle}</Text>
          </View>
        </View>
        <View style={styles.settingItemValue}>
          <LinearGradient
            colors={['#02f2ce', '#00f289']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.durationGradient}
          >
            <Text style={styles.settingItemValueText}>{value}</Text>
          </LinearGradient>
          <Text style={styles.settingItemUnit}>{unit}</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.settingItemButton} onPress={onPress}>
        <Text style={styles.settingItemButtonText}>点击设置{title.replace('时长', '').replace('间隔', '')}</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.headerButton} onPress={handleBackPress}>
          <FontAwesome6 name="arrow-left" style={styles.headerButtonIcon} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>番茄钟设置</Text>
        <TouchableOpacity style={styles.headerButton} onPress={handleHistoryPress}>
          <FontAwesome6 name="clock-rotate-left" style={styles.headerButtonIcon} />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          {/* Work Duration */}
          {renderSettingItem(
            'clock',
            '#02f2ce',
            '工作时长',
            '专注工作时间',
            currentSettings.workDuration,
            '分钟',
            () => handleDurationButtonPress('workDuration')
          )}

          {/* Short Break */}
          {renderSettingItem(
            'mug-saucer',
            '#00f289',
            '短休息时长',
            '短暂休息时间',
            currentSettings.shortBreak,
            '分钟',
            () => handleDurationButtonPress('shortBreak')
          )}

          {/* Long Break */}
          {renderSettingItem(
            'bed',
            '#0296f2e6',
            '长休息时长',
            '深度休息时间',
            currentSettings.longBreak,
            '分钟',
            () => handleDurationButtonPress('longBreak')
          )}

          {/* Long Break Interval */}
          {renderSettingItem(
            'layer-group',
            '#9333ea',
            '长休息间隔',
            '每完成几个番茄后长休息',
            currentSettings.longBreakInterval,
            '个番茄',
            () => handleDurationButtonPress('longBreakInterval')
          )}

          {/* Associated Task */}
          <View style={styles.settingItem}>
            <View style={styles.settingItemHeader}>
              <View style={styles.settingItemInfo}>
                <View style={[styles.settingItemIcon, { backgroundColor: '#fb923c1A' }]}>
                  <FontAwesome6 name="list-check" style={[styles.settingItemIconText, { color: '#ea580c' }]} />
                </View>
                <View style={styles.settingItemText}>
                  <Text style={styles.settingItemTitle}>关联任务</Text>
                  <Text style={styles.settingItemSubtitle}>可选，完成后自动更新任务进度</Text>
                </View>
              </View>
            </View>
            
            {!currentSettings.associatedTask ? (
              <TouchableOpacity style={styles.taskSelectButton} onPress={handleTaskSelectPress}>
                <FontAwesome6 name="plus" style={styles.taskSelectButtonIcon} />
                <Text style={styles.taskSelectButtonText}>选择关联任务</Text>
              </TouchableOpacity>
            ) : (
              <View style={styles.selectedTaskContainer}>
                <View style={styles.selectedTaskContent}>
                  <FontAwesome6 name="book" style={styles.selectedTaskIcon} />
                  <Text style={styles.selectedTaskName}>{currentSettings.associatedTask.name}</Text>
                  <TouchableOpacity onPress={handleRemoveTask} style={styles.removeTaskButton}>
                    <FontAwesome6 name="xmark" style={styles.removeTaskIcon} />
                  </TouchableOpacity>
                </View>
              </View>
            )}
          </View>

          {/* Start Button */}
          <View style={styles.startSection}>
            <TouchableOpacity style={styles.startButton} onPress={handleStartTomato}>
              <LinearGradient
                colors={['#02f2ce', '#00f289']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.startButtonGradient}
              >
                <FontAwesome6 name="play" style={styles.startButtonIcon} />
                <Text style={styles.startButtonText}>启动番茄钟</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      {/* Duration Modal */}
      <Modal
        visible={isDurationModalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setIsDurationModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <View style={styles.modalHeader}>
                <Text style={styles.modalTitle}>
                  {selectedDurationType ? durationConfigs[selectedDurationType].title : ''}
                </Text>
                <TouchableOpacity
                  style={styles.modalCloseButton}
                  onPress={() => setIsDurationModalVisible(false)}
                >
                  <FontAwesome6 name="xmark" style={styles.modalCloseIcon} />
                </TouchableOpacity>
              </View>
              
              <FlatList
                data={selectedDurationType ? durationConfigs[selectedDurationType].options : []}
                renderItem={renderDurationOption}
                keyExtractor={(item) => item.toString()}
                style={styles.modalOptionsList}
                showsVerticalScrollIndicator={false}
              />
              
              <TouchableOpacity style={styles.modalConfirmButton} onPress={handleDurationConfirm}>
                <Text style={styles.modalConfirmButtonText}>确认</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      {/* Task Modal */}
      <Modal
        visible={isTaskModalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setIsTaskModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <View style={styles.modalHeader}>
                <Text style={styles.modalTitle}>选择关联任务</Text>
                <TouchableOpacity
                  style={styles.modalCloseButton}
                  onPress={() => setIsTaskModalVisible(false)}
                >
                  <FontAwesome6 name="xmark" style={styles.modalCloseIcon} />
                </TouchableOpacity>
              </View>
              
              <FlatList
                data={availableTasks}
                renderItem={renderTaskOption}
                keyExtractor={(item) => item.id}
                style={styles.modalOptionsList}
                showsVerticalScrollIndicator={false}
              />
              
              <View style={styles.taskModalButtons}>
                <TouchableOpacity
                  style={styles.taskModalCancelButton}
                  onPress={() => setIsTaskModalVisible(false)}
                >
                  <Text style={styles.taskModalCancelButtonText}>取消</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.taskModalConfirmButton} onPress={handleTaskConfirm}>
                  <Text style={styles.taskModalConfirmButtonText}>确认</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default TomatoSettingsScreen;

