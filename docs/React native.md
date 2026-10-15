
# Expo

1) Create local repository and link it to GitHub
2) Use `npx create-expo-app . --template blank` within VSC
3) Install EAS CLI `npx create-expo-app . --template blank`
4) Log in `eas login`
5) Initialise `eas init` and create new Expo project

``` powershell
PS C:\Users\PC\Documents\VSC Projects\Increased-Gym-App> eas init
√ Which account should own this project? » mamtakegramofon-club
√ Would you like to create a project for @mamtakegramofon-club/Increased-Gym-App? ... yes
✔ Created @mamtakegramofon-club/Increased-Gym-App: https://expo.dev/accounts/mamtakegramofon-club/projects/Increased-Gym-App
√ Project successfully linked (ID: 123) (modified app.json)
√ Set the project icon from icon in your app config
```

# Start the app
- Using `npx expo start` or `npm start` 
- Both devices - my PC and my mobile (with Expo Go app installed) - must be on the **exact same Wi-Fi**, otherwise the scan will not work

### Project Folder Structure
```
/Total-zupa-project
  ├── App.tsx                 # The Root Entry (Providers & Nav Container)
  ├── package.json
  ├── app.json
  │
  └── /src
       ├── /navigation        # Rules for moving between pages
       │    ├── RootNavigator.tsx
       │    └── TabNavigator.tsx
       │
       ├── /screens           # Your actual pages (Grouped by feature)
       │    ├── /Home
       │    │    └── HomeScreen.tsx
       │    ├── /Exercises
       │    │    ├── ExerciseListScreen.tsx
       │    │    └── ExerciseDetailScreen.tsx
       │    └── /Settings
       │         └── SettingsScreen.tsx
       │
       ├── /components        # Reusable UI blocks
       │    ├── /ui           # Dumb components (Buttons, Inputs)
       │    └── /layout       # Wrappers (ScreenWrapper)
       │
       ├── /storage           # AsyncStorage & Config logic
       │    ├── workoutStore.ts
       │    └── themeStore.ts
       │
       ├── /theme             # Visual rules
       │    └── colors.ts
       │
       ├── /styles            # Just styles
       │    └── globalStyles.ts
       │
       ├── /locales           # Translations (i18n)
       │    ├── en.json
       │    └── i18n.ts
       │
       └── /types             # TypeScript definitions
            └── fitness.ts    # e.g., interface Exercise { ... }
```

# Components

## Layout Containers

### View
Universal building block - basically a `<div>`. Uses Flexbox to align items.

``` TypeScript
import { View, Text, StyleSheet } from "react-native";
import { globalStyles } from "../styles/global-styles";
import { useTranslation } from "react-i18next";
import '../locales/i18n';

export default function HomeScreen() {
    const { t } = useTranslation();
    return(
        <View style={globalStyles.view}>
            <Text style={globalStyles.title}>{t("home.welcome")}</Text>
        </View>
    )
}
```

### Scroll View
Just `<View>` that enables scrolling in advance for static content which vertiqally overflows screen.

### Safe Area View
Automatically calculates padding to keep content out of hadrware notches and swipebars.
Suitable for root layout or whatever layouts since it shall
guard every page.

``` TypeScript
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './src/screens/home-screen';
import { SafeAreaView } from 'react-native-safe-area-context';
import './src/locales/i18n';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
})

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <HomeScreen />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
```

## UI

### Text
The **only component allowed to render strings.**

### Text Input
Renders a box that opens the **device keyboard** to capture user input.