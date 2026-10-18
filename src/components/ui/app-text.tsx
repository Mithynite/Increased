import { colors } from "../../theme/colors";
import { Text, TextProps, StyleSheet } from 'react-native';

interface IAppTextProps extends TextProps {
    weight?: "regular" | "bold"
}

export default function AppText({ style, weight = "regular", ...rest }: IAppTextProps) {
    return(
        <Text
            style={[
                styles.defaultText,
                weight === "regular" ? styles.regular : styles.bold,
                style
            ]}
            {...rest}
        />
    )
}

const styles = StyleSheet.create({
  defaultText: {
    color: colors.text,
  },
  regular: {
    fontFamily: 'Inter-Regular',
  },
  bold: {
    fontFamily: 'Inter-Bold',
  }
});