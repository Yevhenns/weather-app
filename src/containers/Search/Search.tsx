import { View } from "react-native";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { AntDesign } from "@expo/vector-icons";
import { styles } from "./Search.styles";

export function Search() {
  return (
    <View style={styles.container}>
      <Input />
      <Button>
        <AntDesign name="search1" size={24} color="black" />
      </Button>
    </View>
  );
}
