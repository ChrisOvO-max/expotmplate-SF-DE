

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
  
  scrollViewContent: {
    paddingBottom: 100,
  },
  
  // 习惯提醒列表
  habitsSection: {
    paddingHorizontal: 24,
    marginTop: 24,
  },
  
  habitsHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  
  habitsTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1f2937',
  },
  
  habitsCount: {
    fontSize: 14,
    color: '#6b7280',
  },
  
  habitsList: {
    gap: 12,
  },
  
  // 习惯项
  habitItem: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 16,
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
  
  habitItemContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  
  habitItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  
  habitIconContainer: {
    width: 48,
    height: 48,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  
  habitInfo: {
    flex: 1,
  },
  
  habitName: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1f2937',
    marginBottom: 4,
  },
  
  habitDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  
  habitDetailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  
  habitDetailText: {
    fontSize: 14,
    color: '#6b7280',
  },
  
  habitItemRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  
  habitToggle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  habitToggleDisabled: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: '#d1d5db',
  },
  
  // 删除按钮
  deleteButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
    marginTop: 8,
    paddingVertical: 8,
    borderRadius: 8,
    backgroundColor: '#fef2f2',
  },
  
  deleteButtonText: {
    fontSize: 14,
    color: '#ef4444',
    fontWeight: '500',
  },
  
  // 空状态
  emptyState: {
    alignItems: 'center',
    paddingVertical: 48,
  },
  
  emptyStateIcon: {
    width: 96,
    height: 96,
    borderRadius: 48,
    backgroundColor: '#f3f4f6',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  
  emptyStateTitle: {
    fontSize: 18,
    fontWeight: '500',
    color: '#1f2937',
    marginBottom: 8,
  },
  
  emptyStateDescription: {
    fontSize: 14,
    color: '#6b7280',
    textAlign: 'center',
  },
  
  // 浮动按钮
  floatingButton: {
    position: 'absolute',
    bottom: 24,
    right: 24,
    width: 56,
    height: 56,
    borderRadius: 28,
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
  
  floatingButtonGradient: {
    width: 56,
    height: 56,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  // 弹窗样式
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  
  modalContainer: {
    justifyContent: 'flex-end',
    minHeight: '100%',
  },
  
  modalContent: {
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 40,
    maxHeight: '80%',
  },
  
  modalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  
  modalTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1f2937',
  },
  
  closeButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  // 表单样式
  formContainer: {
    gap: 16,
  },
  
  formGroup: {
    gap: 8,
  },
  
  formLabel: {
    fontSize: 14,
    fontWeight: '500',
    color: '#1f2937',
  },
  
  formInput: {
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    color: '#1f2937',
    backgroundColor: '#ffffff',
  },
  
  // 重复周期网格
  repeatGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  
  repeatTag: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 8,
    backgroundColor: '#ffffff',
  },
  
  repeatTagSelected: {
    backgroundColor: '#02f2ce',
    borderColor: '#02f2ce',
  },
  
  repeatTagText: {
    fontSize: 14,
    color: '#374151',
  },
  
  repeatTagTextSelected: {
    color: '#1f2937',
    fontWeight: '500',
  },
  
  // 表单操作按钮
  formActions: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 8,
  },
  
  cancelButton: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
  
  cancelButtonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#6b7280',
  },
  
  saveButton: {
    flex: 1,
    borderRadius: 12,
    overflow: 'hidden',
  },
  
  saveButtonGradient: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  saveButtonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#ffffff',
  },
  
  // 删除确认弹窗
  deleteModalContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  
  deleteModalContent: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
    width: '100%',
    maxWidth: 320,
  },
  
  deleteIconContainer: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#fef2f2',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  
  deleteModalTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: 8,
  },
  
  deleteModalDescription: {
    fontSize: 14,
    color: '#6b7280',
    textAlign: 'center',
    marginBottom: 24,
    lineHeight: 20,
  },
  
  deleteModalActions: {
    flexDirection: 'row',
    gap: 12,
    width: '100%',
  },
  
  deleteModalCancelButton: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
  
  deleteModalCancelText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#6b7280',
  },
  
  deleteModalConfirmButton: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ef4444',
  },
  
  deleteModalConfirmText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#ffffff',
  },
});

