---
to: src/components/<%= h.capitalize(componentName) %>/<%= h.capitalize(componentName) %>.js
---
// @flow

import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

type P = {};

type S = {}

class <%= h.capitalize(componentName) %> extends Component<P, S> {
  state = {}

  render() {
    return (

    )
  }
}

const styles = StyleSheet.create({

});

export default <%= h.capitalize(componentName) %>;
