import { View } from "react-native";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { AntDesign } from "@expo/vector-icons";
import { styles } from "./Search.styles";
import { useAppDispatch } from "../../redux/hooks";
import { search } from "../../redux/search/SearchOperations";

export function Search() {
  const dispatch = useAppDispatch();

  const fetch = () => {
    dispatch(search());
  };

  return (
    <View style={styles.container}>
      <Input />
      <Button onPress={fetch}>
        <AntDesign name="search1" size={24} color="black" />
      </Button>
    </View>
  );
}
