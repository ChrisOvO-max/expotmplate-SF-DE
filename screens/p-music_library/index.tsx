

import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { FontAwesome6 } from '@expo/vector-icons';
import FilterSection from './components/FilterSection';
import MusicItem from './components/MusicItem';
import MiniPlayer from './components/MiniPlayer';
import styles from './styles';

interface MusicData {
  id: string;
  title: string;
  category: 'study' | 'meditation' | 'sleep';
  duration: string;
  isFavorited: boolean;
  iconName: string;
  iconColor: string;
}

const MusicLibraryScreen = () => {
  const router = useRouter();
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [isMiniPlayerVisible, setIsMiniPlayerVisible] = useState<boolean>(true);

  const [musicData, setMusicData] = useState<MusicData[]>([
    {
      id: '1',
      title: '专注学习曲',
      category: 'study',
      duration: '学习专用 · 60分钟',
      isFavorited: false,
      iconName: 'music',
      iconColor: '#02f2ce'
    },
    {
      id: '2',
      title: '深度工作',
      category: 'study',
      duration: '学习专用 · 45分钟',
      isFavorited: true,
      iconName: 'music',
      iconColor: '#02f2ce'
    },
    {
      id: '3',
      title: '思维启发',
      category: 'study',
      duration: '学习专用 · 30分钟',
      isFavorited: false,
      iconName: 'music',
      iconColor: '#02f2ce'
    },
    {
      id: '4',
      title: '正念冥想',
      category: 'meditation',
      duration: '冥想专用 · 20分钟',
      isFavorited: false,
      iconName: 'leaf',
      iconColor: '#00f289'
    },
    {
      id: '5',
      title: '内心平静',
      category: 'meditation',
      duration: '冥想专用 · 30分钟',
      isFavorited: true,
      iconName: 'leaf',
      iconColor: '#00f289'
    },
    {
      id: '6',
      title: '呼吸练习',
      category: 'meditation',
      duration: '冥想专用 · 15分钟',
      isFavorited: false,
      iconName: 'leaf',
      iconColor: '#00f289'
    },
    {
      id: '7',
      title: '深度睡眠',
      category: 'sleep',
      duration: '助眠专用 · 8小时',
      isFavorited: false,
      iconName: 'moon',
      iconColor: '#0296f2e6'
    },
    {
      id: '8',
      title: '轻柔摇篮曲',
      category: 'sleep',
      duration: '助眠专用 · 60分钟',
      isFavorited: true,
      iconName: 'moon',
      iconColor: '#0296f2e6'
    },
    {
      id: '9',
      title: '自然雨声',
      category: 'sleep',
      duration: '助眠专用 · 120分钟',
      isFavorited: false,
      iconName: 'moon',
      iconColor: '#0296f2e6'
    }
  ]);

  const filteredMusicData = musicData.filter(music => 
    activeFilter === 'all' || music.category === activeFilter
  );

  const handleBackPress = () => {
    if (router.canGoBack()) {
      router.back();
    }
  };

  const handleSearchPress = () => {
    Alert.alert('搜索', '搜索功能开发中');
  };

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
  };

  const handleMusicItemPress = (musicId: string) => {
    router.push(`/p-music_player?musicId=${musicId}`);
  };

  const handleFavoritePress = (musicId: string) => {
    setMusicData(prevData =>
      prevData.map(music =>
        music.id === musicId
          ? { ...music, isFavorited: !music.isFavorited }
          : music
      )
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* 顶部导航 */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.headerButton} onPress={handleBackPress}>
          <FontAwesome6 name="arrow-left" size={18} color="#1f2937" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>轻音乐库</Text>
        <TouchableOpacity style={styles.headerButton} onPress={handleSearchPress}>
          <FontAwesome6 name="magnifying-glass" size={18} color="#1f2937" />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* 分类筛选器 */}
        <FilterSection
          activeFilter={activeFilter}
          onFilterChange={handleFilterChange}
        />

        {/* 轻音乐列表 */}
        <View style={styles.musicListSection}>
          {filteredMusicData.map((music) => (
            <MusicItem
              key={music.id}
              music={music}
              onPress={() => handleMusicItemPress(music.id)}
              onFavoritePress={() => handleFavoritePress(music.id)}
            />
          ))}
        </View>

        {/* 底部间距 */}
        <View style={styles.bottomSpacing} />
      </ScrollView>

      {/* 迷你播放器 */}
      {isMiniPlayerVisible && <MiniPlayer />}
    </SafeAreaView>
  );
};

export default MusicLibraryScreen;

