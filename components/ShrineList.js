import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';

const ShrineList = props => {
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