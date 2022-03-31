import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native'

const ShrineItem = props => {
  return (
    <View style={styles.shrineItem}>
      <TouchableOpacity onPress={props.onSelect}>
        <View>
          <View style={{...styles.shrineRow, ...styles.shrineHeader}}>
            <ImageBackground source={{url: props.image}} style={bgImage}>
              <Text style={styles.title} numberOfLines={1}>{props.title}</Text>
            </ImageBackground>
            
          </View>
          <View style={{...styles.shrineRow, ...styles.shrineDetail}}>
            <Text>{props.duration}m</Text>
            <Text>{props.complexity.toUpperCase()}</Text>
            <Text>{props.affordability.toUpperCase()}</Text>
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
  bgImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end'
  },
  shrineHeader: {
    height: '90%',

  },
  shrineDetail: {
    paddingHorizontal: 10,
    justifyContent: 'space-between'
  },
  shrineDetail: {
    paddingHorizontal: 10,
    justifyContent: 'space-between'
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 20,
    color: 'white',
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingVertical: 5,
    paddingHorizontal: 12,
    textAlign: 'center'
  }

})

export default ShrineItem
