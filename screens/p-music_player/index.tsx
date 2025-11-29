

import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image, Alert, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { FontAwesome6 } from '@expo/vector-icons';
import Slider from '@react-native-community/slider';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './styles';

interface MusicData {
  title: string;
  artist: string;
  category: string;
  cover: string;
  duration: string;
  currentTime: string;
  progress: number;
  isFavorite: boolean;
}

interface RecommendationItem {
  id: string;
  title: string;
  artist: string;
  category: string;
  cover: string;
}

const MusicPlayerScreen: React.FC = () => {
  const router = useRouter();
  const params = useLocalSearchParams();
  
  // 状态管理
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [currentProgress, setCurrentProgress] = useState<number>(45);
  const [currentTime, setCurrentTime] = useState<string>('02:35');
  const [volume, setVolume] = useState<number>(70);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const [loopMode, setLoopMode] = useState<number>(0); // 0: 不循环, 1: 单曲循环, 2: 列表循环
  
  // 模拟音乐数据
  const musicData: MusicData = {
    title: '宁静钢琴曲',
    artist: '古典音乐家',
    category: '学习专注',
    cover: 'https://s.coze.cn/image/RME05tPVhXk/',
    duration: '05:42',
    currentTime: '02:35',
    progress: 45,
    isFavorite: false
  };

  const recommendations: RecommendationItem[] = [
    {
      id: '1',
      title: '自然雨声',
      artist: '环境音乐',
      category: '自然风景',
      cover: 'https://s.coze.cn/image/EEE_BvL5tF4/'
    },
    {
      id: '2',
      title: '冥想音乐',
      artist: '放松音乐',
      category: '艺术',
      cover: 'https://s.coze.cn/image/placeholder2'
    }
  ];

  // 事件处理函数
  const handleBackPress = () => {
    if (router.canGoBack()) {
      router.back();
    }
  };

  const handleMorePress = () => {
    Alert.alert('更多选项', '打开更多选项菜单');
  };

  const handlePlayPausePress = () => {
    setIsPlaying(!isPlaying);
    console.log(isPlaying ? '暂停音乐播放' : '开始音乐播放');
  };

  const handlePrevPress = () => {
    console.log('播放上一首音乐');
  };

  const handleNextPress = () => {
    console.log('播放下一首音乐');
  };

  const handleProgressChange = (value: number) => {
    setCurrentProgress(value);
    console.log('调整播放进度:', value + '%');
  };

  const handleVolumeChange = (value: number) => {
    setVolume(value);
    console.log('调整音量:', value + '%');
  };

  const handleMutePress = () => {
    setIsMuted(!isMuted);
    console.log(isMuted ? '取消静音' : '静音');
  };

  const handleFavoritePress = () => {
    setIsFavorite(!isFavorite);
    console.log(isFavorite ? '取消收藏音乐' : '收藏音乐');
  };

  const handleLoopPress = () => {
    const newLoopMode = (loopMode + 1) % 3;
    setLoopMode(newLoopMode);
    
    switch(newLoopMode) {
      case 0:
        console.log('设置为不循环');
        break;
      case 1:
        console.log('设置为单曲循环');
        break;
      case 2:
        console.log('设置为列表循环');
        break;
    }
  };

  const handleRecommendationPress = (item: RecommendationItem) => {
    console.log('点击推荐音乐:', item.title);
  };

  const getLoopIcon = () => {
    switch(loopMode) {
      case 0:
        return 'redo';
      case 1:
        return 'redo';
      case 2:
        return 'redo-alt';
      default:
        return 'redo';
    }
  };

  const getLoopIconColor = () => {
    return loopMode === 0 ? '#6b7280' : '#02f2ce';
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* 顶部导航栏 */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.headerButton} onPress={handleBackPress}>
            <FontAwesome6 name="arrow-left" size={18} color="#1f2937" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>音乐播放</Text>
          <TouchableOpacity style={styles.headerButton} onPress={handleMorePress}>
            <FontAwesome6 name="ellipsis" size={18} color="#1f2937" />
          </TouchableOpacity>
        </View>

        {/* 音乐信息区域 */}
        <View style={styles.musicInfoSection}>
          {/* 音乐封面和可视化效果 */}
          <View style={styles.coverContainer}>
            <LinearGradient
              colors={['#02f2ce', '#00f289']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.visualizer}
            >
              {/* 可视化频谱条 */}
              <View style={[styles.visualizerBar, styles.bar1]} />
              <View style={[styles.visualizerBar, styles.bar2]} />
              <View style={[styles.visualizerBar, styles.bar3]} />
              <View style={[styles.visualizerBar, styles.bar4]} />
              <View style={[styles.visualizerBar, styles.bar5]} />
              
              {/* 音乐封面图片 */}
              <Image source={{ uri: musicData.cover }} style={styles.coverImage} />
            </LinearGradient>
          </View>
          
          {/* 音乐信息 */}
          <View style={styles.musicDetails}>
            <Text style={styles.musicTitle}>{musicData.title}</Text>
            <Text style={styles.musicArtist}>{musicData.artist}</Text>
            <View style={styles.categoryContainer}>
              <FontAwesome6 name="tag" size={12} color="#02f2ce" />
              <Text style={styles.categoryText}>{musicData.category}</Text>
            </View>
          </View>
        </View>

        {/* 播放进度区域 */}
        <View style={styles.progressSection}>
          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>{currentTime}</Text>
            <Text style={styles.timeText}>{musicData.duration}</Text>
          </View>
          <Slider
            style={styles.progressSlider}
            minimumValue={0}
            maximumValue={100}
            value={currentProgress}
            onValueChange={handleProgressChange}
            minimumTrackTintColor="#02f2ce"
            maximumTrackTintColor="#e5e7eb"
          />
        </View>

        {/* 播放控制区域 */}
        <View style={styles.controlsSection}>
          <View style={styles.controlsContainer}>
            {/* 上一首 */}
            <TouchableOpacity style={styles.controlButton} onPress={handlePrevPress}>
              <FontAwesome6 name="backward-step" size={18} color="#1f2937" />
            </TouchableOpacity>
            
            {/* 播放/暂停 */}
            <TouchableOpacity style={styles.playButton} onPress={handlePlayPausePress}>
              <LinearGradient
                colors={['#02f2ce', '#00f289']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.playButtonGradient}
              >
                <FontAwesome6 
                  name={isPlaying ? "pause" : "play"} 
                  size={20} 
                  color="#ffffff" 
                />
              </LinearGradient>
            </TouchableOpacity>
            
            {/* 下一首 */}
            <TouchableOpacity style={styles.controlButton} onPress={handleNextPress}>
              <FontAwesome6 name="forward-step" size={18} color="#1f2937" />
            </TouchableOpacity>
          </View>
        </View>

        {/* 音量和收藏区域 */}
        <View style={styles.volumeSection}>
          <View style={styles.volumeCard}>
            {/* 音量控制 */}
            <View style={styles.volumeControl}>
              <View style={styles.volumeInfo}>
                <View style={styles.volumeIconContainer}>
                  <FontAwesome6 name="volume-high" size={16} color="#0296f2e6" />
                </View>
                <Text style={styles.volumeLabel}>音量</Text>
              </View>
              <View style={styles.volumeSliderContainer}>
                <Slider
                  style={styles.volumeSlider}
                  minimumValue={0}
                  maximumValue={100}
                  value={volume}
                  onValueChange={handleVolumeChange}
                  minimumTrackTintColor="#6b7280"
                  maximumTrackTintColor="#e5e7eb"
                />
              </View>
              <TouchableOpacity style={styles.muteButton} onPress={handleMutePress}>
                <FontAwesome6 
                  name={isMuted ? "volume-xmark" : "volume-high"} 
                  size={14} 
                  color="#6b7280" 
                />
              </TouchableOpacity>
            </View>
            
            {/* 其他控制 */}
            <View style={styles.otherControls}>
              {/* 收藏 */}
              <TouchableOpacity style={styles.otherControlButton} onPress={handleFavoritePress}>
                <FontAwesome6 
                  name="heart" 
                  size={18} 
                  color={isFavorite ? "#ef4444" : "#6b7280"}
                  solid={isFavorite}
                />
                <Text style={styles.otherControlText}>收藏</Text>
              </TouchableOpacity>
              
              {/* 循环模式 */}
              <TouchableOpacity style={styles.otherControlButton} onPress={handleLoopPress}>
                <FontAwesome6 
                  name={getLoopIcon()} 
                  size={18} 
                  color={getLoopIconColor()} 
                />
                <Text style={styles.otherControlText}>循环</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* 推荐音乐 */}
        <View style={styles.recommendationsSection}>
          <Text style={styles.recommendationsTitle}>推荐音乐</Text>
          <View style={styles.recommendationsList}>
            {recommendations.map((item) => (
              <TouchableOpacity
                key={item.id}
                style={styles.recommendationItem}
                onPress={() => handleRecommendationPress(item)}
              >
                <Image source={{ uri: item.cover }} style={styles.recommendationCover} />
                <View style={styles.recommendationInfo}>
                  <Text style={styles.recommendationTitle}>{item.title}</Text>
                  <Text style={styles.recommendationArtist}>{item.artist}</Text>
                </View>
                <TouchableOpacity style={styles.recommendationPlayButton}>
                  <FontAwesome6 name="play" size={12} color="#02f2ce" />
                </TouchableOpacity>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MusicPlayerScreen;

