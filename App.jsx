
import React from 'react'
import MainContainer from './navigation/MainContainer';
import { StyleSheet, Text, View, ScrollView,ImageBackground,SafeAreaView} from 'react-native';
import {Provider} from 'react-redux';
import {configureStore as createStore} from '@reduxjs/toolkit';
import mainReducer from './src/redux/reducers/mainReducer';



const reduxStore=createStore({reducer:mainReducer});

export default function App(navigation) {

  return ( 

    
    <Provider store={reduxStore}>
    
  

      <SafeAreaView  style={styles.container}>
     
      <MainContainer/>
     
    
    </SafeAreaView>
        
    
        
     
    
    </Provider>
    
  
  );

 


  
}

const styles=StyleSheet.create({
  container:{
    flex: 1,
  
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
});

