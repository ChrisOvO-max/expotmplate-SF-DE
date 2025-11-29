

import { StyleSheet, Platform } from 'react-native';

export default StyleSheet.create({
  container: {
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
  tabsContainer: {
    flexDirection: 'row',
    gap: 12,
  },
  filterTab: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  filterTabActive: {
    backgroundColor: '#02f2ce',
  },
  filterTabInactive: {
    backgroundColor: '#f3f4f6',
  },
  filterTabText: {
    fontSize: 14,
    fontWeight: '500',
  },
  filterTabTextActive: {
    color: '#1f2937',
  },
  filterTabTextInactive: {
    color: '#6b7280',
  },
});

