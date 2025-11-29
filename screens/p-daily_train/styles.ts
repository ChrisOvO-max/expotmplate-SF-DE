

import { StyleSheet, Platform } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f7ff',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 24,
  },
  header: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 24,
    paddingVertical: 24,
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
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerTextContainer: {
    flex: 1,
  },
  pageTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 4,
  },
  pageSubtitle: {
    fontSize: 14,
    color: '#6b7280',
  },
  headerIconContainer: {
    width: 48,
    height: 48,
    backgroundColor: 'rgba(0, 242, 137, 0.1)',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  overviewSection: {
    marginHorizontal: 24,
    marginTop: 24,
  },
  overviewCard: {
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
  overviewGrid: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  overviewItem: {
    alignItems: 'center',
  },
  overviewNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#02f2ce',
    marginBottom: 4,
  },
  overviewLabel: {
    fontSize: 14,
    color: '#6b7280',
  },
  plansSection: {
    marginHorizontal: 24,
    marginTop: 24,
  },
  plansHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  plansTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1f2937',
  },
  plansCount: {
    fontSize: 14,
    color: '#6b7280',
  },
  plansList: {
    gap: 12,
  },
  librarySection: {
    marginHorizontal: 24,
    marginTop: 24,
    marginBottom: 24,
  },
  libraryButton: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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
  libraryContent: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  libraryIconContainer: {
    width: 48,
    height: 48,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  libraryTextContainer: {
    flex: 1,
  },
  libraryTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1f2937',
    marginBottom: 2,
  },
  librarySubtitle: {
    fontSize: 14,
    color: '#6b7280',
  },
});

