---
to: src/components/<%= h.capitalize(componentName) %>/<%= h.capitalize(componentName) %>.story.js
---
// @flow

import React from 'react'
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import <%= h.capitalize(componentName) %> from './<%= h.capitalize(componentName) %>'

storiesOf('<%= h.capitalize(componentName) %>', module).add('default', () => <<%= h.capitalize(componentName) %> />)
