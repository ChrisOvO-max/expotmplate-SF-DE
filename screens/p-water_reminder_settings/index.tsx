

import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, TextInput, Switch, Modal, Alert, FlatList, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { FontAwesome6 } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './styles';

interface WaterReminderSettings {
  waterGoal: number;
  reminderEnabled: boolean;
  reminderTimes: string[];
}

const WaterReminderSettingsScreen = () => {
  const router = useRouter();
  
  // 状态管理
  const [waterGoal, setWaterGoal] = useState<number>(2000);
  const [reminderEnabled, setReminderEnabled] = useState<boolean>(true);
  const [reminderTimes, setReminderTimes] = useState<string[]>([
    '08:00', '10:00', '12:00', '14:00', '16:00', '18:00'
  ]);
  const [isTimePickerVisible, setIsTimePickerVisible] = useState<boolean>(false);
  const [selectedHour, setSelectedHour] = useState<string>('08');
  const [selectedMinute, setSelectedMinute] = useState<string>('00');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // 生成小时选项
  const generateHourOptions = () => {
    const hours = [];
    for (let i = 0; i < 24; i++) {
      hours.push(i.toString().padStart(2, '0'));
    }
    return hours;
  };

  // 生成分钟选项（每15分钟）
  const generateMinuteOptions = () => {
    return ['00', '15', '30', '45'];
  };

  // 处理返回按钮
  const handleBackPress = () => {
    if (router.canGoBack()) {
      router.back();
    }
  };

  // 处理喝水目标输入
  const handleWaterGoalChange = (value: string) => {
    const numValue = parseInt(value) || 0;
    if (numValue >= 500 && numValue <= 5000) {
      setWaterGoal(numValue);
    }
  };

  // 处理提醒开关
  const handleReminderToggle = (value: boolean) => {
    setReminderEnabled(value);
  };

  // 显示时间选择器
  const handleShowTimePicker = () => {
    if (reminderEnabled) {
      setIsTimePickerVisible(true);
    }
  };

  // 隐藏时间选择器
  const handleHideTimePicker = () => {
    setIsTimePickerVisible(false);
  };

  // 确认时间选择
  const handleConfirmTime = () => {
    const timeString = `${selectedHour}:${selectedMinute}`;
    
    // 检查时间是否已存在
    if (reminderTimes.includes(timeString)) {
      Alert.alert('提示', '该时间已存在');
      return;
    }
    
    // 添加新的时间
    setReminderTimes(prev => [...prev, timeString]);
    handleHideTimePicker();
  };

  // 删除时间
  const handleDeleteTime = (time: string) => {
    setReminderTimes(prev => prev.filter(t => t !== time));
  };

  // 保存设置
  const handleSaveSettings = async () => {
    // 验证数据
    if (reminderEnabled && reminderTimes.length === 0) {
      Alert.alert('提示', '请至少设置一个提醒时间');
      return;
    }

    setIsLoading(true);
    
    try {
      const settings: WaterReminderSettings = {
        waterGoal,
        reminderEnabled,
        reminderTimes,
      };
      
      await AsyncStorage.setItem('@water_reminder_settings', JSON.stringify(settings));
      
      Alert.alert('成功', '设置已保存', [
        {
          text: '确定',
          onPress: () => {
            if (router.canGoBack()) {
              router.back();
            }
          },
        },
      ]);
    } catch (error) {
      Alert.alert('错误', '保存失败，请重试');
    } finally {
      setIsLoading(false);
    }
  };

  // 加载设置
  const loadSettings = async () => {
    try {
      const savedSettings = await AsyncStorage.getItem('@water_reminder_settings');
      if (savedSettings) {
        const settings: WaterReminderSettings = JSON.parse(savedSettings);
        setWaterGoal(settings.waterGoal || 2000);
        setReminderEnabled(settings.reminderEnabled !== undefined ? settings.reminderEnabled : true);
        setReminderTimes(settings.reminderTimes || [
          '08:00', '10:00', '12:00', '14:00', '16:00', '18:00'
        ]);
      }
    } catch (error) {
      console.error('加载设置失败:', error);
    }
  };

  // 组件挂载时加载设置
  useEffect(() => {
    loadSettings();
  }, []);

  // 渲染时间项
  const renderTimeItem = ({ item }: { item: string }) => (
    <View style={styles.timeItem}>
      <View style={styles.timeItemLeft}>
        <View style={styles.timeIconContainer}>
          <FontAwesome6 name="droplet" size={14} color="#0296f2e6" />
        </View>
        <Text style={styles.timeText}>{item}</Text>
      </View>
      <TouchableOpacity
        style={styles.deleteTimeButton}
        onPress={() => handleDeleteTime(item)}
        activeOpacity={0.7}
      >
        <FontAwesome6 name="xmark" size={14} color="#ef4444" />
      </TouchableOpacity>
    </View>
  );

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
        <Text style={styles.headerTitle}>水分提醒</Text>
        <View style={styles.headerPlaceholder} />
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* 每日喝水目标设置 */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <View style={styles.sectionIconContainer}>
              <FontAwesome6 name="droplet" size={18} color="#0296f2e6" />
            </View>
            <View style={styles.sectionHeaderText}>
              <Text style={styles.sectionTitle}>每日喝水目标</Text>
              <Text style={styles.sectionSubtitle}>建议每日饮水量 1500-2500ml</Text>
            </View>
          </View>
          
          <View style={styles.goalInputContainer}>
            <Text style={styles.inputLabel}>目标饮水量</Text>
            <View style={styles.inputWrapper}>
              <TextInput
                style={styles.goalInput}
                value={waterGoal.toString()}
                onChangeText={handleWaterGoalChange}
                keyboardType="numeric"
                placeholder="2000"
                placeholderTextColor="#9ca3af"
              />
              <Text style={styles.inputUnit}>ml</Text>
            </View>
          </View>
        </View>

        {/* 提醒开关设置 */}
        <View style={styles.section}>
          <View style={styles.toggleRow}>
            <View style={styles.sectionIconContainer}>
              <FontAwesome6 name="bell" size={18} color="#02f2ce" />
            </View>
            <View style={styles.sectionHeaderText}>
              <Text style={styles.sectionTitle}>喝水提醒</Text>
              <Text style={styles.sectionSubtitle}>定时提醒您补充水分</Text>
            </View>
            <Switch
              value={reminderEnabled}
              onValueChange={handleReminderToggle}
              trackColor={{ false: '#d1d5db', true: '#02f2ce' }}
              thumbColor="#ffffff"
            />
          </View>
        </View>

        {/* 提醒时间设置 */}
        <View style={[
          styles.section,
          !reminderEnabled && styles.disabledSection
        ]}>
          <View style={styles.timeSectionHeader}>
            <View style={styles.sectionIconContainer}>
              <FontAwesome6 name="clock" size={18} color="#00f289" />
            </View>
            <View style={styles.sectionHeaderText}>
              <Text style={styles.sectionTitle}>提醒时间</Text>
              <Text style={styles.sectionSubtitle}>设置喝水提醒的时间点</Text>
            </View>
            <TouchableOpacity
              style={[
                styles.addTimeButton,
                !reminderEnabled && styles.disabledButton
              ]}
              onPress={handleShowTimePicker}
              activeOpacity={0.7}
              disabled={!reminderEnabled}
            >
              <FontAwesome6 name="plus" size={16} color="#00f289" />
            </TouchableOpacity>
          </View>
          
          <FlatList
            data={reminderTimes}
            renderItem={renderTimeItem}
            keyExtractor={(item) => item}
            scrollEnabled={false}
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={() => <View style={styles.timeItemSeparator} />}
          />
        </View>

        {/* 底部保存按钮 */}
        <View style={styles.saveSection}>
          <TouchableOpacity
            style={[styles.saveButton, isLoading && styles.saveButtonDisabled]}
            onPress={handleSaveSettings}
            activeOpacity={0.8}
            disabled={isLoading}
          >
            <Text style={styles.saveButtonText}>
              {isLoading ? '保存中...' : '保存设置'}
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* 时间选择器模态框 */}
      <Modal
        visible={isTimePickerVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={handleHideTimePicker}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <View style={styles.modalHeader}>
              <TouchableOpacity
                onPress={handleHideTimePicker}
                activeOpacity={0.7}
              >
                <Text style={styles.modalCancelText}>取消</Text>
              </TouchableOpacity>
              <Text style={styles.modalTitle}>选择时间</Text>
              <TouchableOpacity
                onPress={handleConfirmTime}
                activeOpacity={0.7}
              >
                <Text style={styles.modalConfirmText}>确定</Text>
              </TouchableOpacity>
            </View>
            
            <View style={styles.timePickerContainer}>
              <View style={styles.timePickerColumn}>
                <Text style={styles.timePickerLabel}>小时</Text>
                <FlatList
                  data={generateHourOptions()}
                  renderItem={({ item }) => (
                    <TouchableOpacity
                      style={[
                        styles.timePickerOption,
                        selectedHour === item && styles.timePickerOptionSelected
                      ]}
                      onPress={() => setSelectedHour(item)}
                      activeOpacity={0.7}
                    >
                      <Text style={[
                        styles.timePickerOptionText,
                        selectedHour === item && styles.timePickerOptionTextSelected
                      ]}>
                        {item}
                      </Text>
                    </TouchableOpacity>
                  )}
                  keyExtractor={(item) => item}
                  style={styles.timePickerList}
                  showsVerticalScrollIndicator={false}
                  getItemLayout={(_, index) => ({
                    length: 40,
                    offset: 40 * index,
                    index,
                  })}
                />
              </View>
              
              <Text style={styles.timeSeparator}>:</Text>
              
              <View style={styles.timePickerColumn}>
                <Text style={styles.timePickerLabel}>分钟</Text>
                <FlatList
                  data={generateMinuteOptions()}
                  renderItem={({ item }) => (
                    <TouchableOpacity
                      style={[
                        styles.timePickerOption,
                        selectedMinute === item && styles.timePickerOptionSelected
                      ]}
                      onPress={() => setSelectedMinute(item)}
                      activeOpacity={0.7}
                    >
                      <Text style={[
                        styles.timePickerOptionText,
                        selectedMinute === item && styles.timePickerOptionTextSelected
                      ]}>
                        {item}
                      </Text>
                    </TouchableOpacity>
                  )}
                  keyExtractor={(item) => item}
                  style={styles.timePickerList}
                  showsVerticalScrollIndicator={false}
                  getItemLayout={(_, index) => ({
                    length: 40,
                    offset: 40 * index,
                    index,
                  })}
                />
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default WaterReminderSettingsScreen;

