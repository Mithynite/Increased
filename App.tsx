import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './src/screens/home-screen';
import { SafeAreaView } from 'react-native-safe-area-context';
import './src/locales/i18n';

import * as SplashScreen from 'expo-splash-screen';
import { useFonts, Inter_400Regular, Inter_700Bold } from '@expo-google-fonts/inter';
import { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './src/navigation/tabs/tab-navigator';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
})

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    "Inter_400Regular": Inter_400Regular,
    "Inter_700Bold": Inter_700Bold,
  });

  useEffect(() => {
     if(fontsLoaded || fontError) {
      // Hide splash screen once fonts load (or fail)
      SplashScreen.hideAsync();
     }
  }, [fontsLoaded, fontError])

  if(!fontsLoaded && !fontError) {
    // Keep the splash screen visible while fonts are loading
    SplashScreen.preventAutoHideAsync();
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
