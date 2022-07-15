import React from 'react'
import {View,Text,TouchableOpacity,ImageBackground,StyleSheet} from 'react-native';
import Carousel from './Carousel';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import logo from '../../src/image/subtle-prism.png';

const Main = ({navigation}) => {

  
  return (
    <View>
      <ImageBackground source={logo} resizeMode="cover" style={styles.image}>
        <Text
        style={{
          fontSize:50,
          textAlign: 'center',
          color: 'black',
          fontWeight: "bold"
        }}
        > MyTinerary
        <MaterialCommunityIcons name="airplane-landing" size={70} color="black" />
        </Text>
       
        
        

      
    
        <Text
        style={{
          fontSize:30,
          textAlign: 'center',
          marginTop: "8%",
          color: 'black',
          fontWeight: "bold"
        }}
        > Find your perfect trip, designed by insiders who know and love their cities!</Text>
        <TouchableOpacity
        onPress={()=>{navigation.navigate('Cities')}}
        style={{backgroundColor:'green',
                padding:10,
                marginTop: "5%",
                width:"60%",
                alignSelf:"center",
                borderRadius:10,
                marginBottom:10,
                alignItems: "center",
                backgroundColor: "#DDDDDD",
               fontWeight:"bold",
               borderWidth:3
      }}
        >
         <Text style={{fontSize:25,textAlign: 'center',color: 'black',fontWeight:"bold"}}>
                 WELCOME
         </Text>
          
         
        </TouchableOpacity>
        <Carousel/>
        </ImageBackground>
    </View>
  )
}


const styles=StyleSheet.create({
 
});

export default Main;