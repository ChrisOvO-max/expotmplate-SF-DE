

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
    paddingHorizontal: 24,
    paddingVertical: 24,
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
  headerGradient: {
    borderRadius: 16,
    padding: 24,
    position: 'relative',
    overflow: 'hidden',
  },
  decorationCircle1: {
    position: 'absolute',
    top: -64,
    right: -64,
    width: 128,
    height: 128,
    backgroundColor: 'rgba(2, 242, 206, 0.05)',
    borderRadius: 64,
  },
  decorationCircle2: {
    position: 'absolute',
    bottom: -40,
    left: 40,
    width: 80,
    height: 80,
    backgroundColor: 'rgba(0, 242, 137, 0.05)',
    borderRadius: 40,
  },
  headerContent: {
    position: 'relative',
    zIndex: 10,
  },
  headerTop: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  pageTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1f2937',
  },
  streakBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#02f2ce',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 16,
    gap: 4,
  },
  streakText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '600',
  },
  progressOverview: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 16,
    padding: 16,
  },
  progressHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  progressLabel: {
    fontSize: 14,
    color: '#6b7280',
  },
  progressCount: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1f2937',
  },
  progressBarContainer: {
    width: '100%',
    height: 8,
    backgroundColor: '#e5e7eb',
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#02f2ce',
    borderRadius: 4,
  },
  tasksSection: {
    marginHorizontal: 24,
    marginTop: 24,
  },
  tasksHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  tasksTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1f2937',
  },
  tasksCount: {
    fontSize: 14,
    color: '#6b7280',
  },
  tasksList: {
    gap: 12,
  },
  librarySection: {
    marginHorizontal: 24,
    marginTop: 24,
    marginBottom: 24,
  },
  libraryEntry: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 24,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
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
  libraryIcon: {
    width: 64,
    height: 64,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  libraryContent: {
    flex: 1,
  },
  libraryTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: 4,
  },
  libraryDescription: {
    fontSize: 14,
    color: '#6b7280',
    marginBottom: 8,
  },
  libraryTags: {
    flexDirection: 'row',
    gap: 16,
  },
  tagVocabulary: {
    backgroundColor: 'rgba(2, 242, 206, 0.1)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  tagVocabularyText: {
    fontSize: 12,
    color: '#02f2ce',
    fontWeight: '500',
  },
  tagGrammar: {
    backgroundColor: 'rgba(0, 242, 137, 0.1)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  tagGrammarText: {
    fontSize: 12,
    color: '#00f289',
    fontWeight: '500',
  },
  tagListening: {
    backgroundColor: 'rgba(2, 150, 242, 0.1)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  tagListeningText: {
    fontSize: 12,
    color: '#0296f2e6',
    fontWeight: '500',
  },
});

