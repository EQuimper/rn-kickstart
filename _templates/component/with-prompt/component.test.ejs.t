---
to: src/components/<%= h.capitalize(componentName) %>/<%= h.capitalize(componentName) %>.test.js
---
// @noflow

import <%= h.capitalize(componentName) %> from './<%= h.capitalize(componentName) %>';

describe('<<%= h.capitalize(componentName) %> />', () => {

});
