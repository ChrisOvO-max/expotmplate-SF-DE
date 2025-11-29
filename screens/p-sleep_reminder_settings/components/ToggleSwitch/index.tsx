

import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';
import styles from './styles';

interface ToggleSwitchProps {
  value: boolean;
  onValueChange: (value: boolean) => void;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ value, onValueChange }) => {
  const translateX = useSharedValue(value ? 22 : 0);
  const backgroundColor = useSharedValue(value ? '#02f2ce' : '#cccccc');

  React.useEffect(() => {
    translateX.value = withTiming(value ? 22 : 0, { duration: 200 });
    backgroundColor.value = withTiming(value ? '#02f2ce' : '#cccccc', { duration: 200 });
  }, [value, translateX, backgroundColor]);

  const animatedTrackStyle = useAnimatedStyle(() => ({
    backgroundColor: backgroundColor.value,
  }));

  const animatedThumbStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));

  const handlePress = () => {
    onValueChange(!value);
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={handlePress}
      activeOpacity={0.8}
    >
      <Animated.View style={[styles.track, animatedTrackStyle]}>
        <Animated.View style={[styles.thumb, animatedThumbStyle]} />
      </Animated.View>
    </TouchableOpacity>
  );
};

export default ToggleSwitch;

