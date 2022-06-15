import React from 'react';
import { Text, View, Button } from 'react-native'

const DetailScreen = ({ navigation }) => {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Detail Screen</Text>
        <Button
            title="Go back" 
            onPress={() => navigation.goBack()} // 뒤로가기 구현
        />
        <Button
            title="Go back to first screen in stack"
            onPress={() => navigation.popToTop()} // 맨 처음 화면 제외 스택 비우기
        />
      </View>
    );
}

export default DetailScreen