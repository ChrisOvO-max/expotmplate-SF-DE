

import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  audioPlayerContainer: {
    backgroundColor: '#f9fafb',
    borderRadius: 12,
    padding: 16,
  },
  audioHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  audioTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#1f2937',
  },
  audioDuration: {
    fontSize: 12,
    color: '#6b7280',
  },
  audioControls: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    marginBottom: 12,
  },
  playButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#02f2ce',
    alignItems: 'center',
    justifyContent: 'center',
  },
  progressContainer: {
    flex: 1,
  },
  progressSlider: {
    width: '100%',
    height: 40,
  },
  progressThumb: {
    backgroundColor: '#02f2ce',
    width: 16,
    height: 16,
  },
  volumeButton: {
    width: 32,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  timeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  timeText: {
    fontSize: 12,
    color: '#6b7280',
  },
});

