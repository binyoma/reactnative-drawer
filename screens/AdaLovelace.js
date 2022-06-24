import { View, Text, Image } from 'react-native'
import React from 'react'

const AdaLovelace = () => {
  return (
    <View style={{flex:1}}>
      <View style={{flex: 1}}>
           <Image style= {{ flex:1, width:"100%", height: "100%"}} source={require("../assets/adaLovelace.png")}/>
      </View>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
         <Text>Ada Lovelace</Text>
      </View>
      
      
    </View>
  )
}

export default AdaLovelace