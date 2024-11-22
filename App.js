import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, Dimensions, View } from "react-native";

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Shahreza</Text>

      <View style={styles.boxContainer}>
        <View style={styles.box1}></View>
        <View style={styles.box2}></View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d3d3d3",
    alignItems: "center",
    justifyContent: "center",
  },

  text: {
    fontSize: 24,
    color: "blue",
    fontWeight: "bold",
    marginBottom: -60,
    alignItems: "center",
  },

  boxContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
  },
  box1: {
    width: 100,
    height: 100,
    backgroundColor: "#800000",
    borderRadius: 10,
  },
  box2: {
    width: 100,
    height: 100,
    backgroundColor: "#808000",
    borderRadius: 10,
  },
});

export default App;
