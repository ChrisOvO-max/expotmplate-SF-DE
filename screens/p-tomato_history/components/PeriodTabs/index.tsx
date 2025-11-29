

import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

type PeriodType = 'day' | 'week' | 'month';

interface PeriodTabsProps {
  selectedPeriod: PeriodType;
  onPeriodChange: (period: PeriodType) => void;
}

const PeriodTabs: React.FC<PeriodTabsProps> = ({ selectedPeriod, onPeriodChange }) => {
  const tabs = [
    { key: 'day' as PeriodType, label: '今日' },
    { key: 'week' as PeriodType, label: '本周' },
    { key: 'month' as PeriodType, label: '本月' },
  ];

  return (
    <View style={styles.container}>
      {tabs.map((tab) => (
        <TouchableOpacity
          key={tab.key}
          style={[
            styles.tab,
            selectedPeriod === tab.key ? styles.tabActive : styles.tabInactive,
          ]}
          onPress={() => onPeriodChange(tab.key)}
          activeOpacity={0.7}
        >
          <Text
            style={[
              styles.tabText,
              selectedPeriod === tab.key ? styles.tabTextActive : styles.tabTextInactive,
            ]}
          >
            {tab.label}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default PeriodTabs;

