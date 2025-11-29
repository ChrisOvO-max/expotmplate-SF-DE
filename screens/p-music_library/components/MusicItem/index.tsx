

import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { FontAwesome6 } from '@expo/vector-icons';
import styles from './styles';

interface MusicData {
  id: string;
  title: string;
  category: 'study' | 'meditation' | 'sleep';
  duration: string;
  isFavorited: boolean;
  iconName: string;
  iconColor: string;
}

interface MusicItemProps {
  music: MusicData;
  onPress: () => void;
  onFavoritePress: () => void;
}

const MusicItem: React.FC<MusicItemProps> = ({
  music,
  onPress,
  onFavoritePress,
}) => {
  const handleFavoritePress = (event: any) => {
    event.stopPropagation();
    onFavoritePress();
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.content}>
        <View style={styles.leftSection}>
          <View style={[styles.iconContainer, { backgroundColor: `${music.iconColor}1A` }]}>
            <FontAwesome6 
              name={music.iconName as any} 
              size={18} 
              color={music.iconColor} 
            />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.title}>{music.title}</Text>
            <Text style={styles.duration}>{music.duration}</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.favoriteButton} onPress={handleFavoritePress}>
          <FontAwesome6
            name="heart"
            size={16}
            color={music.isFavorited ? '#ef4444' : '#6b7280'}
            solid={music.isFavorited}
          />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default MusicItem;

