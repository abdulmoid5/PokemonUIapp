import React, {Component} from 'react';
import {StatusBar, Dimensions, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import Pokemons from './Components/Pokemons';
import Details from './Components/Details';
import Splash from './Components/Splash';




const Stack = createStackNavigator();



class App extends Component {
  render() {
    return (
      <>
        <StatusBar hidden />
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Splash" headerMode="none">
          <Stack.Screen name="Splash" component={Splash} />
            <Stack.Screen name="Pokemons" component={Pokemons} />
            <Stack.Screen name="Details" component={Details} />
          </Stack.Navigator>
        </NavigationContainer>
      </>
    );
  }
}

export default App;
