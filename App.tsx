import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { Menu } from "./src/containers/Menu";
import { Search } from "./src/containers/Search";

export default function App() {
  return (
    <View style={styles.container}>
      <Search />
      <Menu />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 10,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
