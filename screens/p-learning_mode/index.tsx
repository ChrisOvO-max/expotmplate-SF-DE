

import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Modal, Alert, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { FontAwesome6 } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import Animated, { useSharedValue, useAnimatedStyle, withTiming, interpolate, } from 'react-native-reanimated';

import WordCard from './components/WordCard';
import GrammarExercise from './components/GrammarExercise';
import ListeningExercise from './components/ListeningExercise';
import ReadingExercise from './components/ReadingExercise';
import CompletionModal from './components/CompletionModal';
import styles from './styles';

interface VocabularyItem {
  word: string;
  phonetic: string;
  meaning: string;
  part: string;
  example: string;
  translation: string;
}

interface GrammarItem {
  question: string;
  options: string[];
  correct: string;
  explanation: string;
}

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

interface ReadingItem {
  passage: string;
  question: string;
  options: string[];
  correct: string;
}

interface LearningContent {
  vocabulary: {
    title: string;
    type: string;
    items: VocabularyItem[];
  };
  grammar: {
    title: string;
    type: string;
    items: GrammarItem[];
  };
  listening: {
    title: string;
    type: string;
    items: ListeningItem[];
  };
  reading: {
    title: string;
    type: string;
    items: ReadingItem[];
  };
}

type LearningMode = 'vocabulary' | 'grammar' | 'listening' | 'reading';

