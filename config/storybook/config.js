/* eslint-disable import/no-extraneous-dependencies */
import { addDecorator, configure } from '@storybook/vue'

const req = require.context('../../src/stories', true, /.stories.js$/)

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

addDecorator(() => `<div style="display: flex; justify-content: center; padding: 16px;"><story /></div>`)

configure(loadStories, module)
