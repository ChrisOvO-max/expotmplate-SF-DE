

import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 24,
    gap: 8,
  },
  tab: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },
  tabActive: {
    backgroundColor: '#02f2ce',
  },
  tabInactive: {
    backgroundColor: '#f3f4f6',
  },
  tabText: {
    fontSize: 14,
    fontWeight: '500',
  },
  tabTextActive: {
    color: '#1f2937',
    fontWeight: '600',
  },
  tabTextInactive: {
    color: '#6b7280',
  },
});

