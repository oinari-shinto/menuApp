import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity
} from 'react-native'
import { Platform } from 'react-native-web';
import CategoryGridTile from '../components/CategoryGridTile';
import Colors from '../constants/Colors';

import { CATEGORIES } from '../data/dummy-data'

const CategoriesScreen = props => {
  const renderGridItem = itemData => {
    return (
      <CategoryGridTile 
      title={itemData.item.title} 
      color={itemData.item.color}
      onSelect={() => {
        props.navigation.navigate({ routeName: 'CategoryMeals', params: {
            categoryId: itemData.item.id
          } })
      }}/>
    )
  }
  return (
    <FlatList data={CATEGORIES} renderItem={renderGridItem} numColumns={2} />
  );
};

CategoriesScreen.navigationOptions = {
  headerTitle: 'Meal Categories',
  headerStyle: {
  backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
  },
  headerTintColor: Platform.OS === 'android' ? 'white' : Color.primaryColor
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  
})

export default CategoriesScreen
