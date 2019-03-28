/* eslint-disable import/no-extraneous-dependencies */
import { addParameters, addDecorator, configure } from '@storybook/vue'

import theme from './theme';

const req = require.context('../../src/stories', true, /.stories.js$/)

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

addParameters({
  options: {
    theme: theme
  }
})

addDecorator(() => `<div style="display: flex; justify-content: center; padding: 16px;"><story /></div>`)

configure(loadStories, module)
