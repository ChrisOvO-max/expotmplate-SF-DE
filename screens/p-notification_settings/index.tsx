

import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { FontAwesome5, FontAwesome6 } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './styles';
import ToggleSwitch from './components/ToggleSwitch';
import NotificationItem from './components/NotificationItem';

interface NotificationSettings {
  masterSwitch: boolean;
  planReminder: boolean;
  waterReminder: boolean;
  sleepReminder: boolean;
  checkinReminder: boolean;
  tomatoReminder: boolean;
  moodReminder: boolean;
  habitReminder: boolean;
}

const NotificationSettingsScreen = () => {
  const router = useRouter();
  const [notificationSettings, setNotificationSettings] = useState<NotificationSettings>({
    masterSwitch: true,
    planReminder: true,
    waterReminder: true,
    sleepReminder: true,
    checkinReminder: true,
    tomatoReminder: true,
    moodReminder: true,
    habitReminder: true,
  });

  useEffect(() => {
    loadNotificationSettings();
  }, []);

  const loadNotificationSettings = async () => {
    try {
      const savedSettings = await AsyncStorage.getItem('@notification_settings');
      if (savedSettings) {
        const parsedSettings = JSON.parse(savedSettings);
        setNotificationSettings(parsedSettings);
      }
    } catch (error) {
      console.error('加载通知设置失败:', error);
    }
  };

  const saveNotificationSettings = async (newSettings: NotificationSettings) => {
    try {
      await AsyncStorage.setItem('@notification_settings', JSON.stringify(newSettings));
    } catch (error) {
      console.error('保存通知设置失败:', error);
    }
  };

  const handleBackPress = () => {
    if (router.canGoBack()) {
      router.back();
    }
  };

  const handleMasterSwitchChange = (isEnabled: boolean) => {
    const newSettings = {
      ...notificationSettings,
      masterSwitch: isEnabled,
      planReminder: isEnabled,
      waterReminder: isEnabled,
      sleepReminder: isEnabled,
      checkinReminder: isEnabled,
      tomatoReminder: isEnabled,
      moodReminder: isEnabled,
      habitReminder: isEnabled,
    };
    setNotificationSettings(newSettings);
    saveNotificationSettings(newSettings);
  };

  const handleNotificationItemChange = (key: keyof NotificationSettings, isEnabled: boolean) => {
    const newSettings = {
      ...notificationSettings,
      [key]: isEnabled,
    };
    setNotificationSettings(newSettings);
    saveNotificationSettings(newSettings);
  };

  const notificationItems = [
    {
      key: 'planReminder' as keyof NotificationSettings,
      title: '计划提醒',
      description: '学习、训练等计划时间提醒',
      icon: 'calendar-alt',
      iconColor: '#02f2ce',
      iconBackgroundColor: 'rgba(2, 242, 206, 0.1)',
    },
    {
      key: 'waterReminder' as keyof NotificationSettings,
      title: '水分提醒',
      description: '定时喝水提醒',
      icon: 'tint',
      iconColor: '#0296f2e6',
      iconBackgroundColor: 'rgba(2, 150, 242, 0.1)',
    },
    {
      key: 'sleepReminder' as keyof NotificationSettings,
      title: '睡眠提醒',
      description: '睡觉、起床和睡前专项提醒',
      icon: 'moon',
      iconColor: '#00f289',
      iconBackgroundColor: 'rgba(0, 242, 137, 0.1)',
    },
    {
      key: 'checkinReminder' as keyof NotificationSettings,
      title: '打卡提醒',
      description: '每日打卡提醒和连续打卡激励',
      icon: 'check-circle',
      iconColor: '#f59e0b',
      iconBackgroundColor: 'rgba(245, 158, 11, 0.1)',
    },
    {
      key: 'tomatoReminder' as keyof NotificationSettings,
      title: '番茄钟提醒',
      description: '番茄钟开始、结束提醒',
      icon: 'clock',
      iconColor: '#8b5cf6',
      iconBackgroundColor: 'rgba(139, 92, 246, 0.1)',
    },
    {
      key: 'moodReminder' as keyof NotificationSettings,
      title: '心情记录提醒',
      description: '每日心情记录提醒',
      icon: 'heart',
      iconColor: '#ec4899',
      iconBackgroundColor: 'rgba(236, 72, 153, 0.1)',
    },
    {
      key: 'habitReminder' as keyof NotificationSettings,
      title: '生活习惯提醒',
      description: '桌面收拾、衣物整理等习惯提醒',
      icon: 'star',
      iconColor: '#6366f1',
      iconBackgroundColor: 'rgba(99, 102, 241, 0.1)',
    },
  ];

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
        <Text style={styles.headerTitle}>通知设置</Text>
        <View style={styles.headerPlaceholder} />
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          {/* 总开关 */}
          <View style={styles.masterSwitchSection}>
            <View style={styles.masterSwitchContent}>
              <View style={styles.masterSwitchTextContainer}>
                <Text style={styles.masterSwitchTitle}>推送通知</Text>
                <Text style={styles.masterSwitchDescription}>开启后可接收各类提醒通知</Text>
              </View>
              <ToggleSwitch
                isEnabled={notificationSettings.masterSwitch}
                onToggle={handleMasterSwitchChange}
              />
            </View>
          </View>

          {/* 通知类型列表 */}
          <View style={styles.notificationTypesContainer}>
            {notificationItems.map((item) => (
              <NotificationItem
                key={item.key}
                title={item.title}
                description={item.description}
                icon={item.icon}
                iconColor={item.iconColor}
                iconBackgroundColor={item.iconBackgroundColor}
                isEnabled={notificationSettings[item.key]}
                onToggle={(isEnabled) => handleNotificationItemChange(item.key, isEnabled)}
                isDisabled={!notificationSettings.masterSwitch}
              />
            ))}
          </View>

          {/* 提示信息 */}
          <View style={styles.tipContainer}>
            <View style={styles.tipContent}>
              <View style={styles.tipIconContainer}>
                <FontAwesome5 name="info-circle" size={14} color="#2563eb" />
              </View>
              <View style={styles.tipTextContainer}>
                <Text style={styles.tipTitle}>关于通知</Text>
                <Text style={styles.tipDescription}>
                  您可以在系统设置中进一步管理通知权限。关闭总开关后，所有通知将被禁用。
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default NotificationSettingsScreen;

