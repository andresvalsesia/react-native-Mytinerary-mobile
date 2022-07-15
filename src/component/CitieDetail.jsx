import React, {useEffect} from 'react';
import {StyleSheet,View,Text,TouchableOpacity,FlatList,Image,Dimensions,SafeAreaView,Animated,TextInput,ImageBackground,ScrollView} from 'react-native';
import cityActions from '../redux/actions/cityActions';
import itineraryActions from '../redux/actions/itineraryActions';
import {useDispatch,useSelector} from 'react-redux';
import Itinerary from './Itinerary';

const width =Dimensions.get("window").width;
const height=Dimensions.get("window").height;
const ANCHO_CONTENEDOR=width*0.7;
const ESPACIO=10;


const CitieDetail = ({route,navigation}) => {
   
  const dispatch=useDispatch()
  const id=route.params.itemId
  useEffect(() => {


    dispatch(cityActions.getOneCity(id))
    dispatch(itineraryActions.getItinerariesByCity(id))
   
    

}, [])

let country = useSelector(store => store.cityReducer.oneCitie);
let itinerary = useSelector(store => store.itineraryReducer.itineraries);


  return (
     
             
    <ScrollView
    style={styles.card}
    >
      <Text style={{fontSize:35,textAlign: 'center',color: 'white',fontWeight: 'bold',paddingTop:15,textTransform:'uppercase'}}>
       {country.country}
      </Text>
      <Image source={{uri:country.img}} style={styles.imgStore}/>
      <Text style={styles.titulo}>{country.city}</Text>
      <Text style={styles.direccion}>{country.description}</Text>
      
      <Animated.FlatList data={itinerary}
      
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{paddingTop:5}}
      decelerationRate={0}
      snapToInterval={ANCHO_CONTENEDOR}
      scrollEventThrottl={16}
      keyExtractor={(item) => item}
      renderItem={({item,index})=>{
       return (
           <View style={{width:ANCHO_CONTENEDOR}}>

            
            <View 
            style={styles.card}
            >
            {
              itinerary.length>0 ? <Itinerary key={index} props={item} />
              : <Text>AT THE MOMENT THIS CITY DOES NOT HAVE ITINERARY</Text>
            }
         
            </View>
           </View>
       )
      }}
      />
       

    </ScrollView>
   
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



export default CitieDetail;