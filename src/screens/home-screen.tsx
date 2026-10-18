import { View, Text, StyleSheet } from "react-native";
import { globalStyles } from "../styles/global-styles";
import { useTranslation } from "react-i18next";
import '../locales/i18n';
import { CustomButton } from "../components/ui/button";
import AppText from "../components/ui/app-text";

export default function HomeScreen() {
    const { t } = useTranslation();
    return(
        <View 
            style={[
                globalStyles.view,
                styles.globalView,
            ]}
        >
            <View style={styles.textView}>
                <AppText 
                    style={[
                        globalStyles.title, 
                        globalStyles.headingOne
                    ]} 
                    weight="bold"
                >
                    {t("home.welcome")}
                </AppText>
                <AppText 
                    style={[
                        globalStyles.title, 
                        globalStyles.headingFour,
                        globalStyles.subtitle
                    ]}
                    weight="regular"
                >
                    {t("home.catchphrase")}
                </AppText>
            </View>
            <View>
                <CustomButton
                    title={t("home.buttons.startNewWorkout")}
                    variant="primary"
                    onPress={() => console.log("Start New Workout button pressed")}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    globalView:{
        gap: 20,
    },
    textView: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
    },    
})