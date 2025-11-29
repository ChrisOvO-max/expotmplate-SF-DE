

import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Alert, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { FontAwesome6 } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import VocabCard from './components/VocabCard';
import AudioPlayer from './components/AudioPlayer';
import styles from './styles';

interface ContentData {
  title: string;
  type: string;
  difficulty: string;
  duration: string;
  description: string;
  icon: string;
  iconColor: string;
}

interface VocabItem {
  word: string;
  phonetics: string;
  partOfSpeech: string;
  meaning: string;
  example: string;
}

const EnglishContentDetailScreen = () => {
  const router = useRouter();
  const { contentId } = useLocalSearchParams<{ contentId: string }>();
  
  const [isFavorited, setIsFavorited] = useState(false);
  const [contentData, setContentData] = useState<ContentData | null>(null);
  const [vocabularyList, setVocabularyList] = useState<VocabItem[]>([]);

  // 模拟内容数据
  const mockContentData: Record<string, ContentData> = {
    'vocab1': {
      title: '大学英语四级核心词汇 - 第1单元',
      type: '词汇',
      difficulty: '四级',
      duration: '预计30分钟',
      description: '本单元包含50个大学英语四级核心词汇，涵盖日常交流、学术写作等场景。通过例句学习和练习，帮助你掌握这些重要词汇的用法。',
      icon: 'book',
      iconColor: '#02f2ce'
    },
    'vocab2': {
      title: '大学英语六级高频词汇 - 第5单元',
      type: '词汇',
      difficulty: '六级',
      duration: '预计45分钟',
      description: '精选60个六级高频词汇，适合备考六级的学生。每个词汇都配有详细的用法说明和例句。',
      icon: 'book',
      iconColor: '#02f2ce'
    },
    'grammar1': {
      title: '英语时态语法详解',
      type: '语法',
      difficulty: '四级',
      duration: '预计60分钟',
      description: '系统讲解英语各种时态的用法，包括一般现在时、一般过去时、现在进行时等。',
      icon: 'language',
      iconColor: '#00f289'
    },
    'listening1': {
      title: '四级听力对话练习',
      type: '听力',
      difficulty: '四级',
      duration: '预计25分钟',
      description: '包含10段四级听力对话，配有原文和练习题，帮助提升听力理解能力。',
      icon: 'headphones',
      iconColor: '#0296f2e6'
    }
  };

  // 模拟词汇数据
  const mockVocabularyList: VocabItem[] = [
    {
      word: 'abandon',
      phonetics: '/əˈbændən/',
      partOfSpeech: 'v.',
      meaning: '放弃，遗弃',
      example: 'He had to abandon his journey due to bad weather.'
    },
    {
      word: 'ability',
      phonetics: '/əˈbɪləti/',
      partOfSpeech: 'n.',
      meaning: '能力，才能',
      example: 'She has the ability to speak three languages fluently.'
    },
    {
      word: 'abnormal',
      phonetics: '/æbˈnɔːrml/',
      partOfSpeech: 'adj.',
      meaning: '反常的，异常的',
      example: 'The test results showed some abnormal patterns.'
    },
    {
      word: 'aboard',
      phonetics: '/əˈbɔːrd/',
      partOfSpeech: 'adv.',
      meaning: '在船上，在飞机上',
      example: 'All passengers must be aboard by 9 PM.'
    },
    {
      word: 'absolute',
      phonetics: '/ˈæbsəluːt/',
      partOfSpeech: 'adj.',
      meaning: '绝对的，完全的',
      example: 'There is no absolute truth in this matter.'
    }
  ];

  useEffect(() => {
    loadContentData();
  }, [contentId]);

  const loadContentData = () => {
    const currentContentId = contentId || 'vocab1';
    const content = mockContentData[currentContentId] || mockContentData['vocab1'];
    setContentData(content);
    setVocabularyList(mockVocabularyList);
  };

  const handleBackPress = () => {
    if (router.canGoBack()) {
      router.back();
    } else {
      router.push('/p-english_library');
    }
  };

  const handleFavoritePress = () => {
    setIsFavorited(!isFavorited);
    Alert.alert(
      isFavorited ? '取消收藏' : '已收藏',
      isFavorited ? '已从收藏夹中移除' : '已添加到收藏夹'
    );
  };

  const handleStartLearningPress = () => {
    const currentContentId = contentId || 'vocab1';
    router.push(`/p-learning_mode?contentId=${currentContentId}`);
  };

  const renderContentInfoCard = () => {
    if (!contentData) return null;

    return (
      <View style={styles.contentInfoCard}>
        <View style={styles.contentInfoHeader}>
          <View style={styles.contentInfoTextContainer}>
            <Text style={styles.contentTitle}>{contentData.title}</Text>
            <View style={styles.contentMetaContainer}>
              <View style={styles.contentMetaItem}>
                <FontAwesome6 name="tag" size={12} color="#6b7280" />
                <Text style={styles.contentMetaText}>{contentData.type}</Text>
              </View>
              <View style={styles.contentMetaItem}>
                <FontAwesome6 name="star" size={12} color="#6b7280" />
                <Text style={styles.contentMetaText}>{contentData.difficulty}</Text>
              </View>
              <View style={styles.contentMetaItem}>
                <FontAwesome6 name="clock" size={12} color="#6b7280" />
                <Text style={styles.contentMetaText}>{contentData.duration}</Text>
              </View>
            </View>
          </View>
          <View style={[styles.contentIconContainer, { backgroundColor: `${contentData.iconColor}1A` }]}>
            <FontAwesome6 name={contentData.icon} size={24} color={contentData.iconColor} />
          </View>
        </View>
        <Text style={styles.contentDescription}>{contentData.description}</Text>
      </View>
    );
  };

  const renderVocabularyContent = () => {
    if (!contentData || contentData.type !== '词汇') return null;

    return (
      <View style={styles.vocabContentCard}>
        <View style={styles.sectionHeader}>
          <FontAwesome6 name="list-ul" size={16} color="#02f2ce" />
          <Text style={styles.sectionTitle}>词汇列表</Text>
        </View>
        <View style={styles.vocabList}>
          {vocabularyList.map((item, index) => (
            <VocabCard key={index} vocabItem={item} />
          ))}
        </View>
        <View style={styles.vocabFooter}>
          <Text style={styles.vocabFooterText}>显示5/50个词汇，开始学习查看全部</Text>
        </View>
      </View>
    );
  };

  const renderGrammarContent = () => {
    if (!contentData || contentData.type !== '语法') return null;

    return (
      <View style={styles.grammarContentCard}>
        <View style={styles.sectionHeader}>
          <FontAwesome6 name="language" size={16} color="#00f289" />
          <Text style={styles.sectionTitle}>语法讲解</Text>
        </View>
        <View style={styles.grammarContent}>
          <View style={styles.grammarItem}>
            <Text style={styles.grammarItemTitle}>一般现在时</Text>
            <Text style={styles.grammarItemDescription}>
              一般现在时表示经常性、习惯性的动作或状态，也可表示客观事实和普遍真理。
            </Text>
            <View style={styles.grammarRulesContainer}>
              <View style={styles.grammarRuleItem}>
                <View style={styles.grammarRuleTag}>
                  <Text style={styles.grammarRuleTagText}>结构</Text>
                </View>
                <Text style={styles.grammarRuleText}>主语 + 动词原形/第三人称单数</Text>
              </View>
              <View style={styles.grammarRuleItem}>
                <View style={[styles.grammarRuleTag, { backgroundColor: '#00f2891A' }]}>
                  <Text style={[styles.grammarRuleTagText, { color: '#00f289' }]}>例句</Text>
                </View>
                <Text style={styles.grammarRuleText}>I study English every day.</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  };

  const renderListeningContent = () => {
    if (!contentData || contentData.type !== '听力') return null;

    return (
      <View style={styles.listeningContentCard}>
        <View style={styles.sectionHeader}>
          <FontAwesome6 name="headphones" size={16} color="#0296f2e6" />
          <Text style={styles.sectionTitle}>听力练习</Text>
        </View>
        <View style={styles.listeningContent}>
          <AudioPlayer />
          <View style={styles.listeningTextContainer}>
            <Text style={styles.listeningTextTitle}>听力原文</Text>
            <Text style={styles.listeningTextContent}>
              M: Excuse me, could you tell me where the nearest post office is?{'\n'}
              W: Sure, go straight ahead for two blocks and then turn left. You'll see it on your right.
            </Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* 顶部导航栏 */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.headerButton} onPress={handleBackPress}>
          <FontAwesome6 name="arrow-left" size={16} color="#1f2937" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>英语内容详情</Text>
        <TouchableOpacity style={styles.headerButton} onPress={handleFavoritePress}>
          <FontAwesome6 
            name="heart" 
            size={16} 
            color={isFavorited ? '#ef4444' : '#9ca3af'} 
            solid={isFavorited}
          />
        </TouchableOpacity>
      </View>

      {/* 内容区域 */}
      <ScrollView style={styles.contentArea} showsVerticalScrollIndicator={false}>
        {renderContentInfoCard()}
        {renderVocabularyContent()}
        {renderGrammarContent()}
        {renderListeningContent()}

        {/* 开始学习按钮 */}
        <View style={styles.startLearningContainer}>
          <TouchableOpacity style={styles.startLearningButton} onPress={handleStartLearningPress}>
            <LinearGradient
              colors={['#02f2ce', '#00f289']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.startLearningGradient}
            >
              <FontAwesome6 name="play" size={16} color="#ffffff" />
              <Text style={styles.startLearningText}>开始学习</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default EnglishContentDetailScreen;

