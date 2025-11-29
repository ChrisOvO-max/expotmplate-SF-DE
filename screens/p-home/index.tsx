

import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, Alert, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { FontAwesome6 } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './styles';

interface PlanItem {
  id: string;
  title: string;
  time: string;
  icon: string;
  iconColor: string;
  progress: number;
  completed: boolean;
  progressText: string;
}

interface CalendarDay {
  date: string;
  day: number;
  isCurrentMonth: boolean;
  isToday: boolean;
  hasPlan: boolean;
}

const HomeScreen: React.FC = () => {
  const router = useRouter();
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [calendarDays, setCalendarDays] = useState<CalendarDay[]>([]);
  const [plans, setPlans] = useState<PlanItem[]>([
    {
      id: 'plan_001',
      title: '英语四级词汇',
      time: '09:00 - 10:00',
      icon: 'book',
      iconColor: '#02f2ce',
      progress: 100,
      completed: true,
      progressText: '已完成 30/30 个单词',
    },
    {
      id: 'plan_002',
      title: '晨练 - 俯卧撑',
      time: '07:00 - 07:30',
      icon: 'dumbbell',
      iconColor: '#00f289',
      progress: 100,
      completed: true,
      progressText: '已完成 3 组 × 15 次',
    },
    {
      id: 'plan_003',
      title: '每日饮水',
      time: '全天',
      icon: 'droplet',
      iconColor: '#0296f2e6',
      progress: 100,
      completed: true,
      progressText: '已完成 2000/2000 ml',
    },
    {
      id: 'plan_004',
      title: '番茄钟专注',
      time: '14:00 - 16:00',
      icon: 'clock',
      iconColor: '#9ca3af',
      progress: 0,
      completed: false,
      progressText: '0/4 个番茄钟',
    },
    {
      id: 'plan_005',
      title: '早睡提醒',
      time: '22:00',
      icon: 'moon',
      iconColor: '#9ca3af',
      progress: 0,
      completed: false,
      progressText: '待完成',
    },
  ]);

  useEffect(() => {
    generateCalendarDays();
  }, [currentDate]);

  const generateCalendarDays = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const today = new Date();
    
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const startDate = new Date(firstDay);
    startDate.setDate(firstDay.getDate() - firstDay.getDay());
    
    const daysInMonth = lastDay.getDate();
    const daysToGenerate = 42; // 6 weeks * 7 days
    
    const days: CalendarDay[] = [];
    
    for (let i = 0; i < daysToGenerate; i++) {
      const date = new Date(startDate);
      date.setDate(startDate.getDate() + i);
      
      const isCurrentMonth = date.getMonth() === month;
      const isToday = date.toDateString() === today.toDateString();
      const hasPlan = checkIfDateHasPlan(date);
      
      days.push({
        date: date.toISOString().split('T')[0],
        day: date.getDate(),
        isCurrentMonth,
        isToday,
        hasPlan,
      });
    }
    
    setCalendarDays(days);
  };

  const checkIfDateHasPlan = (date: Date): boolean => {
    const planDates = ['2024-01-02', '2024-01-04', '2024-01-08', '2024-01-11', '2024-01-16', '2024-01-18', '2024-01-22', '2024-01-25', '2024-01-29'];
    const dateString = date.toISOString().split('T')[0];
    return planDates.includes(dateString);
  };

  const handlePrevMonth = () => {
    const newDate = new Date(currentDate);
    newDate.setMonth(currentDate.getMonth() - 1);
    setCurrentDate(newDate);
  };

  const handleNextMonth = () => {
    const newDate = new Date(currentDate);
    newDate.setMonth(currentDate.getMonth() + 1);
    setCurrentDate(newDate);
  };

  const handleCalendarDayPress = (date: string) => {
    router.push(`/p-schedule_calendar?date=${date}`);
  };

  const handleUserProfilePress = () => {
    router.push('/p-user_profile');
  };

  const handleAddPlanPress = () => {
    router.push('/p-plan_add');
  };

  const handlePlanItemPress = (planId: string) => {
    router.push(`/p-plan_detail?plan_id=${planId}`);
  };

  const handlePlanCheckPress = (planId: string) => {
    router.push(`/p-checkin_success?plan_id=${planId}`);
  };

  const handleTomatoQuickPress = () => {
    router.push('/p-tomato_settings');
  };

  const handleMusicQuickPress = () => {
    router.push('/p-music_library');
  };

  const getGreeting = (): string => {
    const hour = new Date().getHours();
    if (hour < 12) return '早上好';
    if (hour < 18) return '下午好';
    return '晚上好';
  };

  const getCurrentDateText = (): string => {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const day = now.getDate();
    const weekdays = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
    const weekday = weekdays[now.getDay()];
    return `${year}年${month}月${day}日 ${weekday}`;
  };

  const completedPlansCount = plans.filter(plan => plan.completed).length;
  const totalPlansCount = plans.length;

  const renderCalendarDay = (day: CalendarDay, index: number) => (
    <TouchableOpacity
      key={index}
      style={[
        styles.calendarDay,
        !day.isCurrentMonth && styles.calendarDayInactive,
        day.isToday && styles.calendarDayToday,
      ]}
      onPress={() => day.isCurrentMonth && handleCalendarDayPress(day.date)}
      disabled={!day.isCurrentMonth}
    >
      <Text
        style={[
          styles.calendarDayText,
          !day.isCurrentMonth && styles.calendarDayTextInactive,
          day.isToday && styles.calendarDayTextToday,
        ]}
      >
        {day.day}
      </Text>
      {day.hasPlan && day.isCurrentMonth && <View style={styles.calendarDayDot} />}
    </TouchableOpacity>
  );

  const renderPlanItem = (plan: PlanItem) => (
    <TouchableOpacity
      key={plan.id}
      style={styles.planItem}
      onPress={() => handlePlanItemPress(plan.id)}
    >
      <View style={styles.planItemHeader}>
        <View style={styles.planItemInfo}>
          <View style={[styles.planItemIcon, { backgroundColor: `${plan.iconColor}1A` }]}>
            <FontAwesome6 name={plan.icon} size={16} color={plan.completed ? plan.iconColor : '#9ca3af'} />
          </View>
          <View style={styles.planItemDetails}>
            <Text style={styles.planItemTitle}>{plan.title}</Text>
            <Text style={styles.planItemTime}>{plan.time}</Text>
          </View>
        </View>
        <TouchableOpacity
          style={[
            styles.planItemCheck,
            plan.completed ? { backgroundColor: plan.iconColor } : styles.planItemCheckIncomplete,
          ]}
          onPress={() => handlePlanCheckPress(plan.id)}
        >
          <FontAwesome6
            name="check"
            size={10}
            color={plan.completed ? '#ffffff' : 'transparent'}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.planItemProgressContainer}>
        <View style={styles.planItemProgressBar}>
          <LinearGradient
            colors={['#02f2ce', '#00f289']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={[styles.planItemProgressFill, { width: `${plan.progress}%` }]}
          />
        </View>
        <Text style={styles.planItemProgressText}>{plan.progressText}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* 顶部用户信息区域 */}
        <LinearGradient
          colors={['rgba(2, 242, 206, 0.1)', 'rgba(0, 242, 137, 0.1)']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.userHeader}
        >
          <View style={styles.userHeaderDecoration1} />
          <View style={styles.userHeaderDecoration2} />
          <View style={styles.userInfo}>
            <View style={styles.userInfoLeft}>
              <TouchableOpacity style={styles.userAvatarContainer} onPress={handleUserProfilePress}>
                <Image
                  source={{ uri: 'https://s.coze.cn/image/4jO5PT5AcFQ/' }}
                  style={styles.userAvatar}
                />
                <View style={styles.userAvatarBadge}>
                  <FontAwesome6 name="check" size={8} color="#ffffff" />
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.userTextContainer} onPress={handleUserProfilePress}>
                <View style={styles.userGreetingContainer}>
                  <Text style={styles.userGreeting}>{getGreeting()}，小明</Text>
                  <View style={styles.userGreetingBadge}>
                    <Text style={styles.userGreetingBadgeText}>新的一天</Text>
                  </View>
                </View>
                <View style={styles.currentDateContainer}>
                  <FontAwesome6 name="calendar-days" size={12} color="#6b7280" />
                  <Text style={styles.currentDate}>{getCurrentDateText()}</Text>
                </View>
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.addPlanButton} onPress={handleAddPlanPress}>
              <LinearGradient
                colors={['#02f2ce', '#00f289']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.addPlanButtonGradient}
              >
                <FontAwesome6 name="plus" size={20} color="#ffffff" />
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </LinearGradient>

        {/* 日历视图 */}
        <View style={styles.calendarSection}>
          <View style={styles.calendarHeader}>
            <Text style={styles.calendarTitle}>
              {currentDate.getMonth() + 1}月 {currentDate.getFullYear()}
            </Text>
            <View style={styles.calendarNav}>
              <TouchableOpacity style={styles.calendarNavButton} onPress={handlePrevMonth}>
                <FontAwesome6 name="chevron-left" size={14} color="#6b7280" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.calendarNavButton} onPress={handleNextMonth}>
                <FontAwesome6 name="chevron-right" size={14} color="#6b7280" />
              </TouchableOpacity>
            </View>
          </View>

          {/* 星期标题 */}
          <View style={styles.weekdaysContainer}>
            {['日', '一', '二', '三', '四', '五', '六'].map((weekday, index) => (
              <View key={index} style={styles.weekday}>
                <Text style={styles.weekdayText}>{weekday}</Text>
              </View>
            ))}
          </View>

          {/* 日期网格 */}
          <View style={styles.calendarGrid}>
            {calendarDays.map((day, index) => renderCalendarDay(day, index))}
          </View>
        </View>

        {/* 今日计划 */}
        <View style={styles.todayPlansSection}>
          <View style={styles.plansHeader}>
            <Text style={styles.plansTitle}>今日计划</Text>
            <Text style={styles.plansCount}>
              {completedPlansCount}/{totalPlansCount} 已完成
            </Text>
          </View>
          <View style={styles.plansList}>
            {plans.map(renderPlanItem)}
          </View>
        </View>

        {/* 快捷功能 */}
        <View style={styles.quickActionsSection}>
          <Text style={styles.actionsTitle}>快捷功能</Text>
          <View style={styles.actionsGrid}>
            <TouchableOpacity style={styles.actionItem} onPress={handleTomatoQuickPress}>
              <View style={[styles.actionItemIcon, { backgroundColor: 'rgba(2, 242, 206, 0.1)' }]}>
                <FontAwesome6 name="clock" size={18} color="#02f2ce" />
              </View>
              <View style={styles.actionItemText}>
                <Text style={styles.actionItemTitle}>番茄钟</Text>
                <Text style={styles.actionItemSubtitle}>开始专注</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionItem} onPress={handleMusicQuickPress}>
              <View style={[styles.actionItemIcon, { backgroundColor: 'rgba(0, 242, 137, 0.1)' }]}>
                <FontAwesome6 name="music" size={18} color="#00f289" />
              </View>
              <View style={styles.actionItemText}>
                <Text style={styles.actionItemTitle}>轻音乐</Text>
                <Text style={styles.actionItemSubtitle}>放松心情</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        {/* 底部间距 */}
        <View style={styles.bottomSpacing} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

