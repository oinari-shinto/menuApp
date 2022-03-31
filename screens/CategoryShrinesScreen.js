import React from 'react'
import { View, Text, StyleSheet, FlatList, Platform } from 'react-native'

import { CATEGORIES, SHRINES } from '../data/dummy-data'
import Colors from '../constants/Colors'
import ShrineItem from '../components/ShrineItem'

const CategoryShrinesScreen = props => {
  const renderShrinesItem = itemData => {
    return <ShrineItem 
    title={itemData.item.title}
    image={itemData.item.imageUrl}
    duration={itemData.item.duration} 
    complexity={itemData.item.complexity}
    affordability={itemData.item.affordability}
    onSelect={() => {}} />
  }
  const catId = props.navigation.getParam('categoryId')

  const displayedShrines = SHRINES.find(
    shrine => shrine.categoryIds.indexOf(catId) >= 0
  )
  /* const selectedCategory = CATEGORIES.find(cat => cat.id === catId); */
  return (
    <View style={styles.screen}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item, index) => item.id}
        renderItem={renderShrinesItem}
        style={{width: '100%'}}
      />
    </View>
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

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default CategoryShrinesScreen
