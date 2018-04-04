---
to: src/components/<%= componentName %>/<%= componentName %>.js
---
// @flow

import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

type P = {};

type S = {}

class <%= componentName %> extends Component<P, S> {
  state = {}

  render() {
    return (

    )
  }
}

const styles = StyleSheet.create({

});

export default <%= componentName %>;
