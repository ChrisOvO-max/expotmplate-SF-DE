

import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Modal, Alert, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { FontAwesome6 } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './styles';

interface MoodOption {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  backgroundColor: string;
}

const moodOptions: MoodOption[] = [
  {
    id: 'focus',
    title: '专注',
    description: '全神贯注，高效工作',
    icon: 'bullseye',
    color: '#3b82f6',
    backgroundColor: '#dbeafe',
  },
  {
    id: 'happy',
    title: '开心',
    description: '心情愉悦，充满活力',
    icon: 'face-smile',
    color: '#f59e0b',
    backgroundColor: '#fef3c7',
  },
  {
    id: 'calm',
    title: '平静',
    description: '内心平和，放松自在',
    icon: 'leaf',
    color: '#10b981',
    backgroundColor: '#d1fae5',
  },
  {
    id: 'tired',
    title: '疲惫',
    description: '需要休息，恢复精力',
    icon: 'bed',
    color: '#6b7280',
    backgroundColor: '#f3f4f6',
  },
  {
    id: 'anxious',
    title: '焦虑',
    description: '有些紧张，需要放松',
    icon: 'triangle-exclamation',
    color: '#ef4444',
    backgroundColor: '#fee2e2',
  },
];

const MoodRecordScreen: React.FC = () => {
  const router = useRouter();
  const [selectedMoodId, setSelectedMoodId] = useState<string | null>(null);
  const [isSuccessModalVisible, setIsSuccessModalVisible] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [currentDate, setCurrentDate] = useState('');
  const [currentWeekday, setCurrentWeekday] = useState('');

  useEffect(() => {
    const now = new Date();
    const options: Intl.DateTimeFormatOptions = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    const weekdayOptions: Intl.DateTimeFormatOptions = { weekday: 'long' };
    
    setCurrentDate(now.toLocaleDateString('zh-CN', options));
    setCurrentWeekday(now.toLocaleDateString('zh-CN', weekdayOptions));
  }, []);

  const handleBackPress = () => {
    if (router.canGoBack()) {
      router.back();
    }
  };

  const handleMoodSelection = (moodId: string) => {
    setSelectedMoodId(moodId);
  };

  const handleSaveMood = async () => {
    if (!selectedMoodId) {
      Alert.alert('提示', '请选择一个心情状态');
      return;
    }

    setIsSaving(true);
    
    try {
      // 模拟保存过程
      await new Promise(resolve => setTimeout(resolve, 1000));
      setIsSuccessModalVisible(true);
    } catch (error) {
      Alert.alert('错误', '保存失败，请重试');
    } finally {
      setIsSaving(false);
    }
  };

  const handleModalOk = () => {
    setIsSuccessModalVisible(false);
    if (router.canGoBack()) {
      router.back();
    }
  };

  const getMoodGradientColors = (moodId: string): [string, string] => {
    switch (moodId) {
      case 'focus':
        return ['#3b82f6', '#1d4ed8'];
      case 'happy':
        return ['#f59e0b', '#d97706'];
      case 'calm':
        return ['#10b981', '#059669'];
      case 'tired':
        return ['#6b7280', '#4b5563'];
      case 'anxious':
        return ['#ef4444', '#dc2626'];
      default:
        return ['#02f2ce', '#00f289'];
    }
  };

  const renderMoodOption = (mood: MoodOption) => {
    const isSelected = selectedMoodId === mood.id;
    const isAnxious = mood.id === 'anxious';

    return (
      <TouchableOpacity
        key={mood.id}
        style={[
          styles.moodOption,
          isAnxious && styles.moodOptionAnxious,
          isSelected && styles.moodOptionSelected,
        ]}
        onPress={() => handleMoodSelection(mood.id)}
        activeOpacity={0.8}
      >
        {isSelected ? (
          <LinearGradient
            colors={getMoodGradientColors(mood.id)}
            style={[styles.moodOptionGradient, isAnxious && styles.moodOptionAnxiousGradient]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
          >
            <FontAwesome6 
              name={mood.icon as any} 
              size={32} 
              color="#ffffff" 
              style={styles.moodIcon}
            />
            <Text style={styles.moodTitleSelected}>{mood.title}</Text>
            <Text style={styles.moodDescriptionSelected}>{mood.description}</Text>
          </LinearGradient>
        ) : (
          <View style={[styles.moodOptionContent, { backgroundColor: mood.backgroundColor }]}>
            <FontAwesome6 
              name={mood.icon as any} 
              size={32} 
              color={mood.color} 
              style={styles.moodIcon}
            />
            <Text style={styles.moodTitle}>{mood.title}</Text>
            <Text style={styles.moodDescription}>{mood.description}</Text>
          </View>
        )}
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* 顶部导航栏 */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={handleBackPress}
          activeOpacity={0.7}
        >
          <FontAwesome6 name="arrow-left" size={18} color="#1f2937" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>每日心情</Text>
        <View style={styles.headerPlaceholder} />
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* 日期显示卡片 */}
        <View style={styles.dateCard}>
          <Text style={styles.currentDate}>{currentDate}</Text>
          <Text style={styles.currentWeekday}>{currentWeekday}</Text>
          <View style={styles.dateHint}>
            <FontAwesome6 name="calendar-day" size={16} color="#02f2ce" />
            <Text style={styles.dateHintText}>记录今天的心情状态</Text>
          </View>
        </View>

        {/* 心情选择区域 */}
        <View style={styles.moodSection}>
          <Text style={styles.moodSectionTitle}>今天感觉怎么样？</Text>
          <View style={styles.moodGrid}>
            {moodOptions.map(renderMoodOption)}
          </View>
        </View>

        {/* 今日任务完成情况 */}
        <View style={styles.tasksCard}>
          <View style={styles.tasksHeader}>
            <FontAwesome6 name="list-check" size={18} color="#02f2ce" />
            <Text style={styles.tasksTitle}>今日任务完成情况</Text>
          </View>
          <View style={styles.tasksSummary}>
            <View style={styles.taskRow}>
              <Text style={styles.taskLabel}>总任务数</Text>
              <Text style={styles.taskValue}>5</Text>
            </View>
            <View style={styles.taskRow}>
              <Text style={styles.taskLabel}>已完成</Text>
              <Text style={styles.taskValueCompleted}>3</Text>
            </View>
            <View style={styles.taskRow}>
              <Text style={styles.taskLabel}>完成率</Text>
              <Text style={styles.taskValuePrimary}>60%</Text>
            </View>
          </View>
        </View>

        {/* 保存按钮 */}
        <View style={styles.saveSection}>
          <TouchableOpacity
            style={[
              styles.saveButton,
              (!selectedMoodId || isSaving) && styles.saveButtonDisabled,
            ]}
            onPress={handleSaveMood}
            disabled={!selectedMoodId || isSaving}
            activeOpacity={0.8}
          >
            <LinearGradient
              colors={selectedMoodId && !isSaving ? ['#02f2ce', '#00f289'] : ['#d1d5db', '#d1d5db']}
              style={styles.saveButtonGradient}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
            >
              <FontAwesome6 
                name={isSaving ? "spinner" : "heart"} 
                size={18} 
                color="#ffffff" 
                style={[styles.saveButtonIcon, isSaving && styles.spinningIcon]}
              />
              <Text style={styles.saveButtonText}>
                {isSaving ? '保存中...' : '保存心情'}
              </Text>
            </LinearGradient>
          </TouchableOpacity>
          <Text style={styles.saveHint}>
            {selectedMoodId ? '点击保存记录今天的心情' : '选择一个心情状态后才能保存'}
          </Text>
        </View>
      </ScrollView>

      {/* 成功提示模态框 */}
      <Modal
        visible={isSuccessModalVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setIsSuccessModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <FontAwesome6 name="heart" size={48} color="#02f2ce" style={styles.modalIcon} />
            <Text style={styles.modalTitle}>心情已记录！</Text>
            <Text style={styles.modalDescription}>
              感谢记录今天的心情状态，继续保持好心情！
            </Text>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={handleModalOk}
              activeOpacity={0.8}
            >
              <LinearGradient
                colors={['#02f2ce', '#00f289']}
                style={styles.modalButtonGradient}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
              >
                <Text style={styles.modalButtonText}>确定</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default MoodRecordScreen;

