

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
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1f2937',
  },
  headerPlaceholder: {
    width: 40,
  },
  scrollView: {
    flex: 1,
  },
  section: {
    marginHorizontal: 24,
    marginTop: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: 16,
  },
  periodSelector: {
    marginHorizontal: 24,
    marginTop: 24,
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
  periodTabsContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  periodTab: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 12,
    backgroundColor: '#f3f4f6',
    alignItems: 'center',
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
  completionCard: {
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
  completionStats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  statItem: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#02f2ce',
  },
  statValueSecondary: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#00f289',
  },
  statValueAccent: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#0296f2e6',
  },
  statLabel: {
    fontSize: 12,
    color: '#6b7280',
    marginTop: 4,
  },
  progressBarContainer: {
    width: '100%',
    height: 12,
    backgroundColor: '#e5e7eb',
    borderRadius: 6,
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    borderRadius: 6,
  },
  metricsCard: {
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
  learningTrend: {
    marginBottom: 24,
  },
  trendHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  trendTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1f2937',
  },
  trendImprovement: {
    fontSize: 14,
    color: '#00f289',
  },
  chartContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    height: 80,
    gap: 8,
    marginBottom: 8,
  },
  chartBarContainer: {
    flex: 1,
    height: '100%',
    justifyContent: 'flex-end',
  },
  chartBar: {
    width: '100%',
    borderRadius: 4,
    minHeight: 4,
  },
  chartLabels: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  chartLabel: {
    fontSize: 10,
    color: '#6b7280',
    flex: 1,
    textAlign: 'center',
  },
  otherMetrics: {
    flexDirection: 'row',
    gap: 16,
  },
  metricCard: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f9fafb',
    borderRadius: 12,
  },
  metricValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#02f2ce',
  },
  metricValueSecondary: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#00f289',
  },
  metricLabel: {
    fontSize: 12,
    color: '#6b7280',
    marginTop: 4,
  },
  metricImprovement: {
    fontSize: 10,
    color: '#00f289',
    marginTop: 4,
  },
  problemsContainer: {
    gap: 12,
  },
  problemCard: {
    flexDirection: 'row',
    backgroundColor: '#fef3c7',
    borderLeftWidth: 4,
    borderLeftColor: '#f59e0b',
    borderRadius: 12,
    padding: 16,
  },
  problemIconContainer: {
    width: 32,
    height: 32,
    backgroundColor: '#fed7aa',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
    marginTop: 2,
  },
  problemContent: {
    flex: 1,
  },
  problemTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1f2937',
    marginBottom: 4,
  },
  problemDescription: {
    fontSize: 14,
    color: '#6b7280',
    lineHeight: 20,
  },
  improvementCard: {
    flexDirection: 'row',
    backgroundColor: '#dbeafe',
    borderLeftWidth: 4,
    borderLeftColor: '#3b82f6',
    borderRadius: 12,
    padding: 16,
  },
  improvementIconContainer: {
    width: 32,
    height: 32,
    backgroundColor: '#bfdbfe',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
    marginTop: 2,
  },
  improvementContent: {
    flex: 1,
  },
  improvementTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1f2937',
    marginBottom: 4,
  },
  improvementDescription: {
    fontSize: 14,
    color: '#6b7280',
    lineHeight: 20,
  },
  questionnaireCard: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 24,
    marginBottom: 24,
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
  questionContainer: {
    marginBottom: 16,
  },
  questionLabel: {
    fontSize: 14,
    fontWeight: '500',
    color: '#1f2937',
    marginBottom: 8,
  },
  questionInput: {
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 12,
    padding: 12,
    fontSize: 14,
    color: '#1f2937',
    minHeight: 80,
  },
  generateButton: {
    marginTop: 8,
    borderRadius: 12,
    overflow: 'hidden',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.15,
        shadowRadius: 8,
      },
      android: {
        elevation: 6,
      },
    }),
  },
  generateButtonGradient: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    gap: 8,
  },
  generateButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#ffffff',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  modalContent: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    width: '100%',
    maxWidth: 400,
    maxHeight: '80%',
    overflow: 'hidden',
  },
  modalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1f2937',
  },
  closeButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  reportContent: {
    flex: 1,
    padding: 24,
  },
  reportSummary: {
    backgroundColor: '#f9fafb',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
  },
  reportSummaryTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1f2937',
    marginBottom: 8,
  },
  reportSummaryText: {
    fontSize: 14,
    color: '#6b7280',
  },
  reportSection: {
    marginBottom: 16,
  },
  reportSectionTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1f2937',
    marginBottom: 8,
  },
  reportSectionText: {
    fontSize: 14,
    color: '#6b7280',
    lineHeight: 20,
  },
  reportHighlight: {
    backgroundColor: '#f0fdf4',
    borderRadius: 12,
    padding: 16,
  },
  reportHighlightHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    gap: 8,
  },
  reportHighlightTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#059669',
  },
  reportHighlightText: {
    fontSize: 14,
    color: '#047857',
    lineHeight: 20,
  },
  modalActions: {
    flexDirection: 'row',
    padding: 24,
    gap: 12,
    borderTopWidth: 1,
    borderTopColor: '#e5e7eb',
  },
  saveButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f3f4f6',
    borderRadius: 12,
    paddingVertical: 12,
    gap: 8,
  },
  saveButtonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1f2937',
  },
  shareButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#02f2ce',
    borderRadius: 12,
    paddingVertical: 12,
    gap: 8,
  },
  shareButtonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#ffffff',
  },
});

