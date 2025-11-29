

import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { FontAwesome5, FontAwesome6 } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import Animated, { useSharedValue, useAnimatedStyle, withTiming, interpolate, } from 'react-native-reanimated';

import styles from './styles';

interface VocabularyItem {
  word: string;
  phonetic: string;
  meaning: string;
  part: string;
  example: string;
  translation: string;
}

interface WordCardProps {
  item: VocabularyItem;
  onAnswer: (isKnown: boolean) => void;
}

const WordCard: React.FC<WordCardProps> = ({ item, onAnswer }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const flipValue = useSharedValue(0);

  const handleCardPress = () => {
    const newFlippedState = !isFlipped;
    setIsFlipped(newFlippedState);
    flipValue.value = withTiming(newFlippedState ? 1 : 0, { duration: 600 });
  };

  const frontAnimatedStyle = useAnimatedStyle(() => {
    const rotateY = interpolate(flipValue.value, [0, 1], [0, 180]);
    const opacity = interpolate(flipValue.value, [0, 0.5, 1], [1, 0, 0]);
    
    return {
      transform: [{ rotateY: `${rotateY}deg` }],
      opacity,
    };
  });

  const backAnimatedStyle = useAnimatedStyle(() => {
    const rotateY = interpolate(flipValue.value, [0, 1], [180, 360]);
    const opacity = interpolate(flipValue.value, [0, 0.5, 1], [0, 0, 1]);
    
    return {
      transform: [{ rotateY: `${rotateY}deg` }],
      opacity,
    };
  });

  return (
    <View style={styles.container}>
      {/* 单词卡片 */}
      <View style={styles.cardContainer}>
        <TouchableOpacity
          style={styles.cardTouchable}
          onPress={handleCardPress}
          activeOpacity={0.9}
        >
          {/* 卡片正面 */}
          <Animated.View style={[styles.cardSide, styles.cardFront, frontAnimatedStyle]}>
            <LinearGradient
              colors={['rgba(2, 242, 206, 0.1)', 'rgba(0, 242, 137, 0.1)']}
              style={styles.cardGradient}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
            >
              <Text style={styles.wordText}>{item.word}</Text>
              <Text style={styles.phoneticText}>{item.phonetic}</Text>
              <View style={styles.hintContainer}>
                <FontAwesome5 name="mouse-pointer" size={12} color="#6b7280" />
                <Text style={styles.hintText}>点击查看释义</Text>
              </View>
            </LinearGradient>
          </Animated.View>

          {/* 卡片背面 */}
          <Animated.View style={[styles.cardSide, styles.cardBack, backAnimatedStyle]}>
            <LinearGradient
              colors={['rgba(0, 242, 137, 0.1)', 'rgba(2, 150, 242, 0.1)']}
              style={styles.cardGradient}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
            >
              <Text style={styles.meaningText}>{item.meaning}</Text>
              <Text style={styles.partText}>{item.part}</Text>
              <View style={styles.exampleContainer}>
                <Text style={styles.exampleLabel}>例句：</Text>
                <Text style={styles.exampleText}>{item.example}</Text>
              </View>
              <View style={styles.translationContainer}>
                <Text style={styles.translationLabel}>翻译：</Text>
                <Text style={styles.translationText}>{item.translation}</Text>
              </View>
              <View style={styles.backHintContainer}>
                <FontAwesome6 name="arrow-rotate-left" size={10} color="#6b7280" />
                <Text style={styles.backHintText}>再次点击返回</Text>
              </View>
            </LinearGradient>
          </Animated.View>
        </TouchableOpacity>
      </View>

      {/* 操作按钮 */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.knowButton}
          onPress={() => onAnswer(true)}
          activeOpacity={0.8}
        >
          <FontAwesome6 name="check" size={16} color="#ffffff" />
          <Text style={styles.knowButtonText}>认识</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={styles.unknownButton}
          onPress={() => onAnswer(false)}
          activeOpacity={0.8}
        >
          <FontAwesome6 name="xmark" size={16} color="#1f2937" />
          <Text style={styles.unknownButtonText}>不认识</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default WordCard;

