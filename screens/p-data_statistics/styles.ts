

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
    borderRadius: 24,
    backgroundColor: 'rgba(2, 242, 206, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  overviewSection: {
    marginHorizontal: 24,
    marginTop: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: 16,
  },
  overviewGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
  },
  dataCard: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 16,
    width: '47%',
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
  dataCardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  dataCardIcon: {
    width: 40,
    height: 40,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  primaryIconBg: {
    backgroundColor: 'rgba(2, 242, 206, 0.1)',
  },
  secondaryIconBg: {
    backgroundColor: 'rgba(0, 242, 137, 0.1)',
  },
  accentIconBg: {
    backgroundColor: 'rgba(2, 150, 242, 0.1)',
  },
  purpleIconBg: {
    backgroundColor: 'rgba(139, 92, 246, 0.1)',
  },
  pinkIconBg: {
    backgroundColor: 'rgba(236, 72, 153, 0.1)',
  },
  orangeIconBg: {
    backgroundColor: 'rgba(249, 115, 22, 0.1)',
  },
  yellowIconBg: {
    backgroundColor: 'rgba(234, 179, 8, 0.1)',
  },
  blueIconBg: {
    backgroundColor: 'rgba(59, 130, 246, 0.1)',
  },
  greenIconBg: {
    backgroundColor: 'rgba(16, 185, 129, 0.1)',
  },
  indigoIconBg: {
    backgroundColor: 'rgba(99, 102, 241, 0.1)',
  },
  dataCardBadge: {
    backgroundColor: '#dcfce7',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  dataCardBadgeText: {
    fontSize: 12,
    color: '#16a34a',
    fontWeight: '500',
  },
  dataCardValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 4,
  },
  dataCardLabel: {
    fontSize: 14,
    color: '#6b7280',
  },
  modulesSection: {
    marginHorizontal: 24,
    marginTop: 24,
    marginBottom: 24,
  },
  modulesList: {
    gap: 12,
  },
  moduleItem: {
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
  moduleItemContent: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  moduleItemIcon: {
    width: 48,
    height: 48,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  moduleItemTextContainer: {
    flex: 1,
  },
  moduleItemTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1f2937',
    marginBottom: 2,
  },
  moduleItemSubtitle: {
    fontSize: 14,
    color: '#6b7280',
  },
  aiSection: {
    marginHorizontal: 24,
    marginBottom: 24,
  },
  aiGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
  },
  aiCard: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 16,
    width: '30%',
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
  aiCardIcon: {
    width: 48,
    height: 48,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  aiCardTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1f2937',
    marginBottom: 4,
  },
  aiCardSubtitle: {
    fontSize: 14,
    color: '#6b7280',
  },
});

