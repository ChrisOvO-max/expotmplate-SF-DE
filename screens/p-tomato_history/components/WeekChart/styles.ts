

import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    height: 96,
    gap: 8,
  },
  chartItem: {
    flex: 1,
    alignItems: 'center',
    height: '100%',
    justifyContent: 'flex-end',
  },
  chartBar: {
    width: 32,
    backgroundColor: '#02f2ce',
    borderRadius: 4,
    marginBottom: 8,
    minHeight: 4,
  },
  chartLabel: {
    fontSize: 12,
    color: '#6b7280',
    textAlign: 'center',
  },
});

