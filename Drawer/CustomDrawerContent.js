import { View, Text } from 'react-native'
import React from 'react'
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer'

const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}>
        <DrawerItemList {...props}>
            <DrawerItem 
               label="Close"
               onPress={()=>props.navigation.closeDrawer()}>
            </DrawerItem>
            <DrawerItem 
               label="Toggle"
               onPress={()=>props.navigation.toggleDrawer()}>
            </DrawerItem>

        </DrawerItemList>

    </DrawerContentScrollView>
  )
}

export default CustomDrawerContent