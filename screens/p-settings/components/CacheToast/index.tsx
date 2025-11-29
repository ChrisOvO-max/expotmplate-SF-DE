

import React from 'react';
import { View, Text } from 'react-native';
import { FontAwesome6 } from '@expo/vector-icons';
import styles from './styles';

interface CacheToastProps {
  visible: boolean;
}

const CacheToast: React.FC<CacheToastProps> = ({ visible }) => {
  if (!visible) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <FontAwesome6 name="circle-check" size={16} color="#ffffff" />
        <Text style={styles.text}>缓存清理完成</Text>
      </View>
    </View>
  );
};

export default CacheToast;

