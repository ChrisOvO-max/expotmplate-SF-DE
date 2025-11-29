

import { StyleSheet, Platform } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f7ff',
  },
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
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1f2937',
  },
  headerPlaceholder: {
    width: 40,
  },
  scrollView: {
    flex: 1,
  },
  dateCard: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 24,
    margin: 24,
    marginBottom: 16,
    alignItems: 'center',
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
  currentDate: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 8,
  },
  currentWeekday: {
    fontSize: 18,
    color: '#6b7280',
    marginBottom: 16,
  },
  dateHint: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  dateHintText: {
    fontSize: 14,
    color: '#6b7280',
  },
  moodSection: {
    paddingHorizontal: 24,
    marginBottom: 32,
  },
  moodSectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1f2937',
    textAlign: 'center',
    marginBottom: 24,
  },
  moodGrid: {
    gap: 16,
  },
  moodOption: {
    borderRadius: 16,
    overflow: 'hidden',
  },
  moodOptionAnxious: {
    // 焦虑选项占满整行
  },
  moodOptionSelected: {
    transform: [{ scale: 1.02 }],
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
  moodOptionGradient: {
    padding: 24,
    alignItems: 'center',
  },
  moodOptionAnxiousGradient: {
    // 焦虑选项的特殊样式可以在这里添加
  },
  moodOptionContent: {
    padding: 24,
    alignItems: 'center',
    borderRadius: 16,
  },
  moodIcon: {
    marginBottom: 12,
  },
  moodTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1f2937',
    marginBottom: 4,
  },
  moodTitleSelected: {
    fontSize: 16,
    fontWeight: '500',
    color: '#ffffff',
    marginBottom: 4,
  },
  moodDescription: {
    fontSize: 14,
    color: '#6b7280',
    textAlign: 'center',
  },
  moodDescriptionSelected: {
    fontSize: 14,
    color: '#ffffff',
    textAlign: 'center',
  },
  tasksCard: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 24,
    marginHorizontal: 24,
    marginBottom: 32,
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
  tasksHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 16,
  },
  tasksTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1f2937',
  },
  tasksSummary: {
    gap: 12,
  },
  taskRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  taskLabel: {
    fontSize: 16,
    color: '#6b7280',
  },
  taskValue: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1f2937',
  },
  taskValueCompleted: {
    fontSize: 16,
    fontWeight: '500',
    color: '#10b981',
  },
  taskValuePrimary: {
    fontSize: 16,
    fontWeight: '500',
    color: '#02f2ce',
  },
  saveSection: {
    paddingHorizontal: 24,
    paddingBottom: 32,
  },
  saveButton: {
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 12,
  },
  saveButtonDisabled: {
    opacity: 0.5,
  },
  saveButtonGradient: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    gap: 8,
  },
  saveButtonIcon: {
    // 图标样式
  },
  spinningIcon: {
    // 旋转动画可以通过 react-native-reanimated 实现
  },
  saveButtonText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#ffffff',
  },
  saveHint: {
    fontSize: 14,
    color: '#6b7280',
    textAlign: 'center',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  modalContent: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 32,
    alignItems: 'center',
    width: '100%',
    maxWidth: 320,
  },
  modalIcon: {
    marginBottom: 16,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 8,
    textAlign: 'center',
  },
  modalDescription: {
    fontSize: 16,
    color: '#6b7280',
    textAlign: 'center',
    marginBottom: 24,
    lineHeight: 24,
  },
  modalButton: {
    borderRadius: 12,
    overflow: 'hidden',
    width: '100%',
  },
  modalButtonGradient: {
    paddingVertical: 12,
    alignItems: 'center',
  },
  modalButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#ffffff',
  },
});

