import React, { useEffect } from "react";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Stack, usePathname, useGlobalSearchParams } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { LogBox } from 'react-native';

LogBox.ignoreLogs([
  "TurboModuleRegistry.getEnforcing(...): 'RNMapsAirModule' could not be found",
  // 添加其它想暂时忽略的错误或警告信息
]);

export default function RootLayout() {
  const pathname = usePathname();
  const searchParams = useGlobalSearchParams();

  useEffect(() => {
    if (!pathname) {
      return;
    }
    let searchString = '';
    if (Object.keys(searchParams).length > 0) {
      const queryString = Object.keys(searchParams)
        .map(key => {
          const value = searchParams[key];
          if (typeof value === 'string') {
            return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
          }
          return '';
        }).filter(Boolean).join('&');

      searchString = '?' + queryString;
    }

    const pageId = pathname.replace('/', '').toUpperCase();
    console.log('当前pageId:', pageId, ', pathname:', pathname, ', search:', searchString);
    if (typeof window === 'object' && window.parent && window.parent.postMessage) {
      window.parent.postMessage({
        type: 'chux-path-change',
        pageId: pageId,
        pathname: pathname,
        search: searchString,
      }, '*');
    }
  }, [pathname, searchParams])

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar style="dark"></StatusBar>
      <Stack screenOptions={{
        // 设置所有页面的切换动画为从右侧滑入，适用于iOS 和 Android
        animation: 'slide_from_right',
        gestureEnabled: true,
        gestureDirection: 'horizontal',
        // 隐藏自带的头部
        headerShown: false 
      }}>
        <Stack.Screen name="(tabs)" options={{ title: "底部导航栏" }} />
        <Stack.Screen name="p-login_register" options={{ title: "登录/注册页" }} />
        <Stack.Screen name="p-user_profile" options={{ title: "个人资料页" }} />
        <Stack.Screen name="p-body_data_input" options={{ title: "身体数据录入页" }} />
        <Stack.Screen name="p-miniapp_entry" options={{ title: "小程序入口页" }} />
        <Stack.Screen name="p-tomato_settings" options={{ title: "番茄钟设置页" }} />
        <Stack.Screen name="p-tomato_focus" options={{ title: "番茄钟专注页" }} />
        <Stack.Screen name="p-tomato_history" options={{ title: "番茄记录页" }} />
        <Stack.Screen name="p-schedule_calendar" options={{ title: "日程表页" }} />
        <Stack.Screen name="p-plan_add" options={{ title: "计划添加页" }} />
        <Stack.Screen name="p-plan_detail" options={{ title: "计划详情页" }} />
        <Stack.Screen name="p-training_library" options={{ title: "训练项目库页" }} />
        <Stack.Screen name="p-training_add" options={{ title: "自定义训练项目添加页" }} />
        <Stack.Screen name="p-english_library" options={{ title: "英语库页" }} />
        <Stack.Screen name="p-english_content_detail" options={{ title: "英语内容详情页" }} />
        <Stack.Screen name="p-learning_mode" options={{ title: "学习模式页" }} />
        <Stack.Screen name="p-train_detail" options={{ title: "训练详情页" }} />
        <Stack.Screen name="p-water_reminder_settings" options={{ title: "水分提醒设置页" }} />
        <Stack.Screen name="p-diet_record" options={{ title: "饮食记录页" }} />
        <Stack.Screen name="p-sleep_reminder_settings" options={{ title: "睡眠提醒设置页" }} />
        <Stack.Screen name="p-sleep_data_sync" options={{ title: "睡眠数据同步页" }} />
        <Stack.Screen name="p-sleep_record" options={{ title: "睡眠记录页" }} />
        <Stack.Screen name="p-habit_reminder_settings" options={{ title: "生活习惯提醒设置页" }} />
        <Stack.Screen name="p-checkin_history" options={{ title: "打卡记录页" }} />
        <Stack.Screen name="p-checkin_success" options={{ title: "打卡成功页" }} />
        <Stack.Screen name="p-success_stories" options={{ title: "成功案例页" }} />
        <Stack.Screen name="p-story_share" options={{ title: "案例分享页" }} />
        <Stack.Screen name="p-music_library" options={{ title: "轻音乐库页" }} />
        <Stack.Screen name="p-music_player" options={{ title: "音乐播放页" }} />
        <Stack.Screen name="p-mood_record" options={{ title: "心情记录页" }} />
        <Stack.Screen name="p-mood_calendar" options={{ title: "心情日历页" }} />
        <Stack.Screen name="p-fitness_data" options={{ title: "健身数据页" }} />
        <Stack.Screen name="p-learning_data" options={{ title: "学习数据页" }} />
        <Stack.Screen name="p-training_data" options={{ title: "训练数据页" }} />
        <Stack.Screen name="p-health_data" options={{ title: "健康数据页" }} />
        <Stack.Screen name="p-focus_data" options={{ title: "专注数据页" }} />
        <Stack.Screen name="p-checkin_data" options={{ title: "打卡数据页" }} />
        <Stack.Screen name="p-mood_data" options={{ title: "心情数据分析页" }} />
        <Stack.Screen name="p-review_analysis" options={{ title: "复盘分析页" }} />
        <Stack.Screen name="p-ai_advice" options={{ title: "AI建议页" }} />
        <Stack.Screen name="p-settings" options={{ title: "设置页" }} />
        <Stack.Screen name="p-notification_settings" options={{ title: "通知设置页" }} />
        <Stack.Screen name="p-about_us" options={{ title: "关于我们页" }} />
      </Stack>
    </GestureHandlerRootView>
  );
}
