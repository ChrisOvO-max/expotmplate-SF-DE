

import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';
import styles from './styles';

interface ToggleSwitchProps {
  isEnabled: boolean;
  onToggle: (isEnabled: boolean) => void;
  isDisabled?: boolean;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({
  isEnabled,
  onToggle,
  isDisabled = false,
}) => {
  const translateX = useSharedValue(isEnabled ? 22 : 0);
  const backgroundColor = useSharedValue(isEnabled ? '#02f2ce' : '#cccccc');

  React.useEffect(() => {
    translateX.value = withTiming(isEnabled ? 22 : 0, { duration: 200 });
    backgroundColor.value = withTiming(isEnabled ? '#02f2ce' : '#cccccc', { duration: 200 });
  }, [isEnabled, translateX, backgroundColor]);

  const animatedThumbStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));

  const animatedTrackStyle = useAnimatedStyle(() => ({
    backgroundColor: backgroundColor.value,
  }));

  const handlePress = () => {
    if (!isDisabled) {
      onToggle(!isEnabled);
    }
  };

  return (
    <TouchableOpacity
      style={[styles.container, isDisabled && styles.disabledContainer]}
      onPress={handlePress}
      activeOpacity={0.8}
      disabled={isDisabled}
    >
      <Animated.View style={[styles.track, animatedTrackStyle]}>
        <Animated.View style={[styles.thumb, animatedThumbStyle]} />
      </Animated.View>
    </TouchableOpacity>
  );
};

export default ToggleSwitch;

