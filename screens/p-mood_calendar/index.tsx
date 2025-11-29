

import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Modal,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { FontAwesome6 } from '@expo/vector-icons';
import styles from './styles';

interface MoodData {
  mood: 'happy' | 'calm' | 'focused' | 'tired' | 'anxious';
  tasks: string[];
}

interface MoodDataMap {
  [key: string]: MoodData;
}

const MoodCalendarScreen = () => {
  const router = useRouter();
  const [currentMonth, setCurrentMonth] = useState(1);
  const [currentYear, setCurrentYear] = useState(2024);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedMoodData, setSelectedMoodData] = useState<MoodData | null>(null);

  // 模拟心情数据
  const moodData: MoodDataMap = {
    '2024-01-01': { mood: 'happy', tasks: ['英语学习', '晨练'] },
    '2024-01-02': { mood: 'calm', tasks: ['阅读', '冥想'] },
    '2024-01-03': { mood: 'focused', tasks: ['项目工作', '番茄钟专注'] },
    '2024-01-04': { mood: 'tired', tasks: ['加班', '健身'] },
    '2024-01-05': { mood: 'anxious', tasks: ['会议', '截止日期'] },
    '2024-01-06': { mood: 'happy', tasks: ['周末放松', '看电影'] },
    '2024-01-07': { mood: 'calm', tasks: ['户外活动', '阅读'] },
    '2024-01-08': { mood: 'focused', tasks: ['学习新技能', '计划制定'] },
    '2024-01-09': { mood: 'tired', tasks: ['长途出差', '汇报'] },
    '2024-01-10': { mood: 'happy', tasks: ['朋友聚会', '完成项目'] },
    '2024-01-11': { mood: 'calm', tasks: ['瑜伽', '冥想'] },
    '2024-01-12': { mood: 'focused', tasks: ['深度工作', '学习'] },
    '2024-01-13': { mood: 'anxious', tasks: ['重要考试', '压力大'] },
    '2024-01-14': { mood: 'tired', tasks: ['熬夜复习', '考试'] },
    '2024-01-15': { mood: 'happy', tasks: ['英语四级词汇学习', '晨练 - 俯卧撑', '每日饮水目标'] }
  };

  const weekdays = ['日', '一', '二', '三', '四', '五', '六'];

  const handleBackPress = () => {
    if (router.canGoBack()) {
      router.back();
    }
  };

  const handlePrevMonth = () => {
    if (currentMonth === 1) {
      setCurrentMonth(12);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 12) {
      setCurrentMonth(1);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month, 0).getDate();
  };

  const getFirstDayOfMonth = (year: number, month: number) => {
    return new Date(year, month - 1, 1).getDay();
  };

  const getDaysFromPrevMonth = (year: number, month: number) => {
    const prevMonth = month === 1 ? 12 : month - 1;
    const prevYear = month === 1 ? year - 1 : year;
    const daysInPrevMonth = getDaysInMonth(prevYear, prevMonth);
    const firstDay = getFirstDayOfMonth(year, month);
    return daysInPrevMonth - firstDay + 1;
  };

  const generateCalendarDays = () => {
    const daysInMonth = getDaysInMonth(currentYear, currentMonth);
    const firstDay = getFirstDayOfMonth(currentYear, currentMonth);
    const daysFromPrevMonth = getDaysFromPrevMonth(currentYear, currentMonth);
    const totalCells = 42; // 6 weeks * 7 days
    const daysFromNextMonth = totalCells - (firstDay + daysInMonth);

    const calendarDays: { day: number; month: number; year: number; isCurrentMonth: boolean }[] = [];

    // 上个月的日期
    for (let i = 0; i < firstDay; i++) {
      const prevMonth = currentMonth === 1 ? 12 : currentMonth - 1;
      const prevYear = currentMonth === 1 ? currentYear - 1 : currentYear;
      calendarDays.push({
        day: daysFromPrevMonth + i,
        month: prevMonth,
        year: prevYear,
        isCurrentMonth: false
      });
    }

    // 当前月的日期
    for (let i = 1; i <= daysInMonth; i++) {
      calendarDays.push({
        day: i,
        month: currentMonth,
        year: currentYear,
        isCurrentMonth: true
      });
    }

    // 下个月的日期
    for (let i = 1; i <= daysFromNextMonth; i++) {
      const nextMonth = currentMonth === 12 ? 1 : currentMonth + 1;
      const nextYear = currentMonth === 12 ? currentYear + 1 : currentYear;
      calendarDays.push({
        day: i,
        month: nextMonth,
        year: nextYear,
        isCurrentMonth: false
      });
    }

    return calendarDays;
  };

  const isToday = (year: number, month: number, day: number) => {
    const today = new Date();
    return today.getFullYear() === year && today.getMonth() + 1 === month && today.getDate() === day;
  };

  const getMoodForDate = (year: number, month: number, day: number) => {
    const dateStr = `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    return moodData[dateStr];
  };

  const handleDatePress = (year: number, month: number, day: number) => {
    const dateStr = `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    const moodInfo = getMoodForDate(year, month, day);
    
    if (moodInfo) {
      setSelectedDate(dateStr);
      setSelectedMoodData(moodInfo);
      setIsModalVisible(true);
    }
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
    setSelectedDate('');
    setSelectedMoodData(null);
  };

  const getMoodColor = (mood: string) => {
    switch (mood) {
      case 'happy': return '#fbbf24';
      case 'calm': return '#3b82f6';
      case 'focused': return '#10b981';
      case 'tired': return '#6b7280';
      case 'anxious': return '#ef4444';
      default: return '#d1d5db';
    }
  };

  const getMoodName = (mood: string) => {
    switch (mood) {
      case 'happy': return '开心';
      case 'calm': return '平静';
      case 'focused': return '专注';
      case 'tired': return '疲惫';
      case 'anxious': return '焦虑';
      default: return '未记录';
    }
  };

  const getMoodIcon = (mood: string) => {
    switch (mood) {
      case 'happy': return 'face-smile';
      case 'calm': return 'leaf';
      case 'focused': return 'bullseye';
      case 'tired': return 'bed';
      case 'anxious': return 'triangle-exclamation';
      default: return 'question';
    }
  };

  const formatDateForDisplay = (dateStr: string) => {
    const date = new Date(dateStr);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${year}年${month}月${day}日`;
  };

  const calendarDays = generateCalendarDays();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* 顶部导航 */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
            <FontAwesome6 name="arrow-left" size={18} color="#1f2937" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>心情日历</Text>
          <View style={styles.headerPlaceholder} />
        </View>

        {/* 月份导航 */}
        <View style={styles.monthNavContainer}>
          <TouchableOpacity style={styles.monthNavButton} onPress={handlePrevMonth}>
            <FontAwesome6 name="chevron-left" size={16} color="#6b7280" />
          </TouchableOpacity>
          <Text style={styles.monthNavTitle}>{currentYear}年{currentMonth}月</Text>
          <TouchableOpacity style={styles.monthNavButton} onPress={handleNextMonth}>
            <FontAwesome6 name="chevron-right" size={16} color="#6b7280" />
          </TouchableOpacity>
        </View>

        {/* 日历视图 */}
        <View style={styles.calendarContainer}>
          {/* 星期标题 */}
          <View style={styles.weekdaysContainer}>
            {weekdays.map((weekday, index) => (
              <View key={index} style={styles.weekdayCell}>
                <Text style={styles.weekdayText}>{weekday}</Text>
              </View>
            ))}
          </View>

          {/* 日期网格 */}
          <View style={styles.calendarGrid}>
            {calendarDays.map((dayData, index) => {
              const moodInfo = getMoodForDate(dayData.year, dayData.month, dayData.day);
              const isTodayDate = isToday(dayData.year, dayData.month, dayData.day);
              const isCurrentMonth = dayData.isCurrentMonth;

              return (
                <TouchableOpacity
                  key={index}
                  style={[
                    styles.calendarDay,
                    isTodayDate && styles.todayDay,
                    !isCurrentMonth && styles.inactiveDay
                  ]}
                  onPress={() => isCurrentMonth && handleDatePress(dayData.year, dayData.month, dayData.day)}
                  disabled={!isCurrentMonth}
                >
                  <Text style={[
                    styles.calendarDayText,
                    isTodayDate && styles.todayDayText,
                    !isCurrentMonth && styles.inactiveDayText
                  ]}>
                    {dayData.day}
                  </Text>
                  {moodInfo && (
                    <View style={[
                      styles.moodIndicator,
                      { backgroundColor: getMoodColor(moodInfo.mood) }
                    ]} />
                  )}
                </TouchableOpacity>
              );
            })}
          </View>
        </View>

        {/* 心情图例 */}
        <View style={styles.legendContainer}>
          <Text style={styles.legendTitle}>心情图例</Text>
          <View style={styles.legendGrid}>
            <View style={styles.legendItem}>
              <View style={[styles.legendColor, { backgroundColor: '#fbbf24' }]} />
              <Text style={styles.legendText}>开心</Text>
            </View>
            <View style={styles.legendItem}>
              <View style={[styles.legendColor, { backgroundColor: '#3b82f6' }]} />
              <Text style={styles.legendText}>平静</Text>
            </View>
            <View style={styles.legendItem}>
              <View style={[styles.legendColor, { backgroundColor: '#10b981' }]} />
              <Text style={styles.legendText}>专注</Text>
            </View>
            <View style={styles.legendItem}>
              <View style={[styles.legendColor, { backgroundColor: '#6b7280' }]} />
              <Text style={styles.legendText}>疲惫</Text>
            </View>
            <View style={styles.legendItem}>
              <View style={[styles.legendColor, { backgroundColor: '#ef4444' }]} />
              <Text style={styles.legendText}>焦虑</Text>
            </View>
            <View style={styles.legendItem}>
              <View style={[styles.legendColor, { backgroundColor: '#d1d5db' }]} />
              <Text style={styles.legendText}>未记录</Text>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* 心情详情弹窗 */}
      <Modal
        visible={isModalVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={handleCloseModal}
      >
        <TouchableOpacity 
          style={styles.modalOverlay} 
          activeOpacity={1} 
          onPress={handleCloseModal}
        >
          <View style={styles.modalContainer}>
            <TouchableOpacity activeOpacity={1}>
              <View style={styles.modalContent}>
                <View style={styles.modalHeader}>
                  <View style={[
                    styles.modalMoodIcon,
                    { backgroundColor: selectedMoodData ? getMoodColor(selectedMoodData.mood) : '#fbbf24' }
                  ]}>
                    <FontAwesome6 
                      name={selectedMoodData ? getMoodIcon(selectedMoodData.mood) : 'face-smile'} 
                      size={24} 
                      color="#ffffff" 
                    />
                  </View>
                </View>
                
                <Text style={styles.modalDate}>
                  {selectedDate ? formatDateForDisplay(selectedDate) : ''}
                </Text>
                <Text style={styles.modalMood}>
                  {selectedMoodData ? getMoodName(selectedMoodData.mood) : ''}
                </Text>
                
                <View style={styles.modalTasksContainer}>
                  <Text style={styles.modalTasksTitle}>当日完成任务</Text>
                  {selectedMoodData?.tasks.map((task, index) => (
                    <View key={index} style={styles.modalTaskItem}>
                      <FontAwesome6 name="check" size={12} color="#10b981" />
                      <Text style={styles.modalTaskText}>{task}</Text>
                    </View>
                  ))}
                </View>
                
                <TouchableOpacity style={styles.modalCloseButton} onPress={handleCloseModal}>
                  <Text style={styles.modalCloseButtonText}>关闭</Text>
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>
    </SafeAreaView>
  );
};

export default MoodCalendarScreen;

