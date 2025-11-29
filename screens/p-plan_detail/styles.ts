

import { StyleSheet, Platform } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f7ff',
  },
  
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  loadingText: {
    fontSize: 16,
    color: '#6b7280',
  },
  
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  
  errorText: {
    fontSize: 18,
    color: '#ef4444',
    marginBottom: 24,
    textAlign: 'center',
  },
  
  backButton: {
    backgroundColor: '#02f2ce',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 12,
  },
  
  backButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },

  // 顶部导航栏
  header: {
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
    paddingHorizontal: 16,
    paddingVertical: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  
  backButtonContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1f2937',
  },
  
  headerActions: {
    flexDirection: 'row',
    gap: 8,
  },
  
  editButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#3b82f6',
    justifyContent: 'center',
    alignItems: 'center',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
      },
      android: {
        elevation: 2,
      },
    }),
  },
  
  deleteButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#ef4444',
    justifyContent: 'center',
    alignItems: 'center',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
      },
      android: {
        elevation: 2,
      },
    }),
  },

  // 滚动视图
  scrollView: {
    flex: 1,
  },
  
  planInfoSection: {
    paddingHorizontal: 24,
    paddingTop: 24,
  },

  // 计划状态卡片
  planStatusCard: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 24,
    marginBottom: 16,
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
  
  planHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  
  planMainInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  
  planIcon: {
    width: 48,
    height: 48,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  
  planTitleContainer: {
    flex: 1,
  },
  
  planName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 4,
  },
  
  statusBadge: {
    alignSelf: 'flex-start',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  
  statusBadgeCompleted: {
    backgroundColor: '#dcfce7',
  },
  
  statusBadgeInProgress: {
    backgroundColor: '#dbeafe',
  },
  
  statusBadgePending: {
    backgroundColor: '#fef3c7',
  },
  
  statusBadgeText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#059669',
  },
  
  planCategoryContainer: {
    alignItems: 'flex-end',
  },
  
  planCategory: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  
  planCategoryText: {
    fontSize: 14,
    fontWeight: '500',
  },
  
  planDescriptionContainer: {
    marginBottom: 0,
  },
  
  planDescription: {
    fontSize: 14,
    color: '#6b7280',
    lineHeight: 20,
  },

  // 计划详情卡片
  planDetailsCard: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 24,
    marginBottom: 16,
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
  
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: 16,
  },
  
  detailsContainer: {
    gap: 16,
  },
  
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 8,
  },
  
  detailLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  
  detailIcon: {
    width: 32,
    height: 32,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  
  timeIcon: {
    backgroundColor: '#0296f2e61A',
  },
  
  repeatIcon: {
    backgroundColor: '#00f2891A',
  },
  
  reminderIcon: {
    backgroundColor: '#fef3c7',
  },
  
  goalIcon: {
    backgroundColor: '#ede9fe',
  },
  
  detailInfo: {
    flex: 1,
  },
  
  detailLabel: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1f2937',
    marginBottom: 2,
  },
  
  detailSubLabel: {
    fontSize: 14,
    color: '#6b7280',
  },
  
  detailRight: {
    alignItems: 'flex-end',
  },
  
  detailValue: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1f2937',
    marginBottom: 2,
  },
  
  detailSubValue: {
    fontSize: 14,
    color: '#6b7280',
  },

  // 打卡记录卡片
  checkinRecordCard: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 24,
    marginBottom: 16,
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
  
  checkinHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  
  consecutiveDaysContainer: {
    alignItems: 'flex-end',
  },
  
  consecutiveDaysLabel: {
    fontSize: 14,
    color: '#6b7280',
    marginBottom: 2,
  },
  
  consecutiveDaysValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#02f2ce',
  },
  
  recentCheckinsContainer: {
    gap: 12,
  },
  
  checkinItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 8,
  },
  
  checkinLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  
  checkinIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#dcfce7',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  
  checkinInfo: {
    flex: 1,
  },
  
  checkinDate: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1f2937',
    marginBottom: 2,
  },
  
  checkinTime: {
    fontSize: 14,
    color: '#6b7280',
  },
  
  checkinStatus: {
    fontSize: 14,
    fontWeight: '500',
    color: '#10b981',
  },

  // 底部操作区域
  bottomSpacer: {
    height: 100,
  },
  
  bottomActions: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#ffffff',
    borderTopWidth: 1,
    borderTopColor: '#e5e7eb',
    padding: 24,
    paddingBottom: Platform.select({
      ios: 34,
      android: 24,
    }),
  },
  
  checkinButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    borderRadius: 16,
    gap: 8,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.15,
        shadowRadius: 12,
      },
      android: {
        elevation: 8,
      },
    }),
  },
  
  checkinButtonActive: {
    backgroundColor: '#02f2ce',
  },
  
  checkinButtonCompleted: {
    backgroundColor: '#10b981',
  },
  
  checkinButtonIcon: {
    fontSize: 16,
  },
  
  checkinButtonText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#ffffff',
  },

  // 删除确认弹窗
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  
  modalContainer: {
    width: '100%',
    maxWidth: 320,
  },
  
  modalContent: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 24,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.25,
        shadowRadius: 24,
      },
      android: {
        elevation: 16,
      },
    }),
  },
  
  modalHeader: {
    alignItems: 'center',
    marginBottom: 24,
  },
  
  modalIcon: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#fee2e2',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  
  modalTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: 8,
  },
  
  modalMessage: {
    fontSize: 14,
    color: '#6b7280',
    textAlign: 'center',
    lineHeight: 20,
  },
  
  modalActions: {
    flexDirection: 'row',
    gap: 12,
  },
  
  modalCancelButton: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 12,
    alignItems: 'center',
  },
  
  modalCancelText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#6b7280',
  },
  
  modalConfirmButton: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: '#ef4444',
    borderRadius: 12,
    alignItems: 'center',
  },
  
  modalConfirmText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#ffffff',
  },
});

