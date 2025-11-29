

import React, { useState, useCallback } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Alert, Modal, ActivityIndicator, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { FontAwesome6 } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './styles';

interface SyncHistoryItem {
  id: string;
  title: string;
  description: string;
  timestamp: Date;
}

const SleepDataSyncScreen: React.FC = () => {
  const router = useRouter();
  
  // 状态管理
  const [isConnected, setIsConnected] = useState(false);
  const [lastSyncTime, setLastSyncTime] = useState<Date | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingText, setLoadingText] = useState('正在连接...');
  const [syncHistory, setSyncHistory] = useState<SyncHistoryItem[]>([]);

  // 返回按钮处理
  const handleBackPress = useCallback(() => {
    if (router.canGoBack()) {
      router.back();
    }
  }, [router]);

  // 连接华为运动健康
  const handleConnectHuaweiHealth = useCallback(async () => {
    if (isConnected) {
      // 断开连接
      Alert.alert(
        '确认断开',
        '确定要断开与华为运动健康的连接吗？',
        [
          { text: '取消', style: 'cancel' },
          {
            text: '确定',
            onPress: () => {
              setIsConnected(false);
              setLastSyncTime(null);
              setSyncHistory([]);
            },
          },
        ]
      );
    } else {
      // 连接
      setLoadingText('正在连接华为运动健康...');
      setIsLoading(true);
      
      try {
        // 模拟授权过程
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        const now = new Date();
        setIsConnected(true);
        setLastSyncTime(now);
        
        // 添加连接成功记录
        const newHistoryItem: SyncHistoryItem = {
          id: Date.now().toString(),
          title: '连接成功',
          description: '已成功连接华为运动健康',
          timestamp: now,
        };
        setSyncHistory(prev => [newHistoryItem, ...prev]);
        
      } catch (error) {
        Alert.alert('连接失败', '请稍后重试');
      } finally {
        setIsLoading(false);
      }
    }
  }, [isConnected]);

  // 立即同步
  const handleSyncNow = useCallback(async () => {
    if (!isConnected) return;
    
    setLoadingText('正在同步数据...');
    setIsLoading(true);
    
    try {
      // 模拟同步过程
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      const now = new Date();
      setLastSyncTime(now);
      
      // 添加同步成功记录
      const newHistoryItem: SyncHistoryItem = {
        id: Date.now().toString(),
        title: '同步成功',
        description: '睡眠数据已更新',
        timestamp: now,
      };
      setSyncHistory(prev => {
        const updated = [newHistoryItem, ...prev];
        return updated.slice(0, 5); // 限制历史记录数量
      });
      
    } catch (error) {
      Alert.alert('同步失败', '请稍后重试');
    } finally {
      setIsLoading(false);
    }
  }, [isConnected]);

  // 格式化时间显示
  const formatTime = useCallback((date: Date): string => {
    return date.toLocaleString('zh-CN', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
    });
  }, []);

  // 格式化历史记录时间
  const formatHistoryTime = useCallback((date: Date): string => {
    return date.toLocaleTimeString('zh-CN');
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {/* 顶部导航栏 */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={handleBackPress}
          activeOpacity={0.7}
        >
          <FontAwesome6 name="arrow-left" size={18} color="#1f2937" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>睡眠数据同步</Text>
        <View style={styles.headerPlaceholder} />
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          {/* 华为运动App连接卡片 */}
          <View style={styles.connectionCard}>
            <View style={styles.connectionContent}>
              {/* 华为运动App图标 */}
              <LinearGradient
                colors={['#ff6b35', '#f7931e']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.huaweiIcon}
              >
                <FontAwesome6 name="person-running" size={30} color="#ffffff" />
              </LinearGradient>
              
              {/* 应用名称 */}
              <View style={styles.appInfo}>
                <Text style={styles.appName}>华为运动健康</Text>
                <Text style={styles.appDescription}>专业的健康管理应用</Text>
              </View>
              
              {/* 同步状态 */}
              <View style={styles.statusContainer}>
                <View style={[
                  styles.statusIndicator,
                  isConnected ? styles.statusConnected : styles.statusDisconnected
                ]}>
                  <FontAwesome6 
                    name={isConnected ? "check" : "wifi"} 
                    size={12} 
                    color={isConnected ? "#ffffff" : "#6b7280"} 
                    style={styles.statusIcon}
                  />
                  <Text style={[
                    styles.statusText,
                    isConnected ? styles.statusTextConnected : styles.statusTextDisconnected
                  ]}>
                    {isConnected ? '已连接' : '未连接'}
                  </Text>
                </View>
              </View>
            </View>
          </View>

          {/* 同步信息卡片 */}
          <View style={styles.infoCard}>
            <Text style={styles.cardTitle}>同步信息</Text>
            
            <View style={styles.infoDetails}>
              {/* 上次同步时间 */}
              <View style={styles.infoRow}>
                <Text style={styles.infoLabel}>上次同步时间</Text>
                <Text style={styles.infoValue}>
                  {lastSyncTime ? formatTime(lastSyncTime) : '从未同步'}
                </Text>
              </View>
              
              {/* 同步数据类型 */}
              <View style={styles.infoRow}>
                <Text style={styles.infoLabel}>同步数据</Text>
                <Text style={styles.infoValue}>睡眠时长、睡眠质量</Text>
              </View>
              
              {/* 同步频率 */}
              <View style={styles.infoRow}>
                <Text style={styles.infoLabel}>同步频率</Text>
                <Text style={styles.infoValue}>每日自动同步</Text>
              </View>
            </View>
          </View>

          {/* 授权按钮区域 */}
          <View style={styles.authSection}>
            <TouchableOpacity
              style={styles.authButton}
              onPress={handleConnectHuaweiHealth}
              activeOpacity={0.8}
              disabled={isLoading}
            >
              <LinearGradient
                colors={isConnected ? ['#d1d5db', '#d1d5db'] : ['#02f2ce', '#00f289']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.authButtonGradient}
              >
                <FontAwesome6 
                  name={isConnected ? "unlink" : "link"} 
                  size={16} 
                  color="#ffffff" 
                  style={styles.authButtonIcon}
                />
                <Text style={styles.authButtonText}>
                  {isConnected ? '断开连接' : '连接华为运动健康'}
                </Text>
              </LinearGradient>
            </TouchableOpacity>
            
            <TouchableOpacity
              style={[
                styles.syncNowButton,
                isConnected ? styles.syncNowButtonEnabled : styles.syncNowButtonDisabled
              ]}
              onPress={handleSyncNow}
              activeOpacity={0.7}
              disabled={!isConnected || isLoading}
            >
              <FontAwesome6 
                name="arrows-rotate" 
                size={14} 
                color={isConnected ? "#ffffff" : "#6b7280"} 
                style={styles.syncNowIcon}
              />
              <Text style={[
                styles.syncNowText,
                isConnected ? styles.syncNowTextEnabled : styles.syncNowTextDisabled
              ]}>
                立即同步
              </Text>
            </TouchableOpacity>
          </View>

          {/* 同步历史记录 */}
          <View style={styles.historyCard}>
            <Text style={styles.cardTitle}>同步历史</Text>
            
            <View style={styles.historyList}>
              {syncHistory.length > 0 ? (
                syncHistory.map((item) => (
                  <View key={item.id} style={styles.historyItem}>
                    <View style={styles.historyItemLeft}>
                      <View style={styles.historyIcon}>
                        <FontAwesome6 name="check" size={12} color="#059669" />
                      </View>
                      <View style={styles.historyItemContent}>
                        <Text style={styles.historyItemTitle}>{item.title}</Text>
                        <Text style={styles.historyItemDescription}>{item.description}</Text>
                      </View>
                    </View>
                    <Text style={styles.historyItemTime}>{formatHistoryTime(item.timestamp)}</Text>
                  </View>
                ))
              ) : (
                <View style={styles.emptyHistory}>
                  <FontAwesome6 name="clock-rotate-left" size={40} color="#d1d5db" />
                  <Text style={styles.emptyHistoryTitle}>暂无同步记录</Text>
                  <Text style={styles.emptyHistoryDescription}>连接后将显示同步历史</Text>
                </View>
              )}
            </View>
          </View>

          {/* 权限说明 */}
          <View style={styles.permissionCard}>
            <View style={styles.permissionContent}>
              <FontAwesome6 name="circle-info" size={18} color="#0296f2e6" style={styles.permissionIcon} />
              <View style={styles.permissionTextContainer}>
                <Text style={styles.permissionTitle}>权限说明</Text>
                <View style={styles.permissionList}>
                  <Text style={styles.permissionItem}>• 仅同步睡眠相关数据</Text>
                  <Text style={styles.permissionItem}>• 数据仅用于个人健康分析</Text>
                  <Text style={styles.permissionItem}>• 不会上传或分享您的个人数据</Text>
                  <Text style={styles.permissionItem}>• 您可以随时断开连接</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* 加载提示 */}
      <Modal
        visible={isLoading}
        transparent={true}
        animationType="fade"
      >
        <View style={styles.loadingOverlay}>
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="#02f2ce" style={styles.loadingSpinner} />
            <Text style={styles.loadingText}>{loadingText}</Text>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default SleepDataSyncScreen;

