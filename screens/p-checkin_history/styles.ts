

import { StyleSheet, Platform } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f7ff',
  },
  scrollView: {
    flex: 1,
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

  // 连续打卡统计
  streakSection: {
    marginHorizontal: 24,
    marginTop: 24,
  },
  streakCard: {
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
  streakHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  streakHeaderLeft: {
    flex: 1,
  },
  streakTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: 4,
  },
  streakSubtitle: {
    fontSize: 14,
    color: '#6b7280',
  },
  progressRingContainer: {
    position: 'relative',
    width: 64,
    height: 64,
  },
  progressRing: {
    transform: [{ rotate: '-90deg' }],
  },
  progressRingTextContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  progressRingText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1f2937',
  },
  statsGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statItem: {
    alignItems: 'center',
    flex: 1,
  },
  statValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#02f2ce',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: '#6b7280',
  },

  // 视图切换
  viewSwitcherSection: {
    marginHorizontal: 24,
    marginTop: 24,
  },
  viewTabs: {
    flexDirection: 'row',
    backgroundColor: '#f3f4f6',
    borderRadius: 12,
    padding: 4,
  },
  viewTab: {
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  viewTabActive: {
    backgroundColor: '#02f2ce',
  },
  viewTabInactive: {
    backgroundColor: 'transparent',
  },
  viewTabText: {
    fontSize: 14,
    fontWeight: '500',
  },
  viewTabTextActive: {
    color: '#1f2937',
  },
  viewTabTextInactive: {
    color: '#6b7280',
  },

  // 日历视图
  calendarSection: {
    marginHorizontal: 24,
    marginTop: 24,
  },
  calendarCard: {
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
  calendarHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  calendarTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1f2937',
  },
  calendarNav: {
    flexDirection: 'row',
    gap: 8,
  },
  calendarNavButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  weekdaysContainer: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  weekdayItem: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 8,
  },
  weekdayText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#6b7280',
  },
  calendarGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 16,
  },
  calendarDay: {
    width: '14.28%',
    aspectRatio: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  calendarDayToday: {
    backgroundColor: '#02f2ce',
    borderRadius: 8,
    margin: 2,
  },
  calendarDayInactive: {
    opacity: 0.3,
  },
  calendarDayFuture: {
    opacity: 0.3,
  },
  calendarDayText: {
    fontSize: 14,
    color: '#1f2937',
  },
  calendarDayTodayText: {
    color: '#1f2937',
    fontWeight: '600',
  },
  calendarDayInactiveText: {
    color: '#6b7280',
  },
  calendarDayIndicator: {
    position: 'absolute',
    bottom: 2,
    width: 6,
    height: 6,
    borderRadius: 3,
  },
  calendarDayIndicatorCheckedIn: {
    backgroundColor: '#00f289',
  },
  calendarDayIndicatorMissed: {
    backgroundColor: '#ef4444',
  },
  calendarLegend: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 24,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#f3f4f6',
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  legendDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
  },
  legendText: {
    fontSize: 12,
    color: '#6b7280',
  },

  // 打卡详情
  checkinDetailsSection: {
    marginHorizontal: 24,
    marginTop: 24,
    marginBottom: 24,
  },
  detailsCard: {
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
  detailsTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: 16,
  },
  detailsList: {
    gap: 12,
  },
  checkinDetailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 12,
    backgroundColor: '#f9fafb',
    borderRadius: 12,
  },
  checkinDetailLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    gap: 12,
  },
  checkinDetailIconContainer: {
    width: 32,
    height: 32,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkinDetailTextContainer: {
    flex: 1,
  },
  checkinDetailTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#1f2937',
    marginBottom: 2,
  },
  checkinDetailCategory: {
    fontSize: 12,
    color: '#6b7280',
  },
  checkinDetailRight: {
    marginLeft: 12,
  },
  checkinDetailStatusContainer: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#00f289',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

