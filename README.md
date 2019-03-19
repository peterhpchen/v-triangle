# v-triangle

<p align="center">
  <a href="https://www.npmjs.com/package/vue"><img src="https://img.shields.io/npm/v/v-triangle.svg" alt="Version"></a>
  <a href="https://www.npmjs.com/package/vue"><img src="https://img.shields.io/npm/l/v-triangle.svg" alt="License"></a>
</p>

Simple triangle icon which made by html element.

## Install

```shell
yarn add v-triangle
```

## Demo

[CodePen](https://codepen.io/peterhpchen/pen/NJMVvQ)

## Quick start

### Import globally

```js
// main.js or index.js

import Vue from 'vue';
import VTriangle from 'v-triangle';

Vue.use(VTriangle);

new Vue({
  ...
});
```

### Import locally

```js
// js in single file component

import VTriangle from 'v-triangle';
export default({
  components: {
      VTriangle
  }
})
```

## Attributes

Name|Type|Required|Default|Description
-|-|-|-|-
height|String|:white_check_mark:||Height of triangle. Its unit could be `ch`, `em`, `ex`, `rem`, `vh`, `vw`, `vmin`, `vmax`, `px`, `cm`, `mm`, `in`, `pc`, `pt`.
width|String|:white_check_mark:||Width of triangle. Its unit could be `ch`, `em`, `ex`, `rem`, `vh`, `vw`, `vmin`, `vmax`, `px`, `cm`, `mm`, `in`, `pc`, `pt`.
direction|String||up|Direction of triangle. It could be `up`, `down`, `left`, `right`.
color|String||black|Color of triangle. It could be any valid css color.

## Road map

- [ ] Set unpkg target.
- [ ] Unit test.
- [ ] Add Storybook.
- [ ] Add `up-right`, `up-left`, `down-``right`, `down-left` direction.