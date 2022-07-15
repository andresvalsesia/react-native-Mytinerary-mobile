import React,{useEffect} from 'react'
import {StyleSheet,View,Text,TouchableOpacity,FlatList,Image,Dimensions,SafeAreaView,Animated,ImageBackground} from 'react-native';
import cityActions from '../redux/actions/cityActions';
import {useDispatch,useSelector} from 'react-redux';


const imagenes=["https://picsum.photos/200/300","https://picsum.photos/200/300","https://picsum.photos/200/300","https://picsum.photos/200/300","https://picsum.photos/200/300","https://picsum.photos/200/300","https://picsum.photos/200/300"];
const width =Dimensions.get("window").width;
const height=Dimensions.get("window").height;
const ANCHO_CONTENEDOR=width*0.7;
const ESPACIO=10;


const Carousel = () => {

  const dispatch=useDispatch()

  useEffect(() => {
    dispatch(cityActions.getCities())
    
   
    

}, [])

let cities=useSelector(store=>store.cityReducer.cities)



  return (
     
   
       <Animated.FlatList data={cities}
       horizontal={true}
       showsHorizontalScrollIndicator={false}
       contentContainerStyle={{paddingTop:5}}
       decelerationRate={0}
       snapToInterval={ANCHO_CONTENEDOR}
       scrollEventThrottl={16}
       keyExtractor={(item) => item}
       renderItem={({item,index})=>{
        return (
            <View style={{width:ANCHO_CONTENEDOR,marginTop:2}}>
             
             <View style={{marginHorizontal:ESPACIO,padding:ESPACIO,borderRadius:30,backgroundColor:'#fff',alignItems:'center',borderColor:'black',borderWidth:2}}>

               <ImageBackground key={index} source={{uri:item.img}} style={styles.posterImage}>

                <Text style={{ color: "white",
                    fontSize: 32,
                    opacity: 0.8,
                    lineHeight: 50,
                    fontWeight: "bold",
                    textAlign: "center",
                    backgroundColor: '#354259',}}>{item.country}</Text>        
           
               </ImageBackground>
               
             </View>
            </View>
        )
       }}
       />
    
    
  )
}

const styles=StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor: "white",
      alignItems: "center",
      justifyContent: "center",
    },
    posterImage:{
        width:'100%',
        height: ANCHO_CONTENEDOR*1.2,
        resizeMode:"cover",
        borderRadius:24,
        margin:0,
        marginBottom:10

    } 
  });

export default Carousel;

