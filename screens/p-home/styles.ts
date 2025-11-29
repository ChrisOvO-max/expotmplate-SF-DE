

import { StyleSheet, Platform } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f7ff',
  },
  scrollView: {
    flex: 1,
  },
  
  // 用户信息区域
  userHeader: {
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
  userHeaderDecoration1: {
    position: 'absolute',
    top: -64,
    right: -64,
    width: 128,
    height: 128,
    backgroundColor: 'rgba(2, 242, 206, 0.05)',
    borderRadius: 64,
  },
  userHeaderDecoration2: {
    position: 'absolute',
    bottom: -40,
    left: 40,
    width: 80,
    height: 80,
    backgroundColor: 'rgba(0, 242, 137, 0.05)',
    borderRadius: 40,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'relative',
    zIndex: 10,
  },
  userInfoLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  userAvatarContainer: {
    position: 'relative',
    marginRight: 16,
  },
  userAvatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
    borderWidth: 4,
    borderColor: '#ffffff',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  userAvatarBadge: {
    position: 'absolute',
    bottom: -4,
    right: -4,
    width: 20,
    height: 20,
    backgroundColor: '#10b981',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  userTextContainer: {
    flex: 1,
  },
  userGreetingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  userGreeting: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1f2937',
    marginRight: 8,
  },
  userGreetingBadge: {
    backgroundColor: '#fef3c7',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 12,
  },
  userGreetingBadgeText: {
    fontSize: 12,
    color: '#92400e',
    fontWeight: '500',
  },
  currentDateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  currentDate: {
    fontSize: 14,
    color: '#6b7280',
    marginLeft: 4,
  },
  addPlanButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.15,
        shadowRadius: 8,
      },
      android: {
        elevation: 8,
      },
    }),
  },
  addPlanButtonGradient: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },

  // 日历区域
  calendarSection: {
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
    backgroundColor: '#f9fafb',
  },
  weekdaysContainer: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  weekday: {
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
  },
  calendarDay: {
    width: '14.28%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  calendarDayInactive: {
    opacity: 0.5,
  },
  calendarDayToday: {
    backgroundColor: '#02f2ce',
    borderRadius: 20,
    margin: 2,
    width: 36,
    height: 36,
  },
  calendarDayText: {
    fontSize: 14,
    color: '#1f2937',
  },
  calendarDayTextInactive: {
    color: '#9ca3af',
  },
  calendarDayTextToday: {
    color: '#1f2937',
    fontWeight: '600',
  },
  calendarDayDot: {
    position: 'absolute',
    bottom: 2,
    width: 4,
    height: 4,
    backgroundColor: '#00f289',
    borderRadius: 2,
  },

  // 今日计划
  todayPlansSection: {
    marginHorizontal: 24,
    marginTop: 24,
  },
  plansHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  plansTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1f2937',
  },
  plansCount: {
    fontSize: 14,
    color: '#6b7280',
  },
  plansList: {
    gap: 12,
  },
  planItem: {
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
  planItemHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  planItemInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  planItemIcon: {
    width: 40,
    height: 40,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  planItemDetails: {
    flex: 1,
  },
  planItemTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1f2937',
    marginBottom: 2,
  },
  planItemTime: {
    fontSize: 14,
    color: '#6b7280',
  },
  planItemCheck: {
    width: 24,
    height: 24,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  planItemCheckIncomplete: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: '#d1d5db',
  },
  planItemProgressContainer: {
    marginTop: 4,
  },
  planItemProgressBar: {
    width: '100%',
    height: 8,
    backgroundColor: '#e5e7eb',
    borderRadius: 4,
    overflow: 'hidden',
  },
  planItemProgressFill: {
    height: '100%',
    borderRadius: 4,
  },
  planItemProgressText: {
    fontSize: 12,
    color: '#6b7280',
    marginTop: 4,
  },

  // 快捷功能
  quickActionsSection: {
    marginHorizontal: 24,
    marginTop: 24,
    marginBottom: 24,
  },
  actionsTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: 16,
  },
  actionsGrid: {
    flexDirection: 'row',
    gap: 16,
  },
  actionItem: {
    flex: 1,
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
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
  actionItemIcon: {
    width: 48,
    height: 48,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  actionItemText: {
    flex: 1,
  },
  actionItemTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1f2937',
    marginBottom: 2,
  },
  actionItemSubtitle: {
    fontSize: 14,
    color: '#6b7280',
  },

  // 底部间距
  bottomSpacing: {
    height: 100,
  },
});

