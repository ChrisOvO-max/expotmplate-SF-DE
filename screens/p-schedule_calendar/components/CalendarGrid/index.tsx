

import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

interface CalendarGridProps {
  currentDisplayDate: Date;
  selectedDate: Date;
  onDateSelection: (date: Date) => void;
  viewType: 'month' | 'week' | 'day';
}

const CalendarGrid: React.FC<CalendarGridProps> = ({
  currentDisplayDate,
  selectedDate,
  onDateSelection,
  viewType,
}) => {
  const generateCalendarDays = () => {
    const year = currentDisplayDate.getFullYear();
    const month = currentDisplayDate.getMonth();
    
    // 获取当月第一天
    const firstDayOfMonth = new Date(year, month, 1);
    // 获取当月最后一天
    const lastDayOfMonth = new Date(year, month + 1, 0);
    // 获取当月第一天是周几（0-6，0是周日）
    const firstDayOfWeek = firstDayOfMonth.getDay();
    // 获取当月天数
    const daysInMonth = lastDayOfMonth.getDate();
    
    // 获取上个月的最后几天
    const prevMonth = month === 0 ? 11 : month - 1;
    const prevMonthYear = month === 0 ? year - 1 : year;
    const lastDayOfPrevMonth = new Date(prevMonthYear, prevMonth + 1, 0);
    const daysFromPrevMonth = firstDayOfWeek;
    
    // 获取下个月的开始几天
    const totalCells = 42; // 6行 × 7列
    const daysFromNextMonth = totalCells - (daysInMonth + daysFromPrevMonth);
    
    const calendarDays = [];
    
    // 添加上个月的日期
    for (let i = daysFromPrevMonth - 1; i >= 0; i--) {
      const day = lastDayOfPrevMonth.getDate() - i;
      const date = new Date(prevMonthYear, prevMonth, day);
      calendarDays.push({
        date,
        day,
        isCurrentMonth: false,
      });
    }
    
    // 添加当月的日期
    for (let i = 1; i <= daysInMonth; i++) {
      const date = new Date(year, month, i);
      calendarDays.push({
        date,
        day: i,
        isCurrentMonth: true,
      });
    }
    
    // 添加下个月的日期
    for (let i = 1; i <= daysFromNextMonth; i++) {
      const date = new Date(year, month + 1, i);
      calendarDays.push({
        date,
        day: i,
        isCurrentMonth: false,
      });
    }
    
    return calendarDays;
  };

  const isToday = (date: Date) => {
    const today = new Date();
    return date.getDate() === today.getDate() &&
           date.getMonth() === today.getMonth() &&
           date.getFullYear() === today.getFullYear();
  };

  const isSelected = (date: Date) => {
    return date.getDate() === selectedDate.getDate() &&
           date.getMonth() === selectedDate.getMonth() &&
           date.getFullYear() === selectedDate.getFullYear();
  };

  const hasPlan = (date: Date) => {
    // 模拟有计划的日期
    const planDates = ['2024-01-02', '2024-01-04', '2024-01-08', '2024-01-11', '2024-01-16', '2024-01-18', '2024-01-22', '2024-01-25', '2024-01-29'];
    const dateString = date.toISOString().split('T')[0];
    return planDates.includes(dateString);
  };

  const handleDayPress = (date: Date) => {
    onDateSelection(date);
  };

  const calendarDays = generateCalendarDays();
  const weekdays = ['日', '一', '二', '三', '四', '五', '六'];

  return (
    <View>
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
        {calendarDays.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.calendarDay,
              isToday(item.date) && styles.calendarDayToday,
              isSelected(item.date) && styles.calendarDaySelected,
            ]}
            onPress={() => handleDayPress(item.date)}
            activeOpacity={0.7}
          >
            <Text style={[
              styles.calendarDayText,
              !item.isCurrentMonth && styles.calendarDayTextInactive,
              isToday(item.date) && styles.calendarDayTextToday,
              isSelected(item.date) && styles.calendarDayTextSelected,
            ]}>
              {item.day}
            </Text>
            {hasPlan(item.date) && item.isCurrentMonth && (
              <View style={styles.planIndicator} />
            )}
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default CalendarGrid;

