import { StyleSheet } from 'react-native';
import { colors } from '../theme/colors';

export const globalStyles = StyleSheet.create({
    view: {
        backgroundColor:colors.background,
        width:'100%',
        height:'100%',
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
    },
    title: {
        color:colors.text,
    },
    subtitle: {
        color:colors.primary,
    },
    headingOne: {
        fontSize:30,
    },
    headingTwo: {
        fontSize:25,
    },
    headingThree: {
        fontSize:20,
    },
    headingFour: {
        fontSize:18,
    },
})