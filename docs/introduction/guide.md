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
import {checkbox} from '@formfactory/ffui'

Vue.component('checkbox',checkbox)
```

Or import the whole library

``` js
import Vue from 'vue'
import ffui '@formfactory/ffui/'
Vue.use(ffui)
```
<textbox/>