

import React, { useCallback } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

interface FilterTabsProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

interface FilterTab {
  id: string;
  label: string;
}

const FilterTabs: React.FC<FilterTabsProps> = ({
  selectedCategory,
  onCategoryChange,
}) => {
  const filterTabs: FilterTab[] = [
    { id: 'all', label: '全部' },
    { id: 'strength', label: '力量' },
    { id: 'cardio', label: '有氧' },
    { id: 'flexibility', label: '柔韧性' },
  ];

  const handleTabPress = useCallback((tabId: string) => {
    onCategoryChange(tabId);
  }, [onCategoryChange]);

  const renderFilterTab = useCallback((tab: FilterTab) => {
    const isActive = selectedCategory === tab.id;
    
    return (
      <TouchableOpacity
        key={tab.id}
        style={[
          styles.filterTab,
          isActive ? styles.filterTabActive : styles.filterTabInactive,
        ]}
        onPress={() => handleTabPress(tab.id)}
        activeOpacity={0.7}
      >
        <Text
          style={[
            styles.filterTabText,
            isActive ? styles.filterTabTextActive : styles.filterTabTextInactive,
          ]}
        >
          {tab.label}
        </Text>
      </TouchableOpacity>
    );
  }, [selectedCategory, handleTabPress]);

  return (
    <View style={styles.container}>
      <View style={styles.tabsContainer}>
        {filterTabs.map(renderFilterTab)}
      </View>
    </View>
  );
};

export default FilterTabs;

