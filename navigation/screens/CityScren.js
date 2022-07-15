import React from 'react'
import {View,Text} from 'react-native';

const CityScreen = ({navigation}) => {
  return (
    
    <View style={{flex:1,alignItems: 'center',justifyContent: 'center'}}>
          <Text
          onPress={() =>alert('This city screen')}
          style={{fontSize:26,fontWeight:'bold',}}>City Screen</Text>

         </View>

  )
}

export default CityScreen;