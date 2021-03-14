<template>
  <main class="page">
    <div class="container">
      <slot name="top" />

      <div class="content">
        <Content />
      </div>

      <PageFooter />

      <NextAndPrevLinks />

      <slot name="bottom" />
    </div>
  </main>
</template>

<script setup lang="ts">
import PageFooter from './PageFooter.vue'
import NextAndPrevLinks from './NextAndPrevLinks.vue'
import CodeCopy from './Copy.vue'
import { useRoute } from 'vitepress';
import { onMounted, watch, createApp, nextTick } from 'vue';

const route = useRoute();

// 添加代码左上小点
function addCodeIcon(element) {
  const span: HTMLSpanElement = document.createElement('span')
  span.style = 'display: block;background: url("https://notecdn.heny.vip/code-header.png") 0px 2px / 40px no-repeat rgb(40, 44, 52);height: 35px;width: 100%;margin-bottom: -7px;border-radius: 5px;';
  Array.from(element.children).forEach(curEl => {
    if((curEl as HTMLSpanElement).nodeName === 'CODE') {
      element.insertBefore(span, curEl)
    }
  })
}

const update = () => {
  // 获取所有的dom，之后在所有的代码块上插入vue的组件
  const dom = Array.from(document.querySelectorAll('div[class*="language-"] pre'));
  console.log(dom, 'domdomdomd')
  dom.forEach(el => {
    // 添加span标签，增加三个小点
    addCodeIcon(el);

    // 判断一下，当前节点是不是已经插入了
    // if (/v-copy/.test(el.className)) {
    //   return;
    // }
    // // 创建copy组件
    const copy = createApp(CodeCopy);
    const copyEl = document.createElement('div');
    el.appendChild(copyEl)
    console.log(copy, 'copy');
    copy.mount(copyEl);
    // // 下面这些是组件的props以及一些私有属性
    // copy.code = el.textContent;
    // copy._parent = el;
    // copy.mount();
    // el.className += ` v-copy`;
    // // 将copy添加进代码区域
    // el.appendChild(copy);
  })
}

watch(() => route.path, async (val, oldVal) => {
  console.log(val);
  await nextTick();
  update();
}, { immediate: true })

</script>

<style scoped>
.page {
  padding-top: var(--header-height);
}

@media (min-width: 720px) {
  .page {
    margin-left: 16.4rem;
  }
}

@media (min-width: 960px) {
  .page {
    margin-left: 20rem;
  }
}

.container {
  margin: 0 auto;
  padding: 0 1.5rem 4rem;
  max-width: 48rem;
}

.content {
  padding-bottom: 1.5rem;
}
</style>
