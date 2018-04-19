<template>
  <table>
    <tbody class="col-12">
      <tr class="col-12" v-for="child in children" :key="child.id">
        <td class="col-12 col-p-2" v-html="child.date"></td>
        <td class="col-12 col-p-5 td-title">{{child.title}}</td>
        <td class="col-12 col-p-5">
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
  },
  data () {
    return {
      children: []
    }
  },
  created () {
    for (let list in this.lists) {
      let date = ''
      if (typeof(this.lists[list].date) == "object") {
        let date1 = new Date(this.lists[list].date[0].replace('.', '-'))
        let date2 = this.lists[list].date[1] == "현재" ? new Date() : new Date(this.lists[list].date[1].replace('.', '-'))
        let diff = parseInt((date2 - date1) / (24 * 60 * 60 * 1000 * 30)) + 1
        let year = parseInt(diff / 12)
        let month = parseInt(diff % 12)
        date += this.lists[list].date[0] + ' - ' + this.lists[list].date[1] + '<br/>'
        if (year != 0) { date += year + '년 ' }
        if (month != 0) { date += month + '개월' }
        this.$event.emitCareerAdd(diff)
      } else {
        date = this.lists[list].date
      }
      this.children.push({
        date: date,
        title: this.lists[list].title,
        contents: this.lists[list].contents
      })
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
  tr {
    margin-bottom: 20px;
    border-bottom: dashed 1px #dddddd;
  }
  td {
    padding-bottom: 10px;
  }
  .td-title {
    font-weight: bold;
  }
}

@media (min-width: 480px) {
  .section-contents {
    td {
      padding-bottom: 20px;
    }
  }
}
</style>
