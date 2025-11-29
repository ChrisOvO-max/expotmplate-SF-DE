

import { StyleSheet, Platform } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f7ff',
  },
  scrollView: {
    flex: 1,
  },
  headerGradient: {
    paddingHorizontal: 24,
    paddingVertical: 24,
    position: 'relative',
    overflow: 'hidden',
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
  headerDecoration1: {
    position: 'absolute',
    top: -64,
    right: -64,
    width: 128,
    height: 128,
    backgroundColor: 'rgba(2, 242, 206, 0.05)',
    borderRadius: 64,
  },
  headerDecoration2: {
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
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleIcon: {
    fontSize: 24,
    color: '#02f2ce',
    marginRight: 12,
  },
  pageTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1f2937',
  },
  pageSubtitle: {
    fontSize: 14,
    color: '#6b7280',
    marginTop: 4,
  },
  overviewSection: {
    marginHorizontal: 24,
    marginTop: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: 16,
  },
  overviewGrid: {
    flexDirection: 'row',
    gap: 16,
  },
  overviewCard: {
    flex: 1,
    backgroundColor: '#ffffff',
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
  overviewCardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  overviewIconContainer: {
    width: 40,
    height: 40,
    backgroundColor: 'rgba(2, 150, 242, 0.1)',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sleepIconContainer: {
    backgroundColor: 'rgba(168, 85, 247, 0.1)',
  },
  overviewIcon: {
    fontSize: 16,
    color: '#0296f2',
  },
  sleepIcon: {
    fontSize: 16,
    color: '#a855f7',
  },
  completedBadge: {
    backgroundColor: '#dcfce7',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  completedBadgeText: {
    fontSize: 12,
    color: '#166534',
    fontWeight: '500',
  },
  inProgressBadge: {
    backgroundColor: '#dbeafe',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  inProgressBadgeText: {
    fontSize: 12,
    color: '#1e40af',
    fontWeight: '500',
  },
  overviewCardTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#1f2937',
    marginBottom: 4,
  },
  overviewCardValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0296f2',
    marginBottom: 2,
  },
  sleepValue: {
    color: '#a855f7',
  },
  overviewCardSubtitle: {
    fontSize: 12,
    color: '#6b7280',
  },
  functionsSection: {
    marginHorizontal: 24,
    marginTop: 24,
  },
  functionItem: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
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
  functionItemContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  functionItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  functionIconContainer: {
    width: 48,
    height: 48,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  waterIconContainer: {
    backgroundColor: 'rgba(2, 150, 242, 0.1)',
  },
  dietIconContainer: {
    backgroundColor: 'rgba(249, 115, 22, 0.1)',
  },
  functionSleepIconContainer: {
    backgroundColor: 'rgba(168, 85, 247, 0.1)',
  },
  habitIconContainer: {
    backgroundColor: 'rgba(234, 179, 8, 0.1)',
  },
  waterIcon: {
    fontSize: 18,
    color: '#0296f2',
  },
  dietIcon: {
    fontSize: 18,
    color: '#f97316',
  },
  functionSleepIcon: {
    fontSize: 18,
    color: '#a855f7',
  },
  habitIcon: {
    fontSize: 18,
    color: '#eab308',
  },
  functionItemText: {
    flex: 1,
  },
  functionItemTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1f2937',
    marginBottom: 4,
  },
  functionItemSubtitle: {
    fontSize: 14,
    color: '#6b7280',
    marginBottom: 8,
  },
  progressBarContainer: {
    marginBottom: 4,
  },
  progressBarBackground: {
    width: '100%',
    height: 6,
    backgroundColor: '#e5e7eb',
    borderRadius: 3,
  },
  progressBarFill: {
    width: '100%',
    height: 6,
    backgroundColor: '#02f2ce',
    borderRadius: 3,
  },
  progressText: {
    fontSize: 12,
    color: '#6b7280',
  },
  dietTagsContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  completedTag: {
    backgroundColor: '#dcfce7',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  completedTagText: {
    fontSize: 12,
    color: '#166534',
    fontWeight: '500',
  },
  pendingTag: {
    backgroundColor: '#f3f4f6',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  pendingTagText: {
    fontSize: 12,
    color: '#6b7280',
    fontWeight: '500',
  },
  sleepTagsContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  sleepTag: {
    backgroundColor: '#dbeafe',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  sleepTagText: {
    fontSize: 12,
    color: '#1e40af',
    fontWeight: '500',
  },
  habitTagsContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  chevronIcon: {
    fontSize: 14,
    color: '#9ca3af',
    marginLeft: 8,
  },
  tipsSection: {
    marginHorizontal: 24,
    marginTop: 24,
    marginBottom: 24,
  },
  tipCard: {
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
  tipContent: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  tipIconContainer: {
    width: 32,
    height: 32,
    backgroundColor: 'rgba(2, 242, 206, 0.2)',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
    marginTop: 4,
  },
  tipIcon: {
    fontSize: 14,
    color: '#02f2ce',
  },
  tipTextContainer: {
    flex: 1,
  },
  tipTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1f2937',
    marginBottom: 4,
  },
  tipDescription: {
    fontSize: 14,
    color: '#6b7280',
    lineHeight: 20,
  },
});

