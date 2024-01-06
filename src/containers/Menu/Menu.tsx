import { View, Text } from "react-native";
import { Button } from "../../components/Button";
import { styles } from "./Menu.styles";

export function Menu() {
  return (
    <View style={styles.container}>
      <Button>
        <Text>Сьогодні</Text>
      </Button>
      <Button>
        <Text>3 дні</Text>
      </Button>
      <Button>
        <Text>7 днів</Text>
      </Button>
      <Button>
        <Text>14 днів</Text>
      </Button>
    </View>
  );
}
