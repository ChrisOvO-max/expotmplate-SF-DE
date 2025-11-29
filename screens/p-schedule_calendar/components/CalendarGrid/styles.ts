

import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  weekdaysContainer: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  weekdayCell: {
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
    width: '14.28%', // 7 days per row
    aspectRatio: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  calendarDayToday: {
    backgroundColor: '#02f2ce',
    borderRadius: 20,
    margin: 2,
  },
  calendarDaySelected: {
    backgroundColor: '#0296f2e6',
    borderRadius: 20,
    margin: 2,
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
  calendarDayTextSelected: {
    color: '#ffffff',
    fontWeight: '600',
  },
  planIndicator: {
    position: 'absolute',
    bottom: 2,
    width: 4,
    height: 4,
    backgroundColor: '#00f289',
    borderRadius: 2,
  },
});

