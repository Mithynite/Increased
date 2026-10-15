import { StyleSheet } from 'react-native';
import { colors } from '../theme/colors';

export const globalStyles = StyleSheet.create({
    view: {
        backgroundColor:colors.background,
        width:'100%',
        height:'100%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
    },
    title: {
        fontSize:20,
        color:colors.text,
    }
})