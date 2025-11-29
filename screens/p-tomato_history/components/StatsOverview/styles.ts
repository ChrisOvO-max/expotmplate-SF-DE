

import { StyleSheet, Platform } from 'react-native';

export default StyleSheet.create({
  container: {
    marginBottom: 24,
  },
  statsCard: {
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
  statsTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: 16,
  },
  statsGrid: {
    flexDirection: 'row',
    gap: 24,
  },
  statItem: {
    flex: 1,
    alignItems: 'center',
  },
  statValue: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#02f2ce',
    marginBottom: 4,
  },
  statValueSecondary: {
    color: '#00f289',
  },
  statLabel: {
    fontSize: 14,
    color: '#6b7280',
    marginBottom: 12,
  },
  statTarget: {
    fontSize: 12,
    color: '#6b7280',
    marginTop: 4,
  },
  chartSection: {
    marginTop: 24,
  },
  chartTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#1f2937',
    marginBottom: 12,
  },
  monthlyStatsGrid: {
    flexDirection: 'row',
    gap: 16,
    marginTop: 24,
  },
  monthlyStatCard: {
    flex: 1,
    backgroundColor: '#f9fafb',
    borderRadius: 12,
    padding: 16,
  },
  monthlyStatLabel: {
    fontSize: 14,
    color: '#6b7280',
    marginBottom: 4,
  },
  monthlyStatValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#02f2ce',
  },
  monthlyStatValueSecondary: {
    color: '#00f289',
  },
});

