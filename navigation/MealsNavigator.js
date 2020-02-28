import {createStackNavigator, createAppContainer} from 'react-navigation-stack';

import CategoriesScreen from ('../screens/CategoriesScreen');
import CategoriesMealsScreen from ('../screens/CategoriesMealsScreen');
import MealDetailsScreen from ('../screens/MealDetailsScreen');

import FavoritesScreen from ('../screens/FavoritesScreen');


createStactNavigator({
  Categories: CategoriesScreen,
  CategoriesMeals: {screen: CategoriesMealsScreen},
  MealDetail: MealDetailsScreen,
 // Favorites: FavoritesScreen
});

export default createAppContainer(MealsNavigator);