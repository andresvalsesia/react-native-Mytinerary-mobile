import React from 'react'
import {StyleSheet,Image,View,Text,TouchableOpacity,Dimensions,ImageBackground,ScrollView} from 'react-native';




const width =Dimensions.get("window").width;
const height=Dimensions.get("window").height;
const ANCHO_CONTENEDOR=width*0.7;
const ESPACIO=10;

const Itinerary = ({props}) => {
  return (
   
        <View style={{width:ANCHO_CONTENEDOR}}>
        <ScrollView>
        <Text style={styles.titulo}>{props.name}</Text>
        <Image source={{uri:props.img}} style={styles.imgStore}/>
        <Text style={styles.titulo}>{props.userName}</Text>
        <Text style={styles.titulo}> 👍🏽 {props.like.length}</Text>
        <Text style={styles.titulo}>Price: {props.price}</Text>
        <Text style={styles.titulo}>Duration: {props.duration} hours</Text>
        <Text style={styles.titulo}>{props.hastag}</Text>
        </ScrollView>
        </View>
 
  )
}


const styles=StyleSheet.create({
    container:{
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },

    imgStore:{
        marginTop:15,
        padding:18,
        backgroundColor: "white",
        width:'100%',
        height: ANCHO_CONTENEDOR*1.2,
        resizeMode:"cover",
        borderColor: "white",
        borderWidth: 3,
        borderRadius:24,
        margin:0,
        marginBottom:10,

    },

    card:{
         width:'100%',
         backgroundColor:'#354259',
         marginTop:15,
         padding:20,
         

    },
    titulo:{
      color: "white",
      fontSize: 30,
      textTransform:'uppercase',
      fontWeight: "bold",
      textAlign: "center",
      backgroundColor: "#354259",
    },
    direccion:{
      color: "white",
      fontSize: 20,
      textAlign:"justify",
      fontWeight: "bold",
      backgroundColor: "#354259",
    },
  });


export default Itinerary
