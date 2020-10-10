import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import Quote from './src/screens/Quote';
import Fav from './src/screens/Fav';


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Quote of the day" component={Quote} />
        <Stack.Screen name="Favorite" component={Fav} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
