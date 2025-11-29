

import { StyleSheet, Platform } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f7ff',
  },
  
  // 顶部导航栏
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingVertical: 16,
    backgroundColor: '#ffffff',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 2,
      },
      android: {
        elevation: 2,
      },
    }),
  },
  
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1f2937',
  },
  
  headerPlaceholder: {
    width: 40,
  },
  
  // 滚动视图
  scrollView: {
    flex: 1,
  },
  
  content: {
    paddingHorizontal: 24,
    paddingVertical: 24,
    gap: 24,
  },
  
  // 连接卡片
  connectionCard: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 24,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 3,
      },
    }),
  },
  
  connectionContent: {
    alignItems: 'center',
    gap: 16,
  },
  
  huaweiIcon: {
    width: 80,
    height: 80,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 8,
      },
      android: {
        elevation: 8,
      },
    }),
  },
  
  appInfo: {
    alignItems: 'center',
  },
  
  appName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1f2937',
  },
  
  appDescription: {
    fontSize: 14,
    color: '#6b7280',
    marginTop: 4,
  },
  
  statusContainer: {
    width: '100%',
  },
  
  statusIndicator: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  
  statusConnected: {
    backgroundColor: '#00f289',
  },
  
  statusDisconnected: {
    backgroundColor: '#f3f4f6',
  },
  
  statusIcon: {
    marginRight: 8,
  },
  
  statusText: {
    fontSize: 14,
    fontWeight: '500',
  },
  
  statusTextConnected: {
    color: '#ffffff',
  },
  
  statusTextDisconnected: {
    color: '#6b7280',
  },
  
  // 信息卡片
  infoCard: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 24,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 3,
      },
    }),
  },
  
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: 16,
  },
  
  infoDetails: {
    gap: 12,
  },
  
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
  },
  
  infoLabel: {
    fontSize: 14,
    color: '#6b7280',
  },
  
  infoValue: {
    fontSize: 14,
    fontWeight: '500',
    color: '#1f2937',
  },
  
  // 授权按钮区域
  authSection: {
    gap: 16,
  },
  
  authButton: {
    borderRadius: 16,
    overflow: 'hidden',
    ...Platform.select({
      ios: {
        shadowColor: '#02f2ce',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
      },
      android: {
        elevation: 8,
      },
    }),
  },
  
  authButtonGradient: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    paddingHorizontal: 24,
  },
  
  authButtonIcon: {
    marginRight: 8,
  },
  
  authButtonText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#ffffff',
  },
  
  syncNowButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    borderRadius: 16,
  },
  
  syncNowButtonEnabled: {
    backgroundColor: '#02f2ce',
  },
  
  syncNowButtonDisabled: {
    backgroundColor: '#f3f4f6',
  },
  
  syncNowIcon: {
    marginRight: 8,
  },
  
  syncNowText: {
    fontSize: 16,
    fontWeight: '500',
  },
  
  syncNowTextEnabled: {
    color: '#ffffff',
  },
  
  syncNowTextDisabled: {
    color: '#6b7280',
  },
  
  // 历史记录卡片
  historyCard: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 24,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 3,
      },
    }),
  },
  
  historyList: {
    gap: 12,
  },
  
  historyItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f3f4f6',
  },
  
  historyItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  
  historyIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#dcfce7',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  
  historyItemContent: {
    flex: 1,
  },
  
  historyItemTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#1f2937',
  },
  
  historyItemDescription: {
    fontSize: 12,
    color: '#6b7280',
    marginTop: 2,
  },
  
  historyItemTime: {
    fontSize: 12,
    color: '#6b7280',
  },
  
  emptyHistory: {
    alignItems: 'center',
    paddingVertical: 32,
  },
  
  emptyHistoryTitle: {
    fontSize: 14,
    color: '#6b7280',
    marginTop: 12,
  },
  
  emptyHistoryDescription: {
    fontSize: 12,
    color: '#6b7280',
    marginTop: 4,
  },
  
  // 权限说明卡片
  permissionCard: {
    backgroundColor: '#dbeafe',
    borderRadius: 16,
    padding: 24,
  },
  
  permissionContent: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  
  permissionIcon: {
    marginTop: 2,
    marginRight: 12,
  },
  
  permissionTextContainer: {
    flex: 1,
  },
  
  permissionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: 8,
  },
  
  permissionList: {
    gap: 4,
  },
  
  permissionItem: {
    fontSize: 14,
    color: '#6b7280',
    lineHeight: 20,
  },
  
  // 加载覆盖层
  loadingOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  loadingContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 24,
    marginHorizontal: 24,
    alignItems: 'center',
    minWidth: 200,
  },
  
  loadingSpinner: {
    marginBottom: 12,
  },
  
  loadingText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1f2937',
    textAlign: 'center',
  },
});

