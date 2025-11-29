

import React from 'react';
import { View, Text, TouchableOpacity, Modal } from 'react-native';
import { FontAwesome6 } from '@expo/vector-icons';
import styles from './styles';

interface LogoutModalProps {
  visible: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

const LogoutModal: React.FC<LogoutModalProps> = ({
  visible,
  onConfirm,
  onCancel,
}) => {
  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="fade"
      onRequestClose={onCancel}
    >
      <View style={styles.overlay}>
        <TouchableOpacity 
          style={styles.overlayTouchable} 
          onPress={onCancel}
          activeOpacity={1}
        />
        <View style={styles.container}>
          <View style={styles.content}>
            <View style={styles.iconContainer}>
              <FontAwesome6 name="right-from-bracket" size={24} color="#ef4444" />
            </View>
            <Text style={styles.title}>确认退出登录</Text>
            <Text style={styles.message}>退出后需要重新登录才能使用完整功能</Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity 
                style={styles.cancelButton} 
                onPress={onCancel}
                activeOpacity={0.7}
              >
                <Text style={styles.cancelButtonText}>取消</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                style={styles.confirmButton} 
                onPress={onConfirm}
                activeOpacity={0.7}
              >
                <Text style={styles.confirmButtonText}>退出登录</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default LogoutModal;

