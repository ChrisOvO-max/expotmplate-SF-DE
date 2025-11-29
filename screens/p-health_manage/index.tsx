

import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { FontAwesome6 } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './styles';

const HealthManagePage = () => {
  const router = useRouter();

  const handleWaterReminderPress = () => {
    router.push('/p-water_reminder_settings');
  };

  const handleDietRecordPress = () => {
    router.push('/p-diet_record');
  };

  const handleSleepManagementPress = () => {
    router.push('/p-sleep_reminder_settings');
  };

  const handleHabitReminderPress = () => {
    router.push('/p-habit_reminder_settings');
  };

  const handleWaterOverviewPress = () => {
    router.push('/p-water_reminder_settings');
  };

  const handleSleepOverviewPress = () => {
    router.push('/p-sleep_record');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* 顶部标题区域 */}
        <LinearGradient
          colors={['rgba(2, 242, 206, 0.1)', 'rgba(0, 242, 137, 0.1)']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.headerGradient}
        >
          <View style={styles.headerDecoration1} />
          <View style={styles.headerDecoration2} />
          <View style={styles.headerContent}>
            <View style={styles.titleRow}>
              <FontAwesome6 name="heart" style={styles.titleIcon} />
              <Text style={styles.pageTitle}>健康管理</Text>
            </View>
            <Text style={styles.pageSubtitle}>关注您的健康，养成良好习惯</Text>
          </View>
        </LinearGradient>

        {/* 今日健康概览 */}
        <View style={styles.overviewSection}>
          <Text style={styles.sectionTitle}>今日概览</Text>
          <View style={styles.overviewGrid}>
            <TouchableOpacity style={styles.overviewCard} onPress={handleWaterOverviewPress}>
              <View style={styles.overviewCardHeader}>
                <View style={styles.overviewIconContainer}>
                  <FontAwesome6 name="droplet" style={styles.overviewIcon} />
                </View>
                <View style={styles.completedBadge}>
                  <Text style={styles.completedBadgeText}>已完成</Text>
                </View>
              </View>
              <Text style={styles.overviewCardTitle}>水分摄入</Text>
              <Text style={styles.overviewCardValue}>2000ml</Text>
              <Text style={styles.overviewCardSubtitle}>目标: 2000ml</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.overviewCard} onPress={handleSleepOverviewPress}>
              <View style={styles.overviewCardHeader}>
                <View style={[styles.overviewIconContainer, styles.sleepIconContainer]}>
                  <FontAwesome6 name="moon" style={styles.sleepIcon} />
                </View>
                <View style={styles.inProgressBadge}>
                  <Text style={styles.inProgressBadgeText}>进行中</Text>
                </View>
              </View>
              <Text style={styles.overviewCardTitle}>睡眠质量</Text>
              <Text style={[styles.overviewCardValue, styles.sleepValue]}>7.5h</Text>
              <Text style={styles.overviewCardSubtitle}>昨晚睡眠</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* 健康功能列表 */}
        <View style={styles.functionsSection}>
          <Text style={styles.sectionTitle}>健康管理</Text>

          {/* 水分提醒 */}
          <TouchableOpacity style={styles.functionItem} onPress={handleWaterReminderPress}>
            <View style={styles.functionItemContent}>
              <View style={styles.functionItemLeft}>
                <View style={[styles.functionIconContainer, styles.waterIconContainer]}>
                  <FontAwesome6 name="droplet" style={styles.waterIcon} />
                </View>
                <View style={styles.functionItemText}>
                  <Text style={styles.functionItemTitle}>水分提醒</Text>
                  <Text style={styles.functionItemSubtitle}>设置每日喝水目标和提醒</Text>
                  <View style={styles.progressBarContainer}>
                    <View style={styles.progressBarBackground}>
                      <View style={styles.progressBarFill} />
                    </View>
                  </View>
                  <Text style={styles.progressText}>今日已完成 2000/2000 ml</Text>
                </View>
              </View>
              <FontAwesome6 name="chevron-right" style={styles.chevronIcon} />
            </View>
          </TouchableOpacity>

          {/* 饮食记录 */}
          <TouchableOpacity style={styles.functionItem} onPress={handleDietRecordPress}>
            <View style={styles.functionItemContent}>
              <View style={styles.functionItemLeft}>
                <View style={[styles.functionIconContainer, styles.dietIconContainer]}>
                  <FontAwesome6 name="utensils" style={styles.dietIcon} />
                </View>
                <View style={styles.functionItemText}>
                  <Text style={styles.functionItemTitle}>饮食记录</Text>
                  <Text style={styles.functionItemSubtitle}>记录每日三餐和加餐</Text>
                  <View style={styles.dietTagsContainer}>
                    <View style={styles.completedTag}>
                      <Text style={styles.completedTagText}>早餐</Text>
                    </View>
                    <View style={styles.completedTag}>
                      <Text style={styles.completedTagText}>午餐</Text>
                    </View>
                    <View style={styles.pendingTag}>
                      <Text style={styles.pendingTagText}>晚餐</Text>
                    </View>
                  </View>
                </View>
              </View>
              <FontAwesome6 name="chevron-right" style={styles.chevronIcon} />
            </View>
          </TouchableOpacity>

          {/* 睡眠管理 */}
          <TouchableOpacity style={styles.functionItem} onPress={handleSleepManagementPress}>
            <View style={styles.functionItemContent}>
              <View style={styles.functionItemLeft}>
                <View style={[styles.functionIconContainer, styles.sleepIconContainer]}>
                  <FontAwesome6 name="moon" style={styles.sleepIcon} />
                </View>
                <View style={styles.functionItemText}>
                  <Text style={styles.functionItemTitle}>睡眠管理</Text>
                  <Text style={styles.functionItemSubtitle}>睡眠提醒、数据同步和记录</Text>
                  <View style={styles.sleepTagsContainer}>
                    <View style={styles.sleepTag}>
                      <Text style={styles.sleepTagText}>睡眠提醒已开启</Text>
                    </View>
                    <View style={styles.completedTag}>
                      <Text style={styles.completedTagText}>数据已同步</Text>
                    </View>
                  </View>
                </View>
              </View>
              <FontAwesome6 name="chevron-right" style={styles.chevronIcon} />
            </View>
          </TouchableOpacity>

          {/* 生活习惯提醒 */}
          <TouchableOpacity style={styles.functionItem} onPress={handleHabitReminderPress}>
            <View style={styles.functionItemContent}>
              <View style={styles.functionItemLeft}>
                <View style={[styles.functionIconContainer, styles.habitIconContainer]}>
                  <FontAwesome6 name="bell" style={styles.habitIcon} />
                </View>
                <View style={styles.functionItemText}>
                  <Text style={styles.functionItemTitle}>生活习惯提醒</Text>
                  <Text style={styles.functionItemSubtitle}>桌面收拾、衣物整理等习惯</Text>
                  <View style={styles.habitTagsContainer}>
                    <View style={styles.completedTag}>
                      <Text style={styles.completedTagText}>5个活跃提醒</Text>
                    </View>
                  </View>
                </View>
              </View>
              <FontAwesome6 name="chevron-right" style={styles.chevronIcon} />
            </View>
          </TouchableOpacity>
        </View>

        {/* 健康小贴士 */}
        <View style={styles.tipsSection}>
          <LinearGradient
            colors={['rgba(2, 242, 206, 0.1)', 'rgba(0, 242, 137, 0.1)']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.tipCard}
          >
            <View style={styles.tipContent}>
              <View style={styles.tipIconContainer}>
                <FontAwesome6 name="lightbulb" style={styles.tipIcon} />
              </View>
              <View style={styles.tipTextContainer}>
                <Text style={styles.tipTitle}>今日健康小贴士</Text>
                <Text style={styles.tipDescription}>
                  保持充足的水分摄入有助于新陈代谢和皮肤健康。建议每2小时喝一杯水，不要等到口渴时才喝水。
                </Text>
              </View>
            </View>
          </LinearGradient>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HealthManagePage;

