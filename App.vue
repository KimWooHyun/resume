<template>
  <section class="index">
    <div class="container col-12">
      <section class="section-info flex flex-wrap flex-jc-end col-12">
        <div>
          <h1>김우현</h1>
          <h4>Front-end developer</h4>
          <div>
            <p>3년 2개월 경력</p>
            <p>1996.11.05</p>
            <p>dngus242@gmail.com</p>
            <p>010-5496-2733</p>
            <a href="https://github.com/KimWooHyun">https://github.com/KimWooHyun</a>
          </div>
        </div>
      </section>
      <section class="section-detail-info flex flex-wrap col-12">
        <section class="col-12 section-contents" v-for="(value, key) in contents.contents" :key="value.id">
          <h1>{{key}}</h1>
          <table>
            <tbody class="col-12">
              <tr class="col-12" v-for="child in value" :key="child.id">
                <td class="col-3">{{child.date}}</td>
                <td class="col-4 td-title">{{child.title}}</td>
                <td class="col-5">
                  <div v-for="contents in child.contents" :key="contents.id" v-html="contents"></div>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </section>
    </div>
  </section>
</template>

<script>
import Contents from './contents.js'

export default {
  name: 'index',
  data () {
    return {
      contents: Contents
    }
  }
}
</script>

<style lang="less" scoped>
section {
  margin-bottom: 40px;
}
.index {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 30px;
}
.section-info {
  text-align: right;
  h1, h4 {
    font-weight: bold;
    margin-bottom: 10px;
  }
}
.section-detail-info {
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
}
</style>

<style lang="less">
/* reset css */

/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

/* custom */
@color-main: #604c8d;

body {
  background-color: @color-main;
  line-height: 1.5;
  color: #4a4a4a;
}
h1 { font-size: 26px; font-weight: bold; }
h2 { font-size: 22px; }
h3 { font-size: 18px; }
h4 { font-size: 16px; }
h5 { font-size: 14px; }

a, a:focus, a:visited, a:active, a:hover {
  color: #4a4a4a;
}

.container {
  display: flex;
  flex-wrap: wrap;
  max-width: 1140px;
  margin: 0 auto;
  padding: 30px;
  background-color: #ffffff;
  border-radius: 3px;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.25);
}

.flex { display: flex; }
.flex-wrap { flex-wrap: wrap; }
.flex-jc-start { justify-content: flex-start; }
.flex-jc-center{ justify-content: center; }
.flex-jc-end { justify-content: flex-end; }
.flex-ai-start { align-items: flex-start; }
.flex-ai-center { align-items: center; }
.flex-dir-column { flex-direction: column; }
.flex-dir-row-reverse { flex-direction: row-reverse; }

.col-1 { flex: 0 0 8.333333%; }
.col-2 { flex: 0 0 16.666667%; }
.col-3 { flex: 0 0 25%; }
.col-4 { flex: 0 0 33.333333%; }
.col-5 { flex: 0 0 41.666667%; }
.col-6 { flex: 0 0 50%; }
.col-7 { flex: 0 0 58.333333%; }
.col-8 { flex: 0 0 66.666667%; }
.col-9 { flex: 0 0 75%; }
.col-10 { flex: 0 0 83.333333%; }
.col-11 { flex: 0 0 91.666667%; }
.col-12 { flex: 0 0 100%; }
</style>