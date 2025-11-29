

import { StyleSheet, Platform } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f7ff',
  },
  scrollView: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingVertical: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderBottomWidth: 1,
    borderBottomColor: '#f3f4f6',
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
  musicToggleButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(2, 242, 206, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  taskInfoCard: {
    marginHorizontal: 24,
    marginTop: 24,
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
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
  taskInfoContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  taskIconContainer: {
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: 'rgba(2, 242, 206, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  taskTextContainer: {
    flex: 1,
  },
  taskName: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1f2937',
    marginBottom: 4,
  },
  taskDescription: {
    fontSize: 14,
    color: '#6b7280',
  },
  timerSection: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 48,
    paddingHorizontal: 24,
  },
  timerCircleContainer: {
    position: 'relative',
    marginBottom: 32,
  },
  timerSvg: {
    transform: [{ rotate: '-90deg' }],
  },
  timerCenter: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  timerDisplay: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 8,
  },
  timerLabel: {
    fontSize: 14,
    color: '#6b7280',
  },
  tomatoCounter: {
    alignItems: 'center',
    marginBottom: 32,
  },
  tomatoCounterRow: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  tomatoCounterItem: {
    marginHorizontal: 4,
  },
  tomatoCounterCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tomatoCounterCompleted: {
    backgroundColor: '#02f2ce',
  },
  tomatoCounterPending: {
    backgroundColor: '#e5e7eb',
  },
  tomatoCounterText: {
    fontSize: 14,
    color: '#6b7280',
  },
  currentTomatoNumber: {
    fontWeight: '600',
    color: '#1f2937',
  },
  controlButtons: {
    flexDirection: 'row',
    gap: 16,
  },
  pauseButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(107, 114, 128, 0.1)',
    paddingHorizontal: 32,
    paddingVertical: 16,
    borderRadius: 16,
    gap: 8,
  },
  pauseButtonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#6b7280',
  },
  endButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ef4444',
    paddingHorizontal: 32,
    paddingVertical: 16,
    borderRadius: 16,
    gap: 8,
  },
  endButtonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#ffffff',
  },
  focusTipsSection: {
    marginHorizontal: 24,
    marginTop: 32,
  },
  focusTipsCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
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
  focusTipsHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  focusTipsIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: 'rgba(0, 242, 137, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  focusTipsTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1f2937',
  },
  focusTipsText: {
    fontSize: 14,
    color: '#6b7280',
    lineHeight: 20,
  },
  bottomSpacing: {
    height: 100,
  },
  musicPlayer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderTopWidth: 1,
    borderTopColor: '#e5e7eb',
    padding: 16,
    ...Platform.select({
      ios: {
        paddingBottom: 34,
      },
      android: {
        paddingBottom: 16,
      },
    }),
  },
  musicPlayerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  musicInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  musicIconContainer: {
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: 'rgba(2, 242, 206, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  musicTextContainer: {
    flex: 1,
  },
  currentSong: {
    fontSize: 14,
    fontWeight: '500',
    color: '#1f2937',
    marginBottom: 2,
  },
  songDescription: {
    fontSize: 12,
    color: '#6b7280',
  },
  musicControls: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  musicControlButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#f3f4f6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  musicPlayButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#02f2ce',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

