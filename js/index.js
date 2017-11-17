import React, { Component } from "react";
import { addNavigationHelpers } from "react-navigation";

import AppNavigator from './App.js';

export default class App extends Component {
  render() {
    return (
      <AppNavigator
        navigator={addNavigationHelpers({
          dispatch: this.props.dispatch,
          state: this.props.nav
        })}
      />
    )
  }
}
