

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
    paddingHorizontal: 24,
    paddingTop: 24,
  },
  
  // 通用section样式
  section: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 24,
    marginBottom: 24,
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
  
  disabledSection: {
    opacity: 0.5,
  },
  
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  
  sectionIconContainer: {
    width: 48,
    height: 48,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  
  sectionHeaderText: {
    flex: 1,
  },
  
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: 2,
  },
  
  sectionSubtitle: {
    fontSize: 14,
    color: '#6b7280',
  },
  
  // 喝水目标设置
  goalInputContainer: {
    flex: 1,
  },
  
  inputLabel: {
    fontSize: 14,
    fontWeight: '500',
    color: '#6b7280',
    marginBottom: 8,
  },
  
  inputWrapper: {
    position: 'relative',
  },
  
  goalInput: {
    width: '100%',
    paddingHorizontal: 16,
    paddingVertical: 12,
    paddingRight: 48,
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 12,
    fontSize: 18,
    fontWeight: '500',
    color: '#1f2937',
    backgroundColor: '#ffffff',
  },
  
  inputUnit: {
    position: 'absolute',
    right: 16,
    top: '50%',
    transform: [{ translateY: -10 }],
    fontSize: 16,
    color: '#6b7280',
  },
  
  // 提醒开关设置
  toggleRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  
  // 提醒时间设置
  timeSectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  
  addTimeButton: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: 'rgba(0, 242, 137, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  disabledButton: {
    opacity: 0.5,
  },
  
  timeItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: '#f9fafb',
    borderRadius: 12,
  },
  
  timeItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  
  timeIconContainer: {
    width: 32,
    height: 32,
    borderRadius: 8,
    backgroundColor: 'rgba(2, 150, 242, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  
  timeText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1f2937',
  },
  
  deleteTimeButton: {
    width: 32,
    height: 32,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  timeItemSeparator: {
    height: 12,
  },
  
  // 保存按钮
  saveSection: {
    paddingBottom: 32,
  },
  
  saveButton: {
    width: '100%',
    paddingVertical: 16,
    borderRadius: 16,
    backgroundColor: '#02f2ce',
    alignItems: 'center',
    justifyContent: 'center',
    ...Platform.select({
      ios: {
        shadowColor: '#02f2ce',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
      },
      android: {
        elevation: 6,
      },
    }),
  },
  
  saveButtonDisabled: {
    opacity: 0.7,
  },
  
  saveButtonText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#ffffff',
  },
  
  // 时间选择器模态框
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  
  modalContainer: {
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 40,
    maxHeight: '70%',
  },
  
  modalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  
  modalCancelText: {
    fontSize: 16,
    color: '#6b7280',
  },
  
  modalTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1f2937',
  },
  
  modalConfirmText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#02f2ce',
  },
  
  timePickerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
  },
  
  timePickerColumn: {
    alignItems: 'center',
    marginHorizontal: 16,
  },
  
  timePickerLabel: {
    fontSize: 14,
    color: '#6b7280',
    marginBottom: 8,
  },
  
  timePickerList: {
    height: 160,
    width: 64,
  },
  
  timePickerOption: {
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  
  timePickerOptionSelected: {
    backgroundColor: '#02f2ce',
  },
  
  timePickerOptionText: {
    fontSize: 24,
    fontWeight: '600',
    color: '#1f2937',
  },
  
  timePickerOptionTextSelected: {
    color: '#ffffff',
  },
  
  timeSeparator: {
    fontSize: 24,
    fontWeight: '600',
    color: '#1f2937',
    marginHorizontal: 16,
  },
});

