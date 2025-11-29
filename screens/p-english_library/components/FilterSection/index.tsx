

import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { FilterSectionProps, CategoryFilter, DifficultyFilter } from '../../types';
import styles from './styles';

const FilterSection: React.FC<FilterSectionProps> = ({
  selectedCategory,
  selectedDifficulty,
  onCategoryChange,
  onDifficultyChange,
}) => {
  const categoryOptions: { key: CategoryFilter; label: string }[] = [
    { key: 'all', label: '全部' },
    { key: 'vocabulary', label: '词汇' },
    { key: 'grammar', label: '语法' },
    { key: 'listening', label: '听力' },
    { key: 'reading', label: '阅读' },
    { key: 'writing', label: '写作' },
  ];

  const difficultyOptions: { key: DifficultyFilter; label: string }[] = [
    { key: 'all', label: '全部' },
    { key: 'easy', label: '简单' },
    { key: 'medium', label: '中等' },
    { key: 'hard', label: '困难' },
  ];

  const renderFilterTab = (
    option: { key: string; label: string },
    isSelected: boolean,
    onPress: () => void
  ) => (
    <TouchableOpacity
      key={option.key}
      style={[styles.filterTab, isSelected && styles.filterTabActive]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <Text style={[styles.filterTabText, isSelected && styles.filterTabTextActive]}>
        {option.label}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* 分类筛选 */}
      <View style={styles.filterGroup}>
        <Text style={styles.filterLabel}>学习分类</Text>
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.filterScrollContent}
        >
          {categoryOptions.map((option) =>
            renderFilterTab(
              option,
              selectedCategory === option.key,
              () => onCategoryChange(option.key as CategoryFilter)
            )
          )}
        </ScrollView>
      </View>

      {/* 难度筛选 */}
      <View style={styles.filterGroup}>
        <Text style={styles.filterLabel}>难度等级</Text>
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.filterScrollContent}
        >
          {difficultyOptions.map((option) =>
            renderFilterTab(
              option,
              selectedDifficulty === option.key,
              () => onDifficultyChange(option.key as DifficultyFilter)
            )
          )}
        </ScrollView>
      </View>
    </View>
  );
};

export default FilterSection;

