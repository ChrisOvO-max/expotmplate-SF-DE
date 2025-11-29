

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
  descriptionText: {
    fontSize: 16,
    color: '#6b7280',
    marginBottom: 24,
    lineHeight: 24,
  },
  audioPlayer: {
    borderRadius: 16,
    padding: 24,
    marginBottom: 24,
  },
  audioHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  audioInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  playButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  audioDetails: {
    gap: 4,
  },
  audioTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#ffffff',
  },
  audioDuration: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.8)',
  },
  volumeButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  progressContainer: {
    width: '100%',
    height: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 4,
    marginBottom: 8,
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 4,
  },
  timeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  timeText: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.8)',
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

