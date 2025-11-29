

import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import { FontAwesome6 } from '@expo/vector-icons';
import styles from './styles';

interface StoryTag {
  text: string;
  icon: string;
  color: string;
}

interface StoryData {
  id: string;
  author: string;
  avatar: string;
  badge: string;
  badgeColor: string;
  date: string;
  title: string;
  content: string;
  likeCount: number;
  commentCount: number;
  isLiked: boolean;
  tags: StoryTag[];
}

interface StoryItemProps {
  story: StoryData;
  onPress: () => void;
  onLikePress: () => void;
}

const StoryItem: React.FC<StoryItemProps> = ({
  story,
  onPress,
  onLikePress,
}) => {
  const handleLikePress = (event: any) => {
    event.stopPropagation();
    onLikePress();
  };

  const getBadgeBackgroundColor = (color: string) => {
    return `${color}1A`; // 10% opacity
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      activeOpacity={0.95}
    >
      {/* 用户信息头部 */}
      <View style={styles.userHeader}>
        <Image source={{ uri: story.avatar }} style={styles.avatar} />
        <View style={styles.userInfo}>
          <View style={styles.userNameRow}>
            <Text style={styles.authorName}>{story.author}</Text>
            <View
              style={[
                styles.badge,
                { backgroundColor: getBadgeBackgroundColor(story.badgeColor) },
              ]}
            >
              <Text style={[styles.badgeText, { color: story.badgeColor }]}>
                {story.badge}
              </Text>
            </View>
          </View>
          <Text style={styles.date}>{story.date}</Text>
        </View>
        <TouchableOpacity
          style={styles.likeButton}
          onPress={handleLikePress}
          activeOpacity={0.7}
        >
          <FontAwesome6
            name="heart"
            size={16}
            color={story.isLiked ? '#ef4444' : '#6b7280'}
            solid={story.isLiked}
          />
        </TouchableOpacity>
      </View>

      {/* 案例标题 */}
      <Text style={styles.title}>{story.title}</Text>

      {/* 案例内容 */}
      <Text style={styles.content}>{story.content}</Text>

      {/* 底部信息 */}
      <View style={styles.bottomInfo}>
        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <FontAwesome6 name="heart" size={14} color="#ef4444" solid />
            <Text style={styles.statText}>{story.likeCount}</Text>
          </View>
          <View style={styles.statItem}>
            <FontAwesome6 name="comment" size={14} color="#0296f2e6" />
            <Text style={styles.statText}>{story.commentCount}</Text>
          </View>
        </View>
        <View style={styles.tagsContainer}>
          {story.tags.map((tag, index) => (
            <View
              key={index}
              style={[
                styles.tag,
                { backgroundColor: getBadgeBackgroundColor(tag.color) },
              ]}
            >
              <FontAwesome6
                name={tag.icon as any}
                size={10}
                color={tag.color}
                style={styles.tagIcon}
              />
              <Text style={[styles.tagText, { color: tag.color }]}>
                {tag.text}
              </Text>
            </View>
          ))}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default StoryItem;

