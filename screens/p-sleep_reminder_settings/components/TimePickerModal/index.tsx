

import React, { useState, useEffect } from 'react';
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from 'react-native';
import { FontAwesome6 } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  runOnJS,
} from 'react-native-reanimated';
import styles from './styles';

interface TimePickerModalProps {
  visible: boolean;
  title: string;
  initialTime: string;
  onConfirm: (time: string) => void;
  onCancel: () => void;
}

const { height: screenHeight } = Dimensions.get('window');

const TimePickerModal: React.FC<TimePickerModalProps> = ({
  visible,
  title,
  initialTime,
  onConfirm,
  onCancel,
}) => {
  const [selectedHour, setSelectedHour] = useState('22');
  const [selectedMinute, setSelectedMinute] = useState('00');
  const translateY = useSharedValue(screenHeight);
  const overlayOpacity = useSharedValue(0);

  const hours = Array.from({ length: 24 }, (_, i) =>
    i.toString().padStart(2, '0')
  );
  const minutes = ['00', '15', '30', '45'];

  useEffect(() => {
    if (visible) {
      const [hour, minute] = initialTime.split(':');
      setSelectedHour(hour);
      setSelectedMinute(minute);
      
      overlayOpacity.value = withTiming(1, { duration: 300 });
      translateY.value = withTiming(0, { duration: 300 });
    } else {
      overlayOpacity.value = withTiming(0, { duration: 300 });
      translateY.value = withTiming(screenHeight, { duration: 300 });
    }
  }, [visible, initialTime, overlayOpacity, translateY]);

  const animatedOverlayStyle = useAnimatedStyle(() => ({
    opacity: overlayOpacity.value,
  }));

  const animatedContentStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
  }));

  const handleConfirm = () => {
    const time = `${selectedHour}:${selectedMinute}`;
    onConfirm(time);
  };

  const handleCancel = () => {
    onCancel();
  };

  const renderHourItem = ({ item }: { item: string }) => (
    <TouchableOpacity
      style={[
        styles.timeItem,
        selectedHour === item && styles.timeItemSelected,
      ]}
      onPress={() => setSelectedHour(item)}
      activeOpacity={0.7}
    >
      <Text
        style={[
          styles.timeItemText,
          selectedHour === item && styles.timeItemTextSelected,
        ]}
      >
        {item}
      </Text>
    </TouchableOpacity>
  );

  const renderMinuteItem = ({ item }: { item: string }) => (
    <TouchableOpacity
      style={[
        styles.timeItem,
        selectedMinute === item && styles.timeItemSelected,
      ]}
      onPress={() => setSelectedMinute(item)}
      activeOpacity={0.7}
    >
      <Text
        style={[
          styles.timeItemText,
          selectedMinute === item && styles.timeItemTextSelected,
        ]}
      >
        {item}
      </Text>
    </TouchableOpacity>
  );

  return (
    <Modal
      visible={visible}
      transparent
      animationType="none"
      statusBarTranslucent
    >
      <View style={styles.modalContainer}>
        <Animated.View style={[styles.overlay, animatedOverlayStyle]}>
          <TouchableOpacity
            style={styles.overlayTouchable}
            onPress={handleCancel}
            activeOpacity={1}
          />
        </Animated.View>

        <Animated.View style={[styles.content, animatedContentStyle]}>
          {/* 头部 */}
          <View style={styles.header}>
            <Text style={styles.title}>{title}</Text>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={handleCancel}
              activeOpacity={0.7}
            >
              <FontAwesome6 name="xmark" size={16} color="#6b7280" />
            </TouchableOpacity>
          </View>

          {/* 时间选择器 */}
          <View style={styles.timePickerContainer}>
            <View style={styles.timeColumn}>
              <Text style={styles.timeLabel}>小时</Text>
              <FlatList
                data={hours}
                renderItem={renderHourItem}
                keyExtractor={(item) => item}
                showsVerticalScrollIndicator={false}
                style={styles.timeList}
                getItemLayout={(_, index) => ({
                  length: 48,
                  offset: 48 * index,
                  index,
                })}
                initialScrollIndex={parseInt(selectedHour)}
              />
            </View>

            <View style={styles.timeSeparator}>
              <Text style={styles.timeSeparatorText}>:</Text>
            </View>

            <View style={styles.timeColumn}>
              <Text style={styles.timeLabel}>分钟</Text>
              <FlatList
                data={minutes}
                renderItem={renderMinuteItem}
                keyExtractor={(item) => item}
                showsVerticalScrollIndicator={false}
                style={styles.timeList}
                getItemLayout={(_, index) => ({
                  length: 48,
                  offset: 48 * index,
                  index,
                })}
                initialScrollIndex={minutes.indexOf(selectedMinute)}
              />
            </View>
          </View>

          {/* 确认按钮 */}
          <TouchableOpacity
            style={styles.confirmButton}
            onPress={handleConfirm}
            activeOpacity={0.8}
          >
            <LinearGradient
              colors={['#02f2ce', '#00f289']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.confirmButtonGradient}
            >
              <Text style={styles.confirmButtonText}>确认</Text>
            </LinearGradient>
          </TouchableOpacity>
        </Animated.View>
      </View>
    </Modal>
  );
};

export default TimePickerModal;

