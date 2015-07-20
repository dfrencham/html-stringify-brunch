# html-stringify-brunch
Adds stringify pass-through support to brunch (really useful if you use AMD modules, and you want to load them via text.js).

This means you can have your HTML templates pass through the Brunch pipeline - allowing them to be wrapped in AMD define statements, and combined into a single file.

## Install
Install the plugin via npm with `npm install --save html-stringify-brunch`.

Or, do manual install by adding `"html-stringify-brunch": "x.y.z"` to `package.json` of your brunch app.

## Usage

### Example - using templated views with AMD module loader

This example assumes your app is laid out as follows:

```
app\
  assets\
    index.html
  components\
    example-component\
      view.html
      viewmodel.js
    example-component-2\
      view.html
      viewmodel.js
  styles\
    main.css
  application.js
```
Note that there is a **components** folder, containing multiple components. The goal is to have the component html files combined, and wrapped with AMD define statements in a way that **text.js** can consume.

When configuring your brunch build, do the following:

1. In your module definition is set to **'amd'**.
2. In the **files** section, add an entry for **templates** with a joinTo pointed at your component folder.
3. In the **modules** section, set **wrapper** to a custom function (as shown). Note that in the case of an item existing in our component folder, we use **text!** in our define statement - allowing text.js to load the module.

```coffeescript
module.exports = config:
  files:
    javascripts:
      joinTo:
      	'app.js': /^app/
      	'vendor.js': /^(vendor)[\\/]/
    stylesheets: joinTo: 'app.css'
    templates:
        precompile: true
        joinTo: 'templates.js': /^app\/components/
  modules:
    wrapper: (path, data) ->
      if path.indexOf('app\/components) == 0')
          staticPath = path.replace /^app\/components/, 'text!components'
          """
  require.define({#{staticPath}: function(exports, require, module) {
    #{data}
  }});\n\n
          """
      else
          """
  require.define({#{path}: function(exports, require, module) {
    #{data}
  }});\n\n
          """
    definition: 'amd'
```

## License

The MIT License (MIT)

Copyright (c) 2015

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
