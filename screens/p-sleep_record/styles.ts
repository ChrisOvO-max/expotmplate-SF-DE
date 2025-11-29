

import { StyleSheet, Platform } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f7ff',
  },
  scrollView: {
    flex: 1,
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
    backgroundColor: '#f3f4f6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1f2937',
  },
  headerPlaceholder: {
    width: 40,
  },
  dateSelectorSection: {
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
  dateSelector: {
    flexGrow: 0,
  },
  dateSelectorContent: {
    paddingBottom: 8,
  },
  dateItem: {
    width: 64,
    height: 64,
    borderRadius: 12,
    backgroundColor: '#f3f4f6',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  dateItemActive: {
    backgroundColor: '#02f2ce',
    transform: [{ scale: 1.1 }],
  },
  dateItemLabel: {
    fontSize: 12,
    color: '#6b7280',
    marginBottom: 2,
  },
  dateItemDate: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1f2937',
  },
  sleepOverviewSection: {
    marginHorizontal: 24,
    marginTop: 24,
  },
  sleepOverviewCard: {
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
  sleepOverviewHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1f2937',
  },
  qualityIndicator: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  qualityDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#00f289',
    marginRight: 8,
  },
  qualityLabel: {
    fontSize: 14,
    fontWeight: '500',
    color: '#00f289',
  },
  sleepMetricsGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  metricItem: {
    alignItems: 'center',
    flex: 1,
  },
  progressRingContainer: {
    position: 'relative',
    width: 64,
    height: 64,
    marginBottom: 8,
  },
  progressRing: {
    position: 'absolute',
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
  progressRingPercentage: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#00f289',
  },
  metricValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 4,
  },
  metricLabel: {
    fontSize: 12,
    color: '#6b7280',
    textAlign: 'center',
  },
  sleepTypesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sleepTypeItem: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  sleepTypeIcon: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: 'rgba(2, 242, 206, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  lightSleepIcon: {
    backgroundColor: 'rgba(2, 150, 242, 0.1)',
  },
  sleepTypeInfo: {
    flex: 1,
  },
  sleepTypeName: {
    fontSize: 14,
    fontWeight: '500',
    color: '#1f2937',
    marginBottom: 2,
  },
  sleepTypeDuration: {
    fontSize: 12,
    color: '#6b7280',
  },
  sleepTrendsSection: {
    marginHorizontal: 24,
    marginTop: 24,
  },
  sleepTrendsCard: {
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
  trendHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  trendTabs: {
    flexDirection: 'row',
  },
  trendTab: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 8,
    backgroundColor: '#f3f4f6',
    marginLeft: 8,
  },
  trendTabActive: {
    backgroundColor: '#02f2ce',
  },
  trendTabText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#6b7280',
  },
  trendTabTextActive: {
    color: '#1f2937',
  },
  trendChartContainer: {
    height: 160,
  },
  chartBarsContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    marginBottom: 16,
    paddingHorizontal: 4,
  },
  chartBar: {
    width: 24,
    backgroundColor: '#02f2ce',
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    minHeight: 8,
  },
  chartLabelsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 4,
  },
  chartLabel: {
    fontSize: 12,
    color: '#6b7280',
    textAlign: 'center',
    width: 24,
  },
  sleepAnalysisSection: {
    marginHorizontal: 24,
    marginTop: 24,
    marginBottom: 24,
  },
  sleepAnalysisCard: {
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
  analysisCardsContainer: {
    marginTop: 16,
  },
  analysisCard: {
    backgroundColor: 'rgba(0, 242, 137, 0.05)',
    borderWidth: 1,
    borderColor: 'rgba(0, 242, 137, 0.2)',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
  },
  analysisCardWarning: {
    backgroundColor: '#fef3c7',
    borderColor: '#fde68a',
  },
  analysisCardInfo: {
    backgroundColor: 'rgba(2, 150, 242, 0.05)',
    borderColor: 'rgba(2, 150, 242, 0.2)',
  },
  analysisCardContent: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  analysisIcon: {
    width: 32,
    height: 32,
    borderRadius: 8,
    backgroundColor: 'rgba(0, 242, 137, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
    marginTop: 4,
  },
  analysisIconWarning: {
    backgroundColor: '#fef3c7',
  },
  analysisIconInfo: {
    backgroundColor: 'rgba(2, 150, 242, 0.1)',
  },
  analysisTextContainer: {
    flex: 1,
  },
  analysisTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#1f2937',
    marginBottom: 4,
  },
  analysisDescription: {
    fontSize: 12,
    color: '#6b7280',
    lineHeight: 16,
  },
});

