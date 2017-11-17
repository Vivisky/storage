import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';
import { StackNavigator } from 'react-navigation';

import P1 from './views/p1';
import P2 from './views/p2';
import P3 from './views/p3';
import P4 from './views/p4';
import P5 from './views/p5';

const RootNavigator = StackNavigator({
  Home: {
    screen: P1,
    navigationOptions: {
      headerTitle: 'Home',
    },
  },
  Details: {
    screen: P2,
    navigationOptions: {
      headerTitle: 'Details',
    },
  },
})

export default RootNavigator
