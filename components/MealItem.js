import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const MealItem = props => {
  return (
    <View style={styles.mealItem}>
      <TouchableOpacity onPress={props.onSelect}>
        <View>
          <View style={styles.mealRow}>
            <Text>{itemData.item.title}</Text>
          </View>
          <View style={styles.mealRow}></View>
        </View>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  mealRow: {
    flexDirection: 'row'
  },
  mealItem: {
      height: 200,
      width: '100%',
      backgroundColor: '#ccc'
  }
})

export default MealItem
