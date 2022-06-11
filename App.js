import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.mainView}>
        <Text style={styles.mainLogo}>ST'art</Text>
      </View>
      <View style={styles.buttonView}>
        <Button style={styles.mainButton} title="BUTTON1" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(255, 255, 255)",
    alignItems: "center",
    justifyContent: "center"
  },
  mainView: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    backgroundColor: "rgb(255, 0, 255)",
  },
  buttonView: {
    flex: 1,
    backgroundColor: "rgb(106, 191, 70)",
    alignItems: "center",
    justifyContent: "center"
  },
  mainLogo: {
    flex: 1,
    color: "#000",
    fontSize: 50,
    fontWeight: "900",
  },
  mainButton: {
    flex: 1
  },
});
