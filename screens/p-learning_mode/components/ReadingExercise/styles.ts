

import { StyleSheet, Platform } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  exerciseCard: {
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
  titleText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: 16,
  },
  passageContainer: {
    marginBottom: 24,
    gap: 16,
  },
  passageParagraph: {
    fontSize: 16,
    color: '#6b7280',
    lineHeight: 24,
  },
  questionContainer: {
    gap: 16,
  },
  questionText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1f2937',
    lineHeight: 24,
  },
  optionsContainer: {
    gap: 12,
  },
  optionButton: {
    backgroundColor: '#f9fafb',
    padding: 16,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: 'transparent',
  },
  selectedOption: {
    borderColor: '#02f2ce',
    backgroundColor: '#f0f7ff',
  },
  correctOption: {
    backgroundColor: '#dcfce7',
    borderColor: '#16a34a',
  },
  incorrectOption: {
    backgroundColor: '#fef2f2',
    borderColor: '#dc2626',
  },
  optionText: {
    fontSize: 16,
    color: '#1f2937',
    lineHeight: 24,
  },
});

