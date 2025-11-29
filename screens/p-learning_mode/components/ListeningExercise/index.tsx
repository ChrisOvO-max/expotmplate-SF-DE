

import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { FontAwesome6 } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  interpolate,
} from 'react-native-reanimated';

import styles from './styles';

interface ListeningItem {
  description: string;
  question: string;
  options: string[];
  correct: string;
  audio: {
    title: string;
    duration: string;
  };
}

interface ListeningExerciseProps {
  item: ListeningItem;
  isAnswered: boolean;
  onOptionSelect: (selectedAnswer: string) => void;
}

const ListeningExercise: React.FC<ListeningExerciseProps> = ({
  item,
  isAnswered,
  onOptionSelect,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  
  const audioProgress = useSharedValue(0);
  const audioInterval = useRef<number | null>(null);

  const getOptionStyle = (optionIndex: number) => {
    const optionKey = String.fromCharCode(65 + optionIndex);
    
    if (!isAnswered) {
      return selectedAnswer === optionKey 
        ? [styles.optionButton, styles.selectedOption]
        : styles.optionButton;
    }
    
    if (optionKey === item.correct) {
      return [styles.optionButton, styles.correctOption];
    }
    
    if (selectedAnswer === optionKey && selectedAnswer !== item.correct) {
      return [styles.optionButton, styles.incorrectOption];
    }
    
    return styles.optionButton;
  };

  const handleOptionPress = (optionIndex: number) => {
    if (!isAnswered) {
      const optionKey = String.fromCharCode(65 + optionIndex);
      setSelectedAnswer(optionKey);
      onOptionSelect(optionKey);
    }
  };

  const handlePlayPress = () => {
    if (isPlaying) {
      setIsPlaying(false);
      if (audioInterval.current) {
        clearInterval(audioInterval.current);
        audioInterval.current = null;
      }
    } else {
      setIsPlaying(true);
      setCurrentTime(0);
      audioProgress.value = 0;
      
      // 模拟音频播放
      audioInterval.current = setInterval(() => {
        setCurrentTime(prev => {
          const newTime = prev + 1;
          const progress = (newTime / 90) * 100; // 90秒总时长
          audioProgress.value = withTiming(progress, { duration: 100 });
          
          if (newTime >= 90) {
            setIsPlaying(false);
            if (audioInterval.current) {
              clearInterval(audioInterval.current);
              audioInterval.current = null;
            }
            return 90;
          }
          return newTime;
        });
      }, 1000);
    }
  };

  const handleVolumePress = () => {
    setIsMuted(!isMuted);
  };

  const formatTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const progressAnimatedStyle = useAnimatedStyle(() => {
    const width = interpolate(audioProgress.value, [0, 100], [0, 100]);
    return {
      width: `${width}%`,
    };
  });

  return (
    <View style={styles.container}>
      <View style={styles.exerciseCard}>
        <Text style={styles.titleText}>听力理解练习</Text>
        <Text style={styles.descriptionText}>{item.description}</Text>
        
        {/* 音频播放器 */}
        <LinearGradient
          colors={['#02f2ce', '#00f289']}
          style={styles.audioPlayer}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        >
          <View style={styles.audioHeader}>
            <View style={styles.audioInfo}>
              <TouchableOpacity
                style={styles.playButton}
                onPress={handlePlayPress}
                activeOpacity={0.7}
              >
                <FontAwesome6
                  name={isPlaying ? 'pause' : 'play'}
                  size={18}
                  color="#ffffff"
                />
              </TouchableOpacity>
              <View style={styles.audioDetails}>
                <Text style={styles.audioTitle}>{item.audio.title}</Text>
                <Text style={styles.audioDuration}>时长: {item.audio.duration}</Text>
              </View>
            </View>
            <TouchableOpacity
              style={styles.volumeButton}
              onPress={handleVolumePress}
              activeOpacity={0.7}
            >
              <FontAwesome6
                name={isMuted ? 'volume-xmark' : 'volume-high'}
                size={16}
                color="#ffffff"
              />
            </TouchableOpacity>
          </View>
          
          <View style={styles.progressContainer}>
            <Animated.View style={[styles.progressBar, progressAnimatedStyle]} />
          </View>
          
          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>{formatTime(currentTime)}</Text>
            <Text style={styles.timeText}>{item.audio.duration}</Text>
          </View>
        </LinearGradient>
        
        {/* 听力问题 */}
        <View style={styles.questionContainer}>
          <Text style={styles.questionText}>{item.question}</Text>
          <View style={styles.optionsContainer}>
            {item.options.map((option, index) => {
              const optionKey = String.fromCharCode(65 + index);
              return (
                <TouchableOpacity
                  key={index}
                  style={getOptionStyle(index)}
                  onPress={() => handleOptionPress(index)}
                  activeOpacity={0.7}
                  disabled={isAnswered}
                >
                  <Text style={styles.optionText}>
                    {optionKey}. {option}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </View>
    </View>
  );
};

export default ListeningExercise;

