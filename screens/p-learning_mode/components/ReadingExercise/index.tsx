

import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

interface ReadingItem {
  passage: string;
  question: string;
  options: string[];
  correct: string;
}

interface ReadingExerciseProps {
  item: ReadingItem;
  isAnswered: boolean;
  onOptionSelect: (selectedAnswer: string) => void;
}

const ReadingExercise: React.FC<ReadingExerciseProps> = ({
  item,
  isAnswered,
  onOptionSelect,
}) => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

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

  const renderPassage = (passage: string) => {
    const paragraphs = passage.split('\n\n');
    return paragraphs.map((paragraph, index) => (
      <Text key={index} style={styles.passageParagraph}>
        {paragraph}
      </Text>
    ));
  };

  return (
    <View style={styles.container}>
      <View style={styles.exerciseCard}>
        <Text style={styles.titleText}>阅读理解</Text>
        
        <View style={styles.passageContainer}>
          {renderPassage(item.passage)}
        </View>
        
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

export default ReadingExercise;

