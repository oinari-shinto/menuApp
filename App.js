import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

import MealsNavigator from './navigation/MealsNavigator';
import { enableScreens } from 'react-native-screens';
import ShrinesNavigator from './navigation/ShrinesNavigator';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Colors from './constants/Colors';

enableScreens();
/* const fetchFonts = () => {
  return Font.loadAsync ({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  });
}; */
const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });
};

const Tab = createBottomTabNavigator();

export default function App() {
  const [dataLoaded, setDataLoaded] = useState(false);

  if (!dataLoaded) {
    return (
    <AppLoading 
    startAsync = {fetchFonts} 
    onFinish={() => setDataLoaded(true)}
    onError={(error)=> console.warn(error)}
    />
    );
  };
  /* <MealsNavigator /> */
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: Colors.accentColor
      }
      }
    >
      <ShrinesNavigator />

    </Tab.Navigator>
    
  );

  
  
  
   ;
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
