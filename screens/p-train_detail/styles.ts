

import { StyleSheet, Platform } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f7ff',
  },
  
  // 顶部导航
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
    backgroundColor: '#f3f4f6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backButtonIcon: {
    fontSize: 16,
    color: '#1f2937',
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

  // 训练概览
  overviewSection: {
    paddingHorizontal: 24,
    paddingTop: 24,
  },
  overviewCard: {
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
  overviewHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  overviewTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1f2937',
  },
  completionStatus: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#02f2ce',
    marginRight: 8,
  },
  statusText: {
    fontSize: 14,
    color: '#6b7280',
  },
  progressBarContainer: {
    marginBottom: 16,
  },
  progressBarBackground: {
    width: '100%',
    height: 8,
    backgroundColor: '#e5e7eb',
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
    borderRadius: 4,
  },
  statisticsGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statisticsItem: {
    alignItems: 'center',
    flex: 1,
  },
  statisticsValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 4,
  },
  statisticsValueCompleted: {
    color: '#00f289',
  },
  statisticsValueTime: {
    color: '#0296f2e6',
  },
  statisticsLabel: {
    fontSize: 12,
    color: '#6b7280',
  },

  // 训练项目列表
  exerciseListSection: {
    paddingHorizontal: 24,
    paddingTop: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: 16,
  },
  exerciseItem: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#e5e7eb',
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
  exerciseItemCompleted: {
    backgroundColor: '#f0fdf4',
    borderColor: '#10b981',
  },
  exerciseHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  exerciseInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  exerciseIconContainer: {
    width: 48,
    height: 48,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  exerciseIconContainerCompleted: {
    backgroundColor: 'rgba(0, 242, 137, 0.1)',
  },
  exerciseIconContainerPending: {
    backgroundColor: 'rgba(2, 150, 242, 0.1)',
  },
  exerciseIcon: {
    fontSize: 18,
  },
  exerciseIconCompleted: {
    color: '#00f289',
  },
  exerciseIconPending: {
    color: '#0296f2e6',
  },
  exerciseDetails: {
    flex: 1,
  },
  exerciseName: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1f2937',
    marginBottom: 2,
  },
  exerciseMuscles: {
    fontSize: 14,
    color: '#6b7280',
  },
  completedIndicator: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  completedText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#00f289',
    marginRight: 8,
  },
  completedIcon: {
    fontSize: 16,
    color: '#00f289',
  },
  recordButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#0296f2e6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  recordButtonIcon: {
    fontSize: 16,
    color: '#ffffff',
  },

  // 训练参数
  exerciseParameters: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 12,
  },
  parameterItem: {
    alignItems: 'center',
    marginRight: 16,
    marginBottom: 8,
    minWidth: 60,
  },
  parameterLabel: {
    fontSize: 12,
    color: '#6b7280',
    marginBottom: 2,
  },
  parameterValue: {
    fontSize: 14,
    fontWeight: '500',
    color: '#1f2937',
  },

  // 记录数据
  recordedDataContainer: {
    backgroundColor: '#f9fafb',
    borderRadius: 8,
    padding: 12,
  },
  recordedDataLabel: {
    fontSize: 12,
    color: '#6b7280',
    marginBottom: 8,
  },
  recordedDataGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  recordedDataItem: {
    alignItems: 'center',
    flex: 1,
  },
  recordedDataValue: {
    fontSize: 14,
    fontWeight: '500',
    color: '#1f2937',
    marginBottom: 2,
  },
  recordedDataLabelSmall: {
    fontSize: 12,
    color: '#6b7280',
  },
  recordedDataPlaceholder: {
    fontSize: 14,
    color: '#6b7280',
    textAlign: 'center',
  },

  // 底部操作区域
  bottomSpacing: {
    height: 100,
  },
  bottomActionContainer: {
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
  completeButton: {
    borderRadius: 16,
    overflow: 'hidden',
  },
  completeButtonEnabled: {
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
      },
      android: {
        elevation: 8,
      },
    }),
  },
  completeButtonDisabled: {
    opacity: 0.5,
  },
  completeButtonGradient: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    paddingHorizontal: 24,
  },
  completeButtonIcon: {
    fontSize: 16,
    color: '#ffffff',
    marginRight: 8,
  },
  completeButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#ffffff',
  },

  // 模态框
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
    padding: 24,
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
  modalCloseButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#f3f4f6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalCloseIcon: {
    fontSize: 14,
    color: '#6b7280',
  },
  modalExerciseInfo: {
    alignItems: 'center',
    marginBottom: 24,
  },
  modalExerciseIconContainer: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: 'rgba(2, 150, 242, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  modalExerciseIcon: {
    fontSize: 24,
    color: '#0296f2e6',
  },
  modalExerciseName: {
    fontSize: 18,
    fontWeight: '500',
    color: '#1f2937',
    marginBottom: 4,
  },
  modalExerciseMuscles: {
    fontSize: 14,
    color: '#6b7280',
  },

  // 表单
  modalForm: {
    gap: 16,
  },
  formRow: {
    flexDirection: 'row',
    gap: 16,
  },
  formGroup: {
    flex: 1,
  },
  formLabel: {
    fontSize: 14,
    fontWeight: '500',
    color: '#6b7280',
    marginBottom: 8,
  },
  formInput: {
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    fontSize: 14,
    color: '#1f2937',
    backgroundColor: '#ffffff',
  },
  intensitySelector: {
    flexDirection: 'row',
    gap: 8,
  },
  intensityOption: {
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#d1d5db',
    backgroundColor: '#ffffff',
    alignItems: 'center',
  },
  intensityOptionSelected: {
    borderColor: '#02f2ce',
    backgroundColor: 'rgba(2, 242, 206, 0.1)',
  },
  intensityOptionText: {
    fontSize: 12,
    color: '#6b7280',
  },
  intensityOptionTextSelected: {
    color: '#02f2ce',
    fontWeight: '500',
  },

  // 模态框操作按钮
  modalActions: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 8,
  },
  modalCancelButton: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#d1d5db',
    backgroundColor: '#ffffff',
    alignItems: 'center',
  },
  modalCancelButtonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#6b7280',
  },
  modalSaveButton: {
    flex: 1,
    borderRadius: 12,
    overflow: 'hidden',
  },
  modalSaveButtonGradient: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  modalSaveButtonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#ffffff',
  },
});

