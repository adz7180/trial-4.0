
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, Button } from 'react-native';
import { WebView } from 'react-native-webview';

const Stack = createStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>HexaNest Mobile</Text>
      <Button title="Go to Customize" onPress={() => navigation.navigate('Customize')} />
    </View>
  );
}

function CustomizeScreen() {
  return (
    <WebView source={{ uri: 'https://hexanest.vercel.app/customize' }} style={{ flex: 1 }} />
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Customize" component={CustomizeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
