

import { StyleSheet, Platform } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f7ff',
  },
  
  // 顶部导航栏
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
  
  publishButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#02f2ce',
  },
  
  publishButtonDisabled: {
    backgroundColor: '#d1d5db',
  },
  
  publishButtonText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#ffffff',
  },
  
  // 滚动容器
  scrollView: {
    flex: 1,
  },
  
  scrollContent: {
    paddingHorizontal: 24,
    paddingVertical: 24,
    paddingBottom: 40,
  },
  
  // 表单区域
  formSection: {
    marginBottom: 24,
  },
  
  formLabel: {
    fontSize: 14,
    fontWeight: '500',
    color: '#1f2937',
    marginBottom: 8,
  },
  
  requiredMark: {
    color: '#ef4444',
  },
  
  optionalMark: {
    fontSize: 12,
    color: '#6b7280',
  },
  
  // 标题输入
  titleInput: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 16,
    fontSize: 16,
    color: '#1f2937',
    backgroundColor: '#ffffff',
  },
  
  // 内容输入
  contentInput: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 16,
    fontSize: 16,
    color: '#1f2937',
    backgroundColor: '#ffffff',
    minHeight: 120,
  },
  
  characterCounter: {
    fontSize: 12,
    color: '#6b7280',
    textAlign: 'right',
    marginTop: 4,
  },
  
  // 图片上传
  uploadArea: {
    borderWidth: 2,
    borderColor: '#d1d5db',
    borderStyle: 'dashed',
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  
  uploadAreaDisabled: {
    opacity: 0.6,
  },
  
  uploadPlaceholder: {
    alignItems: 'center',
  },
  
  uploadIconContainer: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: 'rgba(2, 242, 206, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  
  uploadTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1f2937',
    marginBottom: 4,
  },
  
  uploadSubtitle: {
    fontSize: 14,
    color: '#6b7280',
    textAlign: 'center',
  },
  
  // 图片预览
  imagePreviewContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
    marginTop: 16,
  },
  
  imagePreviewItem: {
    position: 'relative',
    width: 100,
    height: 100,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#f3f4f6',
  },
  
  previewImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  
  removeImageButton: {
    position: 'absolute',
    top: 8,
    right: 8,
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  // 标签选择
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  
  tagButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#f3f4f6',
  },
  
  tagButtonSelected: {
    backgroundColor: '#02f2ce',
  },
  
  tagButtonText: {
    fontSize: 14,
    color: '#6b7280',
  },
  
  tagButtonTextSelected: {
    color: '#ffffff',
    fontWeight: '500',
  },
  
  // 选中的标签
  selectedTagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginTop: 12,
  },
  
  selectedTag: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    backgroundColor: 'rgba(2, 242, 206, 0.1)',
  },
  
  selectedTagText: {
    fontSize: 12,
    color: '#02f2ce',
    marginRight: 6,
  },
  
  removeTagButton: {
    width: 16,
    height: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  // 温馨提示
  tipsSection: {
    backgroundColor: '#dbeafe',
    borderWidth: 1,
    borderColor: '#93c5fd',
    borderRadius: 16,
    padding: 16,
    marginTop: 8,
  },
  
  tipsContent: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  
  tipsIcon: {
    marginTop: 2,
    marginRight: 12,
  },
  
  tipsTextContainer: {
    flex: 1,
  },
  
  tipsTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#1e40af',
    marginBottom: 4,
  },
  
  tipsList: {
    gap: 2,
  },
  
  tipsItem: {
    fontSize: 12,
    color: '#1e40af',
    lineHeight: 16,
  },
  
  // 模态框
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
    padding: 24,
    alignItems: 'center',
    width: '100%',
    maxWidth: 320,
  },
  
  successIconContainer: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#dcfce7',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  
  errorIconContainer: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#fee2e2',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  
  modalTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: 8,
    textAlign: 'center',
  },
  
  modalMessage: {
    fontSize: 14,
    color: '#6b7280',
    textAlign: 'center',
    lineHeight: 20,
    marginBottom: 24,
  },
  
  modalButton: {
    width: '100%',
    paddingVertical: 12,
    borderRadius: 12,
    backgroundColor: '#02f2ce',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  modalButtonError: {
    backgroundColor: '#6b7280',
  },
  
  modalButtonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#ffffff',
  },
});

