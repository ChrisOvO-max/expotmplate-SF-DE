

import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Alert, Dimensions, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { FontAwesome5, FontAwesome6 } from '@expo/vector-icons';
import Svg, { Circle } from 'react-native-svg';
import Animated, { useSharedValue, useAnimatedStyle, withRepeat, withTiming, withSequence, } from 'react-native-reanimated';
import styles from './styles';

const { width } = Dimensions.get('window');

interface TomatoFocusParams {
  work_duration?: string;
  short_break?: string;
  long_break?: string;
  long_break_interval?: string;
  associated_task_id?: string;
  task_name?: string;
  task_description?: string;
}

const TomatoFocusScreen: React.FC = () => {
  const router = useRouter();
  const params = useLocalSearchParams();
  
  // 解析参数
  const workDuration = parseInt(params.work_duration || '25');
  const shortBreak = parseInt(params.short_break || '5');
  const longBreak = parseInt(params.long_break || '15');
  const longBreakInterval = parseInt(params.long_break_interval || '4');
  const taskName = params.task_name || '英语四级词汇学习';
  const taskDescription = params.task_description || '专注提升英语水平';

  // 状态管理
  const [isTimerRunning, setIsTimerRunning] = useState(true);
  const [isTimerPaused, setIsTimerPaused] = useState(false);
  const [timeLeftInSeconds, setTimeLeftInSeconds] = useState(workDuration * 60);
  const [currentTomatoCount, setCurrentTomatoCount] = useState(1);
  const [isMusicPlayerVisible, setIsMusicPlayerVisible] = useState(false);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);

  const totalTimeInSeconds = workDuration * 60;
  const timerIntervalRef = useRef<number | null>(null);

  // 动画值
  const breathingScale = useSharedValue(1);
  const pulseOpacity = useSharedValue(1);

  // 格式化时间显示
  const formatTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  // 计算进度条
  const calculateProgress = (): number => {
    const progress = ((totalTimeInSeconds - timeLeftInSeconds) / totalTimeInSeconds) * 251.2;
    return Math.max(0, Math.min(251.2, progress));
  };

  // 开始计时器
  const startTimer = () => {
    if (isTimerPaused) {
      setIsTimerPaused(false);
    }
    
    timerIntervalRef.current = setInterval(() => {
      setTimeLeftInSeconds(prevTime => {
        if (prevTime > 0) {
          return prevTime - 1;
        } else {
          // 番茄钟结束
          clearInterval(timerIntervalRef.current!);
          handleTomatoComplete();
          return 0;
        }
      });
    }, 1000);
  };

  // 暂停计时器
  const pauseTimer = () => {
    if (timerIntervalRef.current) {
      clearInterval(timerIntervalRef.current);
      timerIntervalRef.current = null;
    }
    setIsTimerPaused(true);
  };

  // 处理番茄钟完成
  const handleTomatoComplete = () => {
    setIsTimerRunning(false);
    Alert.alert(
      '番茄钟完成！',
      '休息一下吧～',
      [
        {
          text: '确定',
          onPress: () => router.back(),
        },
      ]
    );
  };

  // 结束当前番茄钟
  const handleEndCurrentTomato = () => {
    Alert.alert(
      '确认结束',
      '确定要结束当前番茄钟吗？',
      [
        { text: '取消', style: 'cancel' },
        {
          text: '确定',
          style: 'destructive',
          onPress: () => {
            if (timerIntervalRef.current) {
              clearInterval(timerIntervalRef.current);
            }
            router.back();
          },
        },
      ]
    );
  };

  // 返回按钮处理
  const handleBackPress = () => {
    if (isTimerRunning && !isTimerPaused) {
      Alert.alert(
        '确认离开',
        '当前番茄钟正在进行中，确定要离开吗？',
        [
          { text: '取消', style: 'cancel' },
          {
            text: '确定',
            style: 'destructive',
            onPress: () => {
              if (timerIntervalRef.current) {
                clearInterval(timerIntervalRef.current);
              }
              router.back();
            },
          },
        ]
      );
    } else {
      router.back();
    }
  };

  // 切换音乐播放器
  const toggleMusicPlayer = () => {
    setIsMusicPlayerVisible(!isMusicPlayerVisible);
  };

  // 切换音乐播放状态
  const toggleMusicPlay = () => {
    setIsMusicPlaying(!isMusicPlaying);
  };

  // 番茄计数渲染
  const renderTomatoCounter = () => {
    const tomatoes = [];
    for (let i = 0; i < longBreakInterval; i++) {
      tomatoes.push(
        <View key={i} style={styles.tomatoCounterItem}>
          <View style={[
            styles.tomatoCounterCircle,
            i < currentTomatoCount ? styles.tomatoCounterCompleted : styles.tomatoCounterPending
          ]}>
            <FontAwesome6
              name={i < currentTomatoCount ? 'check' : 'circle'}
              size={12}
              color={i < currentTomatoCount ? '#ffffff' : '#9ca3af'}
            />
          </View>
        </View>
      );
    }
    return tomatoes;
  };

  // 呼吸动画样式
  const breathingAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: breathingScale.value }],
    };
  });

  // 脉冲动画样式
  const pulseAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: pulseOpacity.value,
    };
  });

  // 启动动画
  useEffect(() => {
    // 呼吸动画
    breathingScale.value = withRepeat(
      withSequence(
        withTiming(1.05, { duration: 2000 }),
        withTiming(1, { duration: 2000 })
      ),
      -1,
      false
    );

    // 脉冲动画
    pulseOpacity.value = withRepeat(
      withSequence(
        withTiming(0.7, { duration: 1000 }),
        withTiming(1, { duration: 1000 })
      ),
      -1,
      false
    );
  }, []);

  // 计时器管理
  useEffect(() => {
    if (isTimerRunning && !isTimerPaused) {
      startTimer();
    }

    return () => {
      if (timerIntervalRef.current) {
        clearInterval(timerIntervalRef.current);
      }
    };
  }, [isTimerRunning, isTimerPaused]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* 顶部导航 */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
            <FontAwesome6 name="arrow-left" size={16} color="#1f2937" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>专注中</Text>
          <TouchableOpacity style={styles.musicToggleButton} onPress={toggleMusicPlayer}>
            <FontAwesome6
              name={isMusicPlayerVisible ? 'times' : 'music'}
              size={16}
              color="#02f2ce"
            />
          </TouchableOpacity>
        </View>

        {/* 关联任务显示 */}
        <View style={styles.taskInfoCard}>
          <View style={styles.taskInfoContent}>
            <View style={styles.taskIconContainer}>
              <FontAwesome5 name="tasks" size={20} color="#02f2ce" />
            </View>
            <View style={styles.taskTextContainer}>
              <Text style={styles.taskName}>{taskName}</Text>
              <Text style={styles.taskDescription}>{taskDescription}</Text>
            </View>
          </View>
        </View>

        {/* 番茄钟计时器 */}
        <View style={styles.timerSection}>
          {/* 圆形计时器 */}
          <Animated.View style={[styles.timerCircleContainer, breathingAnimatedStyle]}>
            <Svg width={320} height={320} viewBox="0 0 84 84" style={styles.timerSvg}>
              {/* 背景圆 */}
              <Circle
                cx="42"
                cy="42"
                r="40"
                stroke="#e5e7eb"
                strokeWidth="4"
                fill="none"
              />
              {/* 进度圆 */}
              <Circle
                cx="42"
                cy="42"
                r="40"
                stroke="#02f2ce"
                strokeWidth="4"
                fill="none"
                strokeLinecap="round"
                strokeDasharray="251.2"
                strokeDashoffset={251.2 - calculateProgress()}
                transform="rotate(-90 42 42)"
              />
            </Svg>
            
            {/* 中心时间显示 */}
            <View style={styles.timerCenter}>
              <Animated.Text style={[styles.timerDisplay, pulseAnimatedStyle]}>
                {formatTime(timeLeftInSeconds)}
              </Animated.Text>
              <Text style={styles.timerLabel}>专注时间</Text>
            </View>
          </Animated.View>

          {/* 番茄计数 */}
          <View style={styles.tomatoCounter}>
            <View style={styles.tomatoCounterRow}>
              {renderTomatoCounter()}
            </View>
            <Text style={styles.tomatoCounterText}>
              第 <Text style={styles.currentTomatoNumber}>{currentTomatoCount}</Text> 个番茄
            </Text>
          </View>

          {/* 控制按钮 */}
          <View style={styles.controlButtons}>
            <TouchableOpacity
              style={styles.pauseButton}
              onPress={isTimerPaused ? startTimer : pauseTimer}
            >
              <FontAwesome6
                name={isTimerPaused ? 'play' : 'pause'}
                size={16}
                color="#6b7280"
              />
              <Text style={styles.pauseButtonText}>
                {isTimerPaused ? '继续' : '暂停'}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.endButton} onPress={handleEndCurrentTomato}>
              <FontAwesome6 name="stop" size={16} color="#ffffff" />
              <Text style={styles.endButtonText}>结束</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* 专注提示 */}
        <View style={styles.focusTipsSection}>
          <View style={styles.focusTipsCard}>
            <View style={styles.focusTipsHeader}>
              <View style={styles.focusTipsIconContainer}>
                <FontAwesome6 name="lightbulb" size={16} color="#00f289" />
              </View>
              <Text style={styles.focusTipsTitle}>专注小贴士</Text>
            </View>
            <Text style={styles.focusTipsText}>
              保持专注，远离手机干扰。每25分钟休息5分钟，让大脑得到充分放松。
            </Text>
          </View>
        </View>

        {/* 底部间距 */}
        <View style={styles.bottomSpacing} />
      </ScrollView>

      {/* 轻音乐播放器 */}
      {isMusicPlayerVisible && (
        <View style={styles.musicPlayer}>
          <View style={styles.musicPlayerContent}>
            <View style={styles.musicInfo}>
              <View style={styles.musicIconContainer}>
                <FontAwesome6 name="music" size={20} color="#02f2ce" />
              </View>
              <View style={styles.musicTextContainer}>
                <Text style={styles.currentSong}>学习轻音乐</Text>
                <Text style={styles.songDescription}>放松心情</Text>
              </View>
            </View>
            <View style={styles.musicControls}>
              <TouchableOpacity style={styles.musicControlButton}>
                <FontAwesome5 name="step-backward" size={14} color="#6b7280" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.musicPlayButton} onPress={toggleMusicPlay}>
                <FontAwesome6
                  name={isMusicPlaying ? 'pause' : 'play'}
                  size={14}
                  color="#ffffff"
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.musicControlButton}>
                <FontAwesome5 name="step-forward" size={14} color="#6b7280" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};

export default TomatoFocusScreen;

