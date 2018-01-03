<template>
  <h1>
    <span>{{title}}</span>
  </h1>
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
  span {
    border-bottom: 5px solid #4a4a4a;
  }
  margin-bottom: 20px;
}
</style>
