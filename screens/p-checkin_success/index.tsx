

import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { FontAwesome6 } from '@expo/vector-icons';
import Animated, { useSharedValue, useAnimatedStyle, withTiming, withDelay, withRepeat, Easing } from 'react-native-reanimated';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './styles';

const CheckinSuccessScreen = () => {
  const router = useRouter();
  const [streakDays, setStreakDays] = useState(12);
  const [motivationalQuote, setMotivationalQuote] = useState('每一次的坚持，都是向更好自己迈进的一步。');
  const [medalText, setMedalText] = useState('解锁"坚持达人"勋章');
  const [showMedal, setShowMedal] = useState(true);

  // 动画共享值
  const successIconScale = useSharedValue(0.3);
  const successIconOpacity = useSharedValue(0);
  const titleOpacity = useSharedValue(0);
  const titleTranslateY = useSharedValue(20);
  const streakCardOpacity = useSharedValue(0);
  const streakCardTranslateY = useSharedValue(20);
  const medalScale = useSharedValue(0.8);
  const medalOpacity = useSharedValue(0);
  const quoteOpacity = useSharedValue(0);
  const quoteTranslateY = useSharedValue(20);
  const backButtonOpacity = useSharedValue(0);
  const backButtonTranslateY = useSharedValue(20);
  const pulseGlow = useSharedValue(0);

  useEffect(() => {
    // 启动动画序列
    startAnimations();
    
    // 生成随机数据
    generateRandomData();
  }, []);

  const generateRandomData = () => {
    // 模拟连续打卡天数数据 (1-30天随机)
    const randomStreakDays = Math.floor(Math.random() * 30) + 1;
    setStreakDays(randomStreakDays);

    // 随机自律语录
    const quotes = [
      '每一次的坚持，都是向更好自己迈进的一步。',
      '自律是成功的基石，坚持是胜利的钥匙。',
      '今天的努力，是明天成功的伏笔。',
      '不要等待机会，而要创造机会。',
      '成功不是终点，而是新的起点。',
      '每一个小小的进步，都值得骄傲。',
      '坚持的路上，你从不孤单。',
      '相信自己，你比想象中更强大。',
      '每一天都是重新开始的机会。',
      '自律让自由成为可能。'
    ];

    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setMotivationalQuote(randomQuote);

    // 检查是否解锁新勋章
    let newMedalText = '';
    let shouldShowMedal = true;

    if (randomStreakDays === 7) {
      newMedalText = '解锁"坚持7天"勋章';
    } else if (randomStreakDays === 30) {
      newMedalText = '解锁"月度达人"勋章';
    } else if (randomStreakDays === 100) {
      newMedalText = '解锁"百日英雄"勋章';
    } else {
      shouldShowMedal = false;
    }

    setMedalText(newMedalText);
    setShowMedal(shouldShowMedal);
  };

  const startAnimations = () => {
    // 成功图标动画 (bounceIn)
    successIconScale.value = withTiming(1, {
      duration: 800,
      easing: Easing.out(Easing.cubic),
    });
    successIconOpacity.value = withTiming(1, {
      duration: 800,
      easing: Easing.out(Easing.cubic),
    });

    // 标题动画 (fadeIn)
    titleOpacity.value = withDelay(200, withTiming(1, {
      duration: 600,
      easing: Easing.out(Easing.cubic),
    }));
    titleTranslateY.value = withDelay(200, withTiming(0, {
      duration: 600,
      easing: Easing.out(Easing.cubic),
    }));

    // 连续打卡卡片动画 (fadeIn)
    streakCardOpacity.value = withDelay(400, withTiming(1, {
      duration: 600,
      easing: Easing.out(Easing.cubic),
    }));
    streakCardTranslateY.value = withDelay(400, withTiming(0, {
      duration: 600,
      easing: Easing.out(Easing.cubic),
    }));

    // 勋章动画 (scaleIn)
    if (showMedal) {
      medalScale.value = withDelay(800, withTiming(1, {
        duration: 500,
        easing: Easing.out(Easing.cubic),
      }));
      medalOpacity.value = withDelay(800, withTiming(1, {
        duration: 500,
        easing: Easing.out(Easing.cubic),
      }));
    }

    // 语录动画 (fadeIn)
    quoteOpacity.value = withDelay(1200, withTiming(1, {
      duration: 600,
      easing: Easing.out(Easing.cubic),
    }));
    quoteTranslateY.value = withDelay(1200, withTiming(0, {
      duration: 600,
      easing: Easing.out(Easing.cubic),
    }));

    // 返回按钮动画 (fadeIn)
    backButtonOpacity.value = withDelay(1400, withTiming(1, {
      duration: 600,
      easing: Easing.out(Easing.cubic),
    }));
    backButtonTranslateY.value = withDelay(1400, withTiming(0, {
      duration: 600,
      easing: Easing.out(Easing.cubic),
    }));

    // 脉冲发光动画
    pulseGlow.value = withRepeat(
      withTiming(1, {
        duration: 2000,
        easing: Easing.inOut(Easing.ease),
      }),
      -1,
      true
    );
  };

  // 动画样式
  const successIconAnimatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: successIconScale.value }],
    opacity: successIconOpacity.value,
  }));

  const titleAnimatedStyle = useAnimatedStyle(() => ({
    opacity: titleOpacity.value,
    transform: [{ translateY: titleTranslateY.value }],
  }));

  const streakCardAnimatedStyle = useAnimatedStyle(() => ({
    opacity: streakCardOpacity.value,
    transform: [{ translateY: streakCardTranslateY.value }],
  }));

  const medalAnimatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: medalScale.value }],
    opacity: medalOpacity.value,
  }));

  const quoteAnimatedStyle = useAnimatedStyle(() => ({
    opacity: quoteOpacity.value,
    transform: [{ translateY: quoteTranslateY.value }],
  }));

  const backButtonAnimatedStyle = useAnimatedStyle(() => ({
    opacity: backButtonOpacity.value,
    transform: [{ translateY: backButtonTranslateY.value }],
  }));

  const pulseGlowAnimatedStyle = useAnimatedStyle(() => ({
    shadowOpacity: 0.3 + (pulseGlow.value * 0.5),
    shadowRadius: 20 + (pulseGlow.value * 20),
  }));

  const handleBackPress = () => {
    if (router.canGoBack()) {
      router.back();
    } else {
      router.replace('/p-home');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* 成功图标 */}
        <Animated.View style={[styles.successIconContainer, successIconAnimatedStyle]}>
          <Animated.View style={[styles.successIcon, pulseGlowAnimatedStyle]}>
            <LinearGradient
              colors={['#02f2ce', '#00f289']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.successIconGradient}
            >
              <FontAwesome6 name="check" size={60} color="#ffffff" />
            </LinearGradient>
          </Animated.View>
        </Animated.View>

        {/* 成功标题 */}
        <Animated.Text style={[styles.successTitle, titleAnimatedStyle]}>
          打卡成功！
        </Animated.Text>

        {/* 连续打卡天数 */}
        <Animated.View style={[styles.streakContainer, streakCardAnimatedStyle]}>
          <View style={styles.streakContent}>
            <View style={styles.streakHeader}>
              <FontAwesome6 name="fire" size={20} color="#f97316" />
              <Text style={styles.streakLabel}>连续打卡</Text>
            </View>
            <LinearGradient
              colors={['#02f2ce', '#00f289']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.streakNumberGradient}
            >
              <Text style={styles.streakNumber}>{streakDays}</Text>
            </LinearGradient>
            <Text style={styles.streakUnit}>天</Text>
          </View>
        </Animated.View>

        {/* 解锁勋章 */}
        {showMedal && (
          <Animated.View style={[styles.medalContainer, medalAnimatedStyle]}>
            <LinearGradient
              colors={['#ffd700', '#ffed4e']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.medalIcon}
            >
              <FontAwesome6 name="trophy" size={32} color="#ffffff" />
            </LinearGradient>
            <Text style={styles.medalText}>{medalText}</Text>
          </Animated.View>
        )}

        {/* 文字反馈 */}
        <View style={styles.feedbackContainer}>
          <Text style={styles.feedbackTitle}>太棒了！</Text>
          <Text style={styles.feedbackSubtitle}>继续保持这个好习惯</Text>
        </View>

        {/* 自律语录 */}
        <Animated.View style={[styles.quoteContainer, quoteAnimatedStyle]}>
          <View style={styles.quoteContent}>
            <FontAwesome6 name="quote-left" size={18} color="#02f2ce" style={styles.quoteIcon} />
            <Text style={styles.quoteText}>"{motivationalQuote}"</Text>
            <View style={styles.quoteDivider} />
          </View>
        </Animated.View>

        {/* 返回按钮 */}
        <Animated.View style={[styles.backButtonContainer, backButtonAnimatedStyle]}>
          <TouchableOpacity 
            style={styles.backButton}
            onPress={handleBackPress}
            activeOpacity={0.8}
          >
            <LinearGradient
              colors={['#02f2ce', '#00f289']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.backButtonGradient}
            >
              <FontAwesome6 name="arrow-left" size={16} color="#ffffff" style={styles.backButtonIcon} />
              <Text style={styles.backButtonText}>返回</Text>
            </LinearGradient>
          </TouchableOpacity>
        </Animated.View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CheckinSuccessScreen;

