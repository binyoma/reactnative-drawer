import 'react-native-gesture-handler';
import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import MyDrawer from './Drawer/MyDrawer';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Accueil from './screens/Accueil';





export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Accueil'>
        <Stack.Screen name='Accueil' component={Accueil}></Stack.Screen>
        <Stack.Screen name='Lovelace' component={MyDrawer}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}