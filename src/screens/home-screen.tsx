import { View, Text, StyleSheet } from "react-native";
import { globalStyles } from "../styles/global-styles";
import { useTranslation } from "react-i18next";
import '../locales/i18n';

export default function HomeScreen() {
    const { t } = useTranslation();
    return(
        <View style={globalStyles.view}>
            <Text style={globalStyles.title}>{t("dashboard.title")}</Text>
        </View>
    )
}