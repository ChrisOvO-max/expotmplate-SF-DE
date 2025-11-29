

import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { FontAwesome6 } from '@expo/vector-icons';

import styles from './styles';

interface GrammarItem {
  question: string;
  options: string[];
  correct: string;
  explanation: string;
}

interface GrammarExerciseProps {
  item: GrammarItem;
  isAnswered: boolean;
  onOptionSelect: (selectedAnswer: string) => void;
}

const GrammarExercise: React.FC<GrammarExerciseProps> = ({
  item,
  isAnswered,
  onOptionSelect,
}) => {
  const getOptionStyle = (optionIndex: number) => {
    const optionKey = String.fromCharCode(65 + optionIndex);
    
    if (!isAnswered) {
      return styles.optionButton;
    }
    
    if (optionKey === item.correct) {
      return [styles.optionButton, styles.correctOption];
    }
    
    return styles.optionButton;
  };

  const getOptionTextStyle = (optionIndex: number) => {
    const optionKey = String.fromCharCode(65 + optionIndex);
    
    if (!isAnswered) {
      return styles.optionText;
    }
    
    if (optionKey === item.correct) {
      return [styles.optionText, styles.correctOptionText];
    }
    
    return styles.optionText;
  };

  const handleOptionPress = (optionIndex: number) => {
    if (!isAnswered) {
      const selectedAnswer = String.fromCharCode(65 + optionIndex);
      onOptionSelect(selectedAnswer);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.exerciseCard}>
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
                <Text style={getOptionTextStyle(index)}>
                  {optionKey}. {option}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
        
        {isAnswered && (
          <View style={styles.explanationContainer}>
            <View style={styles.explanationHeader}>
              <FontAwesome6 name="circle-check" size={16} color="#16a34a" />
              <Text style={styles.explanationTitle}>
                正确答案：{item.correct}. {item.options[item.correct.charCodeAt(0) - 65]}
              </Text>
            </View>
            <Text style={styles.explanationText}>{item.explanation}</Text>
          </View>
        )}
      </View>
    </View>
  );
};

export default GrammarExercise;

