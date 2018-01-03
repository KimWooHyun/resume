<template>
  <h1>{{title}}</h1>
</template>

<script>
export default {
  name: 'record-title',
  props: {
    title: {
      type: String
    }
  }
}
</script>

<style lang="less" scoped>
h1 {
  border-bottom: 5px solid rgba(96, 76, 141, 0.9);
  margin-bottom: 20px;
}
</style>
