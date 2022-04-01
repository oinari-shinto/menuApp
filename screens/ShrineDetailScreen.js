import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native';
import { SHRINES } from '../data/dummy-data';

const ShrineDetailScreen = () => {
  const shrineId = props.navigation.getParam('shrineId');
  const selectedShrine = SHRINES.find(shrine => shrine.id === shrineId)
  return (
    <View style={styles.screen}>
        <Text>{selectedShrine.title}</Text>
        <Button title='Go Back to Categories' onPress={() => {
          props.navigation.popToTop();
        }}/>
    </View>
  )
}

ShrineDetailScreen.navigationOptions = (navigatorData) => {
  const shrineId = navigatorData.navigation.getParam('shrineId');
  const selectedShrine = SHRINES.find(shrine => shrine.id === shrineId)

  return {
    headerTitle: selectedShrine.title;
  };
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
}); 

export default ShrineDetailScreen