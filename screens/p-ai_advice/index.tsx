

import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { FontAwesome6 } from '@expo/vector-icons';
import styles from './styles';

type CategoryType = 'learning' | 'training' | 'health' | 'time' | 'weakness' | 'mood';

interface CategoryItem {
  id: CategoryType;
  title: string;
  description: string;
  icon: string;
  iconColor: string;
  iconBgColor: string;
}

interface AdviceContent {
  title: string;
  subtitle: string;
  icon: string;
  iconColor: string;
  iconBgColor: string;
  sections: Array<{
    type: 'success' | 'warning' | 'info';
    title: string;
    description: string;
    icon: string;
  }>;
}

const categories: CategoryItem[] = [
  {
    id: 'learning',
    title: '学习建议',
    description: '基于学习数据的个性化建议',
    icon: 'book',
    iconColor: '#02f2ce',
    iconBgColor: 'rgba(2, 242, 206, 0.1)',
  },
  {
    id: 'training',
    title: '训练建议',
    description: '健身训练优化建议',
    icon: 'dumbbell',
    iconColor: '#00f289',
    iconBgColor: 'rgba(0, 242, 137, 0.1)',
  },
  {
    id: 'health',
    title: '健康建议',
    description: '健康生活方式建议',
    icon: 'heart',
    iconColor: '#0296f2e6',
    iconBgColor: 'rgba(2, 150, 242, 0.1)',
  },
  {
    id: 'time',
    title: '时间管理',
    description: '专注与时间优化建议',
    icon: 'clock',
    iconColor: '#f59e0b',
    iconBgColor: 'rgba(245, 158, 11, 0.1)',
  },
  {
    id: 'weakness',
    title: '薄弱点分析',
    description: '学习训练薄弱环节分析',
    icon: 'triangle-exclamation',
    iconColor: '#dc2626',
    iconBgColor: 'rgba(220, 38, 38, 0.1)',
  },
  {
    id: 'mood',
    title: '心情优化',
    description: '情绪管理与优化建议',
    icon: 'face-smile',
    iconColor: '#7c3aed',
    iconBgColor: 'rgba(124, 58, 237, 0.1)',
  },
];

