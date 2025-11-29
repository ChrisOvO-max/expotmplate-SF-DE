

import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { FontAwesome6 } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './styles';

const MiniPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(true);

  const handlePlayPausePress = () => {
    setIsPlaying(!isPlaying);
  };

  const handlePrevPress = () => {
    console.log('上一首');
  };

  const handleNextPress = () => {
    console.log('下一首');
  };

  return (
    <LinearGradient
      colors={['#02f2ce', '#00f289']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      <View style={styles.content}>
        <View style={styles.leftSection}>
          <View style={styles.iconContainer}>
            <FontAwesome6 name="music" size={16} color="#ffffff" />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.title}>深度工作</Text>
            <View style={styles.progressContainer}>
              <View style={styles.progressBar} />
            </View>
          </View>
        </View>
        <View style={styles.controlsSection}>
          <TouchableOpacity style={styles.controlButton} onPress={handlePrevPress}>
            <FontAwesome6 name="backward-step" size={14} color="#ffffff" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.playButton} onPress={handlePlayPausePress}>
            <FontAwesome6 
              name={isPlaying ? "pause" : "play"} 
              size={16} 
              color="#02f2ce" 
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.controlButton} onPress={handleNextPress}>
            <FontAwesome6 name="forward-step" size={14} color="#ffffff" />
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
};

export default MiniPlayer;

