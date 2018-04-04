---
inject: true
to: src/components/index.js
skip_if: <%= h.capitalize(componentName) %>
prepend: true
---
export * from './<%= h.capitalize(componentName) %>';
