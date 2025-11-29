

import React, { useState, useCallback } from 'react';
import { View, Text, ScrollView, TouchableOpacity, RefreshControl } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { FontAwesome6 } from '@expo/vector-icons';
import FilterSection from './components/FilterSection';
import ContentItem from './components/ContentItem';
import styles from './styles';
import { ContentItemData, CategoryFilter, DifficultyFilter } from './types';

const EnglishLibraryScreen = () => {
  const router = useRouter();
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<DifficultyFilter>('all');

  // 模拟数据
  const contentData: ContentItemData[] = [
    {
      id: 'vocab-1',
      title: '四级核心词汇 - 基础篇',
      description: '包含2000个基础四级词汇',
      type: 'vocabulary',
      difficulty: 'easy',
      duration: 30,
      progress: 60,
      icon: 'book',
      iconColor: '#02f2ce',
    },
    {
      id: 'vocab-2',
      title: '四级核心词汇 - 进阶篇',
      description: '包含1500个进阶四级词汇',
      type: 'vocabulary',
      difficulty: 'medium',
      duration: 45,
      progress: 0,
      icon: 'book',
      iconColor: '#02f2ce',
    },
    {
      id: 'vocab-3',
      title: '六级高频词汇',
      description: '包含2500个六级高频词汇',
      type: 'vocabulary',
      difficulty: 'hard',
      duration: 60,
      progress: 0,
      icon: 'book',
      iconColor: '#02f2ce',
    },
    {
      id: 'grammar-1',
      title: '基础语法 - 时态',
      description: '一般现在时、一般过去时等基础时态',
      type: 'grammar',
      difficulty: 'easy',
      duration: 25,
      progress: 100,
      icon: 'language',
      iconColor: '#00f289',
    },
    {
      id: 'grammar-2',
      title: '进阶语法 - 从句',
      description: '定语从句、状语从句等复杂句型',
      type: 'grammar',
      difficulty: 'medium',
      duration: 40,
      progress: 0,
      icon: 'language',
      iconColor: '#00f289',
    },
    {
      id: 'grammar-3',
      title: '高级语法 - 虚拟语气',
      description: '虚拟语气、倒装句等高级语法点',
      type: 'grammar',
      difficulty: 'hard',
      duration: 50,
      progress: 0,
      icon: 'language',
      iconColor: '#00f289',
    },
    {
      id: 'listening-1',
      title: '基础听力 - 日常对话',
      description: '简单日常对话，语速较慢',
      type: 'listening',
      difficulty: 'easy',
      duration: 20,
      progress: 80,
      icon: 'headphones',
      iconColor: '#0296f2e6',
    },
    {
      id: 'listening-2',
      title: '四级听力 - 新闻报道',
      description: '标准四级新闻听力材料',
      type: 'listening',
      difficulty: 'medium',
      duration: 35,
      progress: 0,
      icon: 'headphones',
      iconColor: '#0296f2e6',
    },
    {
      id: 'listening-3',
      title: '六级听力 - 学术讲座',
      description: '复杂学术内容，语速较快',
      type: 'listening',
      difficulty: 'hard',
      duration: 55,
      progress: 0,
      icon: 'headphones',
      iconColor: '#0296f2e6',
    },
    {
      id: 'reading-1',
      title: '四级阅读 - 科普文章',
      description: '科技、环境等主题的阅读理解',
      type: 'reading',
      difficulty: 'medium',
      duration: 40,
      progress: 0,
      icon: 'newspaper',
      iconColor: '#f59e0b',
    },
    {
      id: 'reading-2',
      title: '六级阅读 - 学术论文',
      description: '复杂学术文本的深度理解',
      type: 'reading',
      difficulty: 'hard',
      duration: 60,
      progress: 0,
      icon: 'newspaper',
      iconColor: '#f59e0b',
    },
    {
      id: 'writing-1',
      title: '四级写作 - 议论文',
      description: '议论文写作技巧与模板',
      type: 'writing',
      difficulty: 'medium',
      duration: 45,
      progress: 0,
      icon: 'pen-fancy',
      iconColor: '#8b5cf6',
    },
  ];

  // 筛选内容
  const filteredContent = contentData.filter(item => {
    const categoryMatch = selectedCategory === 'all' || item.type === selectedCategory;
    const difficultyMatch = selectedDifficulty === 'all' || item.difficulty === selectedDifficulty;
    return categoryMatch && difficultyMatch;
  });

  const handleBackPress = useCallback(() => {
    if (router.canGoBack()) {
      router.back();
    }
  }, [router]);

  const handleContentItemPress = useCallback((contentId: string) => {
    router.push(`/p-english_content_detail?contentId=${contentId}`);
  }, [router]);

  const handleRefresh = useCallback(async () => {
    setIsRefreshing(true);
    // 模拟刷新数据
    setTimeout(() => {
      setIsRefreshing(false);
    }, 1000);
  }, []);

  const handleCategoryChange = useCallback((category: CategoryFilter) => {
    setSelectedCategory(category);
  }, []);

  const handleDifficultyChange = useCallback((difficulty: DifficultyFilter) => {
    setSelectedDifficulty(difficulty);
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
        <Text style={styles.headerTitle}>英语库</Text>
        <View style={styles.headerPlaceholder} />
      </View>

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
        {/* 筛选器区域 */}
        <FilterSection
          selectedCategory={selectedCategory}
          selectedDifficulty={selectedDifficulty}
          onCategoryChange={handleCategoryChange}
          onDifficultyChange={handleDifficultyChange}
        />

        {/* 内容列表 */}
        <View style={styles.contentSection}>
          <View style={styles.contentHeader}>
            <Text style={styles.contentTitle}>学习内容</Text>
            <Text style={styles.contentCount}>共 {filteredContent.length} 项</Text>
          </View>
          
          <View style={styles.contentList}>
            {filteredContent.map((item) => (
              <ContentItem
                key={item.id}
                data={item}
                onPress={() => handleContentItemPress(item.id)}
              />
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default EnglishLibraryScreen;

