

import React from 'react';
import { View } from 'react-native';
import styles from './styles';

interface ProgressBarProps {
  progress: number; // 0-100
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  return (
    <View style={styles.container}>
      <View style={styles.progressTrack}>
        <View 
          style={[
            styles.progressFill, 
            { width: `${Math.max(0, Math.min(100, progress))}%` }
          ]} 
        />
      </View>
    </View>
  );
};

export default ProgressBar;

