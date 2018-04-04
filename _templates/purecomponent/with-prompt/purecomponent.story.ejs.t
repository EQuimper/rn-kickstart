---
to: src/components/<%= componentName %>/<%= componentName %>.story.js
---
// @flow

import React from 'react'
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import <%= componentName %> from './<%= componentName %>'

storiesOf('<%= componentName %>', module).add('default', () => <<%= componentName %> />)
