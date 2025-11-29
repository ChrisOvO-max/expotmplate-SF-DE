

import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    height: 160,
  },
  chartContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
    marginBottom: 16,
  },
  barWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginHorizontal: 2,
  },
  barTouchable: {
    width: 32,
    marginBottom: 8,
  },
  bar: {
    width: '100%',
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    minHeight: 8,
  },
  label: {
    fontSize: 12,
    color: '#6b7280',
    textAlign: 'center',
  },
});

