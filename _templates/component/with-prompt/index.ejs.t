---
to: src/components/<%= h.capitalize(componentName) %>/index.js
---
// @flow

export { default as <%= h.capitalize(componentName) %> } from './<%= h.capitalize(componentName) %>';
