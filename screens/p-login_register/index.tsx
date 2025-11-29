

import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Modal,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome6 } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import styles from './styles';

interface LoginRegisterScreenProps {}

const LoginRegisterScreen: React.FC<LoginRegisterScreenProps> = () => {
  const router = useRouter();
  
  // 表单状态
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [verificationCode, setVerificationCode] = useState<string>('');
  
  // UI状态
  const [isPhoneNumberValid, setIsPhoneNumberValid] = useState<boolean>(false);
  const [isVerificationCodeValid, setIsVerificationCodeValid] = useState<boolean>(false);
  const [isGetCodeButtonEnabled, setIsGetCodeButtonEnabled] = useState<boolean>(false);
  const [isLoginButtonEnabled, setIsLoginButtonEnabled] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isCodeSent, setIsCodeSent] = useState<boolean>(false);
  const [countdownSeconds, setCountdownSeconds] = useState<number>(0);
  
  // 错误状态
  const [phoneNumberError, setPhoneNumberError] = useState<string>('');
  const [verificationCodeError, setVerificationCodeError] = useState<string>('');
  
  // 引用
  const countdownTimerRef = useRef<number | null>(null);

  // 手机号验证
  const validatePhoneNumber = (phone: string): boolean => {
    const phoneRegex = /^1[3-9]\d{9}$/;
    return phoneRegex.test(phone);
  };

  // 验证码验证
  const validateVerificationCode = (code: string): boolean => {
    return code.length === 6 && /^\d{6}$/.test(code);
  };

  // 检查表单有效性
  const checkFormValidity = () => {
    setIsLoginButtonEnabled(isPhoneNumberValid && isVerificationCodeValid);
  };

  // 手机号输入处理
  const handlePhoneNumberChange = (text: string) => {
    // 只允许输入数字
    const numericText = text.replace(/\D/g, '');
    setPhoneNumber(numericText);
    
    if (numericText.length === 11) {
      const isValid = validatePhoneNumber(numericText);
      setIsPhoneNumberValid(isValid);
      setPhoneNumberError(isValid ? '' : '请输入正确的手机号');
      setIsGetCodeButtonEnabled(isValid);
    } else {
      setIsPhoneNumberValid(false);
      setPhoneNumberError('');
      setIsGetCodeButtonEnabled(false);
    }
  };

  // 验证码输入处理
  const handleVerificationCodeChange = (text: string) => {
    // 只允许输入数字
    const numericText = text.replace(/\D/g, '');
    setVerificationCode(numericText);
    
    if (numericText.length === 6) {
      const isValid = validateVerificationCode(numericText);
      setIsVerificationCodeValid(isValid);
      setVerificationCodeError(isValid ? '' : '请输入正确的验证码');
    } else {
      setIsVerificationCodeValid(false);
      setVerificationCodeError('');
    }
  };

  // 开始倒计时
  const startCountdown = () => {
    setCountdownSeconds(60);
    countdownTimerRef.current = setInterval(() => {
      setCountdownSeconds((prev) => {
        if (prev <= 1) {
          if (countdownTimerRef.current) {
            clearInterval(countdownTimerRef.current);
            countdownTimerRef.current = null;
          }
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  // 获取验证码
  const handleGetVerificationCode = () => {
    if (!isPhoneNumberValid) {
      setPhoneNumberError('请先输入正确的手机号');
      return;
    }
    
    setPhoneNumberError('');
    setVerificationCodeError('');
    setIsCodeSent(false);
    
    // 模拟发送验证码
    console.log('发送验证码到手机号:', phoneNumber);
    setIsCodeSent(true);
    startCountdown();
  };

  // 登录处理
  const handleLogin = () => {
    if (!isPhoneNumberValid) {
      setPhoneNumberError('请输入正确的手机号');
      return;
    }
    
    if (!isVerificationCodeValid) {
      setVerificationCodeError('请输入正确的验证码');
      return;
    }
    
    setIsLoading(true);
    
    // 模拟登录请求
    setTimeout(() => {
      console.log('登录成功，手机号:', phoneNumber, '验证码:', verificationCode);
      setIsLoading(false);
      
      // 跳转到首页
      router.replace('/p-home');
    }, 2000);
  };

  // 第三方登录处理
  const handleThirdPartyLogin = (platform: string) => {
    console.log(`${platform}登录`);
    setIsLoading(true);
    
    setTimeout(() => {
      setIsLoading(false);
      router.replace('/p-home');
    }, 1500);
  };

  // 协议链接处理
  const handleUserAgreement = () => {
    console.log('查看用户协议');
    Alert.alert('用户协议', '用户协议内容');
  };

  const handlePrivacyPolicy = () => {
    console.log('查看隐私政策');
    Alert.alert('隐私政策', '隐私政策内容');
  };

  // 清理定时器
  useEffect(() => {
    return () => {
      if (countdownTimerRef.current) {
        clearInterval(countdownTimerRef.current);
      }
    };
  }, []);

  // 检查表单有效性
  useEffect(() => {
    checkFormValidity();
  }, [isPhoneNumberValid, isVerificationCodeValid]);

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView 
        style={styles.keyboardAvoidingView}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <ScrollView 
          style={styles.scrollView}
          contentContainerStyle={styles.scrollViewContent}
          keyboardShouldPersistTaps="handled"
        >
          {/* 顶部Logo区域 */}
          <View style={styles.logoHeader}>
            <View style={styles.logoContainer}>
              {/* App Logo */}
              <LinearGradient
                colors={['#02f2ce', '#00f289']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.appLogo}
              >
                <FontAwesome6 name="dumbbell" size={48} color="#ffffff" />
              </LinearGradient>
              
              {/* App名称 */}
              <Text style={styles.appName}>SF-DE</Text>
              <Text style={styles.appSlogan}>让自律成为一种生活方式</Text>
            </View>

            {/* 登录表单 */}
            <View style={styles.loginFormContainer}>
              {/* 手机号输入 */}
              <View style={styles.inputGroup}>
                <Text style={styles.inputLabel}>手机号</Text>
                <View style={styles.inputWrapper}>
                  <FontAwesome6 name="mobile-screen" style={styles.inputIcon} />
                  <TextInput
                    style={styles.textInput}
                    placeholder="请输入手机号"
                    placeholderTextColor="#6b7280"
                    value={phoneNumber}
                    onChangeText={handlePhoneNumberChange}
                    keyboardType="numeric"
                    maxLength={11}
                    autoComplete="tel"
                  />
                </View>
                {phoneNumberError ? (
                  <Text style={styles.errorMessage}>{phoneNumberError}</Text>
                ) : null}
              </View>

              {/* 验证码输入 */}
              <View style={styles.inputGroup}>
                <Text style={styles.inputLabel}>验证码</Text>
                <View style={styles.verificationInputWrapper}>
                  <View style={styles.verificationInputContainer}>
                    <FontAwesome6 name="shield-halved" style={styles.inputIcon} />
                    <TextInput
                      style={styles.textInput}
                      placeholder="请输入验证码"
                      placeholderTextColor="#6b7280"
                      value={verificationCode}
                      onChangeText={handleVerificationCodeChange}
                      keyboardType="numeric"
                      maxLength={6}
                    />
                  </View>
                  <TouchableOpacity
                    style={[
                      styles.getCodeButton,
                      isGetCodeButtonEnabled && countdownSeconds === 0
                        ? styles.getCodeButtonEnabled
                        : styles.getCodeButtonDisabled
                    ]}
                    onPress={handleGetVerificationCode}
                    disabled={!isGetCodeButtonEnabled || countdownSeconds > 0}
                  >
                    <Text style={[
                      styles.getCodeButtonText,
                      isGetCodeButtonEnabled && countdownSeconds === 0
                        ? styles.getCodeButtonTextEnabled
                        : styles.getCodeButtonTextDisabled
                    ]}>
                      {countdownSeconds > 0 ? `${countdownSeconds}秒后重发` : '获取验证码'}
                    </Text>
                  </TouchableOpacity>
                </View>
                {verificationCodeError ? (
                  <Text style={styles.errorMessage}>{verificationCodeError}</Text>
                ) : null}
                {isCodeSent ? (
                  <Text style={styles.successMessage}>验证码已发送</Text>
                ) : null}
              </View>

              {/* 登录按钮 */}
              <TouchableOpacity
                style={[
                  styles.loginButton,
                  isLoginButtonEnabled ? styles.loginButtonEnabled : styles.loginButtonDisabled
                ]}
                onPress={handleLogin}
                disabled={!isLoginButtonEnabled}
              >
                <LinearGradient
                  colors={isLoginButtonEnabled ? ['#02f2ce', '#00f289'] : ['#d1d5db', '#d1d5db']}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                  style={styles.loginButtonGradient}
                >
                  <Text style={styles.loginButtonText}>登录/注册</Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>

            {/* 分割线 */}
            <View style={styles.divider}>
              <View style={styles.dividerLine} />
              <Text style={styles.dividerText}>或</Text>
              <View style={styles.dividerLine} />
            </View>

            {/* 第三方登录 */}
            <View style={styles.thirdPartyLoginContainer}>
              <View style={styles.thirdPartyButtonsRow}>
                <TouchableOpacity
                  style={[styles.thirdPartyButton, styles.wechatButton]}
                  onPress={() => handleThirdPartyLogin('微信')}
                >
                  <FontAwesome6 name="weixin" size={24} color="#ffffff" />
                  <Text style={styles.thirdPartyButtonText}>微信</Text>
                </TouchableOpacity>
                
                <TouchableOpacity
                  style={[styles.thirdPartyButton, styles.qqButton]}
                  onPress={() => handleThirdPartyLogin('QQ')}
                >
                  <FontAwesome6 name="qq" size={24} color="#ffffff" />
                  <Text style={styles.thirdPartyButtonText}>QQ</Text>
                </TouchableOpacity>
                
                <TouchableOpacity
                  style={[styles.thirdPartyButton, styles.appleButton]}
                  onPress={() => handleThirdPartyLogin('Apple')}
                >
                  <FontAwesome6 name="apple" size={24} color="#ffffff" />
                  <Text style={styles.thirdPartyButtonText}>Apple</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          {/* 底部协议 */}
          <View style={styles.agreementFooter}>
            <Text style={styles.agreementText}>
              登录即表示同意
              <Text style={styles.agreementLink} onPress={handleUserAgreement}>
                《用户协议》
              </Text>
              和
              <Text style={styles.agreementLink} onPress={handlePrivacyPolicy}>
                《隐私政策》
              </Text>
            </Text>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>

      {/* 加载提示 */}
      <Modal
        visible={isLoading}
        transparent={true}
        animationType="fade"
      >
        <View style={styles.loadingOverlay}>
          <View style={styles.loadingContainer}>
            <View style={styles.loadingSpinner} />
            <Text style={styles.loadingText}>登录中...</Text>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default LoginRegisterScreen;

