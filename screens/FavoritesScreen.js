import React from 'react';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector } from 'react-redux';

import HeaderButton from '../components/HeaderButton';
import MealList from '../components/MealList';
//import {MEALS} from '../data/dummy-data';

const FavoritesScreen = props => {
  const favMeals = useSelector(state => state.meals.favoriteMeals);
  //  const favMeals = MEALS.filter(meal => meal.id === 'm1'  || meal.id === 'm2');
  return (
    <MealList
      listData={favMeals}
      navigation={props.navigation}
    />
  );
};

FavoritesScreen.navigationOptions = navData => {
  return {
    headerTitle: 'Your Favorites',
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName='ios-menu'
          onPress={() => {
            navData.navigation.toggleDrawer();
          }} />
      </HeaderButtons>
    )
  };
};

// FavoritesScreen.navigationOptions = {
//   headerTitle: 'Your Favorites'
// };

// const styles = StyleSheet.create({
//   screen: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center'
//   }
// });

export default FavoritesScreen;