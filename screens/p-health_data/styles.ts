

import { StyleSheet, Platform } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f7ff',
  },
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
  backIcon: {
    fontSize: 18,
    color: '#1f2937',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1f2937',
  },
  headerPlaceholder: {
    width: 40,
  },
  scrollView: {
    flex: 1,
  },
  periodSelectorContainer: {
    marginHorizontal: 24,
    marginTop: 24,
  },
  periodSelector: {
    flexDirection: 'row',
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
  periodTab: {
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginHorizontal: 4,
  },
  periodTabActive: {
    backgroundColor: '#02f2ce',
  },
  periodTabText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#6b7280',
  },
  periodTabTextActive: {
    color: '#1f2937',
    fontWeight: '600',
  },
  sectionContainer: {
    marginHorizontal: 24,
    marginTop: 24,
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
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  sectionTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sectionIcon: {
    fontSize: 20,
    color: '#0296f2e6',
    marginRight: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1f2937',
  },
  sectionUnit: {
    fontSize: 14,
    color: '#6b7280',
  },
  chartContainer: {
    height: 200,
    marginBottom: 24,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statItem: {
    alignItems: 'center',
    flex: 1,
  },
  statValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0296f2e6',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 14,
    color: '#6b7280',
  },
  overviewContainer: {
    marginHorizontal: 24,
    marginTop: 24,
    marginBottom: 24,
  },
  overviewGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  overviewCard: {
    width: '48%',
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
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
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  cardIcon: {
    width: 40,
    height: 40,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  waterCardIcon: {
    backgroundColor: 'rgba(2, 150, 242, 0.1)',
  },
  sleepCardIcon: {
    backgroundColor: 'rgba(0, 242, 137, 0.1)',
  },
  avgCardIcon: {
    backgroundColor: 'rgba(2, 242, 206, 0.1)',
  },
  goalCardIcon: {
    backgroundColor: 'rgba(139, 92, 246, 0.1)',
  },
  waterIcon: {
    fontSize: 16,
    color: '#0296f2e6',
  },
  sleepIcon: {
    fontSize: 16,
    color: '#00f289',
  },
  avgIcon: {
    fontSize: 16,
    color: '#02f2ce',
  },
  goalIcon: {
    fontSize: 16,
    color: '#8b5cf6',
  },
  statusBadgeCompleted: {
    backgroundColor: '#dcfce7',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  statusBadgeGood: {
    backgroundColor: '#fef3c7',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  statusBadgeTrend: {
    backgroundColor: '#dbeafe',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  statusBadgeText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#166534',
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: 4,
  },
  cardValueContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
    marginBottom: 8,
  },
  cardValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0296f2e6',
  },
  cardValueUnit: {
    fontSize: 14,
    color: '#6b7280',
    marginLeft: 4,
  },
  progressBarContainer: {
    width: '100%',
    height: 8,
    backgroundColor: '#e5e7eb',
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressBar: {
    width: '100%',
    height: '100%',
    backgroundColor: '#0296f2e6',
  },
  cardSubtext: {
    fontSize: 12,
    color: '#6b7280',
    marginTop: 4,
  },
  cardSubtextCenter: {
    fontSize: 12,
    color: '#6b7280',
    textAlign: 'center',
    marginTop: 8,
  },
  cardDetails: {
    marginTop: 4,
  },
  cardDetailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  cardDetailLabel: {
    fontSize: 14,
    color: '#6b7280',
  },
  cardDetailValue: {
    fontSize: 14,
    fontWeight: '500',
    color: '#0296f2e6',
  },
  progressRingContainer: {
    position: 'relative',
    width: 64,
    height: 64,
    alignSelf: 'center',
    marginVertical: 8,
  },
  progressRingText: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  progressRingValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#8b5cf6',
  },
});

