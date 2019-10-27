
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer, createStackNavigator} from 'react-navigation'
import SearchScreen from "./src/screens/SearchScreen";
import ResultsShowScreen from "./src/screens/ResultsShowScreen";

const navigator = createStackNavigator({
  Search:SearchScreen,
  ResultsShow:ResultsShowScreen
},{
  initialRouteName:'Search',
  defaultNavigationOptions:{
    title:'BusinessSearch'
  }
});
export default createAppContainer(navigator);
