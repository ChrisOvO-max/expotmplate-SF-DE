

import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import Svg, { Defs, LinearGradient as SvgLinearGradient, Stop, G, Line, Polyline, Path, Circle } from 'react-native-svg';
import styles from './styles';

interface FocusTimeChartProps {
  data: number[];
}

const FocusTimeChart: React.FC<FocusTimeChartProps> = ({ data }) => {
  const chartWidth = 300;
  const chartHeight = 120;
  const paddingLeft = 40;
  const paddingRight = 20;
  const paddingTop = 20;
  const paddingBottom = 20;
  
  const plotWidth = chartWidth - paddingLeft - paddingRight;
  const plotHeight = chartHeight - paddingTop - paddingBottom;
  
  const dataPoints = data.map((value, index) => {
    const x = paddingLeft + (index / (data.length - 1)) * plotWidth;
    const y = paddingTop + (1 - value / 100) * plotHeight;
    return { x, y };
  });

  const linePoints = dataPoints.map(point => `${point.x},${point.y}`).join(' ');
  
  const areaPoints = linePoints + ' ' + 
    dataPoints.slice().reverse().map(point => `${point.x},${chartHeight - paddingBottom}`).join(' ') + 
    ` ${paddingLeft},${chartHeight - paddingBottom}`;

  const handleDotPress = (index: number) => {
    console.log('点击数据点:', index);
  };

  return (
    <View style={styles.container}>
      <Svg width="100%" height={chartHeight} viewBox={`0 0 ${chartWidth} ${chartHeight}`}>
        <Defs>
          <SvgLinearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <Stop offset="0%" stopColor="#02f2ce" stopOpacity="0.8" />
            <Stop offset="100%" stopColor="#02f2ce" stopOpacity="0.1" />
          </SvgLinearGradient>
        </Defs>
        
        {/* 网格线 */}
        <G stroke="#f3f4f6" strokeWidth="1" opacity="0.5">
          <Line x1={paddingLeft} y1={paddingTop} x2={chartWidth - paddingRight} y2={paddingTop} />
          <Line x1={paddingLeft} y1={paddingTop + plotHeight * 0.25} x2={chartWidth - paddingRight} y2={paddingTop + plotHeight * 0.25} />
          <Line x1={paddingLeft} y1={paddingTop + plotHeight * 0.5} x2={chartWidth - paddingRight} y2={paddingTop + plotHeight * 0.5} />
          <Line x1={paddingLeft} y1={paddingTop + plotHeight * 0.75} x2={chartWidth - paddingRight} y2={paddingTop + plotHeight * 0.75} />
          <Line x1={paddingLeft} y1={chartHeight - paddingBottom} x2={chartWidth - paddingRight} y2={chartHeight - paddingBottom} />
        </G>
        
        {/* 区域填充 */}
        <Path
          d={`M${areaPoints} Z`}
          fill="url(#gradient)"
        />
        
        {/* 折线 */}
        <Polyline
          points={linePoints}
          stroke="#02f2ce"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
        />
        
        {/* 数据点 */}
        {dataPoints.map((point, index) => (
          <TouchableOpacity
            key={index}
            style={styles.dotTouchable}
            onPress={() => handleDotPress(index)}
            activeOpacity={0.8}
          >
            <Circle
              cx={point.x}
              cy={point.y}
              r="3"
              fill="#02f2ce"
              stroke="white"
              strokeWidth="2"
            />
          </TouchableOpacity>
        ))}
      </Svg>
    </View>
  );
};

export default FocusTimeChart;

