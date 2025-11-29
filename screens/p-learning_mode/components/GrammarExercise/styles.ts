

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
  questionText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: 16,
    lineHeight: 28,
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
  correctOption: {
    backgroundColor: '#dcfce7',
    borderColor: '#16a34a',
  },
  optionText: {
    fontSize: 16,
    color: '#1f2937',
    lineHeight: 24,
  },
  correctOptionText: {
    color: '#16a34a',
    fontWeight: '500',
  },
  explanationContainer: {
    marginTop: 16,
    padding: 16,
    borderRadius: 12,
    backgroundColor: '#f0fdf4',
  },
  explanationHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    gap: 8,
  },
  explanationTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#15803d',
  },
  explanationText: {
    fontSize: 14,
    color: '#166534',
    lineHeight: 20,
  },
});

