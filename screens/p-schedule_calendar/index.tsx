

import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Alert, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { FontAwesome6 } from '@expo/vector-icons';
import styles from './styles';
import CalendarGrid from './components/CalendarGrid';
import PlanItem from './components/PlanItem';

interface PlanData {
  id: string;
  title: string;
  time: string;
  icon: string;
  iconColor: string;
  status: 'completed' | 'pending';
  progress: number;
  progressText: string;
}

type ViewType = 'month' | 'week' | 'day';

const ScheduleCalendarScreen = () => {
  const router = useRouter();
  const params = useLocalSearchParams();
  
  const [currentViewType, setCurrentViewType] = useState<ViewType>('month');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [currentDisplayDate, setCurrentDisplayDate] = useState(new Date());
  const [plansData, setPlansData] = useState<PlanData[]>([]);
  const [isLoadingPlans, setIsLoadingPlans] = useState(false);

  useEffect(() => {
    // 检查URL参数是否有指定日期
    if (params.date) {
      const paramDate = new Date(params.date as string);
      if (!isNaN(paramDate.getTime())) {
        setSelectedDate(paramDate);
        setCurrentDisplayDate(paramDate);
      }
    }
    
    // 加载选中日期的计划
    loadPlansForDate(selectedDate);
  }, [params.date, selectedDate]);

  const handleBackButtonPress = () => {
    if (router.canGoBack()) {
      router.back();
    } else {
      router.replace('/p-home');
    }
  };

  const handleViewTypeChange = (viewType: ViewType) => {
    setCurrentViewType(viewType);
    // 这里可以添加不同视图类型的处理逻辑
  };

  const handleCalendarNavigation = (direction: 'prev' | 'next') => {
    const newDate = new Date(currentDisplayDate);
    
    switch (currentViewType) {
      case 'month':
        newDate.setMonth(direction === 'prev' ? newDate.getMonth() - 1 : newDate.getMonth() + 1);
        break;
      case 'week':
        newDate.setDate(direction === 'prev' ? newDate.getDate() - 7 : newDate.getDate() + 7);
        break;
      case 'day':
        newDate.setDate(direction === 'prev' ? newDate.getDate() - 1 : newDate.getDate() + 1);
        break;
    }
    
    setCurrentDisplayDate(newDate);
  };

  const handleDateSelection = (date: Date) => {
    setSelectedDate(date);
    loadPlansForDate(date);
  };

  const loadPlansForDate = async (date: Date) => {
    setIsLoadingPlans(true);
    try {
      // 模拟API调用
      await new Promise(resolve => setTimeout(resolve, 300));
      
      // 模拟数据
      const mockPlans: PlanData[] = [
        {
          id: 'plan1',
          title: '英语四级词汇',
          time: '09:00 - 10:00',
          icon: 'book',
          iconColor: '#02f2ce',
          status: 'completed',
          progress: 100,
          progressText: '已完成 30/30 个单词',
        },
        {
          id: 'plan2',
          title: '晨练 - 俯卧撑',
          time: '07:00 - 07:30',
          icon: 'dumbbell',
          iconColor: '#00f289',
          status: 'completed',
          progress: 100,
          progressText: '已完成 3 组 × 15 次',
        },
        {
          id: 'plan3',
          title: '每日饮水',
          time: '全天',
          icon: 'droplet',
          iconColor: '#0296f2e6',
          status: 'completed',
          progress: 100,
          progressText: '已完成 2000/2000 ml',
        },
        {
          id: 'plan4',
          title: '番茄钟专注',
          time: '14:00 - 16:00',
          icon: 'clock',
          iconColor: '#6b7280',
          status: 'pending',
          progress: 0,
          progressText: '0/4 个番茄钟',
        },
        {
          id: 'plan5',
          title: '早睡提醒',
          time: '22:00',
          icon: 'moon',
          iconColor: '#6b7280',
          status: 'pending',
          progress: 0,
          progressText: '待完成',
        },
      ];
      
      setPlansData(mockPlans);
    } catch (error) {
      Alert.alert('错误', '加载计划失败，请重试');
    } finally {
      setIsLoadingPlans(false);
    }
  };

  const handlePlanItemPress = (planId: string) => {
    router.push(`/p-plan_detail?planId=${planId}`);
  };

  const handleFloatingAddButtonPress = () => {
    const selectedDateString = selectedDate.toISOString().split('T')[0];
    router.push(`/p-plan_add?date=${selectedDateString}`);
  };

  const formatSelectedDateTitle = () => {
    const year = selectedDate.getFullYear();
    const month = selectedDate.getMonth() + 1;
    const day = selectedDate.getDate();
    const weekdays = ['日', '一', '二', '三', '四', '五', '六'];
    const weekday = weekdays[selectedDate.getDay()];
    return `${month}月${day}日 星期${weekday}`;
  };

  const formatCalendarTitle = () => {
    const year = currentDisplayDate.getFullYear();
    const month = currentDisplayDate.getMonth() + 1;
    return `${year}年${month}月`;
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* 顶部导航栏 */}
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <TouchableOpacity
              style={styles.backButton}
              onPress={handleBackButtonPress}
              activeOpacity={0.7}
            >
              <FontAwesome6 name="arrow-left" size={16} color="#6b7280" />
            </TouchableOpacity>
            <Text style={styles.pageTitle}>日程表</Text>
          </View>
          
          {/* 视图切换 */}
          <View style={styles.viewTabsContainer}>
            <TouchableOpacity
              style={[
                styles.viewTab,
                currentViewType === 'month' && styles.viewTabActive
              ]}
              onPress={() => handleViewTypeChange('month')}
              activeOpacity={0.7}
            >
              <Text style={[
                styles.viewTabText,
                currentViewType === 'month' && styles.viewTabTextActive
              ]}>
                月
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.viewTab,
                currentViewType === 'week' && styles.viewTabActive
              ]}
              onPress={() => handleViewTypeChange('week')}
              activeOpacity={0.7}
            >
              <Text style={[
                styles.viewTabText,
                currentViewType === 'week' && styles.viewTabTextActive
              ]}>
                周
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.viewTab,
                currentViewType === 'day' && styles.viewTabActive
              ]}
              onPress={() => handleViewTypeChange('day')}
              activeOpacity={0.7}
            >
              <Text style={[
                styles.viewTabText,
                currentViewType === 'day' && styles.viewTabTextActive
              ]}>
                日
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* 日历视图 */}
        <View style={styles.calendarSection}>
          <View style={styles.calendarHeader}>
            <Text style={styles.calendarTitle}>{formatCalendarTitle()}</Text>
            <View style={styles.calendarNavigation}>
              <TouchableOpacity
                style={styles.calendarNavButton}
                onPress={() => handleCalendarNavigation('prev')}
                activeOpacity={0.7}
              >
                <FontAwesome6 name="chevron-left" size={12} color="#6b7280" />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.calendarNavButton}
                onPress={() => handleCalendarNavigation('next')}
                activeOpacity={0.7}
              >
                <FontAwesome6 name="chevron-right" size={12} color="#6b7280" />
              </TouchableOpacity>
            </View>
          </View>
          
          <CalendarGrid
            currentDisplayDate={currentDisplayDate}
            selectedDate={selectedDate}
            onDateSelection={handleDateSelection}
            viewType={currentViewType}
          />
        </View>

        {/* 选中日期的计划列表 */}
        <View style={styles.plansSection}>
          <View style={styles.selectedDateHeader}>
            <Text style={styles.selectedDateTitle}>{formatSelectedDateTitle()}</Text>
            <Text style={styles.planCount}>{plansData.length}个计划</Text>
          </View>
          
          <View style={styles.plansList}>
            {plansData.map((plan) => (
              <PlanItem
                key={plan.id}
                plan={plan}
                onPress={() => handlePlanItemPress(plan.id)}
              />
            ))}
          </View>
        </View>
      </ScrollView>

      {/* 浮动添加按钮 */}
      <TouchableOpacity
        style={styles.floatingAddButton}
        onPress={handleFloatingAddButtonPress}
        activeOpacity={0.8}
      >
        <FontAwesome6 name="plus" size={20} color="#ffffff" />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default ScheduleCalendarScreen;

