import * as React from 'react'
import { createStackNavigator } from 'react-navigation-stack'
/* import { createAppContainer } from 'react-navigation' */
import { createAppContainer } from '@react-navigation/native'
/* import { createBottomTabNavigator } from '@react-navigation/bottom-tabs' */
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { Ionicons } from '@expo/vector-icons';
import {Platform} from 'react-native';

import CategoriesScreen from '../screens/CategoriesScreen'
import CategoryShrines from '../screens/CategoryShrinesScreen'
import ShrineDetailScreen from '../screens/ShrineDetailScreen'
import FavoritesScreen from '../screens/FavoritesScreen'
import { createMaterialBottomTabs } from 'react-navigation-material-bottom-tabs'


const ShrinesNavigator = createStackNavigator(
  {
    Categories: {
      screen: CategoriesScreen,
      navigationOptions: {
        headerTitle: 'Shrine Categories'
      }
    },
    CategoryShrines: {
      screen: CategoryShrines
    },
    ShrineDetail: ShrineDetailScreen
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
      },
      headerTintColor: Platform.OS === 'android' ? 'white' : Color.primaryColor
    }
  }
);

const tabScreenConfig = {
  Shrines: { screen: ShrinesNavigator, navigationOptions: {
    toolbarIcon: (tabInfo) => {
      return <Ionicons name='user-ninja' size={25} color={tabInfo.tintColor}/>
    }
  } },
  Favorites: { screen: FavoritesScreen, navigationOptions: {
    toolbarIcon: (tabInfo) => {
      return <Ionicons name='user-star' size={25} color={tabInfo.tintColor}/>
    }
  } },
}

const ShrinesFavTabNavigator = Platform.OS = 'android' 
? createMaterialBottomTabs(tabScreenConfig) 
: createBottomTabNavigator(tabScreenConfig)

export default createAppContainer(ShrinesFavTabNavigator)
