

import { StyleSheet, Platform } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f7ff',
  },
  
  // 顶部导航栏
  header: {
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingVertical: 16,
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
  
  // 滚动视图
  scrollView: {
    flex: 1,
  },
  
  // App信息部分
  appInfoSection: {
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 32,
  },
  appLogoContainer: {
    marginBottom: 24,
  },
  appLogo: {
    width: 96,
    height: 96,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    ...Platform.select({
      ios: {
        shadowColor: '#02f2ce',
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.3,
        shadowRadius: 25,
      },
      android: {
        elevation: 8,
      },
    }),
  },
  appName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 8,
  },
  appSlogan: {
    fontSize: 16,
    color: '#6b7280',
    marginBottom: 16,
  },
  versionBadge: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  versionText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '500',
  },
  
  // 卡片样式
  sectionCard: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    marginHorizontal: 24,
    marginBottom: 32,
    ...Platform.select({
      ios: {
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 2,
      },
    }),
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 16,
  },
  sectionHeaderWithBorder: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f3f4f6',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1f2937',
    marginLeft: 8,
  },
  sectionContent: {
    fontSize: 16,
    color: '#6b7280',
    lineHeight: 24,
    paddingHorizontal: 24,
    paddingBottom: 24,
  },
  
  // 公司信息
  companyInfoContainer: {
    paddingHorizontal: 24,
    paddingBottom: 24,
  },
  companyInfoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  companyInfoLabel: {
    fontSize: 16,
    color: '#6b7280',
    width: 80,
  },
  companyInfoValue: {
    fontSize: 16,
    color: '#1f2937',
    flex: 1,
  },
  
  // 信息项
  infoItemsContainer: {
    backgroundColor: '#ffffff',
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
  infoItemText: {
    fontSize: 16,
    color: '#1f2937',
  },
  infoItemValue: {
    fontSize: 16,
    color: '#6b7280',
  },
  infoItemSeparator: {
    height: 1,
    backgroundColor: '#f3f4f6',
    marginLeft: 24,
  },
  
  // 版权信息
  copyrightSection: {
    alignItems: 'center',
    paddingVertical: 32,
    paddingHorizontal: 24,
  },
  copyrightText: {
    fontSize: 14,
    color: '#6b7280',
    marginBottom: 8,
  },
  copyrightSubText: {
    fontSize: 12,
    color: '#6b7280',
  },
  
  // 弹窗样式
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  modalContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    width: '100%',
    maxWidth: 400,
    maxHeight: 400,
    overflow: 'hidden',
    ...Platform.select({
      ios: {
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.25,
        shadowRadius: 12,
      },
      android: {
        elevation: 8,
      },
    }),
  },
  modalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1f2937',
  },
  modalCloseButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContent: {
    maxHeight: 320,
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
  modalContentContainer: {
    paddingBottom: 16,
  },
  modalContentTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1f2937',
    marginBottom: 8,
  },
  modalContentDate: {
    fontSize: 14,
    color: '#6b7280',
    marginBottom: 12,
  },
  modalContentText: {
    fontSize: 14,
    color: '#6b7280',
    lineHeight: 20,
    marginBottom: 16,
  },
});