const adviceContents: Record<CategoryType, AdviceContent> = {
  learning: {
    title: '学习建议',
    subtitle: '基于您最近7天的学习数据',
    icon: 'graduation-cap',
    iconColor: '#02f2ce',
    iconBgColor: 'rgba(2, 242, 206, 0.1)',
    sections: [
      {
        type: 'success',
        title: '优势领域',
        description: '您的词汇掌握度达到了85%，表现优秀！继续保持这个学习节奏。',
        icon: 'circle-check',
      },
      {
        type: 'warning',
        title: '提升建议',
        description: '建议增加听力练习时间，目前听力正确率为68%，可以每天额外练习15分钟。',
        icon: 'lightbulb',
      },
      {
        type: 'info',
        title: '本周目标',
        description: '建议本周完成200个新单词学习，重点复习语法时态部分。',
        icon: 'bullseye',
      },
    ],
  },
  training: {
    title: '训练建议',
    subtitle: '基于您最近7天的训练数据',
    icon: 'dumbbell',
    iconColor: '#00f289',
    iconBgColor: 'rgba(0, 242, 137, 0.1)',
    sections: [
      {
        type: 'success',
        title: '进步显著',
        description: '俯卧撑力量提升了15%，恭喜您的进步！可以考虑适当增加训练强度。',
        icon: 'fire',
      },
      {
        type: 'warning',
        title: '平衡建议',
        description: '建议增加有氧运动比例，目前力量训练较多，可以加入跑步或游泳等项目。',
        icon: 'scale-balanced',
      },
      {
        type: 'info',
        title: '注意事项',
        description: '连续训练3天了，建议明天安排休息日，给肌肉足够的恢复时间。',
        icon: 'shield-halved',
      },
    ],
  },
  health: {
    title: '健康建议',
    subtitle: '基于您最近7天的健康数据',
    icon: 'heart-pulse',
    iconColor: '#0296f2e6',
    iconBgColor: 'rgba(2, 150, 242, 0.1)',
    sections: [
      {
        type: 'success',
        title: '水分摄入',
        description: '水分摄入达标率90%，非常好！建议继续保持这个饮水习惯。',
        icon: 'droplet',
      },
      {
        type: 'warning',
        title: '睡眠优化',
        description: '平均睡眠时长6.5小时，建议增加30分钟睡眠时间，有助于恢复和学习效率提升。',
        icon: 'moon',
      },
      {
        type: 'info',
        title: '饮食建议',
        description: '建议增加蛋白质摄入，早餐可以加入鸡蛋或牛奶，有助于肌肉恢复和学习专注。',
        icon: 'utensils',
      },
    ],
  },
  time: {
    title: '时间管理建议',
    subtitle: '基于您最近7天的专注数据',
    icon: 'clock',
    iconColor: '#f59e0b',
    iconBgColor: 'rgba(245, 158, 11, 0.1)',
    sections: [
      {
        type: 'success',
        title: '专注表现',
        description: '本周完成了18个番茄钟，专注时长达到7.5小时，表现优秀！',
        icon: 'star',
      },
      {
        type: 'warning',
        title: '最佳时段',
        description: '数据分析显示您在上午9-11点专注力最高，建议将重要学习任务安排在这个时段。',
        icon: 'chart-line',
      },
      {
        type: 'info',
        title: '效率建议',
        description: '建议采用25/5工作法，每完成一个番茄钟休息5分钟，有助于保持长期专注。',
        icon: 'puzzle-piece',
      },
    ],
  },
  weakness: {
    title: '薄弱点分析',
    subtitle: '基于您的学习和训练数据',
    icon: 'magnifying-glass',
    iconColor: '#dc2626',
    iconBgColor: 'rgba(220, 38, 38, 0.1)',
    sections: [
      {
        type: 'info',
        title: '学习薄弱点',
        description: '英语听力是当前薄弱环节，正确率仅为68%，建议增加听力练习时间。',
        icon: 'triangle-exclamation',
      },
      {
        type: 'warning',
        title: '训练薄弱点',
        description: '核心肌群训练不足，建议增加平板支撑和卷腹等核心训练项目。',
        icon: 'dumbbell',
      },
      {
        type: 'success',
        title: '提升方案',
        description: '针对薄弱环节，已为您制定个性化学习和训练计划，点击查看详细方案。',
        icon: 'rocket',
      },
    ],
  },
  mood: {
    title: '心情优化建议',
    subtitle: '基于您最近7天的心情记录',
    icon: 'face-smile',
    iconColor: '#7c3aed',
    iconBgColor: 'rgba(124, 58, 237, 0.1)',
    sections: [
      {
        type: 'success',
        title: '心情趋势',
        description: '本周积极情绪占比75%，整体状态良好！继续保持健康的生活节奏。',
        icon: 'sun',
      },
      {
        type: 'warning',
        title: '放松建议',
        description: '建议在感到疲惫时听一些轻音乐，研究显示这能有效提升心情和专注力。',
        icon: 'music',
      },
      {
        type: 'info',
        title: '睡眠与心情',
        description: '睡眠质量与心情正相关，建议保持规律作息，有助于维持积极情绪。',
        icon: 'bed',
      },
    ],
  },
};

