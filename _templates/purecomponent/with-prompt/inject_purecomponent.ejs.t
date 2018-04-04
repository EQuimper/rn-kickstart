---
inject: true
to: src/components/index.js
skip_if: <%= h.capitalize(componentName) %>
append: true
---
export * from './<%= h.capitalize(componentName) %>';