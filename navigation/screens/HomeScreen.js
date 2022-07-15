import React from 'react'
import {View,Text} from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
         
         <View style={{flex:1,alignItems: 'center',justifyContent: 'center'}}>
          <Text
          onPress={() =>alert('This home screen')}
          style={{fontSize:26,fontWeight:'bold',}}>Home Screen</Text>

         </View>
       

  )
}

export default HomeScreen;