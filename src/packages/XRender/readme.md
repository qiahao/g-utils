# readme

## XRender

```js
function XRender (createElement, componentConfig, context) {}
```

## componentConfig

```js
var componentConfig = {
  tag: 'componentName',
  property: {
    on: { 
      click: 'handlerCLick'
    },
    props: {
      propsA: function () {
        return this.a
      }
    }
    ...
  },
  children: []
}
```