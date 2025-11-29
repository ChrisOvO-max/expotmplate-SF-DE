

import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { FontAwesome6 } from '@expo/vector-icons';
import Animated, { 
  useSharedValue, 
  useAnimatedStyle, 
  withTiming,
  interpolate
} from 'react-native-reanimated';
import styles from './styles';

interface VocabItem {
  word: string;
  phonetics: string;
  partOfSpeech: string;
  meaning: string;
  example: string;
}

interface VocabCardProps {
  vocabItem: VocabItem;
}

const VocabCard: React.FC<VocabCardProps> = ({ vocabItem }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const flipAnimation = useSharedValue(0);

  const handleCardPress = () => {
    const newFlippedState = !isFlipped;
    setIsFlipped(newFlippedState);
    flipAnimation.value = withTiming(newFlippedState ? 1 : 0, { duration: 300 });
  };

  const frontAnimatedStyle = useAnimatedStyle(() => {
    const rotateY = interpolate(flipAnimation.value, [0, 1], [0, 180]);
    const opacity = interpolate(flipAnimation.value, [0, 0.5, 1], [1, 0, 0]);
    
    return {
      transform: [{ rotateY: `${rotateY}deg` }],
      opacity,
    };
  });

  const backAnimatedStyle = useAnimatedStyle(() => {
    const rotateY = interpolate(flipAnimation.value, [0, 1], [180, 360]);
    const opacity = interpolate(flipAnimation.value, [0, 0.5, 1], [0, 0, 1]);
    
    return {
      transform: [{ rotateY: `${rotateY}deg` }],
      opacity,
    };
  });

  const iconAnimatedStyle = useAnimatedStyle(() => {
    const rotate = interpolate(flipAnimation.value, [0, 1], [0, 90]);
    
    return {
      transform: [{ rotate: `${rotate}deg` }],
    };
  });

  return (
    <TouchableOpacity style={styles.cardContainer} onPress={handleCardPress} activeOpacity={0.8}>
      <View style={styles.cardInner}>
        {/* 卡片正面 */}
        <Animated.View style={[styles.cardSide, styles.cardFront, frontAnimatedStyle]}>
          <View style={styles.frontContent}>
            <View style={styles.wordInfo}>
              <Text style={styles.word}>{vocabItem.word}</Text>
              <Text style={styles.phonetics}>{vocabItem.partOfSpeech} {vocabItem.phonetics}</Text>
            </View>
            <Animated.View style={iconAnimatedStyle}>
              <FontAwesome6 name="chevron-right" size={14} color="#9ca3af" />
            </Animated.View>
          </View>
        </Animated.View>

        {/* 卡片背面 */}
        <Animated.View style={[styles.cardSide, styles.cardBack, backAnimatedStyle]}>
          <View style={styles.backContent}>
            <Text style={styles.word}>{vocabItem.word}</Text>
            <Text style={styles.phonetics}>{vocabItem.partOfSpeech} {vocabItem.phonetics}</Text>
            <Text style={styles.meaning}>{vocabItem.meaning}</Text>
            <Text style={styles.example}>例句: {vocabItem.example}</Text>
          </View>
        </Animated.View>
      </View>
    </TouchableOpacity>
  );
};

export default VocabCard;

