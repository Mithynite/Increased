import { View, Text, Pressable, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors } from '../../theme/colors';

export default function ScreenWrapper({ children }: { children: React.ReactNode }) {
    const navigation = useNavigation();
    const insets = useSafeAreaInsets();

    const today = new Date().toLocaleDateString('cs-CZ');

    return (
    // 2. Use a standard View and apply the insets dynamically as padding
    <View style={[
      styles.container, 
      {
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
      }
    ]}>
      
      {/* CUSTOM HEADER */}
      <View style={styles.header}>
        <Text style={styles.logo}>INCREASED</Text>
        <View style={styles.linkContainer}>
          <Pressable onPress={() => navigation.navigate('Home')}>
            <Text style={styles.link}>Home</Text>
          </Pressable>
          <Pressable onPress={() => navigation.navigate('Workouts')}>
            <Text style={styles.link}>Workouts</Text>
          </Pressable>
        </View>
      </View>

      {/* DYNAMIC CONTENT */}
      <View style={styles.content}>
        {children}
      </View>

      {/* CUSTOM FOOTER */}
      <View style={styles.footer}>
        <Text style={styles.footerDate}>{today}</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background, // #09090B
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: colors.surface,
  },
  logo: {
    color: colors.accent, // Gold logo
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  linkContainer: {
    flexDirection: 'row',
    gap: 16,
  },
  link: {
    color: colors.text,
    fontSize: 16,
    fontWeight: '500',
  },
  content: {
    flex: 1, 
  },
  footer: {
    paddingVertical: 20,
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: colors.surface,
  },
  footerDate: {
    color: colors.textMuted,
    fontSize: 14,
  }
});