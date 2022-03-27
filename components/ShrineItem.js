import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const ShrineItem = props => {
  return (
    <View style={styles.shrineItem}>
      <TouchableOpacity onPress={props.onSelect}>
        <View>
          <View style={{...styles.shrineRow, ...styles.shrineHeader}}>
            <Text>{props.title}</Text>
          </View>
          <View style={{...styles.shrineRow, ...styles.shrineDetail}}>
            <Text>{props.duration}m</Text>
            <Text>{props.complexity}</Text>
            <Text>{props.affordability}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  shrineRow: {
    flexDirection: 'row'
  },
  shrineItem: {
      height: 200,
      width: '100%',
      backgroundColor: '#ccc'
  },
  shrineHeader: {
    height: '90%',

  },
  shrineDetail: {
    paddingHorizontal: 10,
    justifyContent: 'space-between'
  }

})

export default ShrineItem
