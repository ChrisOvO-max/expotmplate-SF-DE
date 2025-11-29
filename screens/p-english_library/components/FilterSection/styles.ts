

import { StyleSheet, Platform } from 'react-native';

export default StyleSheet.create({
  container: {
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
  filterGroup: {
    marginBottom: 24,
  },
  filterLabel: {
    fontSize: 14,
    fontWeight: '500',
    color: '#6b7280',
    marginBottom: 12,
  },
  filterScrollContent: {
    paddingRight: 12,
  },
  filterTab: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#f3f4f6',
    marginRight: 12,
  },
  filterTabActive: {
    backgroundColor: '#02f2ce',
  },
  filterTabText: {
    fontSize: 14,
    color: '#6b7280',
  },
  filterTabTextActive: {
    color: '#1f2937',
    fontWeight: '600',
  },
});

