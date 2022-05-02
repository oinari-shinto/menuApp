import React from 'react';
import { Platform } from 'react-native';

import { CATEGORIES, SHRINES } from '../data/dummy-data';
import Colors from '../constants/Colors';
import ShrineList from '../components/ShrineList';

const CategoryShrinesScreen = props => {
  
  const catId = props.navigation.getParam('categoryId')

  const displayedShrines = SHRINES.find(
    shrine => shrine.categoryIds.indexOf(catId) >= 0
  )
  /* const selectedCategory = CATEGORIES.find(cat => cat.id === catId); */
  return (
    <ShrineList listData={displayedShrines} navigation={props.navigation}/>
  )
}

CategoryShrinesScreen.navigationOptions = navigationData => {
  const catId = navigationData.navigation.getParam('categoryId')

  const selectedCategory = CATEGORIES.find(cat => cat.id === catId)

  return {
    headerTitle: selectedCategory.title,
    headerStyle: {
      backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Color.primaryColor
  }
}



export default CategoryShrinesScreen
