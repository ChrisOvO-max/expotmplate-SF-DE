

import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

type PeriodType = 'day' | 'week' | 'month';

interface PeriodSelectorProps {
  selectedPeriod: PeriodType;
  onPeriodChange: (period: PeriodType) => void;
}

const PeriodSelector: React.FC<PeriodSelectorProps> = ({
  selectedPeriod,
  onPeriodChange,
}) => {
  const periods = [
    { key: 'day' as PeriodType, label: '今日' },
    { key: 'week' as PeriodType, label: '本周' },
    { key: 'month' as PeriodType, label: '本月' },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.tabsContainer}>
        {periods.map((period) => (
          <TouchableOpacity
            key={period.key}
            style={[
              styles.tab,
              selectedPeriod === period.key ? styles.tabActive : styles.tabInactive,
            ]}
            onPress={() => onPeriodChange(period.key)}
            activeOpacity={0.7}
          >
            <Text
              style={[
                styles.tabText,
                selectedPeriod === period.key ? styles.tabTextActive : styles.tabTextInactive,
              ]}
            >
              {period.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default PeriodSelector;

