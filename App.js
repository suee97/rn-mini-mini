import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, Appbar } from "react-native-paper";
import HomeScreen from "./screens/HomeScreen.js";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ title: 'Overview' }}
        />
      </Stack.Navigator>
    </NavigationContainer>

    //   {/* {<View style={styles.container}>
    //   <StatusBar style="auto" />
    //   <View style={styles.mainLogoView}>
    //     <Text style={styles.mainLogo}>ST'art</Text>
    //   </View>
    //   <View style={styles.buttonView}>
    //     <Button icon="camera" mode="contained" uppercase={false}>Press me</Button>
    //   </View>
    // </View>} */}
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(255, 255, 255)",
    alignItems: "center",
    justifyContent: "center",
  },
  mainLogoView: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgb(255, 0, 255)",
  },
  buttonView: {
    flex: 2,
    backgroundColor: "rgb(106, 191, 70)",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  mainLogo: {
    color: "#000",
    fontSize: 50,
    fontWeight: "900",
  },
});

export default App;
