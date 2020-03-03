import React from 'react';
import { View, Text, Button, FlatList, Platform, StyleSheet, TouchableOpacity } from 'react-native';
//import { FlatList } from 'react-native-gesture-handler';

import { CATEGORIES } from '../data/dummy-data';
import Colors from '../constants/Colors';


const CategoriesScreen = props => {
  const renderGridItem = itemData => {
    return (
      <TouchableOpacity
        style={styles.gridItem}
        onPress={() => {
          props.navigation.navigate({ routeName: 'CategoryMeals', params: {
            categoryId: itemData.item.id
          } });
        }}
      >
        <View>
          <Text>{itemData.item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      keyExtractor={(item, index) => item.id}
      data={CATEGORIES}
      renderItem={renderGridItem}
      numColumns={2}
    />
    // <View style={styles.screen}>
    //   <Text>The Categories Screen!</Text>
    //   <Button title="Go to Meals!" onPress={() => {
    //     props.navigation.navigate({routeName: 'CategoryMeals' })
    //   }} />
    // </View>
  );
};

CategoriesScreen.navigationOptions = {
  headerTitle: 'Meal Categories',
  headerStyle: {
    backgroundColor: Colors.primaryColor,
    alignItems: 'center'
  },
  headerTintColor: Platform.OS === 'android' ?  'white' : Colors.primaryColor,

//  alignItems: 'center',

};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
  },
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default CategoriesScreen;