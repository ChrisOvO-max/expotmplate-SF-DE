

import React, { useState, useCallback } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, RefreshControl, Alert, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { FontAwesome6 } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './styles';
import StoryItem from './components/StoryItem';

interface StoryData {
  id: string;
  author: string;
  avatar: string;
  badge: string;
  badgeColor: string;
  date: string;
  title: string;
  content: string;
  likeCount: number;
  commentCount: number;
  isLiked: boolean;
  tags: Array<{
    text: string;
    icon: string;
    color: string;
  }>;
}

const SuccessStoriesScreen = () => {
  const router = useRouter();
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [storiesData, setStoriesData] = useState<StoryData[]>([
    {
      id: 'story-1',
      author: '小雨',
      avatar: 'https://s.coze.cn/image/tepjwK4IPV0/',
      badge: '坚持达人',
      badgeColor: '#02f2ce',
      date: '2024年1月10日',
      title: '坚持英语学习3个月，四级顺利通过！',
      content: '从一开始的单词都认不全，到现在能够流畅阅读英文文章，每天使用SF-DE学习30分钟，坚持了整整3个月。番茄钟功能帮助我专注学习，打卡机制让我养成了每天学习的习惯。终于在这次四级考试中取得了不错的成绩，感谢SF-DE的陪伴！',
      likeCount: 128,
      commentCount: 23,
      isLiked: false,
      tags: [
        { text: '学习', icon: 'book', color: '#02f2ce' },
        { text: '坚持', icon: 'clock', color: '#00f289' },
      ],
    },
    {
      id: 'story-2',
      author: '阿强',
      avatar: 'https://s.coze.cn/image/QJIIQP2zSOQ/',
      badge: '健身达人',
      badgeColor: '#00f289',
      date: '2024年1月8日',
      title: '100天健身计划，成功减重15斤！',
      content: '以前总是三分钟热度，健身计划坚持不了几天就放弃了。用了SF-DE之后，每天的训练提醒和打卡功能让我养成了习惯。从一开始只能做5个俯卧撑，到现在可以轻松完成3组×20次，体重也从160斤减到了145斤。身体变好了，精神状态也比以前好多了！',
      likeCount: 256,
      commentCount: 45,
      isLiked: true,
      tags: [
        { text: '健身', icon: 'dumbbell', color: '#00f289' },
        { text: '减重', icon: 'fire', color: '#0296f2e6' },
      ],
    },
    {
      id: 'story-3',
      author: '小美',
      avatar: 'https://s.coze.cn/image/q6hsT2eWW00/',
      badge: '时间管理达人',
      badgeColor: '#0296f2e6',
      date: '2024年1月5日',
      title: '番茄工作法让我的工作效率提升200%',
      content: '作为一名自由职业者，时间管理一直是我的难题。自从使用SF-DE的番茄钟功能后，我的工作效率有了质的提升。每天设定明确的工作目标，用番茄钟专注工作25分钟，休息5分钟。现在不仅能按时完成所有工作，还有更多时间陪伴家人和发展兴趣爱好。',
      likeCount: 89,
      commentCount: 18,
      isLiked: false,
      tags: [
        { text: '时间管理', icon: 'clock', color: '#0296f2e6' },
        { text: '工作效率', icon: 'briefcase', color: '#02f2ce' },
      ],
    },
    {
      id: 'story-4',
      author: '老王',
      avatar: 'https://s.coze.cn/image/nZL8WbXZnvc/',
      badge: '健康达人',
      badgeColor: '#fbbf24',
      date: '2024年1月3日',
      title: '养成健康作息，睡眠质量显著提升',
      content: '以前经常熬夜，早上起不来，白天精神不振。用了SF-DE的睡眠提醒功能后，我养成了晚上10点睡觉、早上6点起床的好习惯。水分提醒让我每天都能喝够8杯水，饮食记录帮助我改善了饮食习惯。现在整个人都感觉精力充沛，工作效率也提高了！',
      likeCount: 156,
      commentCount: 31,
      isLiked: false,
      tags: [
        { text: '睡眠', icon: 'bed', color: '#fbbf24' },
        { text: '健康', icon: 'leaf', color: '#10b981' },
      ],
    },
    {
      id: 'story-5',
      author: '小张',
      avatar: 'https://s.coze.cn/image/_zpe16DwPe8/',
      badge: '全能达人',
      badgeColor: '#8b5cf6',
      date: '2024年1月1日',
      title: '半年自律生活，人生焕然一新',
      content: '半年前开始使用SF-DE，从最初的每天完成1个任务，到现在每天能完成5-6个任务。学习、健身、健康管理全方位发展，连续打卡180天。不仅通过了英语六级，体重也控制在理想范围，更重要的是养成了自律的习惯。感谢SF-DE让我成为更好的自己！',
      likeCount: 342,
      commentCount: 67,
      isLiked: false,
      tags: [
        { text: '全能发展', icon: 'star', color: '#8b5cf6' },
        { text: '长期坚持', icon: 'calendar-check', color: '#02f2ce' },
      ],
    },
  ]);

  const handleBackPress = useCallback(() => {
    if (router.canGoBack()) {
      router.back();
    }
  }, [router]);

  const handleShareStoryPress = useCallback(() => {
    router.push('/p-story_share');
  }, [router]);

  const handleStoryPress = useCallback((storyId: string) => {
    Alert.alert('案例详情', `查看案例详情: ${storyId}`);
  }, []);

  const handleLikePress = useCallback((storyId: string) => {
    setStoriesData(prevStories =>
      prevStories.map(story => {
        if (story.id === storyId) {
          return {
            ...story,
            isLiked: !story.isLiked,
            likeCount: story.isLiked ? story.likeCount - 1 : story.likeCount + 1,
          };
        }
        return story;
      })
    );
  }, []);

  const handleRefresh = useCallback(async () => {
    setIsRefreshing(true);
    try {
      // 模拟刷新数据
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('刷新成功案例数据');
    } catch (error) {
      console.error('刷新失败:', error);
    } finally {
      setIsRefreshing(false);
    }
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {/* 顶部导航栏 */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={handleBackPress}
          activeOpacity={0.7}
        >
          <FontAwesome6 name="arrow-left" size={18} color="#1f2937" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>成功案例</Text>
        <View style={styles.headerPlaceholder} />
      </View>

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        refreshControl={
          <RefreshControl
            refreshing={isRefreshing}
            onRefresh={handleRefresh}
            colors={['#02f2ce']}
            tintColor="#02f2ce"
          />
        }
        showsVerticalScrollIndicator={false}
      >
        {/* 页面说明 */}
        <View style={styles.introSection}>
          <LinearGradient
            colors={['rgba(2, 242, 206, 0.1)', 'rgba(0, 242, 137, 0.1)']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.introGradient}
          >
            <View style={styles.introContent}>
              <View style={styles.introIconContainer}>
                <FontAwesome6 name="trophy" size={20} color="#02f2ce" />
              </View>
              <View style={styles.introTextContainer}>
                <Text style={styles.introTitle}>自律改变生活</Text>
                <Text style={styles.introDescription}>
                  看看其他用户如何通过SF-DE实现自我提升
                </Text>
              </View>
            </View>
          </LinearGradient>
        </View>

        {/* 案例列表 */}
        <View style={styles.storiesSection}>
          {storiesData.map((story) => (
            <StoryItem
              key={story.id}
              story={story}
              onPress={() => handleStoryPress(story.id)}
              onLikePress={() => handleLikePress(story.id)}
            />
          ))}
        </View>

        {/* 底部间距 */}
        <View style={styles.bottomSpacing} />
      </ScrollView>

      {/* 浮动分享按钮 */}
      <TouchableOpacity
        style={styles.floatingButton}
        onPress={handleShareStoryPress}
        activeOpacity={0.8}
      >
        <LinearGradient
          colors={['#02f2ce', '#00f289']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.floatingButtonGradient}
        >
          <FontAwesome6 name="plus" size={20} color="#ffffff" />
        </LinearGradient>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default SuccessStoriesScreen;

