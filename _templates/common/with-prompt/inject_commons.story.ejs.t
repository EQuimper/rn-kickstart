---
inject: true
to: src/commons/stories.js
skip_if: <%= h.capitalize(componentName) %>
append: true
---
import './<%= h.capitalize(componentName) %>/<%= h.capitalize(componentName) %>.story';