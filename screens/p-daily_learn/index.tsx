

import React, { useState, useCallback } from 'react';
import { View, Text, ScrollView, TouchableOpacity, RefreshControl, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { FontAwesome6 } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import TaskItem from './components/TaskItem';
import styles from './styles';

interface Task {
  id: string;
  title: string;
  description: string;
  icon: string;
  iconColor: string;
  iconBgColor: string;
  progress: number;
  progressText: string;
  completed: boolean;
  taskId: string;
}

const DailyLearnScreen = () => {
  const router = useRouter();
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: '1',
      title: '英语四级词汇',
      description: '单词记忆 · 30个单词',
      icon: 'book',
      iconColor: '#02f2ce',
      iconBgColor: 'rgba(2, 242, 206, 0.1)',
      progress: 100,
      progressText: '已完成 30/30 个单词',
      completed: true,
      taskId: 'vocabulary-1',
    },
    {
      id: '2',
      title: '语法练习',
      description: '时态练习 · 20道题目',
      icon: 'language',
      iconColor: '#00f289',
      iconBgColor: 'rgba(0, 242, 137, 0.1)',
      progress: 100,
      progressText: '正确率 95% (19/20)',
      completed: true,
      taskId: 'grammar-1',
    },
    {
      id: '3',
      title: '听力训练',
      description: '短文理解 · 15分钟',
      icon: 'headphones',
      iconColor: '#0296f2e6',
      iconBgColor: 'rgba(2, 150, 242, 0.1)',
      progress: 100,
      progressText: '得分 85分',
      completed: true,
      taskId: 'listening-1',
    },
    {
      id: '4',
      title: '阅读理解',
      description: '篇章阅读 · 4篇文章',
      icon: 'file-lines',
      iconColor: '#f59e0b',
      iconBgColor: 'rgba(245, 158, 11, 0.1)',
      progress: 0,
      progressText: '0/4 篇文章',
      completed: false,
      taskId: 'reading-1',
    },
    {
      id: '5',
      title: '复习巩固',
      description: '错题回顾 · 10道错题',
      icon: 'arrow-rotate-right',
      iconColor: '#8b5cf6',
      iconBgColor: 'rgba(139, 92, 246, 0.1)',
      progress: 0,
      progressText: '0/10 道错题',
      completed: false,
      taskId: 'review-1',
    },
  ]);

  const completedTasksCount = tasks.filter(task => task.completed).length;
  const totalTasksCount = tasks.length;
  const progressPercentage = (completedTasksCount / totalTasksCount) * 100;

  const handleRefresh = useCallback(async () => {
    setIsRefreshing(true);
    try {
      // 模拟刷新数据
      await new Promise(resolve => setTimeout(resolve, 1000));
      // 这里可以添加实际的数据刷新逻辑
    } catch (error) {
      console.error('刷新失败:', error);
    } finally {
      setIsRefreshing(false);
    }
  }, []);

  const handleTaskPress = useCallback((taskId: string) => {
    router.push(`/p-learning_mode?taskId=${taskId}`);
  }, [router]);

  const handleLibraryPress = useCallback(() => {
    router.push('/p-english_library');
  }, [router]);

  const handleTaskToggle = useCallback((taskId: string) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === taskId
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={isRefreshing}
            onRefresh={handleRefresh}
            colors={['#02f2ce']}
            tintColor="#02f2ce"
          />
        }
      >
        {/* 顶部标题区域 */}
        <View style={styles.header}>
          <LinearGradient
            colors={['rgba(2, 242, 206, 0.1)', 'rgba(0, 242, 137, 0.1)']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.headerGradient}
          >
            <View style={styles.decorationCircle1} />
            <View style={styles.decorationCircle2} />
            
            <View style={styles.headerContent}>
              <View style={styles.headerTop}>
                <Text style={styles.pageTitle}>每日学习</Text>
                <View style={styles.streakBadge}>
                  <FontAwesome6 name="fire" size={12} color="#ffffff" />
                  <Text style={styles.streakText}>7天</Text>
                </View>
              </View>
              
              <View style={styles.progressOverview}>
                <View style={styles.progressHeader}>
                  <Text style={styles.progressLabel}>今日进度</Text>
                  <Text style={styles.progressCount}>
                    {completedTasksCount}/{totalTasksCount} 已完成
                  </Text>
                </View>
                <View style={styles.progressBarContainer}>
                  <View
                    style={[
                      styles.progressBar,
                      { width: `${progressPercentage}%` }
                    ]}
                  />
                </View>
              </View>
            </View>
          </LinearGradient>
        </View>

        {/* 学习任务列表 */}
        <View style={styles.tasksSection}>
          <View style={styles.tasksHeader}>
            <Text style={styles.tasksTitle}>今日任务</Text>
            <Text style={styles.tasksCount}>共{totalTasksCount}个任务</Text>
          </View>
          
          <View style={styles.tasksList}>
            {tasks.map((task) => (
              <TaskItem
                key={task.id}
                task={task}
                onPress={() => handleTaskPress(task.taskId)}
                onToggle={() => handleTaskToggle(task.id)}
              />
            ))}
          </View>
        </View>

        {/* 英语库入口 */}
        <View style={styles.librarySection}>
          <TouchableOpacity
            style={styles.libraryEntry}
            onPress={handleLibraryPress}
            activeOpacity={0.8}
          >
            <LinearGradient
              colors={['#02f2ce', '#00f289']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.libraryIcon}
            >
              <FontAwesome6 name="book-open" size={24} color="#ffffff" />
            </LinearGradient>
            
            <View style={styles.libraryContent}>
              <Text style={styles.libraryTitle}>英语学习库</Text>
              <Text style={styles.libraryDescription}>探索更多学习内容</Text>
              <View style={styles.libraryTags}>
                <View style={styles.tagVocabulary}>
                  <Text style={styles.tagVocabularyText}>词汇</Text>
                </View>
                <View style={styles.tagGrammar}>
                  <Text style={styles.tagGrammarText}>语法</Text>
                </View>
                <View style={styles.tagListening}>
                  <Text style={styles.tagListeningText}>听力</Text>
                </View>
              </View>
            </View>
            
            <FontAwesome6 name="chevron-right" size={16} color="#9ca3af" />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DailyLearnScreen;

