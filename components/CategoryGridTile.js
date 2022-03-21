import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';

const CategoryGridTile = (props) => {
    
  return (
    <TouchableOpacity
        style={styles.gridItem}
        onPress={props.onSelect}
      >
        <View style={{backgroundColor: props.color}}>
          <Text>{props.title}</Text>
        </View>
      </TouchableOpacity>
  )
};

const style = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 15
      }
});

export default CategoryGridTile