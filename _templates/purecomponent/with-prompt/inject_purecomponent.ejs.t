---
inject: true
to: src/components/index.js
skip_if: <%= h.capitalize(componentName) %>
prepend: false
---
export * from './<%= h.capitalize(componentName) %>';
