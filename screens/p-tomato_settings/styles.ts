

import { StyleSheet, Platform } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f7ff',
  },
  
  // Header
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
  
  headerButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  headerButtonIcon: {
    fontSize: 18,
    color: '#1f2937',
  },
  
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1f2937',
  },
  
  // Content
  scrollView: {
    flex: 1,
  },
  
  content: {
    paddingHorizontal: 24,
    paddingVertical: 24,
    gap: 24,
  },
  
  // Setting Item
  settingItem: {
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
  
  settingItemHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  
  settingItemInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  
  settingItemIcon: {
    width: 48,
    height: 48,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  
  settingItemIconText: {
    fontSize: 18,
  },
  
  settingItemText: {
    flex: 1,
  },
  
  settingItemTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1f2937',
    marginBottom: 2,
  },
  
  settingItemSubtitle: {
    fontSize: 14,
    color: '#6b7280',
  },
  
  settingItemValue: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  
  durationGradient: {
    borderRadius: 4,
    paddingHorizontal: 1,
    paddingVertical: 1,
  },
  
  settingItemValueText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  
  settingItemUnit: {
    fontSize: 14,
    color: '#6b7280',
    marginLeft: 4,
  },
  
  settingItemButton: {
    backgroundColor: '#f3f4f6',
    borderRadius: 12,
    paddingVertical: 12,
    alignItems: 'center',
  },
  
  settingItemButtonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1f2937',
  },
  
  // Task Selection
  taskSelectButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f3f4f6',
    borderRadius: 12,
    paddingVertical: 12,
  },
  
  taskSelectButtonIcon: {
    fontSize: 16,
    color: '#6b7280',
    marginRight: 8,
  },
  
  taskSelectButtonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#6b7280',
  },
  
  selectedTaskContainer: {
    backgroundColor: '#02f2ce1A',
    borderRadius: 12,
    padding: 12,
  },
  
  selectedTaskContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  
  selectedTaskIcon: {
    fontSize: 16,
    color: '#02f2ce',
    marginRight: 12,
  },
  
  selectedTaskName: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1f2937',
    flex: 1,
  },
  
  removeTaskButton: {
    padding: 4,
  },
  
  removeTaskIcon: {
    fontSize: 16,
    color: '#6b7280',
  },
  
  // Start Button
  startSection: {
    paddingTop: 24,
  },
  
  startButton: {
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
  
  startButtonGradient: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
  },
  
  startButtonIcon: {
    fontSize: 18,
    color: '#ffffff',
    marginRight: 8,
  },
  
  startButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  
  // Modal
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
  
  modalCloseButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  modalCloseIcon: {
    fontSize: 16,
    color: '#6b7280',
  },
  
  modalOptionsList: {
    marginBottom: 24,
    maxHeight: 300,
  },
  
  // Duration Options
  durationOption: {
    padding: 12,
    borderWidth: 1,
    borderColor: '#e5e7eb',
    borderRadius: 12,
    marginBottom: 12,
    alignItems: 'center',
  },
  
  durationOptionSelected: {
    backgroundColor: '#02f2ce',
    borderColor: '#02f2ce',
  },
  
  durationOptionText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1f2937',
  },
  
  durationOptionTextSelected: {
    color: '#1f2937',
  },
  
  // Task Options
  taskOption: {
    padding: 12,
    borderWidth: 1,
    borderColor: '#e5e7eb',
    borderRadius: 12,
    marginBottom: 12,
  },
  
  taskOptionSelected: {
    backgroundColor: '#02f2ce',
    borderColor: '#02f2ce',
  },
  
  taskOptionContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  
  taskOptionIcon: {
    fontSize: 16,
    marginRight: 12,
  },
  
  taskOptionInfo: {
    flex: 1,
  },
  
  taskOptionName: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1f2937',
    marginBottom: 2,
  },
  
  taskOptionNameSelected: {
    color: '#1f2937',
  },
  
  taskOptionDetails: {
    fontSize: 14,
    color: '#6b7280',
  },
  
  taskOptionDetailsSelected: {
    color: '#1f2937',
  },
  
  // Modal Buttons
  modalConfirmButton: {
    backgroundColor: '#02f2ce',
    borderRadius: 12,
    paddingVertical: 12,
    alignItems: 'center',
  },
  
  modalConfirmButtonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#ffffff',
  },
  
  taskModalButtons: {
    flexDirection: 'row',
    gap: 12,
  },
  
  taskModalCancelButton: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 12,
    paddingVertical: 12,
    alignItems: 'center',
  },
  
  taskModalCancelButtonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1f2937',
  },
  
  taskModalConfirmButton: {
    flex: 1,
    backgroundColor: '#02f2ce',
    borderRadius: 12,
    paddingVertical: 12,
    alignItems: 'center',
  },
  
  taskModalConfirmButtonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#ffffff',
  },
});

