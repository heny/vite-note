# vue响应式语法糖

> 官方：https://cn.vuejs.org/guide/extras/reactivity-transform.html

## 废弃原因

1. 丢失`.value`会让人不方便找到哪个值是响应式的，小型的项目不那么明显，大型代码会让心理开销变得更明显
2. 在与原始的ref一起使用时，互相的转换不可避免，增加了学习成本

如果不受废弃原因的影响，还是可以继续使用的

如果不加语法糖，项目也会出现很多的.value，也会存在丢失.value的情况



## 安装方法

1. 安装依赖

```bash
pnpm add -D unplugin-vue-macros
```

2. 配置vite

```ts
// vite.config.ts
import Vue from '@vitejs/plugin-vue'
import VueMacros from 'unplugin-vue-macros/vite'
// import VueJsx from '@vitejs/plugin-vue-jsx'
// import VueRouter from 'unplugin-vue-router/vite'

export default defineConfig({
  plugins: [
    VueMacros({
      plugins: {
        vue: Vue(),
        // vueJsx: VueJsx(), // 如有需要
        // vueRouter: VueRouter({ // 如有需要
        //   extensions: ['.vue', '.setup.tsx']
        // })
      },
      // 覆盖插件选项
    }),
  ],
})
```

3. 配置ts支持

```json
// tsconfig.json
{
  "compilerOptions": {
    // ...
    "types": ["unplugin-vue-macros/macros-global" /* ... */]
  }
}
```

4. 配置Volar支持

```json
{
  "vueCompilerOptions": {
    "plugins": ["unplugin-vue-macros/volar"],
  },
}
```

5. 配置eslint支持

```js
modules.exports = {
      globals: {
        // vue reactivity transform
        $: 'readonly',
        $$: 'readonly',
        $ref: 'readonly',
        $shallowRef: 'readonly',
        $computed: 'readonly',
        $customRef: 'readonly',
        $toRef: 'readonly',
        $defineProps: 'readonly',
      }
}
```

## 基本使用

### $ref

```html
<script setup lang='ts'>
const count = $ref(1)
count++
console.log(count) // 2
</script>
```

### $defineProps

```ts
const {
    msg,
    // 默认值正常可用
    count = 1,
    // 解构时命别名也可用
    // 这里我们就将 `props.foo` 命别名为 `bar`
    foo: bar
} = $defineProps<{
    msg: string
    count?: number
    foo?: string
}>()
```



## 原始的ref与$ref互相转换

```html
<script setup lang='ts'>
const count = $ref(1)
// 使用 $$ 作为响应式传递给useDemo
useDemo($$(count))
    
// 使用 $ 将原始的ref转换为$ref
const { num } = $(useDemo())
// 对于defineModel也适用
const input = $(defineModel<string>('input'))
</script>
```

```ts
function useDemo() {
    const num = $ref(1)
    // 使用 $$ 作为响应式返回
    return $$({ num })
}
```



