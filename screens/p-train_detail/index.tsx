

import React, { useState, useCallback } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Modal, TextInput, Alert, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { FontAwesome5, FontAwesome6 } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './styles';

interface Exercise {
  id: number;
  name: string;
  targetMuscles: string;
  icon: string;
  sets: number;
  repsPerSet: number;
  restTime: number;
  weight?: number;
  completed: boolean;
  recordedData?: {
    setsCompleted: number;
    repsPerSet: string;
    totalTime: number;
  };
}

interface RecordFormData {
  setsCompleted: number;
  durationPerSet: number;
  totalTime: number;
  intensity: string;
  notes: string;
}

const TrainDetailScreen: React.FC = () => {
  const router = useRouter();
  const params = useLocalSearchParams();
  
  const [isRecordModalVisible, setIsRecordModalVisible] = useState(false);
  const [currentExerciseId, setCurrentExerciseId] = useState<number | null>(null);
  const [recordFormData, setRecordFormData] = useState<RecordFormData>({
    setsCompleted: 0,
    durationPerSet: 60,
    totalTime: 0,
    intensity: 'moderate',
    notes: '',
  });

  const [exercises, setExercises] = useState<Exercise[]>([
    {
      id: 1,
      name: '俯卧撑',
      targetMuscles: '胸部 · 三头肌',
      icon: 'dumbbell',
      sets: 3,
      repsPerSet: 15,
      restTime: 60,
      completed: true,
      recordedData: {
        setsCompleted: 3,
        repsPerSet: '15/16/14',
        totalTime: 15,
      },
    },
    {
      id: 2,
      name: '引体向上',
      targetMuscles: '背部 · 二头肌',
      icon: 'user',
      sets: 3,
      repsPerSet: 8,
      restTime: 90,
      completed: true,
      recordedData: {
        setsCompleted: 3,
        repsPerSet: '8/7/6',
        totalTime: 20,
      },
    },
    {
      id: 3,
      name: '平板支撑',
      targetMuscles: '核心 · 腹部',
      icon: 'clock',
      sets: 3,
      repsPerSet: 60,
      restTime: 30,
      completed: false,
    },
    {
      id: 4,
      name: '哑铃弯举',
      targetMuscles: '二头肌 · 前臂',
      icon: 'dumbbell',
      sets: 3,
      repsPerSet: 12,
      restTime: 45,
      weight: 10,
      completed: false,
    },
    {
      id: 5,
      name: '三头肌下压',
      targetMuscles: '三头肌',
      icon: 'user',
      sets: 3,
      repsPerSet: 15,
      restTime: 45,
      weight: 15,
      completed: false,
    },
  ]);

  const completedExercisesCount = exercises.filter(ex => ex.completed).length;
  const totalExercisesCount = exercises.length;
  const completionPercentage = (completedExercisesCount / totalExercisesCount) * 100;

  const handleBackPress = useCallback(() => {
    if (router.canGoBack()) {
      router.back();
    }
  }, [router]);

  const handleRecordExercisePress = useCallback((exerciseId: number) => {
    const exercise = exercises.find(ex => ex.id === exerciseId);
    if (!exercise) return;

    setCurrentExerciseId(exerciseId);
    setRecordFormData({
      setsCompleted: 0,
      durationPerSet: exercise.repsPerSet,
      totalTime: 0,
      intensity: 'moderate',
      notes: '',
    });
    setIsRecordModalVisible(true);
  }, [exercises]);

  const handleCloseModal = useCallback(() => {
    setIsRecordModalVisible(false);
    setCurrentExerciseId(null);
  }, []);

  const handleSaveRecord = useCallback(() => {
    if (!currentExerciseId) return;

    const updatedExercises = exercises.map(exercise => {
      if (exercise.id === currentExerciseId) {
        return {
          ...exercise,
          completed: true,
          recordedData: {
            setsCompleted: recordFormData.setsCompleted,
            repsPerSet: recordFormData.durationPerSet.toString(),
            totalTime: recordFormData.totalTime,
          },
        };
      }
      return exercise;
    });

    setExercises(updatedExercises);
    handleCloseModal();
    
    Alert.alert('成功', '训练数据已保存');
  }, [currentExerciseId, exercises, recordFormData, handleCloseModal]);

  const handleCompleteTraining = useCallback(() => {
    if (completedExercisesCount === totalExercisesCount) {
      const planId = params.planId || 'plan1';
      router.push(`/p-checkin_success?planId=${planId}`);
    }
  }, [completedExercisesCount, totalExercisesCount, params.planId, router]);

  const renderExerciseItem = useCallback((exercise: Exercise) => {
    const isDurationBased = exercise.name.includes('平板支撑');
    
    return (
      <View key={exercise.id} style={[
        styles.exerciseItem,
        exercise.completed && styles.exerciseItemCompleted
      ]}>
        <View style={styles.exerciseHeader}>
          <View style={styles.exerciseInfo}>
            <View style={[
              styles.exerciseIconContainer,
              exercise.completed ? styles.exerciseIconContainerCompleted : styles.exerciseIconContainerPending
            ]}>
              <FontAwesome6 
                name={exercise.icon as any} 
                style={[
                  styles.exerciseIcon,
                  exercise.completed ? styles.exerciseIconCompleted : styles.exerciseIconPending
                ]} 
              />
            </View>
            <View style={styles.exerciseDetails}>
              <Text style={styles.exerciseName}>{exercise.name}</Text>
              <Text style={styles.exerciseMuscles}>{exercise.targetMuscles}</Text>
            </View>
          </View>
          {exercise.completed ? (
            <View style={styles.completedIndicator}>
              <Text style={styles.completedText}>已完成</Text>
              <FontAwesome5 name="check-circle" style={styles.completedIcon} />
            </View>
          ) : (
            <TouchableOpacity
              style={styles.recordButton}
              onPress={() => handleRecordExercisePress(exercise.id)}
              activeOpacity={0.7}
            >
              <FontAwesome6 name="plus" style={styles.recordButtonIcon} />
            </TouchableOpacity>
          )}
        </View>

        <View style={styles.exerciseParameters}>
          <View style={styles.parameterItem}>
            <Text style={styles.parameterLabel}>组数</Text>
            <Text style={styles.parameterValue}>{exercise.sets}组</Text>
          </View>
          <View style={styles.parameterItem}>
            <Text style={styles.parameterLabel}>
              {isDurationBased ? '每组时长' : '每组次数'}
            </Text>
            <Text style={styles.parameterValue}>
              {isDurationBased ? `${exercise.repsPerSet}秒` : `${exercise.repsPerSet}次`}
            </Text>
          </View>
          {exercise.weight && (
            <View style={styles.parameterItem}>
              <Text style={styles.parameterLabel}>重量</Text>
              <Text style={styles.parameterValue}>{exercise.weight}kg</Text>
            </View>
          )}
          <View style={styles.parameterItem}>
            <Text style={styles.parameterLabel}>休息</Text>
            <Text style={styles.parameterValue}>{exercise.restTime}秒</Text>
          </View>
        </View>

        <View style={styles.recordedDataContainer}>
          {exercise.completed && exercise.recordedData ? (
            <>
              <Text style={styles.recordedDataLabel}>已记录数据</Text>
              <View style={styles.recordedDataGrid}>
                <View style={styles.recordedDataItem}>
                  <Text style={styles.recordedDataValue}>{exercise.recordedData.setsCompleted}组</Text>
                  <Text style={styles.recordedDataLabelSmall}>完成组数</Text>
                </View>
                <View style={styles.recordedDataItem}>
                  <Text style={styles.recordedDataValue}>{exercise.recordedData.repsPerSet}</Text>
                  <Text style={styles.recordedDataLabelSmall}>
                    {isDurationBased ? '每组时长' : '每组次数'}
                  </Text>
                </View>
                <View style={styles.recordedDataItem}>
                  <Text style={styles.recordedDataValue}>{exercise.recordedData.totalTime}分钟</Text>
                  <Text style={styles.recordedDataLabelSmall}>总用时</Text>
                </View>
              </View>
            </>
          ) : (
            <>
              <Text style={styles.recordedDataLabel}>待记录数据</Text>
              <Text style={styles.recordedDataPlaceholder}>点击记录按钮开始记录</Text>
            </>
          )}
        </View>
      </View>
    );
  }, [handleRecordExercisePress]);

  const currentExercise = currentExerciseId ? exercises.find(ex => ex.id === currentExerciseId) : null;

  return (
    <SafeAreaView style={styles.container}>
      {/* 顶部导航 */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={handleBackPress}
          activeOpacity={0.7}
        >
          <FontAwesome6 name="arrow-left" style={styles.backButtonIcon} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>晨练 - 上肢训练</Text>
        <View style={styles.headerPlaceholder} />
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* 训练概览 */}
        <View style={styles.overviewSection}>
          <View style={styles.overviewCard}>
            <View style={styles.overviewHeader}>
              <Text style={styles.overviewTitle}>训练概览</Text>
              <View style={styles.completionStatus}>
                <View style={styles.statusDot} />
                <Text style={styles.statusText}>
                  {completedExercisesCount}/{totalExercisesCount} 已完成
                </Text>
              </View>
            </View>

            {/* 进度条 */}
            <View style={styles.progressBarContainer}>
              <View style={styles.progressBarBackground}>
                <LinearGradient
                  colors={['#02f2ce', '#00f289']}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  style={[styles.progressBarFill, { width: `${completionPercentage}%` }]}
                />
              </View>
            </View>

            {/* 统计信息 */}
            <View style={styles.statisticsGrid}>
              <View style={styles.statisticsItem}>
                <Text style={styles.statisticsValue}>{totalExercisesCount}</Text>
                <Text style={styles.statisticsLabel}>总项目</Text>
              </View>
              <View style={styles.statisticsItem}>
                <Text style={[styles.statisticsValue, styles.statisticsValueCompleted]}>
                  {completedExercisesCount}
                </Text>
                <Text style={styles.statisticsLabel}>已完成</Text>
              </View>
              <View style={styles.statisticsItem}>
                <Text style={[styles.statisticsValue, styles.statisticsValueTime]}>45</Text>
                <Text style={styles.statisticsLabel}>预计分钟</Text>
              </View>
            </View>
          </View>
        </View>

        {/* 训练项目列表 */}
        <View style={styles.exerciseListSection}>
          <Text style={styles.sectionTitle}>训练项目</Text>
          {exercises.map(renderExerciseItem)}
        </View>

        {/* 底部间距 */}
        <View style={styles.bottomSpacing} />
      </ScrollView>

      {/* 底部完成按钮 */}
      <View style={styles.bottomActionContainer}>
        <TouchableOpacity
          style={[
            styles.completeButton,
            completedExercisesCount === totalExercisesCount 
              ? styles.completeButtonEnabled 
              : styles.completeButtonDisabled
          ]}
          onPress={handleCompleteTraining}
          disabled={completedExercisesCount !== totalExercisesCount}
          activeOpacity={0.8}
        >
          <LinearGradient
            colors={completedExercisesCount === totalExercisesCount ? ['#02f2ce', '#00f289'] : ['#d1d5db', '#d1d5db']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.completeButtonGradient}
          >
            <FontAwesome6 name="check" style={styles.completeButtonIcon} />
            <Text style={styles.completeButtonText}>完成训练</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>

      {/* 记录数据弹窗 */}
      <Modal
        visible={isRecordModalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={handleCloseModal}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <View style={styles.modalHeader}>
                <Text style={styles.modalTitle}>记录训练数据</Text>
                <TouchableOpacity
                  style={styles.modalCloseButton}
                  onPress={handleCloseModal}
                  activeOpacity={0.7}
                >
                  <FontAwesome5 name="times" style={styles.modalCloseIcon} />
                </TouchableOpacity>
              </View>

              {currentExercise && (
                <View style={styles.modalExerciseInfo}>
                  <View style={styles.modalExerciseIconContainer}>
                    <FontAwesome6 name={currentExercise.icon as any} style={styles.modalExerciseIcon} />
                  </View>
                  <Text style={styles.modalExerciseName}>{currentExercise.name}</Text>
                  <Text style={styles.modalExerciseMuscles}>{currentExercise.targetMuscles}</Text>
                </View>
              )}

              <View style={styles.modalForm}>
                <View style={styles.formRow}>
                  <View style={styles.formGroup}>
                    <Text style={styles.formLabel}>完成组数</Text>
                    <TextInput
                      style={styles.formInput}
                      value={recordFormData.setsCompleted.toString()}
                      onChangeText={(text) => setRecordFormData(prev => ({
                        ...prev,
                        setsCompleted: parseInt(text) || 0
                      }))}
                      keyboardType="numeric"
                    />
                  </View>
                  <View style={styles.formGroup}>
                    <Text style={styles.formLabel}>
                      {currentExercise?.name.includes('平板支撑') ? '每组时长(秒)' : '每组次数'}
                    </Text>
                    <TextInput
                      style={styles.formInput}
                      value={recordFormData.durationPerSet.toString()}
                      onChangeText={(text) => setRecordFormData(prev => ({
                        ...prev,
                        durationPerSet: parseInt(text) || 0
                      }))}
                      keyboardType="numeric"
                    />
                  </View>
                  <View style={styles.formGroup}>
                    <Text style={styles.formLabel}>总用时(分钟)</Text>
                    <TextInput
                      style={styles.formInput}
                      value={recordFormData.totalTime.toString()}
                      onChangeText={(text) => setRecordFormData(prev => ({
                        ...prev,
                        totalTime: parseInt(text) || 0
                      }))}
                      keyboardType="numeric"
                    />
                  </View>
                </View>

                <View style={styles.formRow}>
                  <View style={styles.formGroup}>
                    <Text style={styles.formLabel}>感受强度</Text>
                    <View style={styles.intensitySelector}>
                      {['easy', 'moderate', 'hard', 'very-hard'].map((intensity) => (
                        <TouchableOpacity
                          key={intensity}
                          style={[
                            styles.intensityOption,
                            recordFormData.intensity === intensity && styles.intensityOptionSelected
                          ]}
                          onPress={() => setRecordFormData(prev => ({
                            ...prev,
                            intensity
                          }))}
                          activeOpacity={0.7}
                        >
                          <Text style={[
                            styles.intensityOptionText,
                            recordFormData.intensity === intensity && styles.intensityOptionTextSelected
                          ]}>
                            {intensity === 'easy' ? '轻松' :
                             intensity === 'moderate' ? '适中' :
                             intensity === 'hard' ? '困难' : '非常困难'}
                          </Text>
                        </TouchableOpacity>
                      ))}
                    </View>
                  </View>
                  <View style={styles.formGroup}>
                    <Text style={styles.formLabel}>备注</Text>
                    <TextInput
                      style={styles.formInput}
                      value={recordFormData.notes}
                      onChangeText={(text) => setRecordFormData(prev => ({
                        ...prev,
                        notes: text
                      }))}
                      placeholder="可选"
                    />
                  </View>
                </View>

                <View style={styles.modalActions}>
                  <TouchableOpacity
                    style={styles.modalCancelButton}
                    onPress={handleCloseModal}
                    activeOpacity={0.7}
                  >
                    <Text style={styles.modalCancelButtonText}>取消</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.modalSaveButton}
                    onPress={handleSaveRecord}
                    activeOpacity={0.7}
                  >
                    <LinearGradient
                      colors={['#02f2ce', '#00f289']}
                      start={{ x: 0, y: 0 }}
                      end={{ x: 1, y: 0 }}
                      style={styles.modalSaveButtonGradient}
                    >
                      <Text style={styles.modalSaveButtonText}>保存记录</Text>
                    </LinearGradient>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default TrainDetailScreen;

