

import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Alert, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { FontAwesome6 } from '@expo/vector-icons';
import Svg, { Circle } from 'react-native-svg';
import styles from './styles';

type ViewMode = 'month' | 'week' | 'day';

interface CalendarDay {
  day: number;
  isToday: boolean;
  isCheckedIn: boolean;
  isMissed: boolean;
  isFuture: boolean;
  isInCurrentMonth: boolean;
}

interface CheckinDetail {
  id: string;
  title: string;
  category: string;
  icon: string;
  iconColor: string;
  isCompleted: boolean;
}

const CheckinHistoryScreen = () => {
  const router = useRouter();
  const [currentViewMode, setCurrentViewMode] = useState<ViewMode>('month');
  const [currentCalendarTitle, setCurrentCalendarTitle] = useState('2024年1月');
  const [selectedDate, setSelectedDate] = useState(15);
  const [isLoading, setIsLoading] = useState(false);

  // 连续打卡数据
  const [currentStreakCount] = useState(12);
  const [totalCheckinsCount] = useState(156);
  const [checkinRatePercentage] = useState(85);
  const [bestStreakCount] = useState(28);

  // 日历数据
  const [calendarDaysData] = useState<CalendarDay[]>(generateCalendarDays());

  // 打卡详情数据
  const [checkinDetailsData] = useState<CheckinDetail[]>([
    {
      id: '1',
      title: '英语四级词汇',
      category: '学习',
      icon: 'book',
      iconColor: '#02f2ce',
      isCompleted: true,
    },
    {
      id: '2',
      title: '晨练 - 俯卧撑',
      category: '训练',
      icon: 'dumbbell',
      iconColor: '#00f289',
      isCompleted: true,
    },
    {
      id: '3',
      title: '每日饮水',
      category: '健康',
      icon: 'droplet',
      iconColor: '#0296f2e6',
      isCompleted: true,
    },
  ]);

  useEffect(() => {
    // 页面加载时的初始化逻辑
    updateCalendarTitle();
  }, [currentViewMode]);

  const handleBackButtonPress = () => {
    if (router.canGoBack()) {
      router.back();
    }
  };

  const handleViewModeChange = (viewMode: ViewMode) => {
    setCurrentViewMode(viewMode);
    updateCalendarTitle();
  };

  const updateCalendarTitle = () => {
    switch (currentViewMode) {
      case 'month':
        setCurrentCalendarTitle('2024年1月');
        break;
      case 'week':
        setCurrentCalendarTitle('第3周 (1月15日-21日)');
        break;
      case 'day':
        setCurrentCalendarTitle('2024年1月15日');
        break;
    }
  };

  const handlePreviousPeriodPress = () => {
    setIsLoading(true);
    // 模拟加载
    setTimeout(() => {
      setIsLoading(false);
      Alert.alert('提示', '切换到上一周期');
    }, 500);
  };

  const handleNextPeriodPress = () => {
    setIsLoading(true);
    // 模拟加载
    setTimeout(() => {
      setIsLoading(false);
      Alert.alert('提示', '切换到下一周期');
    }, 500);
  };

  const handleCalendarDayPress = (dayData: CalendarDay) => {
    if (!dayData.isFuture && dayData.isInCurrentMonth) {
      setSelectedDate(dayData.day);
      Alert.alert('日期详情', `1月${dayData.day}日的打卡详情`);
    }
  };

  const renderProgressRing = () => {
    const radius = 40;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (checkinRatePercentage / 100) * circumference;

    return (
      <View style={styles.progressRingContainer}>
        <Svg width={64} height={64} style={styles.progressRing}>
          <Circle
            cx={32}
            cy={32}
            r={radius}
            stroke="#f3f4f6"
            strokeWidth={4}
            fill="none"
          />
          <Circle
            cx={32}
            cy={32}
            r={radius}
            stroke="#00f289"
            strokeWidth={4}
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            transform="rotate(-90 32 32)"
          />
        </Svg>
        <View style={styles.progressRingTextContainer}>
          <Text style={styles.progressRingText}>{currentStreakCount}</Text>
        </View>
      </View>
    );
  };

  const renderCalendarDay = (dayData: CalendarDay, index: number) => {
    const dayStyle = [
      styles.calendarDay,
      dayData.isToday && styles.calendarDayToday,
      !dayData.isInCurrentMonth && styles.calendarDayInactive,
      dayData.isFuture && styles.calendarDayFuture,
    ];

    const dayTextStyle = [
      styles.calendarDayText,
      dayData.isToday && styles.calendarDayTodayText,
      !dayData.isInCurrentMonth && styles.calendarDayInactiveText,
    ];

    return (
      <TouchableOpacity
        key={index}
        style={dayStyle}
        onPress={() => handleCalendarDayPress(dayData)}
        disabled={!dayData.isInCurrentMonth || dayData.isFuture}
      >
        <Text style={dayTextStyle}>{dayData.day}</Text>
        {dayData.isInCurrentMonth && (
          <View style={[
            styles.calendarDayIndicator,
            dayData.isCheckedIn && styles.calendarDayIndicatorCheckedIn,
            dayData.isMissed && styles.calendarDayIndicatorMissed,
          ]} />
        )}
      </TouchableOpacity>
    );
  };

  const renderCheckinDetail = (detail: CheckinDetail) => (
    <View key={detail.id} style={styles.checkinDetailItem}>
      <View style={styles.checkinDetailLeft}>
        <View style={[styles.checkinDetailIconContainer, { backgroundColor: `${detail.iconColor}1A` }]}>
          <FontAwesome6 name={detail.icon} size={14} color={detail.iconColor} />
        </View>
        <View style={styles.checkinDetailTextContainer}>
          <Text style={styles.checkinDetailTitle}>{detail.title}</Text>
          <Text style={styles.checkinDetailCategory}>{detail.category}</Text>
        </View>
      </View>
      <View style={styles.checkinDetailRight}>
        <View style={styles.checkinDetailStatusContainer}>
          <FontAwesome6 name="check" size={10} color="#ffffff" />
        </View>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* 顶部导航栏 */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton} onPress={handleBackButtonPress}>
            <FontAwesome6 name="arrow-left" size={18} color="#1f2937" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>打卡记录</Text>
          <View style={styles.headerPlaceholder} />
        </View>

        {/* 连续打卡统计 */}
        <View style={styles.streakSection}>
          <View style={styles.streakCard}>
            <View style={styles.streakHeader}>
              <View style={styles.streakHeaderLeft}>
                <Text style={styles.streakTitle}>连续打卡</Text>
                <Text style={styles.streakSubtitle}>坚持就是胜利</Text>
              </View>
              {renderProgressRing()}
            </View>
            
            <View style={styles.statsGrid}>
              <View style={styles.statItem}>
                <Text style={styles.statValue}>{totalCheckinsCount}</Text>
                <Text style={styles.statLabel}>总打卡</Text>
              </View>
              <View style={styles.statItem}>
                <Text style={[styles.statValue, { color: '#00f289' }]}>{checkinRatePercentage}%</Text>
                <Text style={styles.statLabel}>打卡率</Text>
              </View>
              <View style={styles.statItem}>
                <Text style={[styles.statValue, { color: '#0296f2e6' }]}>{bestStreakCount}</Text>
                <Text style={styles.statLabel}>最长连续</Text>
              </View>
            </View>
          </View>
        </View>

        {/* 视图切换 */}
        <View style={styles.viewSwitcherSection}>
          <View style={styles.viewTabs}>
            <TouchableOpacity
              style={[
                styles.viewTab,
                currentViewMode === 'month' ? styles.viewTabActive : styles.viewTabInactive,
              ]}
              onPress={() => handleViewModeChange('month')}
            >
              <Text style={[
                styles.viewTabText,
                currentViewMode === 'month' ? styles.viewTabTextActive : styles.viewTabTextInactive,
              ]}>
                月视图
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.viewTab,
                currentViewMode === 'week' ? styles.viewTabActive : styles.viewTabInactive,
              ]}
              onPress={() => handleViewModeChange('week')}
            >
              <Text style={[
                styles.viewTabText,
                currentViewMode === 'week' ? styles.viewTabTextActive : styles.viewTabTextInactive,
              ]}>
                周视图
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.viewTab,
                currentViewMode === 'day' ? styles.viewTabActive : styles.viewTabInactive,
              ]}
              onPress={() => handleViewModeChange('day')}
            >
              <Text style={[
                styles.viewTabText,
                currentViewMode === 'day' ? styles.viewTabTextActive : styles.viewTabTextInactive,
              ]}>
                日视图
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* 日历视图 */}
        <View style={styles.calendarSection}>
          <View style={styles.calendarCard}>
            <View style={styles.calendarHeader}>
              <Text style={styles.calendarTitle}>{currentCalendarTitle}</Text>
              <View style={styles.calendarNav}>
                <TouchableOpacity style={styles.calendarNavButton} onPress={handlePreviousPeriodPress}>
                  <FontAwesome6 name="chevron-left" size={12} color="#6b7280" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.calendarNavButton} onPress={handleNextPeriodPress}>
                  <FontAwesome6 name="chevron-right" size={12} color="#6b7280" />
                </TouchableOpacity>
              </View>
            </View>
            
            {/* 星期标题 */}
            <View style={styles.weekdaysContainer}>
              {['日', '一', '二', '三', '四', '五', '六'].map((weekday, index) => (
                <View key={index} style={styles.weekdayItem}>
                  <Text style={styles.weekdayText}>{weekday}</Text>
                </View>
              ))}
            </View>
            
            {/* 日期网格 */}
            <View style={styles.calendarGrid}>
              {calendarDaysData.map((dayData, index) => renderCalendarDay(dayData, index))}
            </View>
            
            {/* 图例 */}
            <View style={styles.calendarLegend}>
              <View style={styles.legendItem}>
                <View style={[styles.legendDot, { backgroundColor: '#00f289' }]} />
                <Text style={styles.legendText}>已打卡</Text>
              </View>
              <View style={styles.legendItem}>
                <View style={[styles.legendDot, { backgroundColor: '#ef4444' }]} />
                <Text style={styles.legendText}>未打卡</Text>
              </View>
              <View style={styles.legendItem}>
                <View style={[styles.legendDot, { backgroundColor: '#02f2ce' }]} />
                <Text style={styles.legendText}>今天</Text>
              </View>
            </View>
          </View>
        </View>

        {/* 打卡详情 */}
        <View style={styles.checkinDetailsSection}>
          <View style={styles.detailsCard}>
            <Text style={styles.detailsTitle}>今日打卡详情</Text>
            <View style={styles.detailsList}>
              {checkinDetailsData.map(renderCheckinDetail)}
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

