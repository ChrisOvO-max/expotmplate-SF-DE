

import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Modal, TextInput, Alert, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { FontAwesome5, FontAwesome6 } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './styles';

interface MealData {
  content: string;
  calories: number;
}

interface DailyMealData {
  breakfast: MealData | null;
  lunch: MealData | null;
  dinner: MealData | null;
  snack: MealData | null;
}

interface MealType {
  key: 'breakfast' | 'lunch' | 'dinner' | 'snack';
  title: string;
  icon: string;
  color: string;
}

const DIET_RECORD_PAGE = () => {
  const router = useRouter();
  const [currentDate, setCurrentDate] = useState(new Date());
  const [isAddModalVisible, setIsAddModalVisible] = useState(false);
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);
  const [currentEditingMeal, setCurrentEditingMeal] = useState<'breakfast' | 'lunch' | 'dinner' | 'snack' | null>(null);
  
  const [mealData, setMealData] = useState<Record<string, DailyMealData>>({
    '2024-01-15': {
      breakfast: { content: '牛奶、面包、鸡蛋', calories: 450 },
      lunch: { content: '鸡胸肉沙拉、糙米饭', calories: 580 },
      dinner: { content: '蔬菜汤、蒸蛋', calories: 320 },
      snack: null
    }
  });

  const [formData, setFormData] = useState({
    mealType: 'breakfast',
    content: '',
    calories: ''
  });

  const mealTypes: MealType[] = [
    { key: 'breakfast', title: '早餐', icon: 'sun', color: '#fbbf24' },
    { key: 'lunch', title: '午餐', icon: 'utensils', color: '#f97316' },
    { key: 'dinner', title: '晚餐', icon: 'moon', color: '#6366f1' },
    { key: 'snack', title: '加餐', icon: 'plus', color: '#9ca3af' }
  ];

  const formatDate = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const weekdays = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
    const weekday = weekdays[date.getDay()];
    return {
      display: `${year}年${month}月${day}日`,
      weekday: weekday,
      key: `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`
    };
  };

  const getOrCreateMealData = (dateKey: string): DailyMealData => {
    if (!mealData[dateKey]) {
      setMealData(prev => ({
        ...prev,
        [dateKey]: {
          breakfast: null,
          lunch: null,
          dinner: null,
          snack: null
        }
      }));
      return {
        breakfast: null,
        lunch: null,
        dinner: null,
        snack: null
      };
    }
    return mealData[dateKey];
  };

  const calculateNutritionStats = () => {
    const dateKey = formatDate(currentDate).key;
    const data = getOrCreateMealData(dateKey);
    
    let totalCalories = 0;
    Object.values(data).forEach(meal => {
      if (meal && meal.calories) {
        totalCalories += meal.calories;
      }
    });
    
    const protein = Math.round(totalCalories * 0.15 / 4);
    const fat = Math.round(totalCalories * 0.3 / 9);
    
    return { totalCalories, protein, fat };
  };

  const handleBackPress = () => {
    if (router.canGoBack()) {
      router.back();
    }
  };

  const handleDatePress = () => {
    const newDate = new Date(currentDate);
    newDate.setDate(newDate.getDate() + 1);
    setCurrentDate(newDate);
  };

  const handleMealPress = (mealType: 'breakfast' | 'lunch' | 'dinner' | 'snack') => {
    const dateKey = formatDate(currentDate).key;
    const data = getOrCreateMealData(dateKey);
    
    if (data[mealType]) {
      setCurrentEditingMeal(mealType);
      setFormData({
        mealType,
        content: data[mealType]?.content || '',
        calories: data[mealType]?.calories.toString() || ''
      });
      setIsEditModalVisible(true);
    } else {
      setFormData({
        mealType,
        content: '',
        calories: ''
      });
      setIsAddModalVisible(true);
    }
  };

  const handleAddMealPress = () => {
    setFormData({
      mealType: 'breakfast',
      content: '',
      calories: ''
    });
    setIsAddModalVisible(true);
  };

  const handleSaveMeal = () => {
    if (!formData.content.trim()) {
      return;
    }

    const dateKey = formatDate(currentDate).key;
    const currentMealData = getOrCreateMealData(dateKey);
    
    setMealData(prev => ({
      ...prev,
      [dateKey]: {
        ...currentMealData,
        [formData.mealType]: {
          content: formData.content.trim(),
          calories: parseInt(formData.calories) || 0
        }
      }
    }));

    setIsAddModalVisible(false);
    setIsEditModalVisible(false);
    setCurrentEditingMeal(null);
  };

  const handleDeleteMeal = () => {
    if (!currentEditingMeal) return;

    Alert.alert(
      '确认删除',
      '确定要删除这个饮食记录吗？',
      [
        { text: '取消', style: 'cancel' },
        {
          text: '删除',
          style: 'destructive',
          onPress: () => {
            const dateKey = formatDate(currentDate).key;
            const currentMealData = getOrCreateMealData(dateKey);
            
            setMealData(prev => ({
              ...prev,
              [dateKey]: {
                ...currentMealData,
                [currentEditingMeal]: null
              }
            }));

            setIsEditModalVisible(false);
            setCurrentEditingMeal(null);
          }
        }
      ]
    );
  };

  const renderMealItem = (mealType: MealType) => {
    const dateKey = formatDate(currentDate).key;
    const data = getOrCreateMealData(dateKey);
    const meal = data[mealType.key];

    return (
      <TouchableOpacity
        key={mealType.key}
        style={[styles.mealItem, meal ? styles.mealItemFilled : styles.mealItemEmpty]}
        onPress={() => handleMealPress(mealType.key)}
        activeOpacity={0.7}
      >
        {meal ? (
          <View style={styles.mealItemContent}>
            <View style={styles.mealItemLeft}>
              <View style={[styles.mealIconContainer, { backgroundColor: `${mealType.color}20` }]}>
                <FontAwesome6 name={mealType.icon} size={18} color={mealType.color} />
              </View>
              <View style={styles.mealInfo}>
                <Text style={styles.mealTitle}>{mealType.title}</Text>
                <Text style={styles.mealContent}>{meal.content}</Text>
                <Text style={styles.mealCalories}>约 {meal.calories} 卡路里</Text>
              </View>
            </View>
            <FontAwesome6 name="chevron-right" size={14} color="#6b7280" />
          </View>
        ) : (
          <View style={styles.emptyMealContent}>
            <View style={styles.emptyMealIconContainer}>
              <FontAwesome6 name="plus" size={18} color="#9ca3af" />
            </View>
            <Text style={styles.emptyMealTitle}>{mealType.title}</Text>
            <Text style={styles.emptyMealSubtitle}>点击添加{mealType.title}</Text>
          </View>
        )}
      </TouchableOpacity>
    );
  };

  const { totalCalories, protein, fat } = calculateNutritionStats();
  const formattedDate = formatDate(currentDate);

  return (
    <SafeAreaView style={styles.container}>
      {/* 顶部导航栏 */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={handleBackPress}
          activeOpacity={0.7}
        >
          <FontAwesome6 name="arrow-left" size={18} color="#1f2937" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>饮食记录</Text>
        <View style={styles.headerPlaceholder} />
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* 日期选择器 */}
        <View style={styles.dateSection}>
          <TouchableOpacity
            style={styles.dateSelector}
            onPress={handleDatePress}
            activeOpacity={0.7}
          >
            <View style={styles.dateSelectorLeft}>
              <View style={styles.dateIconContainer}>
                <FontAwesome5 name="calendar-alt" size={16} color="#02f2ce" />
              </View>
              <View style={styles.dateInfo}>
                <Text style={styles.selectedDate}>{formattedDate.display}</Text>
                <Text style={styles.selectedWeekday}>{formattedDate.weekday}</Text>
              </View>
            </View>
            <FontAwesome6 name="chevron-right" size={14} color="#6b7280" />
          </TouchableOpacity>
        </View>

        {/* 饮食记录列表 */}
        <View style={styles.mealsSection}>
          <Text style={styles.mealsTitle}>今日饮食</Text>
          <View style={styles.mealsList}>
            {mealTypes.map(renderMealItem)}
          </View>
        </View>

        {/* 营养统计 */}
        <View style={styles.nutritionSection}>
          <View style={styles.nutritionCard}>
            <Text style={styles.nutritionTitle}>今日营养统计</Text>
            <View style={styles.nutritionGrid}>
              <View style={styles.nutritionItem}>
                <Text style={styles.nutritionValue}>{totalCalories}</Text>
                <Text style={styles.nutritionLabel}>已摄入卡路里</Text>
                <Text style={styles.nutritionTarget}>目标: 1800</Text>
              </View>
              <View style={styles.nutritionItem}>
                <Text style={[styles.nutritionValue, { color: '#00f289' }]}>{protein}g</Text>
                <Text style={styles.nutritionLabel}>蛋白质</Text>
                <Text style={styles.nutritionTarget}>目标: 80g</Text>
              </View>
              <View style={styles.nutritionItem}>
                <Text style={[styles.nutritionValue, { color: '#0296f2e6' }]}>{fat}g</Text>
                <Text style={styles.nutritionLabel}>脂肪</Text>
                <Text style={styles.nutritionTarget}>目标: 60g</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* 浮动添加按钮 */}
      <TouchableOpacity
        style={styles.floatingButton}
        onPress={handleAddMealPress}
        activeOpacity={0.8}
      >
        <LinearGradient
          colors={['#02f2ce', '#00f289']}
          style={styles.floatingButtonGradient}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        >
          <FontAwesome6 name="plus" size={20} color="#ffffff" />
        </LinearGradient>
      </TouchableOpacity>

      {/* 添加饮食记录弹窗 */}
      <Modal
        visible={isAddModalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setIsAddModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <View style={styles.modalHeader}>
                <Text style={styles.modalTitle}>添加饮食记录</Text>
                <TouchableOpacity
                  style={styles.closeButton}
                  onPress={() => setIsAddModalVisible(false)}
                  activeOpacity={0.7}
                >
                  <FontAwesome5 name="times" size={16} color="#6b7280" />
                </TouchableOpacity>
              </View>

              <View style={styles.formContainer}>
                <View style={styles.formGroup}>
                  <Text style={styles.formLabel}>用餐类型</Text>
                  <View style={styles.selectContainer}>
                    {mealTypes.map((type) => (
                      <TouchableOpacity
                        key={type.key}
                        style={[
                          styles.selectOption,
                          formData.mealType === type.key && styles.selectOptionActive
                        ]}
                        onPress={() => setFormData(prev => ({ ...prev, mealType: type.key }))}
                        activeOpacity={0.7}
                      >
                        <Text style={[
                          styles.selectOptionText,
                          formData.mealType === type.key && styles.selectOptionTextActive
                        ]}>
                          {type.title}
                        </Text>
                      </TouchableOpacity>
                    ))}
                  </View>
                </View>

                <View style={styles.formGroup}>
                  <Text style={styles.formLabel}>食物内容</Text>
                  <TextInput
                    style={styles.textArea}
                    value={formData.content}
                    onChangeText={(text) => setFormData(prev => ({ ...prev, content: text }))}
                    placeholder="请输入食物内容，用逗号分隔不同食物..."
                    placeholderTextColor="#9ca3af"
                    multiline={true}
                    numberOfLines={3}
                    textAlignVertical="top"
                  />
                </View>

                <View style={styles.formGroup}>
                  <Text style={styles.formLabel}>卡路里 (可选)</Text>
                  <TextInput
                    style={styles.textInput}
                    value={formData.calories}
                    onChangeText={(text) => setFormData(prev => ({ ...prev, calories: text }))}
                    placeholder="输入卡路里数量"
                    placeholderTextColor="#9ca3af"
                    keyboardType="numeric"
                  />
                </View>

                <View style={styles.modalButtons}>
                  <TouchableOpacity
                    style={styles.cancelButton}
                    onPress={() => setIsAddModalVisible(false)}
                    activeOpacity={0.7}
                  >
                    <Text style={styles.cancelButtonText}>取消</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.saveButton}
                    onPress={handleSaveMeal}
                    activeOpacity={0.8}
                  >
                    <LinearGradient
                      colors={['#02f2ce', '#00f289']}
                      style={styles.saveButtonGradient}
                      start={{ x: 0, y: 0 }}
                      end={{ x: 1, y: 0 }}
                    >
                      <Text style={styles.saveButtonText}>保存</Text>
                    </LinearGradient>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
      </Modal>

      {/* 编辑饮食记录弹窗 */}
      <Modal
        visible={isEditModalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setIsEditModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <View style={styles.modalHeader}>
                <Text style={styles.modalTitle}>编辑饮食记录</Text>
                <TouchableOpacity
                  style={styles.closeButton}
                  onPress={() => setIsEditModalVisible(false)}
                  activeOpacity={0.7}
                >
                  <FontAwesome5 name="times" size={16} color="#6b7280" />
                </TouchableOpacity>
              </View>

              <View style={styles.formContainer}>
                <View style={styles.formGroup}>
                  <Text style={styles.formLabel}>用餐类型</Text>
                  <View style={styles.selectContainer}>
                    {mealTypes.map((type) => (
                      <TouchableOpacity
                        key={type.key}
                        style={[
                          styles.selectOption,
                          formData.mealType === type.key && styles.selectOptionActive
                        ]}
                        onPress={() => setFormData(prev => ({ ...prev, mealType: type.key }))}
                        activeOpacity={0.7}
                      >
                        <Text style={[
                          styles.selectOptionText,
                          formData.mealType === type.key && styles.selectOptionTextActive
                        ]}>
                          {type.title}
                        </Text>
                      </TouchableOpacity>
                    ))}
                  </View>
                </View>

                <View style={styles.formGroup}>
                  <Text style={styles.formLabel}>食物内容</Text>
                  <TextInput
                    style={styles.textArea}
                    value={formData.content}
                    onChangeText={(text) => setFormData(prev => ({ ...prev, content: text }))}
                    placeholder="请输入食物内容，用逗号分隔不同食物..."
                    placeholderTextColor="#9ca3af"
                    multiline={true}
                    numberOfLines={3}
                    textAlignVertical="top"
                  />
                </View>

                <View style={styles.formGroup}>
                  <Text style={styles.formLabel}>卡路里 (可选)</Text>
                  <TextInput
                    style={styles.textInput}
                    value={formData.calories}
                    onChangeText={(text) => setFormData(prev => ({ ...prev, calories: text }))}
                    placeholder="输入卡路里数量"
                    placeholderTextColor="#9ca3af"
                    keyboardType="numeric"
                  />
                </View>

                <View style={styles.editModalButtons}>
                  <TouchableOpacity
                    style={styles.deleteButton}
                    onPress={handleDeleteMeal}
                    activeOpacity={0.7}
                  >
                    <Text style={styles.deleteButtonText}>删除</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.cancelButton}
                    onPress={() => setIsEditModalVisible(false)}
                    activeOpacity={0.7}
                  >
                    <Text style={styles.cancelButtonText}>取消</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.saveButton}
                    onPress={handleSaveMeal}
                    activeOpacity={0.8}
                  >
                    <LinearGradient
                      colors={['#02f2ce', '#00f289']}
                      style={styles.saveButtonGradient}
                      start={{ x: 0, y: 0 }}
                      end={{ x: 1, y: 0 }}
                    >
                      <Text style={styles.saveButtonText}>保存</Text>
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

export default DIET_RECORD_PAGE;

