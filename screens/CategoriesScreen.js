import React from 'react';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { View, Text, Button, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
//import { FlatList } from 'react-native-gesture-handler';




import { CATEGORIES } from '../data/dummy-data';
import CategoryGridTile from '../components/CategoryGridTile';
import HeaderButton from '../components/HeaderButton';





const CategoriesScreen = props => {
  const renderGridItem = itemData => {
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onSelect={() => {
          props.navigation.navigate({
            routeName: 'CategoryMeals',
            params: {
              categoryId: itemData.item.id
            }
          });
        }}
      />

      // <TouchableOpacity
      //   style={styles.gridItem}
      //   onPress={() => {
      //     props.navigation.navigate({ routeName: 'CategoryMeals', params: {
      //       categoryId: itemData.item.id
      //     } });
      //   }}
      // >
      //   <View>
      //     <Text>{itemData.item.title}</Text>
      //   </View>
      // </TouchableOpacity>
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

CategoriesScreen.navigationOptions = navData => {
  return {
    headerTitle: 'Meal Categories',
    headerLeft: (<HeaderButtons HeaderButtonComponent={HeaderButton}>
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

// const styles = StyleSheet.create({

//   screen: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center'
//   }
// });

export default CategoriesScreen;