

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
    { key: 'day' as PeriodType, label: '日' },
    { key: 'week' as PeriodType, label: '周' },
    { key: 'month' as PeriodType, label: '月' },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.periodContainer}>
        {periods.map((period) => (
          <TouchableOpacity
            key={period.key}
            style={[
              styles.periodTab,
              selectedPeriod === period.key && styles.activeTab,
            ]}
            onPress={() => onPeriodChange(period.key)}
            activeOpacity={0.7}
          >
            <Text
              style={[
                styles.periodText,
                selectedPeriod === period.key && styles.activeText,
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

