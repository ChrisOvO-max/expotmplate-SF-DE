import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Page from "../../screens/p-daily_learn";


export default function Index() {
  return (
    <SafeAreaProvider>
      <Page />
    </SafeAreaProvider>
  );
}