const LearningModeScreen: React.FC = () => {
  const router = useRouter();
  const params = useLocalSearchParams();
  const taskId = params.taskId || params.contentId;

  const [currentMode, setCurrentMode] = useState<LearningMode>('vocabulary');
  const [currentItemIndex, setCurrentItemIndex] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [isAnswered, setIsAnswered] = useState(false);
  const [showCompletionModal, setShowCompletionModal] = useState(false);
  const [startTime] = useState(Date.now());

  const progressValue = useSharedValue(0);

  const learningContent: LearningContent = {
    vocabulary: {
      title: '英语四级词汇',
      type: '单词记忆',
      items: [
        {
          word: 'ambitious',
          phonetic: '/æmˈbɪʃəs/',
          meaning: '有雄心的，野心勃勃的',
          part: 'adj.',
          example: 'She is an ambitious student who wants to study abroad.',
          translation: '她是一个有雄心的学生，想要出国留学。',
        },
        {
          word: 'efficient',
          phonetic: '/ɪˈfɪʃənt/',
          meaning: '高效的，有能力的',
          part: 'adj.',
          example: 'An efficient worker can finish more tasks in less time.',
          translation: '一个高效的工人能在更少的时间内完成更多的任务。',
        },
        {
          word: 'magnificent',
          phonetic: '/mæɡˈnɪfɪsənt/',
          meaning: '壮丽的，宏伟的',
          part: 'adj.',
          example: 'The magnificent palace attracted millions of visitors.',
          translation: '这座宏伟的宫殿吸引了数百万游客。',
        },
      ],
    },
    grammar: {
      title: '英语语法练习',
      type: '语法练习',
      items: [
        {
          question: '选择正确的时态填空：\n\nShe ______ (study) English for 5 years.',
          options: ['studies', 'studied', 'has studied', 'will study'],
          correct: 'C',
          explanation: '现在完成时（has studied）表示从过去开始持续到现在的动作，符合"for 5 years"的时间状语。',
        },
        {
          question: '选择正确的冠词填空：\n\nI want to be ______ doctor when I grow up.',
          options: ['a', 'an', 'the', '/'],
          correct: 'A',
          explanation: '不定冠词a用于辅音音素开头的单词前，doctor以辅音音素/d/开头。',
        },
      ],
    },
    listening: {
      title: '英语听力练习',
      type: '听力理解',
      items: [
        {
          description: '请仔细听下面的对话，然后回答问题。',
          question: '问题：对话中两人在讨论什么？',
          options: ['周末计划', '工作安排', '学习方法', '旅行计划'],
          correct: 'A',
          audio: {
            title: '日常对话',
            duration: '1:30',
          },
        },
      ],
    },
    reading: {
      title: '英语阅读理解',
      type: '阅读理解',
      items: [
        {
          passage: 'Learning a new language can be challenging, but it is also very rewarding. Studies have shown that bilingual people have better cognitive abilities and can delay the onset of dementia.\n\nThe best way to learn a language is through consistent practice. Daily exposure to the language, whether through reading, listening, or speaking, is more effective than occasional intensive study sessions.',
          question: '问题：根据文章，学习语言的最佳方法是什么？',
          options: ['参加语言课程', '每天练习', '去国外生活', '使用翻译软件'],
          correct: 'B',
        },
      ],
    },
  };

  const currentContent = learningContent[currentMode];
  const totalItems = currentContent.items.length;
  const currentItem = currentContent.items[currentItemIndex];

  useEffect(() => {
    initializeLearningMode();
  }, []);

  useEffect(() => {
    updateProgressAnimation();
  }, [currentItemIndex, totalItems]);

  const initializeLearningMode = () => {
    if (taskId && typeof taskId === 'string') {
      if (taskId.includes('grammar')) {
        setCurrentMode('grammar');
      } else if (taskId.includes('listening')) {
        setCurrentMode('listening');
      } else if (taskId.includes('reading')) {
        setCurrentMode('reading');
      }
    }
  };

  const updateProgressAnimation = () => {
    const progress = ((currentItemIndex + 1) / totalItems) * 100;
    progressValue.value = withTiming(progress, { duration: 300 });
  };

  const handleBackPress = () => {
    if (router.canGoBack()) {
      router.back();
    } else {
      router.replace('/p-daily_learn');
    }
  };

  const handleMenuPress = () => {
    Alert.alert('菜单', '功能开发中...');
  };

  const handleVocabularyAnswer = (isKnown: boolean) => {
    if (isKnown) {
      setCorrectAnswers(prev => prev + 1);
    }
    setIsAnswered(true);
    setTimeout(() => {
      handleNextItem();
    }, 1000);
  };

  const handleOptionSelect = (selectedAnswer: string) => {
    if (isAnswered) return;

    const correctAnswer = currentItem.correct;
    setIsAnswered(true);

    if (selectedAnswer === correctAnswer) {
      setCorrectAnswers(prev => prev + 1);
    }
  };

  const handlePrevItem = () => {
    if (currentItemIndex > 0) {
      setCurrentItemIndex(prev => prev - 1);
      setIsAnswered(false);
    }
  };

  const handleNextItem = () => {
    if (currentItemIndex < totalItems - 1) {
      setCurrentItemIndex(prev => prev + 1);
      setIsAnswered(false);
    } else {
      handleCompleteLearning();
    }
  };

  const handleCompleteLearning = () => {
    const endTime = Date.now();
    const timeSpent = Math.round((endTime - startTime) / 60000);
    const accuracy = Math.round((correctAnswers / totalItems) * 100);
    
    setShowCompletionModal(true);
  };

  const handleCompleteModalClose = () => {
    setShowCompletionModal(false);
    handleBackPress();
  };

  const progressAnimatedStyle = useAnimatedStyle(() => {
    const width = interpolate(progressValue.value, [0, 100], [0, 100]);
    return {
      width: `${width}%`,
    };
  });

  const renderLearningContent = () => {
    switch (currentMode) {
      case 'vocabulary':
        return (
          <WordCard
            item={currentItem as VocabularyItem}
            onAnswer={handleVocabularyAnswer}
          />
        );
      case 'grammar':
        return (
          <GrammarExercise
            item={currentItem as GrammarItem}
            isAnswered={isAnswered}
            onOptionSelect={handleOptionSelect}
          />
        );
      case 'listening':
        return (
          <ListeningExercise
            item={currentItem as ListeningItem}
            isAnswered={isAnswered}
            onOptionSelect={handleOptionSelect}
          />
        );
      case 'reading':
        return (
          <ReadingExercise
            item={currentItem as ReadingItem}
            isAnswered={isAnswered}
            onOptionSelect={handleOptionSelect}
          />
        );
      default:
        return null;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* 顶部导航 */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.headerButton}
          onPress={handleBackPress}
          activeOpacity={0.7}
        >
          <FontAwesome6 name="arrow-left" size={18} color="#1f2937" />
        </TouchableOpacity>
        
        <View style={styles.headerCenter}>
          <Text style={styles.headerTitle}>{currentContent.title}</Text>
          <Text style={styles.headerSubtitle}>{currentContent.type}</Text>
        </View>
        
        <TouchableOpacity
          style={styles.headerButton}
          onPress={handleMenuPress}
          activeOpacity={0.7}
        >
          <FontAwesome6 name="ellipsis-vertical" size={18} color="#1f2937" />
        </TouchableOpacity>
      </View>

      {/* 进度条 */}
      <View style={styles.progressSection}>
        <View style={styles.progressHeader}>
          <Text style={styles.progressText}>进度</Text>
          <Text style={styles.progressCount}>
            {currentItemIndex + 1}/{totalItems}
          </Text>
        </View>
        <View style={styles.progressBarContainer}>
          <Animated.View style={[styles.progressBar, progressAnimatedStyle]} />
        </View>
      </View>

      {/* 学习内容 */}
      <ScrollView
        style={styles.contentContainer}
        contentContainerStyle={styles.contentScrollContainer}
        showsVerticalScrollIndicator={false}
      >
        {renderLearningContent()}
      </ScrollView>

      {/* 底部操作按钮 */}
      <View style={styles.bottomActions}>
        <TouchableOpacity
          style={[
            styles.actionButton,
            styles.prevButton,
            currentItemIndex === 0 && styles.disabledButton,
          ]}
          onPress={handlePrevItem}
          disabled={currentItemIndex === 0}
          activeOpacity={0.7}
        >
          <FontAwesome6 name="chevron-left" size={16} color="#1f2937" />
          <Text style={styles.prevButtonText}>上一题</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={[styles.actionButton, styles.nextButton]}
          onPress={handleNextItem}
          activeOpacity={0.7}
        >
          <Text style={styles.nextButtonText}>
            {currentItemIndex === totalItems - 1 ? '完成学习' : '下一题'}
          </Text>
          <FontAwesome6
            name={currentItemIndex === totalItems - 1 ? 'check' : 'chevron-right'}
            size={16}
            color="#ffffff"
          />
        </TouchableOpacity>
      </View>

      {/* 完成弹窗 */}
      <CompletionModal
        visible={showCompletionModal}
        accuracy={Math.round((correctAnswers / totalItems) * 100)}
        timeSpent={Math.round((Date.now() - startTime) / 60000)}
        onClose={handleCompleteModalClose}
      />
    </SafeAreaView>
  );
};

export default LearningModeScreen;

