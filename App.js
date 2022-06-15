import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, Appbar } from "react-native-paper";
import HomeScreen from "./screens/HomeScreen.js";
import DetailScreen from "./screens/DetailScreen.js";
import CountScreen from "./screens/CountScreen.js";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <RecoilRoot>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            // 모든 screen에 적용되는 옵션, Overriding 가능
            headerStyle: {
              backgroundColor: "#f4511e",
            },
          }}
        >
          <Stack.Screen
            name="Home" // Route
            component={HomeScreen}
            options={{ title: "Overview" }} // Screen-specific options
          />
          <Stack.Screen
            name="Detail"
            component={DetailScreen}
            options={{ title: "Overview" }}
          />
          <Stack.Screen
            name="Count"
            component={CountScreen}
            options={{ title: "Count Number" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </RecoilRoot>
  );
}

export default App;
