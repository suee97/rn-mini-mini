import React from "react";
import { Text, View, Button } from "react-native";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";
import { numState } from "../recoilState/numberState.js"

function CountScreen() {
  const [curNum, setNum] = useRecoilState(numState);
  const incCurNum = () => setNum(curNum + 1);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Current Number : {curNum}</Text>
      <Button title="Inc." onPress={() => incCurNum()} />
    </View>
  );
}

export default CountScreen;
