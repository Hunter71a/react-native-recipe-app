import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

import CategoriesScreen from ('../screens/CategoriesScreen');
import CategoriesMealsScreen from ('../screens/CategoriesMealsScreen');
import MealDetailsScreen from ('../screens/MealDetailsScreen');

import FavoritesScreen from ('../screens/FavoritesScreen');

const MealsNavigator = createStackNavigator({
  Categories: CategoriesScreen,
  CategoriesMeals: {screen: CategoriesMealsScreen},
  MealDetail: MealDetailsScreen,
 // Favorites: FavoritesScreen
});

export default createAppContainer(MealsNavigator);