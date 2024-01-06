import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { styles } from "./Button.styles";

export type ButtonProps = TouchableOpacityProps;

export function Button({ children }: ButtonProps) {
  return <TouchableOpacity style={styles.button}>{children}</TouchableOpacity>;
}
