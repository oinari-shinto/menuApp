import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryShrines from '../screens/CategoryShrinesScreen';
import ShrineDetailScreen from '../screens/ShrineDetailScreen';

const ShrinesNavigator = createStackNavigator({
    Categories: {
        screen: CategoriesScreen,
        navigationOptions: {
            headerTitle: 'Shrine Categories',
        }
    } ,
    CategoryShrines: {
        screen: CategoryShrines,
    },
    ShrineDetail: ShrineDetailScreen
},{
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
            },
            headerTintColor: Platform.OS === 'android' ? 'white' : Color.primaryColor
    }
});

export default createAppContainer(ShrinesNavigator);