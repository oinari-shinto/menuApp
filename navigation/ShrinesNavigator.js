import { createStackNavigator } from 'react-navigation-stack'
/* import { createAppContainer } from 'react-navigation' */
import { createAppContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryShrines from '../screens/CategoryShrinesScreen';
import ShrineDetailScreen from '../screens/ShrineDetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen';

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
)

const ShrinesFavTabNavigator = createBottomTabNavigator({
    Shrines: ShrinesNavigator,
    Favorites: FavoritesScreen
}, {
  tabBarOptions: {
    activeTintColor: '#F57C00',
    
  },
});

export default createAppContainer(ShrinesFavTabNavigator)
