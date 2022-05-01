import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import ShrineItem from './ShrineItem';


const ShrineList = props => {
  const renderShrinesItem = itemData => {
    return <ShrineItem 
    title={itemData.item.title}
    image={itemData.item.imageUrl}
    duration={itemData.item.duration} 
    complexity={itemData.item.complexity}
    affordability={itemData.item.affordability}
    onSelect={() => {
      props.navigation.navigate({routeName: 'ShrineDetail', params: {
        shrineId: itemData.item.id
      }})
    }} />
  }
  return (
    <View style={styles.list}>
      <FlatList
        data={props.listData}
        keyExtractor={(item, index) => item.id}
        renderItem={renderShrinesItem}
        style={{width: '100%'}}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default ShrineList;