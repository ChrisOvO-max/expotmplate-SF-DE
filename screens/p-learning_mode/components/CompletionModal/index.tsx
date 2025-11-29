

import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, Modal } from 'react-native';
import { FontAwesome6 } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withTiming,
  withSequence,
  interpolate,
} from 'react-native-reanimated';

import styles from './styles';

interface CompletionModalProps {
  visible: boolean;
  accuracy: number;
  timeSpent: number;
  onClose: () => void;
}

const CompletionModal: React.FC<CompletionModalProps> = ({
  visible,
  accuracy,
  timeSpent,
  onClose,
}) => {
  const trophyScale = useSharedValue(0.8);
  const trophyOpacity = useSharedValue(0);
  const floatingValue = useSharedValue(0);

  useEffect(() => {
    if (visible) {
      // 入场动画
      trophyOpacity.value = withTiming(1, { duration: 600 });
      trophyScale.value = withSequence(
        withTiming(1.1, { duration: 300 }),
        withTiming(1, { duration: 300 })
      );
      
      // 浮动动画
      floatingValue.value = withRepeat(
        withSequence(
          withTiming(1, { duration: 1500 }),
          withTiming(0, { duration: 1500 })
        ),
        -1,
        true
      );
    }
  }, [visible]);

  const trophyAnimatedStyle = useAnimatedStyle(() => {
    const translateY = interpolate(floatingValue.value, [0, 1], [0, -10]);
    
    return {
      opacity: trophyOpacity.value,
      transform: [
        { scale: trophyScale.value },
        { translateY },
      ],
    };
  });

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
          {/* 奖杯图标 */}
          <Animated.View style={[styles.trophyContainer, trophyAnimatedStyle]}>
            <LinearGradient
              colors={['#02f2ce', '#00f289']}
              style={styles.trophyGradient}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
            >
              <FontAwesome6 name="trophy" size={32} color="#ffffff" />
            </LinearGradient>
          </Animated.View>
          
          <Text style={styles.titleText}>学习完成！</Text>
          <Text style={styles.descriptionText}>
            恭喜你完成了本次学习任务，继续保持！
          </Text>
          
          {/* 统计数据 */}
          <View style={styles.statsContainer}>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>{accuracy}%</Text>
              <Text style={styles.statLabel}>正确率</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statValueSecondary}>{timeSpent}分钟</Text>
              <Text style={styles.statLabel}>用时</Text>
            </View>
          </View>
          
          <TouchableOpacity
            style={styles.completeButton}
            onPress={onClose}
            activeOpacity={0.8}
          >
            <Text style={styles.completeButtonText}>完成学习</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default CompletionModal;

