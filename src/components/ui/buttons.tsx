import { Button, Pressable, Text } from "react-native";
import { colors } from '../../theme/colors';

interface IPrimaryButtonProps {
    title: string,
}

export function PrimaryButton({ title, }: IPrimaryButtonProps) {
    return (
        <Pressable>
            <Text>
                {title} 
            </Text>
        </Pressable>
    )
}