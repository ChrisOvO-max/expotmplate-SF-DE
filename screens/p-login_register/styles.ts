

import { StyleSheet, Platform } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f7ff',
  },
  
  keyboardAvoidingView: {
    flex: 1,
  },
  
  scrollView: {
    flex: 1,
  },
  
  scrollViewContent: {
    flexGrow: 1,
    paddingHorizontal: 32,
  },
  
  // Logo头部区域
  logoHeader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 64,
    paddingBottom: 32,
  },
  
  logoContainer: {
    alignItems: 'center',
    marginBottom: 48,
  },
  
  appLogo: {
    width: 96,
    height: 96,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
    ...Platform.select({
      ios: {
        shadowColor: '#02f2ce',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 14,
      },
      android: {
        elevation: 8,
      },
    }),
  },
  
  appName: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 8,
  },
  
  appSlogan: {
    fontSize: 16,
    color: '#6b7280',
  },
  
  // 登录表单
  loginFormContainer: {
    width: '100%',
    maxWidth: 320,
  },
  
  inputGroup: {
    marginBottom: 24,
  },
  
  inputLabel: {
    fontSize: 14,
    fontWeight: '500',
    color: '#1f2937',
    marginBottom: 8,
  },
  
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 12,
    paddingHorizontal: 16,
    height: 48,
  },
  
  inputIcon: {
    fontSize: 16,
    color: '#6b7280',
    marginRight: 12,
  },
  
  textInput: {
    flex: 1,
    fontSize: 16,
    color: '#1f2937',
    height: '100%',
  },
  
  // 验证码输入
  verificationInputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  
  verificationInputContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 12,
    paddingHorizontal: 16,
    height: 48,
  },
  
  getCodeButton: {
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 12,
    minWidth: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  getCodeButtonEnabled: {
    backgroundColor: '#02f2ce',
  },
  
  getCodeButtonDisabled: {
    backgroundColor: '#f3f4f6',
  },
  
  getCodeButtonText: {
    fontSize: 14,
    fontWeight: '500',
  },
  
  getCodeButtonTextEnabled: {
    color: '#ffffff',
  },
  
  getCodeButtonTextDisabled: {
    color: '#6b7280',
  },
  
  // 登录按钮
  loginButton: {
    borderRadius: 12,
    overflow: 'hidden',
    marginTop: 8,
  },
  
  loginButtonEnabled: {
    ...Platform.select({
      ios: {
        shadowColor: '#02f2ce',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 14,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  
  loginButtonDisabled: {
    opacity: 0.6,
  },
  
  loginButtonGradient: {
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'center',
    height: 48,
  },
  
  loginButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#ffffff',
  },
  
  // 分割线
  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    maxWidth: 320,
    marginVertical: 32,
  },
  
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#d1d5db',
  },
  
  dividerText: {
    paddingHorizontal: 16,
    fontSize: 14,
    color: '#6b7280',
  },
  
  // 第三方登录
  thirdPartyLoginContainer: {
    width: '100%',
    maxWidth: 320,
  },
  
  thirdPartyButtonsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 24,
  },
  
  thirdPartyButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    borderRadius: 16,
    minHeight: 80,
  },
  
  wechatButton: {
    backgroundColor: '#22c55e',
  },
  
  qqButton: {
    backgroundColor: '#3b82f6',
  },
  
  appleButton: {
    backgroundColor: '#1f2937',
  },
  
  thirdPartyButtonText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#ffffff',
    marginTop: 8,
  },
  
  // 底部协议
  agreementFooter: {
    paddingBottom: 32,
    alignItems: 'center',
  },
  
  agreementText: {
    fontSize: 12,
    color: '#6b7280',
    textAlign: 'center',
    lineHeight: 18,
  },
  
  agreementLink: {
    color: '#02f2ce',
    textDecorationLine: 'underline',
  },
  
  // 错误和成功消息
  errorMessage: {
    color: '#ef4444',
    fontSize: 14,
    marginTop: 4,
  },
  
  successMessage: {
    color: '#10b981',
    fontSize: 14,
    marginTop: 4,
  },
  
  // 加载提示
  loadingOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  loadingContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
    minWidth: 120,
  },
  
  loadingSpinner: {
    width: 32,
    height: 32,
    borderWidth: 4,
    borderColor: '#02f2ce',
    borderTopColor: 'transparent',
    borderRadius: 16,
    marginBottom: 12,
  },
  
  loadingText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1f2937',
  },
});

