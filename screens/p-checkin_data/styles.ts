

import { StyleSheet, Platform } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f7ff',
  },
  
  // 顶部导航栏
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
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1f2937',
  },
  
  headerPlaceholder: {
    width: 40,
  },
  
  scrollView: {
    flex: 1,
  },
  
  // 周期选择器
  periodSelectorContainer: {
    backgroundColor: '#ffffff',
    marginHorizontal: 24,
    marginTop: 24,
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
  
  periodTabsContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  
  periodTab: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    alignItems: 'center',
  },
  
  periodTabActive: {
    backgroundColor: '#02f2ce',
  },
  
  periodTabInactive: {
    backgroundColor: '#f3f4f6',
  },
  
  periodTabText: {
    fontSize: 14,
    fontWeight: '500',
  },
  
  periodTabTextActive: {
    color: '#1f2937',
  },
  
  periodTabTextInactive: {
    color: '#6b7280',
  },
  
  // 数据概览
  dataOverviewContainer: {
    marginHorizontal: 24,
    marginTop: 24,
  },
  
  dataCardsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
  },
  
  dataCard: {
    width: '47%',
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
  
  dataCardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  
  dataCardIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  dataCardBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  
  dataCardBadgeText: {
    fontSize: 12,
    fontWeight: '500',
  },
  
  dataCardValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 4,
  },
  
  dataCardLabel: {
    fontSize: 14,
    color: '#6b7280',
  },
  
  // 图表
  chartContainer: {
    backgroundColor: '#ffffff',
    marginHorizontal: 24,
    marginTop: 24,
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
  
  chartTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: 16,
  },
  
  chartArea: {
    height: 192,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  
  chartBarContainer: {
    flex: 1,
    alignItems: 'center',
    gap: 8,
  },
  
  chartBar: {
    width: 32,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    minHeight: 8,
  },
  
  chartBarLabel: {
    fontSize: 12,
    color: '#6b7280',
    textAlign: 'center',
  },
  
  chartLegend: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  
  chartLegendText: {
    fontSize: 12,
    color: '#6b7280',
  },
  
  // 连续打卡
  streakContainer: {
    backgroundColor: '#ffffff',
    marginHorizontal: 24,
    marginTop: 24,
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
  
  streakTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: 24,
  },
  
  streakBadgeContainer: {
    alignItems: 'center',
    marginBottom: 24,
  },
  
  streakBadge: {
    width: 96,
    height: 96,
    borderRadius: 48,
    backgroundColor: '#00f289',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 8,
      },
      android: {
        elevation: 8,
      },
    }),
  },
  
  streakBadgeNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  
  streakBadgeFire: {
    position: 'absolute',
    top: -8,
    right: -8,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#f97316',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  streakBadgeLabel: {
    fontSize: 14,
    color: '#6b7280',
    marginTop: 8,
  },
  
  streakMilestonesContainer: {
    gap: 12,
  },
  
  streakMilestone: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 12,
    backgroundColor: '#f9fafb',
    borderRadius: 12,
  },
  
  streakMilestoneLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  
  streakMilestoneIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  streakMilestoneTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#1f2937',
  },
  
  streakMilestoneRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  
  streakMilestoneCompleted: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    backgroundColor: 'rgba(5, 150, 105, 0.1)',
  },
  
  streakMilestoneCompletedText: {
    fontSize: 12,
    color: '#059669',
    fontWeight: '500',
  },
  
  streakMilestoneProgress: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  
  streakMilestoneProgressBar: {
    width: 64,
    height: 8,
    backgroundColor: '#e5e7eb',
    borderRadius: 4,
  },
  
  streakMilestoneProgressFill: {
    height: 8,
    backgroundColor: '#02f2ce',
    borderRadius: 4,
  },
  
  streakMilestoneProgressText: {
    fontSize: 12,
    color: '#6b7280',
  },
  
  // 详细统计
  detailedStatsContainer: {
    marginHorizontal: 24,
    marginTop: 24,
    marginBottom: 24,
  },
  
  detailedStatsTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: 16,
  },
  
  detailedStatsContent: {
    gap: 16,
  },
  
  detailedStatsCard: {
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
  
  detailedStatsCardTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1f2937',
    marginBottom: 12,
  },
  
  detailedStatsList: {
    gap: 12,
  },
  
  detailedStatsItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  
  detailedStatsItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  
  detailedStatsItemIcon: {
    width: 32,
    height: 32,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  detailedStatsItemText: {
    fontSize: 14,
    color: '#1f2937',
  },
  
  detailedStatsItemRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  
  detailedStatsItemValue: {
    fontSize: 14,
    fontWeight: '500',
    color: '#1f2937',
  },
  
  detailedStatsItemRate: {
    fontSize: 12,
    color: '#6b7280',
  },
});

