---
to: src/screens/<%= h.capitalize(screenName) %>Screen/<%= h.capitalize(screenName) %>Screen.js
---
// @flow

import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { type NavigationScreenProp } from 'react-navigation';

type P = {
  navigation: NavigationScreenProp
};

type S = {};

class <%= h.capitalize(screenName) %>Screen extends Component<P, S> {
  static navigationOptions = {
    title: '<%= h.capitalize(screenName) %>'
  }

  state = {}

  render() {
    return (

    )
  }
}

const styles = StyleSheet.create({

});

export default <%= h.capitalize(screenName) %>Screen;
