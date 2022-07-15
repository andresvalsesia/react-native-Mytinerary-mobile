import React, {useEffect,useState} from 'react'
import {StyleSheet,View,Text,TouchableOpacity,FlatList,Image,Dimensions,SafeAreaView,Animated,TextInput,ImageBackground,ScrollView} from 'react-native';
import cityActions from '../redux/actions/cityActions';
import {useDispatch,useSelector} from 'react-redux';
import logo from '../../src/image/subtle-prism.png';

const width =Dimensions.get("window").width;
const height=Dimensions.get("window").height;
const ANCHO_CONTENEDOR=width*0.7;
const ESPACIO=10;


const Cities = ({navigation}) => {
  const [search, setSearch] = useState("");
  const dispatch=useDispatch()

  useEffect(() => {


    dispatch(cityActions.getCities())
    dispatch(cityActions.filterCitie(search))
   
    

}, [search])

let cities=useSelector(store=>store.cityReducer.cities)
let data= useSelector(store=>store.cityReducer.filterCity)



  return (
    <ImageBackground source={logo} resizeMode="cover" style={styles.image}>
      <View style={{alignItems: 'center'}}>
    <ScrollView >
    
        <TextInput
        style={styles.input}
        placeholder='SEARCH'
        onChangeText={(val)=>setSearch(val)}
        
      />

{data.length > 0 ? 

 
     <Animated.FlatList data={data}
      
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
     
                     
                     <Image key={index} source={{uri:item.img}} style={styles.imgStore}/>
                     <Text style={styles.titulo}>{item.country}</Text>
                     <Text style={styles.direccion}>{item.city}</Text>
                     <TouchableOpacity
                      onPress={()=>{navigation.navigate('City',{itemId:item._id,});}}
             style={{backgroundColor:'grey',
                     padding:5,
                     marginTop: "1%",
                     width:"60%",
                     alignSelf:"center",
                     borderRadius:35,
                     borderColor:'black',
                     borderWidth:2,
                     marginBottom:8,
           }}
             >
              <Text style={{fontSize:25,textAlign: 'center',color: 'white',fontWeight: 'bold'}}>
                      SEE MORE
              </Text>
               
              
             </TouchableOpacity>
   
            </View>
            
           </View>
       )
      }}
      />
     : 
    
     
      
     <Animated.FlatList data={cities}
      
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{paddingTop:5}}
      decelerationRate={0}
      snapToInterval={ANCHO_CONTENEDOR}
      scrollEventThrottl={16}
      keyExtractor={(item) => item}
      renderItem={({item,index})=>{
       return (
           <View style={{width:ANCHO_CONTENEDOR}}>

            
            <View key={index}
            style={styles.card}
            >
     
                     
                     <Image  source={{uri:item.img}} style={styles.imgStore}/>
                     <Text style={styles.titulo}>{item.country}</Text>
                     <Text style={styles.direccion}>{item.city}</Text>
                     <TouchableOpacity
                   onPress={()=>{navigation.navigate('City',{itemId:item._id,});}}
             style={{backgroundColor:'grey',
                     padding:5,
                     marginTop: "1%",
                     width:"60%",
                     alignSelf:"center",
                     borderRadius:35,
                     borderColor:'black',
                     borderWidth:2,
                     marginBottom:8,
           }}
             >
              <Text style={{fontSize:25,textAlign: 'center',color: 'white',fontWeight: 'bold'}}>
                      SEE MORE
              </Text>
               
              
             </TouchableOpacity>
   
            </View>
           </View>
       )
      }}
      />   
     
    }
  
    </ScrollView>
    </View>  
    </ImageBackground> 
    
  )
}

const styles=StyleSheet.create({
    container:{
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },

    imgStore:{
        padding:18,
        backgroundColor: "white",
        width:'100%',
        height: ANCHO_CONTENEDOR*1.2,
        resizeMode:"cover",
        borderRadius:35,
        borderColor:'white',
        margin:0,
        marginBottom:10,
        borderWidth:3,

    },
    input: {
      width:180,
      height: 40,
      margin: 60,
      borderWidth: 3,
      padding: 10,
      borderColor:'black',
      backgroundColor:'white'
    },
    card:{
         backgroundColor:'#354259',
         marginTop:15,
         borderWidth:3,

    },
    titulo:{
      color: "white",
      fontSize: 42,
      lineHeight: 84,
      fontWeight: "bold",
      textAlign: "center",
      backgroundColor: '#354259',
    },
    direccion:{
      color: "white",
      fontSize: 42,
      lineHeight: 84,
      fontWeight: "bold",
      textAlign: "center",
      backgroundColor: '#354259',
    },
 
  });

export default Cities;