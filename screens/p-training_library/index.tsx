

import React, { useState, useCallback } from 'react';
import { View, Text, TouchableOpacity, FlatList, RefreshControl, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { FontAwesome6 } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './styles';
import TrainingItem from './components/TrainingItem';
import FilterTabs from './components/FilterTabs';

interface TrainingItemData {
  id: string;
  title: string;
  description: string;
  category: 'strength' | 'cardio' | 'flexibility' | 'custom';
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  icon: string;
  iconColor: string;
}

const TrainingLibraryScreen = () => {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [isRefreshing, setIsRefreshing] = useState(false);

  const trainingItems: TrainingItemData[] = [
    {
      id: 'pushups',
      title: '俯卧撑',
      description: '锻炼胸肌、三头肌和肩部',
      category: 'strength',
      difficulty: 'beginner',
      icon: 'dumbbell',
      iconColor: '#02f2ce',
    },
    {
      id: 'squats',
      title: '深蹲',
      description: '锻炼大腿、臀部和核心肌群',
      category: 'strength',
      difficulty: 'beginner',
      icon: 'fire',
      iconColor: '#02f2ce',
    },
    {
      id: 'pullups',
      title: '引体向上',
      description: '锻炼背部、二头肌和肩部',
      category: 'strength',
      difficulty: 'advanced',
      icon: 'user-group',
      iconColor: '#02f2ce',
    },
    {
      id: 'plank',
      title: '平板支撑',
      description: '强化核心肌群和稳定性',
      category: 'strength',
      difficulty: 'beginner',
      icon: 'stopwatch',
      iconColor: '#02f2ce',
    },
    {
      id: 'running',
      title: '跑步',
      description: '提高心肺功能和耐力',
      category: 'cardio',
      difficulty: 'beginner',
      icon: 'person-running',
      iconColor: '#0296f2e6',
    },
    {
      id: 'jumping-jack',
      title: '开合跳',
      description: '全身有氧训练，提高心率',
      category: 'cardio',
      difficulty: 'beginner',
      icon: 'bolt',
      iconColor: '#0296f2e6',
    },
    {
      id: 'yoga',
      title: '瑜伽',
      description: '提高柔韧性和身体平衡',
      category: 'flexibility',
      difficulty: 'beginner',
      icon: 'leaf',
      iconColor: '#00f289',
    },
    {
      id: 'stretching',
      title: '静态拉伸',
      description: '放松肌肉，预防运动损伤',
      category: 'flexibility',
      difficulty: 'beginner',
      icon: 'hand',
      iconColor: '#00f289',
    },
    {
      id: 'dumbbell-curl',
      title: '哑铃弯举',
      description: '个人定制的二头肌训练',
      category: 'custom',
      difficulty: 'beginner',
      icon: 'plus',
      iconColor: '#6b7280',
    },
  ];

  const filteredTrainingItems = trainingItems.filter(item => {
    if (selectedCategory === 'all') return true;
    return item.category === selectedCategory;
  });

  const handleBackPress = useCallback(() => {
    if (router.canGoBack()) {
      router.back();
    }
  }, [router]);

  const handleAddCustomPress = useCallback(() => {
    router.push('/p-training_add');
  }, [router]);

  const handleTrainingItemPress = useCallback((itemId: string) => {
    console.log('点击训练项目:', itemId);
    // 目前PRD中没有定义项目详情页，所以只做日志输出
  }, []);

  const handleRefresh = useCallback(async () => {
    setIsRefreshing(true);
    try {
      // 模拟刷新数据
      await new Promise(resolve => setTimeout(resolve, 1000));
    } catch (error) {
      console.error('刷新失败:', error);
    } finally {
      setIsRefreshing(false);
    }
  }, []);

  const renderTrainingItem = useCallback(({ item }: { item: TrainingItemData }) => (
    <TrainingItem
      item={item}
      onPress={() => handleTrainingItemPress(item.id)}
    />
  ), [handleTrainingItemPress]);

  const renderEmptyState = useCallback(() => (
    <View style={styles.emptyStateContainer}>
      <View style={styles.emptyStateIconContainer}>
        <FontAwesome6 name="magnifying-glass" size={32} color="#9ca3af" />
      </View>
      <Text style={styles.emptyStateTitle}>暂无训练项目</Text>
      <Text style={styles.emptyStateDescription}>切换分类或添加自定义训练项目</Text>
    </View>
  ), []);

  const renderListHeader = useCallback(() => (
    <FilterTabs
      selectedCategory={selectedCategory}
      onCategoryChange={setSelectedCategory}
    />
  ), [selectedCategory, setSelectedCategory]);

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
        <Text style={styles.headerTitle}>训练项目库</Text>
        <View style={styles.headerPlaceholder} />
      </View>

      {/* 训练项目列表 */}
      <FlatList
        data={filteredTrainingItems}
        renderItem={renderTrainingItem}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={renderListHeader}
        ListEmptyComponent={renderEmptyState}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={isRefreshing}
            onRefresh={handleRefresh}
            colors={['#02f2ce']}
            tintColor="#02f2ce"
          />
        }
      />

      {/* 添加自定义项目浮动按钮 */}
      <TouchableOpacity
        style={styles.fabButton}
        onPress={handleAddCustomPress}
        activeOpacity={0.8}
      >
        <LinearGradient
          colors={['#02f2ce', '#00f289']}
          style={styles.fabGradient}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        >
          <FontAwesome6 name="plus" size={20} color="#ffffff" />
        </LinearGradient>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default TrainingLibraryScreen;

