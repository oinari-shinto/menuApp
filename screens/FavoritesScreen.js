import React from 'react'
import ShrineList from '../components/ShrineList';
import SHRINES from '../data/dummy-data';

const FavoritesScreen = (props) => {
  favShrines = SHRINES.filter(Shrine => Shrine.id === 'm1' || Shrine.id === 'm2')
  return (
    <ShrineList listData={favShrines} navigation = {props.navigation}/>
  )
}

FavoritesScreen.navigationOption = {
  headerTitle: 'Shrine Favorites'
};



export default FavoritesScreen