

import React, { useState, useCallback } from 'react';
import { View, Text, ScrollView, TouchableOpacity, TextInput, Modal, Alert, RefreshControl, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { FontAwesome6 } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './styles';

interface HabitData {
  id: number;
  name: string;
  time: string;
  repeat: string;
  icon: string;
  color: string;
  enabled: boolean;
}

interface HabitFormData {
  name: string;
  time: string;
  repeat: string;
}

const HABIT_COLORS = {
  primary: '#02f2ce',
  secondary: '#00f289',
  accent: '#0296f2e6',
  purple: '#a855f7',
};

const REPEAT_OPTIONS = [
  '每日', '工作日', '周末',
  '每周一', '每周二', '每周三',
  '每周四', '每周五', '每周六',
  '每周日', '自定义'
];

const HabitReminderSettingsScreen: React.FC = () => {
  const router = useRouter();
  
  const [habitsData, setHabitsData] = useState<HabitData[]>([
    {
      id: 1,
      name: '桌面收拾',
      time: '19:00',
      repeat: '每日',
      icon: 'broom',
      color: 'primary',
      enabled: true
    },
    {
      id: 2,
      name: '衣物整理',
      time: '21:30',
      repeat: '每周六',
      icon: 'shirt',
      color: 'secondary',
      enabled: true
    },
    {
      id: 3,
      name: '冥想练习',
      time: '22:00',
      repeat: '每日',
      icon: 'spa',
      color: 'accent',
      enabled: true
    },
    {
      id: 4,
      name: '阅读时间',
      time: '20:00',
      repeat: '工作日',
      icon: 'book-open',
      color: 'purple',
      enabled: false
    }
  ]);

  const [isHabitModalVisible, setIsHabitModalVisible] = useState(false);
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  const [currentEditingHabitId, setCurrentEditingHabitId] = useState<number | null>(null);
  const [isRefreshing, setIsRefreshing] = useState(false);
  
  const [habitFormData, setHabitFormData] = useState<HabitFormData>({
    name: '',
    time: '',
    repeat: '每日'
  });

  const handleBackPress = useCallback(() => {
    if (router.canGoBack()) {
      router.back();
    }
  }, [router]);

  const handleRefresh = useCallback(async () => {
    setIsRefreshing(true);
    try {
      // 模拟刷新数据
      await new Promise(resolve => setTimeout(resolve, 1000));
    } catch (error) {
      console.error('刷新失败:', error);
    } finally {
      setIsRefreshing(false);
    }
  }, []);

  const handleAddHabitPress = useCallback(() => {
    setCurrentEditingHabitId(null);
    setHabitFormData({
      name: '',
      time: '',
      repeat: '每日'
    });
    setIsHabitModalVisible(true);
  }, []);

  const handleHabitItemPress = useCallback((habitId: number) => {
    const habit = habitsData.find(h => h.id === habitId);
    if (habit) {
      setCurrentEditingHabitId(habitId);
      setHabitFormData({
        name: habit.name,
        time: habit.time,
        repeat: habit.repeat
      });
      setIsHabitModalVisible(true);
    }
  }, [habitsData]);

  const handleHabitTogglePress = useCallback((habitId: number) => {
    setHabitsData(prevHabits =>
      prevHabits.map(habit =>
        habit.id === habitId
          ? { ...habit, enabled: !habit.enabled }
          : habit
      )
    );
  }, []);

  const handleRepeatOptionPress = useCallback((repeatValue: string) => {
    setHabitFormData(prev => ({
      ...prev,
      repeat: repeatValue
    }));
  }, []);

  const handleHabitFormSubmit = useCallback(() => {
    const { name, time, repeat } = habitFormData;
    
    if (!name.trim() || !time) {
      Alert.alert('提示', '请填写完整的习惯信息');
      return;
    }

    if (currentEditingHabitId) {
      // 编辑习惯
      setHabitsData(prevHabits =>
        prevHabits.map(habit =>
          habit.id === currentEditingHabitId
            ? { ...habit, name, time, repeat }
            : habit
        )
      );
    } else {
      // 添加新习惯
      const newHabit: HabitData = {
        id: Math.max(...habitsData.map(h => h.id)) + 1,
        name,
        time,
        repeat,
        icon: 'check-circle',
        color: 'primary',
        enabled: true
      };
      setHabitsData(prevHabits => [...prevHabits, newHabit]);
    }

    setIsHabitModalVisible(false);
    setCurrentEditingHabitId(null);
  }, [habitFormData, currentEditingHabitId, habitsData]);

  const handleDeleteHabitPress = useCallback((habitId: number) => {
    setCurrentEditingHabitId(habitId);
    setIsDeleteModalVisible(true);
  }, []);

  const handleConfirmDelete = useCallback(() => {
    if (currentEditingHabitId) {
      setHabitsData(prevHabits =>
        prevHabits.filter(habit => habit.id !== currentEditingHabitId)
      );
      setIsDeleteModalVisible(false);
      setCurrentEditingHabitId(null);
    }
  }, [currentEditingHabitId]);

  const handleCancelDelete = useCallback(() => {
    setIsDeleteModalVisible(false);
    setCurrentEditingHabitId(null);
  }, []);

  const handleCloseHabitModal = useCallback(() => {
    setIsHabitModalVisible(false);
    setCurrentEditingHabitId(null);
  }, []);

  const getHabitColor = useCallback((colorName: string) => {
    return HABIT_COLORS[colorName as keyof typeof HABIT_COLORS] || HABIT_COLORS.primary;
  }, []);

  const renderHabitItem = useCallback(({ item }: { item: HabitData }) => {
    const habitColor = getHabitColor(item.color);
    
    return (
      <TouchableOpacity
        style={styles.habitItem}
        onPress={() => handleHabitItemPress(item.id)}
        activeOpacity={0.7}
      >
        <View style={styles.habitItemContent}>
          <View style={styles.habitItemLeft}>
            <View style={[styles.habitIconContainer, { backgroundColor: `${habitColor}1A` }]}>
              <FontAwesome6
                name={item.icon as any}
                size={18}
                color={habitColor}
              />
            </View>
            <View style={styles.habitInfo}>
              <Text style={styles.habitName}>{item.name}</Text>
              <View style={styles.habitDetails}>
                <View style={styles.habitDetailItem}>
                  <FontAwesome6 name="clock" size={12} color="#6b7280" />
                  <Text style={styles.habitDetailText}>{item.time}</Text>
                </View>
                <View style={styles.habitDetailItem}>
                  <FontAwesome6 name="repeat" size={12} color="#6b7280" />
                  <Text style={styles.habitDetailText}>{item.repeat}</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.habitItemRight}>
            <TouchableOpacity
              style={[
                styles.habitToggle,
                item.enabled ? { backgroundColor: habitColor } : styles.habitToggleDisabled
              ]}
              onPress={() => handleHabitTogglePress(item.id)}
              activeOpacity={0.7}
            >
              <FontAwesome6
                name="check"
                size={10}
                color={item.enabled ? '#ffffff' : 'transparent'}
              />
            </TouchableOpacity>
            <FontAwesome6 name="chevron-right" size={14} color="#6b7280" />
          </View>
        </View>
      </TouchableOpacity>
    );
  }, [getHabitColor, handleHabitItemPress, handleHabitTogglePress]);

  const renderRepeatTag = useCallback((option: string) => {
    const isSelected = habitFormData.repeat === option;
    
    return (
      <TouchableOpacity
        key={option}
        style={[
          styles.repeatTag,
          isSelected && styles.repeatTagSelected
        ]}
        onPress={() => handleRepeatOptionPress(option)}
        activeOpacity={0.7}
      >
        <Text style={[
          styles.repeatTagText,
          isSelected && styles.repeatTagTextSelected
        ]}>
          {option}
        </Text>
      </TouchableOpacity>
    );
  }, [habitFormData.repeat, handleRepeatOptionPress]);

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
        <Text style={styles.headerTitle}>生活习惯提醒</Text>
        <View style={styles.headerPlaceholder} />
      </View>

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollViewContent}
        refreshControl={
          <RefreshControl
            refreshing={isRefreshing}
            onRefresh={handleRefresh}
            colors={['#02f2ce']}
            tintColor="#02f2ce"
          />
        }
        showsVerticalScrollIndicator={false}
      >
        {/* 习惯提醒列表 */}
        <View style={styles.habitsSection}>
          <View style={styles.habitsHeader}>
            <Text style={styles.habitsTitle}>已设置提醒</Text>
            <Text style={styles.habitsCount}>共 {habitsData.length} 个</Text>
          </View>
          
          {habitsData.length > 0 ? (
            <View style={styles.habitsList}>
              {habitsData.map((habit) => (
                <View key={habit.id}>
                  {renderHabitItem({ item: habit })}
                  <TouchableOpacity
                    style={styles.deleteButton}
                    onPress={() => handleDeleteHabitPress(habit.id)}
                    activeOpacity={0.7}
                  >
                    <FontAwesome6 name="trash" size={14} color="#ef4444" />
                    <Text style={styles.deleteButtonText}>删除</Text>
                  </TouchableOpacity>
                </View>
              ))}
            </View>
          ) : (
            <View style={styles.emptyState}>
              <View style={styles.emptyStateIcon}>
                <FontAwesome6 name="plus" size={24} color="#9ca3af" />
              </View>
              <Text style={styles.emptyStateTitle}>还没有习惯提醒</Text>
              <Text style={styles.emptyStateDescription}>添加生活习惯提醒，让生活更有规律</Text>
            </View>
          )}
        </View>
      </ScrollView>

      {/* 添加习惯浮动按钮 */}
      <TouchableOpacity
        style={styles.floatingButton}
        onPress={handleAddHabitPress}
        activeOpacity={0.8}
      >
        <LinearGradient
          colors={['#02f2ce', '#00f289']}
          style={styles.floatingButtonGradient}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        >
          <FontAwesome6 name="plus" size={20} color="#ffffff" />
        </LinearGradient>
      </TouchableOpacity>

      {/* 添加/编辑习惯弹窗 */}
      <Modal
        visible={isHabitModalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={handleCloseHabitModal}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <View style={styles.modalHeader}>
                <Text style={styles.modalTitle}>
                  {currentEditingHabitId ? '编辑习惯提醒' : '添加习惯提醒'}
                </Text>
                <TouchableOpacity
                  style={styles.closeButton}
                  onPress={handleCloseHabitModal}
                  activeOpacity={0.7}
                >
                  <FontAwesome6 name="xmark" size={16} color="#6b7280" />
                </TouchableOpacity>
              </View>
              
              <View style={styles.formContainer}>
                {/* 习惯名称 */}
                <View style={styles.formGroup}>
                  <Text style={styles.formLabel}>习惯名称</Text>
                  <TextInput
                    style={styles.formInput}
                    placeholder="请输入习惯名称"
                    value={habitFormData.name}
                    onChangeText={(text) => setHabitFormData(prev => ({ ...prev, name: text }))}
                    placeholderTextColor="#9ca3af"
                  />
                </View>
                
                {/* 提醒时间 */}
                <View style={styles.formGroup}>
                  <Text style={styles.formLabel}>提醒时间</Text>
                  <TextInput
                    style={styles.formInput}
                    placeholder="HH:MM"
                    value={habitFormData.time}
                    onChangeText={(text) => setHabitFormData(prev => ({ ...prev, time: text }))}
                    placeholderTextColor="#9ca3af"
                  />
                </View>
                
                {/* 重复周期 */}
                <View style={styles.formGroup}>
                  <Text style={styles.formLabel}>重复周期</Text>
                  <View style={styles.repeatGrid}>
                    {REPEAT_OPTIONS.map(renderRepeatTag)}
                  </View>
                </View>
                
                {/* 操作按钮 */}
                <View style={styles.formActions}>
                  <TouchableOpacity
                    style={styles.cancelButton}
                    onPress={handleCloseHabitModal}
                    activeOpacity={0.7}
                  >
                    <Text style={styles.cancelButtonText}>取消</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.saveButton}
                    onPress={handleHabitFormSubmit}
                    activeOpacity={0.8}
                  >
                    <LinearGradient
                      colors={['#02f2ce', '#00f289']}
                      style={styles.saveButtonGradient}
                      start={{ x: 0, y: 0 }}
                      end={{ x: 1, y: 0 }}
                    >
                      <Text style={styles.saveButtonText}>保存</Text>
                    </LinearGradient>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
      </Modal>

      {/* 删除确认弹窗 */}
      <Modal
        visible={isDeleteModalVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={handleCancelDelete}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.deleteModalContainer}>
            <View style={styles.deleteModalContent}>
              <View style={styles.deleteIconContainer}>
                <FontAwesome6 name="trash" size={24} color="#ef4444" />
              </View>
              <Text style={styles.deleteModalTitle}>删除习惯</Text>
              <Text style={styles.deleteModalDescription}>
                确定要删除这个习惯提醒吗？删除后无法恢复。
              </Text>
              <View style={styles.deleteModalActions}>
                <TouchableOpacity
                  style={styles.deleteModalCancelButton}
                  onPress={handleCancelDelete}
                  activeOpacity={0.7}
                >
                  <Text style={styles.deleteModalCancelText}>取消</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.deleteModalConfirmButton}
                  onPress={handleConfirmDelete}
                  activeOpacity={0.8}
                >
                  <Text style={styles.deleteModalConfirmText}>删除</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default HabitReminderSettingsScreen;

