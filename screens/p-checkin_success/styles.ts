

import { StyleSheet, Platform } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f7ff',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 32,
  },
  successIconContainer: {
    marginBottom: 32,
  },
  successIcon: {
    width: 128,
    height: 128,
    borderRadius: 64,
    ...Platform.select({
      ios: {
        shadowColor: '#02f2ce',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.3,
        shadowRadius: 25,
      },
      android: {
        elevation: 8,
      },
    }),
  },
  successIconGradient: {
    width: '100%',
    height: '100%',
    borderRadius: 64,
    justifyContent: 'center',
    alignItems: 'center',
  },
  successTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 16,
    textAlign: 'center',
  },
  streakContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 24,
    marginBottom: 32,
    width: '100%',
    maxWidth: 320,
    ...Platform.select({
      ios: {
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 2,
      },
    }),
  },
  streakContent: {
    alignItems: 'center',
  },
  streakHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  streakLabel: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1f2937',
    marginLeft: 8,
  },
  streakNumberGradient: {
    borderRadius: 8,
    paddingHorizontal: 1,
    paddingVertical: 1,
    marginBottom: 8,
  },
  streakNumber: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
  },
  streakUnit: {
    fontSize: 14,
    color: '#6b7280',
  },
  medalContainer: {
    marginBottom: 32,
    alignItems: 'center',
  },
  medalIcon: {
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    ...Platform.select({
      ios: {
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 8,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  medalText: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '500',
    color: '#1f2937',
    marginTop: 12,
  },
  feedbackContainer: {
    alignItems: 'center',
    marginBottom: 32,
  },
  feedbackTitle: {
    fontSize: 18,
    fontWeight: '500',
    color: '#1f2937',
    marginBottom: 8,
  },
  feedbackSubtitle: {
    fontSize: 14,
    color: '#6b7280',
  },
  quoteContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 24,
    marginBottom: 32,
    width: '100%',
    maxWidth: 320,
    ...Platform.select({
      ios: {
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 2,
      },
    }),
  },
  quoteContent: {
    alignItems: 'center',
  },
  quoteIcon: {
    marginBottom: 12,
  },
  quoteText: {
    color: '#1f2937',
    fontStyle: 'italic',
    textAlign: 'center',
    marginBottom: 12,
    fontSize: 16,
    lineHeight: 24,
  },
  quoteDivider: {
    width: 64,
    height: 2,
    backgroundColor: '#02f2ce',
  },
  backButtonContainer: {
    width: '100%',
    maxWidth: 200,
  },
  backButton: {
    borderRadius: 16,
    overflow: 'hidden',
    ...Platform.select({
      ios: {
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 8,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  backButtonGradient: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    paddingHorizontal: 32,
  },
  backButtonIcon: {
    marginRight: 8,
  },
  backButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '500',
  },
});

