---
to: src/screens/<%= screenName %>Screen/<%= screenName %>Screen.js
---
// @flow

import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { type NavigationScreenProp } from 'react-navigation';

type P = {
  navigation: NavigationScreenProp
};

type S = {};

class <%= screenName %>Screen extends Component<P, S> {
  static navigationOptions = {
    title: '<%= screenName %>'
  }

  state = {}

  render() {
    return (

    )
  }
}

const styles = StyleSheet.create({

});

export default <%= screenName %>Screen;
