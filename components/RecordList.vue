<template>
  <table>
    <tbody class="col-12">
      <tr class="col-12" v-for="child in lists" :key="child.id">
        <td class="col-3">{{child.date}}</td>
        <td class="col-4 td-title">{{child.title}}</td>
        <td class="col-5">
          <div v-for="contents in child.contents" :key="contents.id" v-html="contents"></div>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'record-list',
  props: {
    lists: {
      type: Array
    }
  }
}
</script>

<style lang="less" scoped>
.section-contents {
  margin-bottom: 50px;
  h1 {
    border-bottom: 5px solid rgba(96, 76, 141, 0.9);
    margin-bottom: 20px;
  }
  table, tbody, tr {
    display: flex;
    flex-wrap: wrap
  }
  td {
    padding-bottom: 20px;
  }
  tr:nth-last-child(1) {
    td {
      padding-bottom: 0px;
    }
  }
  .td-title {
    font-weight: bold;
  }
}
</style>
