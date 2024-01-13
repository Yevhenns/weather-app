import { useEffect, useState } from "react";
import { TextInput } from "react-native";
import { styles } from "./Input.styles";
import { useAppDispatch } from "../../redux/hooks";
import { setInputCity } from "../../redux/search/SearchSlice";

export function Input() {
  const [text, onChangeText] = useState("");
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setInputCity(text));
  }, [text]);

  return (
    <TextInput
      style={styles.container}
      onChangeText={onChangeText}
      value={text}
      placeholder="City"
    />
  );
}
