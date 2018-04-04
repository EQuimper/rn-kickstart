---
to: src/commons/<%= h.capitalize(componentName) %>/<%= h.capitalize(componentName) %>.js
---
// @flow

<% if (componentStyle.trim() === 'sf') { %>
import React, { PureComponent } from 'react';
import { StyleSheet } from 'react-native';

type P = {};

type S = {};

class <%= h.capitalize(componentName) %> extends PureComponent<P, S> {
  render() {
    return (

    )
  }
}

const styles = StyleSheet.create({

});

export default <%= h.capitalize(componentName) %>;

<% } else if (componentStyle.trim() === 'sl') { %>
import React from 'react';
import { StyleSheet } from 'react-native';

type P = {};

const <%= h.capitalize(componentName) %> = (props: P) => (

);

const styles = StyleSheet.create({

});

export default <%= h.capitalize(componentName) %>;

<% } %>
