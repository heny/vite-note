<template>
  <Layout>
    <template #doc-after>
      <Comment />
    </template>
  </Layout>
</template>
<script lang='ts' setup>
import DefaultTheme from 'vitepress/theme'
import Comment from './components/Comment.vue'
const { Layout } = DefaultTheme
</script>
