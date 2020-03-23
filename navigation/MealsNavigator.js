import React from 'react';
import { Platform, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { Ionicons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import Colors from '../constants/Colors';
import FavoritesScreen from '../screens/FavoritesScreen';
import FiltersScreen from '../screens/FiltersScreen';
import MealDetailScreen from '../screens/MealDetailScreen';

//import FavoritesScreen from '../screens/FavoritesScreen';

const defaultStackNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
  },
  headerTitleStyle: {
    fontFamily: 'open-sans-bold'
  },
  headerBackTitleStyle: {
    fontFamily: 'open-sans'
  },
  headerTintColor:
    Platform.OS === 'android' ? 'white' : Colors.primaryColor,
  headerTitle: 'A Screen'
};

const MealsNavigator = createStackNavigator({
  Categories: {
    screen: CategoriesScreen
  },
  CategoryMeals: {
    screen: CategoryMealsScreen,
  },
  MealDetail: {
    screen: MealDetailScreen
    // headerTitle: 'Meal Details'
  }
},
  {
    //initialRouteName: 'MealDetail',   how to set up defined route name different than the order presented above.
    defaultNavigationOptions: defaultStackNavOptions
  });

const FavNavigator = createStackNavigator(
  {
    Favorites: FavoritesScreen,
    MealDetail: MealDetailScreen
  },
  {
    //initialRouteName: 'MealDetail',   how to set up defined route name different than the order presented above.
    defaultNavigationOptions: defaultStackNavOptions
  }
);

const tabScreenConfig = {
  Meals: {
    screen: MealsNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return <Ionicons name='ios-restaurant' size={25} color={tabInfo.tintColor} />;
      },
      tabBarColor: Colors.primaryColor,
      tabBarLabel: Platform.OS === 'android' ? <Text style={{fontFamily: 'open-sans-bold'}}>Meals</Text> : 'Meals'
    }
  },
  Favorites: {
    screen: FavNavigator,
    navigationOptions: {
      tabBarColor: Colors.accentColor,
      tabBarLabel: 'Favorites!',
      tabBarIcon: (tabInfo) => {
        return <Ionicons name='ios-star' size={25} color={tabInfo.tintColor} />;
      },
      tabBarColor: Colors.accentColor,
      tabBarLabel: Platform.OS === 'android' ? <Text style={{ fontFamily: 'open-sans-bold' }}>Favorites</Text> : 'Favorites'
    }
  }
};

const MealsFavTabNavigator =
  Platform.OS === 'android'
    ? createMaterialBottomTabNavigator(tabScreenConfig, {
      activeColor: 'white',
      shifting: true,
      barStyle: {
        backgroundColor: Colors.primaryColor
      }
    })
    : createBottomTabNavigator(tabScreenConfig, {
      //   Meals: {
      //     screen: MealsNavigator,
      //     navigationOptions: {
      //       tabBarIcon: (tabInfo) => {
      //         return <Ionicons name='ios-restaurant' size={25} color={tabInfo.tintColor} />;
      //       }
      //     }
      //   },
      //   Favorites: {
      //     screen: FavoritesScreen,
      //     navigationOptions: {
      //       tabBarLabel: 'Favorites!',
      //       tabBarIcon: (tabInfo) => {
      //         return <Ionicons name='ios-star' size={25} color={tabInfo.tintColor} />;
      //       }
      //     }
      //   }
      // }, {
      tabBarOptions: {
        labelStyle: {
          fontFamily: 'open-sans-bold'
        },
        activeTintColor: Colors.accentColor
      }
    });

const FiltersNavigator = createStackNavigator(
  {
    Filters: FiltersScreen
  },
  {
    navigationOptions: {
      drawerLabel: "Filters"
    },
    defaultNavigationOptions: defaultStackNavOptions
  });

const MainNavigator = createDrawerNavigator({
  MealFavs: {
    screen: MealsFavTabNavigator,
    navigationOptions: {
      drawerLabel: 'Meals'
    }
  },
  Filters: FiltersNavigator
},
  {
    contentOptions: {
      activeTintColor: Colors.accentColor,
      labelStyle: {
        fontFamily: 'open-sans-bold', 
       // textAlign: ''
      }
    }
  });

export default createAppContainer(MainNavigator);