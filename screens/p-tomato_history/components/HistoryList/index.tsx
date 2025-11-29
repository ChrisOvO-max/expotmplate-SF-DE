

import React from 'react';
import { View } from 'react-native';
import styles from './styles';
import TomatoItem from '../TomatoItem';

type PeriodType = 'day' | 'week' | 'month';

interface HistoryListProps {
  selectedPeriod: PeriodType;
}

const HistoryList: React.FC<HistoryListProps> = ({ selectedPeriod }) => {
  const todayHistory = [
    {
      id: '1',
      title: '英语学习',
      time: '09:00 - 09:25',
      duration: '25分钟',
      status: '已完成',
      icon: 'clock',
    },
    {
      id: '2',
      title: '项目开发',
      time: '10:00 - 10:25',
      duration: '25分钟',
      status: '已完成',
      icon: 'clock',
    },
    {
      id: '3',
      title: '阅读技术文档',
      time: '14:30 - 14:55',
      duration: '25分钟',
      status: '已完成',
      icon: 'clock',
    },
    {
      id: '4',
      title: '健身计划制定',
      time: '16:00 - 16:25',
      duration: '25分钟',
      status: '已完成',
      icon: 'clock',
    },
  ];

  const weekHistory = [
    {
      id: '5',
      title: '1月14日 (周日)',
      time: '完成 3 个番茄钟',
      duration: '75分钟',
      status: '平均25分钟/个',
      icon: 'calendar-day',
    },
    {
      id: '6',
      title: '1月13日 (周六)',
      time: '完成 5 个番茄钟',
      duration: '125分钟',
      status: '平均25分钟/个',
      icon: 'calendar-day',
    },
    {
      id: '7',
      title: '1月12日 (周五)',
      time: '完成 8 个番茄钟',
      duration: '200分钟',
      status: '平均25分钟/个',
      icon: 'calendar-day',
    },
  ];

  const monthHistory = [
    {
      id: '8',
      title: '第3周 (1月8日-14日)',
      time: '完成 38 个番茄钟',
      duration: '15.8小时',
      status: '平均5.4个/天',
      icon: 'calendar-week',
    },
    {
      id: '9',
      title: '第2周 (1月1日-7日)',
      time: '完成 42 个番茄钟',
      duration: '17.5小时',
      status: '平均6.0个/天',
      icon: 'calendar-week',
    },
  ];

  const getHistoryData = () => {
    switch (selectedPeriod) {
      case 'day':
        return todayHistory;
      case 'week':
        return weekHistory;
      case 'month':
        return monthHistory;
      default:
        return todayHistory;
    }
  };

  return (
    <View style={styles.container}>
      {getHistoryData().map((item) => (
        <TomatoItem key={item.id} {...item} />
      ))}
    </View>
  );
};

export default HistoryList;

