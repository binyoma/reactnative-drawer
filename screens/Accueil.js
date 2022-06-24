import { View, Text, Button } from 'react-native'
import React from 'react'

const Accueil = ({navigation}) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
       <Text>Welcome to the Ada Lovelace's app</Text>
      <Button title="Aller sur sa page" onPress={() => navigation.navigate('Lovelace')} />
    </View>
  )
}

export default Accueil