import { StyleSheet } from 'react-native';
import { colors } from '../theme/colors';

export const globalStyles = StyleSheet.create({
    view: {
        backgroundColor:colors.background,
    },
    title: {
        fontSize:40,
        color:colors.text,
    }
})