

import React from 'react';
import { View, Text } from 'react-native';
import { FontAwesome6 } from '@expo/vector-icons';
import { LineChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';
import styles from './styles';

interface ChartData {
  labels: string[];
  datasets: Array<{
    data: number[];
    borderColor: string;
    backgroundColor: string;
  }>;
}

interface ChartCardProps {
  title: string;
  currentValue: string;
  unit?: string;
  status?: string;
  statusType?: 'normal' | 'overweight' | 'underweight' | 'obese';
  change?: string;
  changeType?: 'increase' | 'decrease';
  chartData: ChartData;
  chartType: 'line';
}

const ChartCard: React.FC<ChartCardProps> = ({
  title,
  currentValue,
  unit,
  status,
  statusType = 'normal',
  change,
  changeType = 'decrease',
  chartData,
  chartType,
}) => {
  const screenWidth = Dimensions.get('window').width;
  const chartWidth = screenWidth - 80;

  const chartConfig = {
    backgroundColor: '#ffffff',
    backgroundGradientFrom: '#ffffff',
    backgroundGradientTo: '#ffffff',
    decimalPlaces: 1,
    color: (opacity = 1) => `rgba(2, 242, 206, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(107, 114, 128, ${opacity})`,
    style: {
      borderRadius: 16,
    },
    propsForDots: {
      r: '6',
      strokeWidth: '3',
      stroke: '#ffffff',
    },
    propsForBackgroundLines: {
      strokeDasharray: '',
    },
  };

  const getStatusStyle = () => {
    switch (statusType) {
      case 'normal':
        return styles.statusNormal;
      case 'overweight':
        return styles.statusOverweight;
      case 'underweight':
        return styles.statusUnderweight;
      case 'obese':
        return styles.statusObese;
      default:
        return styles.statusNormal;
    }
  };

  const renderHeader = () => (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.valueContainer}>
        <View style={styles.currentValueRow}>
          <Text style={styles.currentValue}>
            {currentValue}
            {unit && <Text style={styles.unit}>{unit}</Text>}
          </Text>
          {status && (
            <View style={[styles.statusBadge, getStatusStyle()]}>
              <Text style={styles.statusText}>{status}</Text>
            </View>
          )}
        </View>
        {change && (
          <View style={styles.changeRow}>
            <FontAwesome6
              name={changeType === 'decrease' ? 'arrow-down' : 'arrow-up'}
              size={10}
              color="#10b981"
              style={styles.changeIcon}
            />
            <Text style={styles.changeText}>{change}</Text>
          </View>
        )}
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {renderHeader()}
      <View style={styles.chartContainer}>
        <LineChart
          data={chartData}
          width={chartWidth}
          height={200}
          chartConfig={chartConfig}
          bezier
          style={styles.chart}
          withInnerLines={false}
          withOuterLines={false}
          withVerticalLines={false}
          withHorizontalLines={false}
          withDots={true}
          withShadow={false}
        />
      </View>
    </View>
  );
};

export default ChartCard;

