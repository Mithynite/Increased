import { Button, Pressable, Text, View } from "react-native";
import { colors } from '../../theme/colors';
import { StyleSheet } from "react-native";
import AppText from "./app-text";

interface IPrimaryButtonProps {
    title: string
    onPress: () => void
    variant?: "primary" | "secondary"
    icon?: React.ReactNode
    iconPosition?: "left" | "right"
}

export function CustomButton({ title, onPress, variant = "primary", icon, iconPosition }: IPrimaryButtonProps) {
    return (
        <Pressable
            onPress={onPress}
            style={[styles.button, variant === "primary" ? styles.primary : styles.secondary]}
        >
            {icon && iconPosition === "left" && 
                (
                    <View style={[styles.icon, styles.iconLeft]}>
                        {icon}
                    </View>
                )
            }  
            <AppText style={[styles.text]} weight="bold">{title}</AppText>
            {icon && iconPosition === "right" && 
                (
                    <View style={[styles.icon, styles.iconRight]}>
                        {icon}
                    </View>
                )
            }
        </Pressable>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.surface,
        width: 200,
        height: 50,
        borderRadius: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
    
    primary:{
        
    },

    secondary:{
    },

    text: {
        color: colors.text,
        fontSize: 17,
    },

    icon: {

    },

    iconLeft: {
    
    },

    iconRight: {

    }
})