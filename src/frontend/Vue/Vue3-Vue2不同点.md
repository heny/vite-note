# Vue3-Vue2不同点

本节只讲在[Vue3-API](./Vue3-API)没有的内容

## 片段

template模板在2.x中，必须有一个父节点，3.x中可以不用包裹节点，相对的，$attrs则需要手动指定了

```vue
<template>
  <header>...</header>
  <main v-bind="$attrs">...</main>
  <footer>...</footer>
</template>
```

## v-model

### 绑定名字

v-model使用`modelValue`来接收，如果绑定一个变量，则用变量来接收

```html
<my-component v-model="book" v-model:title="bookTitle"></my-component>
```

```js
app.component('custom-form', {
    emits: ['update:modelValue', 'update:title'],
    template: `
		<input @input="$emit('update:title')" />
	`
})
```

### 绑定修饰符

v-model包含内置修饰符：`.trim`、`.number`、`.lazy`

也支持自定义的修饰符，自定义修饰符将传送到`this.modelModifiers`中

如果修饰符带参数，则prop的名称为：`arg + "Modifiers"`

```html
<my-component 
    v-model.capitalize="myText" 
    v-model:description.capitalize="myText"
/>
```

```js
app.component('my-component', {
  props: ['modelValue', 'modelModifiers', 'description', 'descriptionModifiers'],
  emits: ['update:modelValue', 'update:description'],
  template: `
    <input type="text"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)">
  `,
  created() {
    console.log(this.modelModifiers) // { capitalize: true }
  }
})
```



## 多个应用共享配置

```js
import { createApp } from 'vue'
import Foo from './Foo.vue'
import Bar from './Bar.vue'

const createMyApp = options => {
  const app = createApp(options)
  app.directive('focus' /* ... */)

  return app
}

createMyApp(Foo).mount('#foo')
createMyApp(Bar).mount('#bar')
```







