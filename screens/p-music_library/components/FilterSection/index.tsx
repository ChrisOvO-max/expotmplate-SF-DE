

import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

interface FilterSectionProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

const FilterSection: React.FC<FilterSectionProps> = ({
  activeFilter,
  onFilterChange,
}) => {
  const filterOptions = [
    { id: 'all', label: '全部' },
    { id: 'study', label: '学习' },
    { id: 'meditation', label: '冥想' },
    { id: 'sleep', label: '助眠' },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.filterTabs}>
        {filterOptions.map((option) => (
          <TouchableOpacity
            key={option.id}
            style={[
              styles.filterTab,
              activeFilter === option.id && styles.activeFilterTab,
            ]}
            onPress={() => onFilterChange(option.id)}
          >
            <Text
              style={[
                styles.filterTabText,
                activeFilter === option.id && styles.activeFilterTabText,
              ]}
            >
              {option.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default FilterSection;

