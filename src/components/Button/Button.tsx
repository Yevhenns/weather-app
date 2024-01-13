import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { styles } from "./Button.styles";

export type ButtonProps = TouchableOpacityProps;

export function Button({ onPress, children }: ButtonProps) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      {children}
    </TouchableOpacity>
  );
}
