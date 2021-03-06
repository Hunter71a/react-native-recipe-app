import React from 'react';
import {useSelector} from 'react-redux';
import { View, Text, Button, StyleSheet, FlatList } from 'react-native';

import { CATEGORIES, MEALS } from '../data/dummy-data';
// import MealItem from '../components/MealItem';
import MealList from '../components/MealList';
import DefaultText from '../components/DefaultText';

// import Colors from '../constants/Colors';

const CategoryMealsScreen = props => {
  const catId = props.navigation.getParam('categoryId');
  // const catId = props.navigation.getParam('categoryId');

const availableMeals = useSelector(state => state.meals.filteredMeals);

  const displayedMeals = availableMeals.filter(
    meal => meal.categoryIds.indexOf(catId) >= 0
  );

  if (displayedMeals.length === 0) {
    return (
    <View style={styles.content}>
<DefaultText>No meals found, maybe check your filters?</DefaultText>
    </View>
    );
  }

  return (
  <MealList 
    listData={displayedMeals}
    navigation={props.navigation}  
  />);
};

// const renderMealItem = itemData => {
//   return <MealItem
//     title={itemData.item.title}
//     image={itemData.item.imageUrl}
//     duration={itemData.item.duration}
//     affordability={itemData.item.affordability}
//     complexity={itemData.item.complexity}
//     onSelectMeal={() => { 
//       props.navigation.navigate({routeName: 'MealDetail', params: {
//         mealId: itemData.item.id
//       } })
//     }}
//   />;
// };


// const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

//const displayedMeals = MEALS.filter(meal => meal.categoryIds.indexOf(catId) >= 0)
// return (
//   <View style={styles.screen}>
//     <FlatList
//       data={displayedMeals}
//       keyExtractor={(item, index) => item.id}
//       renderItem={renderMealItem}  
//       style={{ width: '100%' }}
//     />
{/* <Text>The Category Meals Screen!</Text>
      <Text>Selected Category:  {selectedCategory.title}</Text>
      <Button title="Meal Detail Screen" onPress={() => {
        props.navigation.navigate('MealDetail')
      }} />
      <Button title="Go Back" onPress={() => {
        props.navigation.pop();

      }} /> */}
//   </View>
// );
// };

CategoryMealsScreen.navigationOptions = (navigationData) => {
  const catId = navigationData.navigation.getParam('categoryId');
  const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

  return {
    headerTitle: selectedCategory.title
  };
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});


// const styles = StyleSheet.create({
//   screen: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center'
//   }
// });

export default CategoryMealsScreen; 