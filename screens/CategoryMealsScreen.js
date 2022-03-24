import React from 'react'
import { View, Text, StyleSheet, FlatList, Platform } from 'react-native';

import { CATEGORIES, MEALS } from '../data/dummy-data';
import Colors from '../constants/Colors';

const CategoryMealsScreen = (props) => {
  const renderMealsItem = itemData => {
    return(<View><Text>{itemData.item.title}</Text></View>);
  };
  const catId = props.navigation.getParam('categoryId');

  const displayedMeals = MEALS.find(meal => meal.categoryIds.indexOf(catId) >= 0 );
  /* const selectedCategory = CATEGORIES.find(cat => cat.id === catId); */
  return (
    <View style={styles.screen}>
        <FlatList data={displayedMeals} keyExtractor={(item, index) => item.id} renderItem={renderMealsItem}/>
    </View>
  );
};

CategoryMealsScreen.navigationOptions = (navigationData) => {
  const catId = navigationData.navigation.getParam('categoryId');

  const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

  return {
    headerTitle: selectedCategory.title,
    headerStyle: {
      backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
      },
      headerTintColor: Platform.OS === 'android' ? 'white' : Color.primaryColor
  };
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
}); 

export default CategoryMealsScreen