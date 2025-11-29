

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
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1f2937',
  },
  valueContainer: {
    alignItems: 'flex-end',
  },
  currentValueRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  currentValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#02f2ce',
  },
  unit: {
    fontSize: 14,
    fontWeight: 'normal',
    color: '#1f2937',
  },
  statusBadge: {
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  statusNormal: {
    backgroundColor: '#dcfce7',
  },
  statusOverweight: {
    backgroundColor: '#fef3c7',
  },
  statusUnderweight: {
    backgroundColor: '#dbeafe',
  },
  statusObese: {
    backgroundColor: '#fee2e2',
  },
  statusText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#166534',
  },
  changeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  changeIcon: {
    marginRight: 4,
  },
  changeText: {
    fontSize: 14,
    color: '#10b981',
  },
  chartContainer: {
    alignItems: 'center',
  },
  chart: {
    borderRadius: 16,
  },
});

