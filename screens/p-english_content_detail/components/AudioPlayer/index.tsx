

import Slider from '@react-native-community/slider';
import React, { useRef, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { FontAwesome6 } from '@expo/vector-icons';
import styles from './styles';

const AudioPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(65); // 1:05 in seconds
  const [duration] = useState(205); // 3:25 in seconds
  const [progress, setProgress] = useState(0.3); // 30% progress
  
  const progressInterval = useRef<number | null>(null);

  const handlePlayPress = () => {
    const newPlayingState = !isPlaying;
    setIsPlaying(newPlayingState);
    
    if (newPlayingState) {
      // 模拟播放进度
      progressInterval.current = setInterval(() => {
        setCurrentTime(prev => {
          const newTime = prev + 1;
          const newProgress = newTime / duration;
          setProgress(newProgress);
          
          if (newTime >= duration) {
            setIsPlaying(false);
            if (progressInterval.current) {
              clearInterval(progressInterval.current);
            }
            return duration;
          }
          return newTime;
        });
      }, 1000);
    } else {
      if (progressInterval.current) {
        clearInterval(progressInterval.current);
      }
    }
  };

  const handleVolumePress = () => {
    setIsMuted(!isMuted);
  };

  const handleProgressChange = (value: number) => {
    setProgress(value);
    const newTime = Math.floor(value * duration);
    setCurrentTime(newTime);
  };

  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  React.useEffect(() => {
    return () => {
      if (progressInterval.current) {
        clearInterval(progressInterval.current);
      }
    };
  }, []);

  return (
    <View style={styles.audioPlayerContainer}>
      <View style={styles.audioHeader}>
        <Text style={styles.audioTitle}>四级听力 - 对话练习</Text>
        <Text style={styles.audioDuration}>{formatTime(duration)}</Text>
      </View>
      
      <View style={styles.audioControls}>
        <TouchableOpacity style={styles.playButton} onPress={handlePlayPress}>
          <FontAwesome6 
            name={isPlaying ? 'pause' : 'play'} 
            size={16} 
            color="#ffffff" 
          />
        </TouchableOpacity>
        
        <View style={styles.progressContainer}>
          <Slider
            style={styles.progressSlider}
            value={progress}
            onValueChange={handleProgressChange}
            minimumValue={0}
            maximumValue={1}
            minimumTrackTintColor="#02f2ce"
            maximumTrackTintColor="#d1d5db"
            thumbTintColor="#02f2ce"
          />
        </View>
        
        <TouchableOpacity style={styles.volumeButton} onPress={handleVolumePress}>
          <FontAwesome6 
            name={isMuted ? 'volume-mute' : 'volume-high'} 
            size={16} 
            color="#9ca3af" 
          />
        </TouchableOpacity>
      </View>
      
      <View style={styles.timeContainer}>
        <Text style={styles.timeText}>{formatTime(currentTime)}</Text>
        <Text style={styles.timeText}>{formatTime(duration)}</Text>
      </View>
    </View>
  );
};

export default AudioPlayer;

