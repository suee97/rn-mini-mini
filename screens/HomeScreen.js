import React from 'react';
import { Text, View, Button } from 'react-native'

const HomeScreen = ({ navigation }) => {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Detail"
          onPress={() => navigation.navigate('Detail')} // Route가 Detail인 페이지로 이동
        />
      </View>
    );
}

export default HomeScreen