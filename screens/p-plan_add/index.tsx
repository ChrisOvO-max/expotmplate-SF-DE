

import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, TextInput, Modal, Alert, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { FontAwesome6 } from '@expo/vector-icons';
import styles from './styles';

interface FormData {
  type: 'learning' | 'training' | 'health' | 'habit';
  name: string;
  startTime: string;
  endTime: string;
  repeat: 'daily' | 'weekly' | 'monthly' | 'custom';
  remindTime: string;
  remindMethods: string[];
}

const PlanAddScreen = () => {
  const router = useRouter();
  
  const [formData, setFormData] = useState<FormData>({
    type: 'learning',
    name: '',
    startTime: '09:00',
    endTime: '10:00',
    repeat: 'daily',
    remindTime: '10',
    remindMethods: ['notification'],
  });

  const [isTimeModalVisible, setIsTimeModalVisible] = useState(false);
  const [isRepeatModalVisible, setIsRepeatModalVisible] = useState(false);
  const [isRemindTimeModalVisible, setIsRemindTimeModalVisible] = useState(false);
  const [currentTimeTarget, setCurrentTimeTarget] = useState<'start' | 'end'>('start');
  const [tempTime, setTempTime] = useState({ hour: '9', minute: '0' });
  const [selectedRepeat, setSelectedRepeat] = useState('daily');
  const [selectedRemindTime, setSelectedRemindTime] = useState('10');

  const planTypes = [
    { id: 'learning', icon: 'book', label: '学习', color: '#02f2ce' },
    { id: 'training', icon: 'dumbbell', label: '训练', color: '#00f289' },
    { id: 'health', icon: 'heart', label: '健康', color: '#0296f2e6' },
    { id: 'habit', icon: 'star', label: '生活习惯', color: '#eab308' },
  ];

  const repeatOptions = [
    { value: 'daily', label: '每日' },
    { value: 'weekly', label: '每周' },
    { value: 'monthly', label: '每月' },
    { value: 'custom', label: '自定义' },
  ];

  const remindTimeOptions = [
    { value: '10', label: '提前10分钟' },
    { value: '5', label: '提前5分钟' },
    { value: '15', label: '提前15分钟' },
    { value: '30', label: '提前30分钟' },
    { value: '0', label: '准时提醒' },
  ];

  const handleBackPress = () => {
    if (router.canGoBack()) {
      router.back();
    }
  };

  const handleSavePress = () => {
    if (!formData.name.trim()) {
      Alert.alert('提示', '请输入计划名称');
      return;
    }

    console.log('保存计划数据:', formData);
    Alert.alert('成功', '计划已保存', [
      {
        text: '确定',
        onPress: () => {
          if (router.canGoBack()) {
            router.back();
          }
        },
      },
    ]);
  };

  const handlePlanTypeSelect = (type: FormData['type']) => {
    setFormData(prev => ({ ...prev, type }));
  };

  const handleTimeSelect = (target: 'start' | 'end') => {
    setCurrentTimeTarget(target);
    const time = target === 'start' ? formData.startTime : formData.endTime;
    const [hour, minute] = time.split(':');
    setTempTime({ hour, minute });
    setIsTimeModalVisible(true);
  };

  const handleTimeConfirm = () => {
    const time = `${tempTime.hour.padStart(2, '0')}:${tempTime.minute.padStart(2, '0')}`;
    setFormData(prev => ({
      ...prev,
      [currentTimeTarget === 'start' ? 'startTime' : 'endTime']: time,
    }));
    setIsTimeModalVisible(false);
  };

  const handleRepeatSelect = () => {
    setSelectedRepeat(formData.repeat);
    setIsRepeatModalVisible(true);
  };

  const handleRepeatConfirm = () => {
    setFormData(prev => ({ ...prev, repeat: selectedRepeat as FormData['repeat'] }));
    setIsRepeatModalVisible(false);
  };

  const handleRemindTimeSelect = () => {
    setSelectedRemindTime(formData.remindTime);
    setIsRemindTimeModalVisible(true);
  };

  const handleRemindTimeConfirm = () => {
    setFormData(prev => ({ ...prev, remindTime: selectedRemindTime }));
    setIsRemindTimeModalVisible(false);
  };

  const handleRemindMethodToggle = (method: string) => {
    setFormData(prev => ({
      ...prev,
      remindMethods: prev.remindMethods.includes(method)
        ? prev.remindMethods.filter(m => m !== method)
        : [...prev.remindMethods, method],
    }));
  };

  const getRepeatLabel = (value: string) => {
    return repeatOptions.find(option => option.value === value)?.label || '每日';
  };

  const getRemindTimeLabel = (value: string) => {
    return remindTimeOptions.find(option => option.value === value)?.label || '提前10分钟';
  };

  const validateTimeInput = (value: string, type: 'hour' | 'minute') => {
    const numValue = parseInt(value) || 0;
    if (type === 'hour') {
      return Math.max(0, Math.min(23, numValue)).toString();
    } else {
      return Math.max(0, Math.min(59, numValue)).toString();
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* 顶部导航栏 */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
          <FontAwesome6 name="arrow-left" size={18} color="#1f2937" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>添加计划</Text>
        <TouchableOpacity style={styles.saveButton} onPress={handleSavePress}>
          <Text style={styles.saveButtonText}>保存</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.formContainer}>
          {/* 计划类型选择 */}
          <View style={styles.section}>
            <Text style={styles.sectionLabel}>计划类型</Text>
            <View style={styles.planTypeGrid}>
              {planTypes.map((type) => (
                <TouchableOpacity
                  key={type.id}
                  style={[
                    styles.planTypeItem,
                    formData.type === type.id && styles.planTypeItemSelected,
                  ]}
                  onPress={() => handlePlanTypeSelect(type.id as FormData['type'])}
                >
                  <View style={[styles.planTypeIcon, { backgroundColor: `${type.color}1A` }]}>
                    <FontAwesome6 name={type.icon} size={18} color={type.color} />
                  </View>
                  <Text style={styles.planTypeLabel}>{type.label}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* 计划名称 */}
          <View style={styles.section}>
            <Text style={styles.sectionLabel}>计划名称</Text>
            <TextInput
              style={styles.textInput}
              placeholder="请输入计划名称"
              placeholderTextColor="#6b7280"
              value={formData.name}
              onChangeText={(text) => setFormData(prev => ({ ...prev, name: text }))}
              maxLength={50}
            />
          </View>

          {/* 时间设置 */}
          <View style={styles.section}>
            <Text style={styles.sectionLabel}>时间设置</Text>
            
            <View style={styles.timeItem}>
              <Text style={styles.timeLabel}>开始时间</Text>
              <TouchableOpacity style={styles.timeButton} onPress={() => handleTimeSelect('start')}>
                <Text style={styles.timeButtonText}>{formData.startTime}</Text>
                <FontAwesome6 name="chevron-right" size={14} color="#6b7280" />
              </TouchableOpacity>
            </View>

            <View style={styles.timeItem}>
              <Text style={styles.timeLabel}>结束时间</Text>
              <TouchableOpacity style={styles.timeButton} onPress={() => handleTimeSelect('end')}>
                <Text style={styles.timeButtonText}>{formData.endTime}</Text>
                <FontAwesome6 name="chevron-right" size={14} color="#6b7280" />
              </TouchableOpacity>
            </View>
          </View>

          {/* 重复周期 */}
          <View style={styles.section}>
            <Text style={styles.sectionLabel}>重复周期</Text>
            <TouchableOpacity style={styles.selectButton} onPress={handleRepeatSelect}>
              <Text style={styles.selectButtonText}>{getRepeatLabel(formData.repeat)}</Text>
              <FontAwesome6 name="chevron-right" size={14} color="#6b7280" />
            </TouchableOpacity>
          </View>

          {/* 提醒设置 */}
          <View style={styles.section}>
            <Text style={styles.sectionLabel}>提醒设置</Text>
            
            <View style={styles.timeItem}>
              <Text style={styles.timeLabel}>提醒时间</Text>
              <TouchableOpacity style={styles.selectButton} onPress={handleRemindTimeSelect}>
                <Text style={styles.selectButtonText}>{getRemindTimeLabel(formData.remindTime)}</Text>
                <FontAwesome6 name="chevron-right" size={14} color="#6b7280" />
              </TouchableOpacity>
            </View>

            <View style={styles.reminderMethodSection}>
              <Text style={styles.timeLabel}>提醒方式</Text>
              <View style={styles.reminderMethodGrid}>
                <TouchableOpacity
                  style={[
                    styles.reminderMethodItem,
                    formData.remindMethods.includes('notification') && styles.reminderMethodItemSelected,
                  ]}
                  onPress={() => handleRemindMethodToggle('notification')}
                >
                  <FontAwesome6
                    name="bell"
                    size={16}
                    color={formData.remindMethods.includes('notification') ? '#ffffff' : '#6b7280'}
                  />
                  <Text
                    style={[
                      styles.reminderMethodText,
                      formData.remindMethods.includes('notification') && styles.reminderMethodTextSelected,
                    ]}
                  >
                    系统通知
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={[
                    styles.reminderMethodItem,
                    formData.remindMethods.includes('vibration') && styles.reminderMethodItemSelected,
                  ]}
                  onPress={() => handleRemindMethodToggle('vibration')}
                >
                  <FontAwesome6
                    name="mobile-screen"
                    size={16}
                    color={formData.remindMethods.includes('vibration') ? '#ffffff' : '#6b7280'}
                  />
                  <Text
                    style={[
                      styles.reminderMethodText,
                      formData.remindMethods.includes('vibration') && styles.reminderMethodTextSelected,
                    ]}
                  >
                    震动
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* 时间选择器模态框 */}
      <Modal
        visible={isTimeModalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setIsTimeModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.timeModalContent}>
            <View style={styles.modalHeader}>
              <TouchableOpacity onPress={() => setIsTimeModalVisible(false)}>
                <Text style={styles.modalCancelText}>取消</Text>
              </TouchableOpacity>
              <Text style={styles.modalTitle}>选择时间</Text>
              <TouchableOpacity onPress={handleTimeConfirm}>
                <Text style={styles.modalConfirmText}>确定</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.timePicker}>
              <TextInput
                style={styles.timeInput}
                value={tempTime.hour}
                onChangeText={(text) => {
                  const validated = validateTimeInput(text, 'hour');
                  setTempTime(prev => ({ ...prev, hour: validated }));
                }}
                keyboardType="numeric"
                maxLength={2}
              />
              <Text style={styles.timeSeparator}>:</Text>
              <TextInput
                style={styles.timeInput}
                value={tempTime.minute}
                onChangeText={(text) => {
                  const validated = validateTimeInput(text, 'minute');
                  setTempTime(prev => ({ ...prev, minute: validated }));
                }}
                keyboardType="numeric"
                maxLength={2}
              />
            </View>
          </View>
        </View>
      </Modal>

      {/* 重复周期选择器模态框 */}
      <Modal
        visible={isRepeatModalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setIsRepeatModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <TouchableOpacity onPress={() => setIsRepeatModalVisible(false)}>
                <Text style={styles.modalCancelText}>取消</Text>
              </TouchableOpacity>
              <Text style={styles.modalTitle}>重复周期</Text>
              <TouchableOpacity onPress={handleRepeatConfirm}>
                <Text style={styles.modalConfirmText}>确定</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.optionsList}>
              {repeatOptions.map((option) => (
                <TouchableOpacity
                  key={option.value}
                  style={[
                    styles.optionItem,
                    selectedRepeat === option.value && styles.optionItemSelected,
                  ]}
                  onPress={() => setSelectedRepeat(option.value)}
                >
                  <Text style={styles.optionText}>{option.label}</Text>
                  <FontAwesome6
                    name="check"
                    size={16}
                    color={selectedRepeat === option.value ? '#02f2ce' : 'transparent'}
                  />
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </View>
      </Modal>

      {/* 提醒时间选择器模态框 */}
      <Modal
        visible={isRemindTimeModalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setIsRemindTimeModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <TouchableOpacity onPress={() => setIsRemindTimeModalVisible(false)}>
                <Text style={styles.modalCancelText}>取消</Text>
              </TouchableOpacity>
              <Text style={styles.modalTitle}>提醒时间</Text>
              <TouchableOpacity onPress={handleRemindTimeConfirm}>
                <Text style={styles.modalConfirmText}>确定</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.optionsList}>
              {remindTimeOptions.map((option) => (
                <TouchableOpacity
                  key={option.value}
                  style={[
                    styles.optionItem,
                    selectedRemindTime === option.value && styles.optionItemSelected,
                  ]}
                  onPress={() => setSelectedRemindTime(option.value)}
                >
                  <Text style={styles.optionText}>{option.label}</Text>
                  <FontAwesome6
                    name="check"
                    size={16}
                    color={selectedRemindTime === option.value ? '#02f2ce' : 'transparent'}
                  />
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default PlanAddScreen;

