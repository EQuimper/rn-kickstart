---
inject: true
to: src/components/stories.js
skip_if: <%= h.capitalize(componentName) %>
append: true
---
import './<%= h.capitalize(componentName) %>/<%= h.capitalize(componentName) %>.story';