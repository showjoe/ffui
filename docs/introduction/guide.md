# Quick Start

A short guide to help user get started in using the library.

You may also describe the features or design of the library briefly.

## Install

If you are using module bundlers such as Webpack, you can directly include package into your project via:

NPM:

``` bash
$ npm install @formfactory/ffui --save
```

or Yarn:

``` bash
$ yarn add @formfactory/ffui
```

You can individually import components

``` js
import Vue from 'vue'
import {checkbox} from '@formfactory/ffui/src/components'

Vue.component('checkbox',checkbox)
```

You can dynamically (lazy load) components using code like this:

``` js
import Vue from 'vue'
Vue.directive(_key, import( /* webpackChunkName: "chunk_name" */ '@formfactory/ffui/src/components/dropdown.vue').then(dropdown => dropdown))

```

Or import the whole library (each component and directive is [dynamically imported](https://webpack.js.org/guides/code-splitting/#dynamic-imports) by default)

``` js
import Vue from 'vue'
import ffui from '@formfactory/ffui/'
Vue.use(ffui)
```

You can use an options object to configure:  The code below will skip importing the modal guide

``` js
import Vue from 'vue'
import ffui from '@formfactory/ffui/'
Vue.use(ffui,{ components: { skip: ['modalGuide'] } })
```