// 生成日历数据的辅助函数
function generateCalendarDays(): CalendarDay[] {
  const daysInMonth = 31;
  const startDayOfWeek = 1; // 1月1日是星期一
  const today = 15;
  const calendarDays: CalendarDay[] = [];

  // 上个月的日期
  const prevMonthDays = startDayOfWeek;
  for (let i = prevMonthDays; i > 0; i--) {
    calendarDays.push({
      day: 31 - i + 1,
      isToday: false,
      isCheckedIn: false,
      isMissed: false,
      isFuture: false,
      isInCurrentMonth: false,
    });
  }

  // 当前月的日期
  const checkinStatus = {
    1: { isCheckedIn: true, isMissed: false },
    2: { isCheckedIn: true, isMissed: false },
    3: { isCheckedIn: false, isMissed: true },
    4: { isCheckedIn: true, isMissed: false },
    5: { isCheckedIn: true, isMissed: false },
    6: { isCheckedIn: true, isMissed: false },
    7: { isCheckedIn: true, isMissed: false },
    8: { isCheckedIn: false, isMissed: true },
    9: { isCheckedIn: true, isMissed: false },
    10: { isCheckedIn: true, isMissed: false },
    11: { isCheckedIn: true, isMissed: false },
    12: { isCheckedIn: true, isMissed: false },
    13: { isCheckedIn: true, isMissed: false },
    14: { isCheckedIn: true, isMissed: false },
    15: { isCheckedIn: true, isMissed: false },
  };

  for (let day = 1; day <= daysInMonth; day++) {
    const status = checkinStatus[day as keyof typeof checkinStatus] || { isCheckedIn: false, isMissed: false };
    calendarDays.push({
      day,
      isToday: day === today,
      isCheckedIn: status.isCheckedIn,
      isMissed: status.isMissed,
      isFuture: day > today,
      isInCurrentMonth: true,
    });
  }

  // 下个月的日期
  const totalCells = 42; // 6 weeks * 7 days
  const remainingCells = totalCells - calendarDays.length;
  for (let day = 1; day <= remainingCells; day++) {
    calendarDays.push({
      day,
      isToday: false,
      isCheckedIn: false,
      isMissed: false,
      isFuture: false,
      isInCurrentMonth: false,
    });
  }

  return calendarDays;
}

export default CheckinHistoryScreen;

