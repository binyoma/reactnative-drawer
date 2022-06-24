import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import CustomDrawerContent from './CustomDrawerContent';
import AdaLovelace from '../screens/AdaLovelace';
import Personnage from '../screens/Personnage';
import Biographie from '../screens/Biographie';


const MyDrawer = () => {
  const Drawer =createDrawerNavigator();
  return (
   <Drawer.Navigator
     useLegacyImplementation
     drawerContent={(props)=><CustomDrawerContent {...props}/>}>
      <Drawer.Screen name='ada' component={AdaLovelace}/>
      <Drawer.Screen name='personnage' component={Personnage}/>
      <Drawer.Screen name='biographie' component={Biographie}/>


   </Drawer.Navigator>
  )
}

export default MyDrawer