const AIAdviceScreen: React.FC = () => {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>('learning');

  const handleBackPress = () => {
    if (router.canGoBack()) {
      router.back();
    }
  };

  const handleCategoryPress = (categoryId: CategoryType) => {
    setSelectedCategory(categoryId);
  };

  const getSectionStyle = (type: 'success' | 'warning' | 'info') => {
    switch (type) {
      case 'success':
        return styles.sectionSuccess;
      case 'warning':
        return styles.sectionWarning;
      case 'info':
        return styles.sectionInfo;
      default:
        return styles.sectionSuccess;
    }
  };

  const getSectionTitleStyle = (type: 'success' | 'warning' | 'info') => {
    switch (type) {
      case 'success':
        return styles.sectionTitleSuccess;
      case 'warning':
        return styles.sectionTitleWarning;
      case 'info':
        return styles.sectionTitleInfo;
      default:
        return styles.sectionTitleSuccess;
    }
  };

  const getSectionDescriptionStyle = (type: 'success' | 'warning' | 'info') => {
    switch (type) {
      case 'success':
        return styles.sectionDescriptionSuccess;
      case 'warning':
        return styles.sectionDescriptionWarning;
      case 'info':
        return styles.sectionDescriptionInfo;
      default:
        return styles.sectionDescriptionSuccess;
    }
  };

  const getSectionIconColor = (type: 'success' | 'warning' | 'info') => {
    switch (type) {
      case 'success':
        return '#16a34a';
      case 'warning':
        return '#d97706';
      case 'info':
        return '#2563eb';
      default:
        return '#16a34a';
    }
  };

  const currentContent = adviceContents[selectedCategory];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* 顶部导航栏 */}
        <View style={styles.header}>
          <TouchableOpacity 
            style={styles.backButton} 
            onPress={handleBackPress}
            activeOpacity={0.7}
          >
            <FontAwesome6 name="arrow-left" size={18} color="#1f2937" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>AI建议</Text>
          <View style={styles.headerPlaceholder} />
        </View>

        {/* 建议分类选择 */}
        <View style={styles.categorySection}>
          <Text style={styles.categoryTitle}>选择建议类型</Text>
          <View style={styles.categoryList}>
            {categories.map((category) => (
              <TouchableOpacity
                key={category.id}
                style={[
                  styles.categoryItem,
                  selectedCategory === category.id && styles.categoryItemActive,
                ]}
                onPress={() => handleCategoryPress(category.id)}
                activeOpacity={0.7}
              >
                <View style={styles.categoryItemContent}>
                  <View style={[styles.categoryIconContainer, { backgroundColor: category.iconBgColor }]}>
                    <FontAwesome6 
                      name={category.icon as any} 
                      size={18} 
                      color={category.iconColor} 
                    />
                  </View>
                  <View style={styles.categoryTextContainer}>
                    <Text style={styles.categoryItemTitle}>{category.title}</Text>
                    <Text style={styles.categoryItemDescription}>{category.description}</Text>
                  </View>
                </View>
                <FontAwesome6 name="chevron-right" size={14} color="#6b7280" />
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* 建议内容展示 */}
        <View style={styles.adviceContentSection}>
          <View style={styles.adviceContentCard}>
            {/* 内容头部 */}
            <View style={styles.adviceContentHeader}>
              <View style={[styles.adviceContentIconContainer, { backgroundColor: currentContent.iconBgColor }]}>
                <FontAwesome6 
                  name={currentContent.icon as any} 
                  size={24} 
                  color={currentContent.iconColor} 
                />
              </View>
              <View style={styles.adviceContentHeaderText}>
                <Text style={styles.adviceContentTitle}>{currentContent.title}</Text>
                <Text style={styles.adviceContentSubtitle}>{currentContent.subtitle}</Text>
              </View>
            </View>

            {/* 内容部分 */}
            <View style={styles.adviceContentBody}>
              {currentContent.sections.map((section, index) => (
                <View 
                  key={index} 
                  style={[styles.adviceSection, getSectionStyle(section.type)]}
                >
                  <Text style={[styles.adviceSectionTitle, getSectionTitleStyle(section.type)]}>
                    <FontAwesome6 
                      name={section.icon as any} 
                      size={14} 
                      color={getSectionIconColor(section.type)} 
                      style={styles.adviceSectionIcon}
                    />
                    {section.title}
                  </Text>
                  <Text style={[styles.adviceSectionDescription, getSectionDescriptionStyle(section.type)]}>
                    {section.description}
                  </Text>
                </View>
              ))}
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AIAdviceScreen;

