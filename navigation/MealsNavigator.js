import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import Colors from '../constants/Colors';
import MealDetailScreen from '../screens/MealDetailScreen';

//import FavoritesScreen from ('../screens/FavoritesScreen');

const MealsNavigator = createStackNavigator({
  Categories: {
    screen: CategoriesScreen,
    navigationOptions: {
      headerTitle: 'Meal Categories'
    }
  },
    CategoryMeals: {
      screen: CategoryMealsScreen 

    },
  MealDetail: MealDetailScreen
}, 
{
  defaultNavigationOptions: {
    navigationOptions: {
      headerStyle: {
        backgroundColor: Colors.primaryColor,
          alignItems: 'center'
      },
      headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,

      }
  }
  });

export default createAppContainer(MealsNavigator);