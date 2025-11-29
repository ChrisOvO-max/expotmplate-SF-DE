

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
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1f2937',
  },
  headerPlaceholder: {
    width: 40,
    height: 40,
  },
  categorySection: {
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
  categoryTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: 16,
  },
  categoryList: {
    gap: 12,
  },
  categoryItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#e5e7eb',
    backgroundColor: '#ffffff',
  },
  categoryItemActive: {
    backgroundColor: '#02f2ce',
    borderColor: '#02f2ce',
  },
  categoryItemContent: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  categoryIconContainer: {
    width: 48,
    height: 48,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  categoryTextContainer: {
    flex: 1,
  },
  categoryItemTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1f2937',
    marginBottom: 4,
  },
  categoryItemDescription: {
    fontSize: 14,
    color: '#6b7280',
  },
  adviceContentSection: {
    marginHorizontal: 24,
    marginTop: 24,
    marginBottom: 24,
  },
  adviceContentCard: {
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
  adviceContentHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  adviceContentIconContainer: {
    width: 64,
    height: 64,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  adviceContentHeaderText: {
    flex: 1,
  },
  adviceContentTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 4,
  },
  adviceContentSubtitle: {
    fontSize: 14,
    color: '#6b7280',
  },
  adviceContentBody: {
    gap: 16,
  },
  adviceSection: {
    padding: 16,
    borderRadius: 8,
    borderLeftWidth: 4,
  },
  sectionSuccess: {
    backgroundColor: '#f0fdf4',
    borderLeftColor: '#16a34a',
  },
  sectionWarning: {
    backgroundColor: '#fffbeb',
    borderLeftColor: '#d97706',
  },
  sectionInfo: {
    backgroundColor: '#eff6ff',
    borderLeftColor: '#2563eb',
  },
  adviceSectionTitle: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 8,
  },
  sectionTitleSuccess: {
    color: '#15803d',
  },
  sectionTitleWarning: {
    color: '#92400e',
  },
  sectionTitleInfo: {
    color: '#1e40af',
  },
  adviceSectionIcon: {
    marginRight: 8,
  },
  adviceSectionDescription: {
    fontSize: 14,
    lineHeight: 20,
  },
  sectionDescriptionSuccess: {
    color: '#166534',
  },
  sectionDescriptionWarning: {
    color: '#92400e',
  },
  sectionDescriptionInfo: {
    color: '#1e40af',
  },
});

