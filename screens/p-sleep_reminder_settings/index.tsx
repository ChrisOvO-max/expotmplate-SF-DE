

import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Modal, Alert, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { FontAwesome6 } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './styles';
import SettingItem from './components/SettingItem';
import ToggleSwitch from './components/ToggleSwitch';
import TimePickerModal from './components/TimePickerModal';

interface SleepReminderSettings {
  sleepTimeEnabled: boolean;
  wakeTimeEnabled: boolean;
  bedtimeReminderEnabled: boolean;
  sleepTime: string;
  wakeTime: string;
}

const SleepReminderSettingsScreen: React.FC = () => {
  const router = useRouter();
  
  const [settings, setSettings] = useState<SleepReminderSettings>({
    sleepTimeEnabled: true,
    wakeTimeEnabled: true,
    bedtimeReminderEnabled: true,
    sleepTime: '22:00',
    wakeTime: '07:00',
  });

  const [isTimePickerVisible, setIsTimePickerVisible] = useState(false);
  const [timePickerType, setTimePickerType] = useState<'sleep' | 'wake'>('sleep');

  const handleBackPress = () => {
    if (router.canGoBack()) {
      router.back();
    }
  };

  const handleSleepTimeToggle = (enabled: boolean) => {
    setSettings(prev => ({ ...prev, sleepTimeEnabled: enabled }));
  };

  const handleWakeTimeToggle = (enabled: boolean) => {
    setSettings(prev => ({ ...prev, wakeTimeEnabled: enabled }));
  };

  const handleBedtimeReminderToggle = (enabled: boolean) => {
    setSettings(prev => ({ ...prev, bedtimeReminderEnabled: enabled }));
  };

  const handleSleepTimePress = () => {
    if (settings.sleepTimeEnabled) {
      setTimePickerType('sleep');
      setIsTimePickerVisible(true);
    }
  };

  const handleWakeTimePress = () => {
    if (settings.wakeTimeEnabled) {
      setTimePickerType('wake');
      setIsTimePickerVisible(true);
    }
  };

  const handleTimePickerConfirm = (time: string) => {
    if (timePickerType === 'sleep') {
      setSettings(prev => ({ ...prev, sleepTime: time }));
    } else {
      setSettings(prev => ({ ...prev, wakeTime: time }));
    }
    setIsTimePickerVisible(false);
  };

  const handleSleepSyncPress = () => {
    router.push('/p-sleep_data_sync');
  };

  const handleSleepRecordPress = () => {
    router.push('/p-sleep_record');
  };

  const handleSavePress = () => {
    // 模拟保存过程
    console.log('保存睡眠设置:', settings);
    
    Alert.alert(
      '保存成功',
      '睡眠提醒设置已保存',
      [
        {
          text: '确定',
          onPress: () => {
            if (router.canGoBack()) {
              router.back();
            }
          },
        },
      ]
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
        <Text style={styles.headerTitle}>睡眠提醒</Text>
        <View style={styles.headerPlaceholder} />
      </View>

      {/* 主要内容区域 */}
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* 睡觉时间设置 */}
        <SettingItem
          icon="moon"
          iconColor="#0296f2e6"
          iconBackgroundColor="rgba(2, 150, 242, 0.1)"
          title="睡觉时间"
          subtitle="设置每日睡觉时间"
          rightComponent={
            <ToggleSwitch
              value={settings.sleepTimeEnabled}
              onValueChange={handleSleepTimeToggle}
            />
          }
          bottomComponent={
            <TouchableOpacity
              style={[
                styles.timeButton,
                !settings.sleepTimeEnabled && styles.timeButtonDisabled,
              ]}
              onPress={handleSleepTimePress}
              disabled={!settings.sleepTimeEnabled}
              activeOpacity={0.7}
            >
              <LinearGradient
                colors={['#02f2ce', '#00f289']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.timeGradient}
              >
                <Text style={styles.timeDisplay}>{settings.sleepTime}</Text>
              </LinearGradient>
              <Text style={styles.timeHint}>点击设置睡觉时间</Text>
            </TouchableOpacity>
          }
        />

        {/* 起床时间设置 */}
        <SettingItem
          icon="sun"
          iconColor="#00f289"
          iconBackgroundColor="rgba(0, 242, 137, 0.1)"
          title="起床时间"
          subtitle="设置每日起床时间"
          rightComponent={
            <ToggleSwitch
              value={settings.wakeTimeEnabled}
              onValueChange={handleWakeTimeToggle}
            />
          }
          bottomComponent={
            <TouchableOpacity
              style={[
                styles.timeButton,
                !settings.wakeTimeEnabled && styles.timeButtonDisabled,
              ]}
              onPress={handleWakeTimePress}
              disabled={!settings.wakeTimeEnabled}
              activeOpacity={0.7}
            >
              <LinearGradient
                colors={['#02f2ce', '#00f289']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.timeGradient}
              >
                <Text style={styles.timeDisplay}>{settings.wakeTime}</Text>
              </LinearGradient>
              <Text style={styles.timeHint}>点击设置起床时间</Text>
            </TouchableOpacity>
          }
        />

        {/* 睡前专项提醒 */}
        <SettingItem
          icon="mobile-screen"
          iconColor="#02f2ce"
          iconBackgroundColor="rgba(2, 242, 206, 0.1)"
          title="睡前1小时不刷手机"
          subtitle="帮助改善睡眠质量的专项提醒"
          rightComponent={
            <ToggleSwitch
              value={settings.bedtimeReminderEnabled}
              onValueChange={handleBedtimeReminderToggle}
            />
          }
        />

        {/* 睡眠数据同步 */}
        <SettingItem
          icon="arrows-rotate"
          iconColor="#9333ea"
          iconBackgroundColor="rgba(147, 51, 234, 0.1)"
          title="睡眠数据同步"
          subtitle="与华为运动App同步睡眠数据"
          rightComponent={
            <TouchableOpacity
              style={styles.actionButton}
              onPress={handleSleepSyncPress}
              activeOpacity={0.7}
            >
              <LinearGradient
                colors={['#02f2ce', '#00f289']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.actionButtonGradient}
              >
                <Text style={styles.actionButtonText}>前往设置</Text>
              </LinearGradient>
            </TouchableOpacity>
          }
        />

        {/* 睡眠记录 */}
        <SettingItem
          icon="chart-line"
          iconColor="#16a34a"
          iconBackgroundColor="rgba(22, 163, 74, 0.1)"
          title="睡眠记录"
          subtitle="查看睡眠数据和分析报告"
          rightComponent={
            <TouchableOpacity
              style={styles.actionButton}
              onPress={handleSleepRecordPress}
              activeOpacity={0.7}
            >
              <LinearGradient
                colors={['#00f289', '#02f2ce']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.actionButtonGradient}
              >
                <Text style={styles.actionButtonText}>查看记录</Text>
              </LinearGradient>
            </TouchableOpacity>
          }
        />

        {/* 底部间距 */}
        <View style={styles.bottomSpacing} />
      </ScrollView>

      {/* 底部保存按钮 */}
      <View style={styles.bottomActions}>
        <TouchableOpacity
          style={styles.saveButton}
          onPress={handleSavePress}
          activeOpacity={0.8}
        >
          <LinearGradient
            colors={['#02f2ce', '#00f289']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.saveButtonGradient}
          >
            <Text style={styles.saveButtonText}>保存设置</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>

      {/* 时间选择器模态框 */}
      <TimePickerModal
        visible={isTimePickerVisible}
        title={timePickerType === 'sleep' ? '设置睡觉时间' : '设置起床时间'}
        initialTime={timePickerType === 'sleep' ? settings.sleepTime : settings.wakeTime}
        onConfirm={handleTimePickerConfirm}
        onCancel={() => setIsTimePickerVisible(false)}
      />
    </SafeAreaView>
  );
};

export default SleepReminderSettingsScreen;

