import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
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
    headerTitle: selectedShrine.title,
    headerRight: <HeaderButtons HeaderButtonComponent={HeaderButton}>
      <Item title='Favorite' iconName='ios-star' onPress={() => {
        console.log('Mark as facorite');
      }} />
    </HeaderButtons>
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