import * as React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';


// Screens
import Main from '../src/component/Main';
import Cities from '../src/component/Cities';
import CitieDetail from "../src/component/CitieDetail";

//Screen names
const homeName = "Home";
const citiesName = "Cities";
const City="City";


const Tab = createBottomTabNavigator();

function MainContainer() {
  return (

    <NavigationContainer>
      <Tab.Navigator 

        initialRouteName={homeName}
        screenOptions={({ route }) => ({

          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused ? 'home' : 'home-outline';

            } else if (rn === citiesName) {
              iconName = focused ? 'map' : 'map-sharp';

            } else if (rn === City) {
              iconName = focused ? 'airplane' : 'airplane';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarLabelStyle={{
          activeTintColor: 'grey',
          inactiveTintColor: 'black',
          labelStyle: { paddingBottom: 10, fontSize: 10},
          style: { padding: 10, height: 70, },

        }}>

        <Tab.Screen name={homeName} component={Main} />
        <Tab.Screen name={citiesName} component={Cities} />
        <Tab.Screen name={City} component={CitieDetail} />
        

      </Tab.Navigator>
    </NavigationContainer>

  );
}

export default MainContainer;