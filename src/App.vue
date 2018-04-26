<template>
  <section class="container index">
    <div class="col-12 col-p-12">
      <section class="section-info flex flex-wrap flex-jc-end col-12 col-p-12">
        <div>
          <h1>{{contents.profile.name}}</h1>
          <h4>{{contents.profile.description}}</h4>
          <div>
            <p>{{transformCareer}}</p>
            <p>{{contents.profile.dateOfBirth}}</p>
            <a :href="transformMailTo">{{contents.profile.email}}</a>
            <p v-for="link of contents.profile.links" :key="link.id">{{link.name}} - <a :href="link.href">{{link.href}}</a></p>
          </div>
        </div>
      </section>
      <section class="section-detail-info flex flex-wrap col-12">
        <section class="col-12 section-contents">
          <record-title title="자기소개"></record-title>
          <div v-html="contents.introduction"></div>
        </section>
        <section class="col-12 section-contents" v-for="(value, key) in contents.summary" :key="value.id">
          <record-title :title="key"></record-title>
          <record-list :title="key" :lists="value"></record-list>
        </section>
        <section class="col-12 section-contents margin-bottom-0">
          <record-title title="상세 경력"></record-title>
          <section v-for="(detailContent, key) in contents.detailContents" :key="detailContent.id">
            <h2>{{key}}</h2>
            <h5>{{detailContent.date}}</h5>
            <div class="div-sub-title">
              <h4>[회사 소개]</h4>
              <p>{{detailContent.info}}</p>
            </div>
            <div class="div-sub-title">
              <h4>[서비스]</h4>
              <p v-for="service in detailContent.service" :key="service.id" v-html="service"></p>
            </div>
            <div class="div-sub-title">
              <h4>[진행 프로젝트]</h4>
              <section class="col-12 section-contents" v-for="(project, key) in detailContent.project" :key="project.id">
                <record-list :title="key" :lists="project" ></record-list>
              </section>
            </div>
          </section>
        </section>
        <section class="col-12 section-contents" v-for="(value, key) in contents.contents" :key="value.id">
          <record-title :title="key"></record-title>
          <record-list :title="key" :lists="value"></record-list>
        </section>
      </section>
    </div>
  </section>
</template>

<script>
import Contents from './contents.js'
import RecordList from './components/RecordList.vue'
import RecordTitle from './components/RecordTitle.vue'

export default {
  name: 'index',
  components: {
    RecordList,
    RecordTitle
  },
  computed: {
    transformCareer () {
      const year = parseInt(this.career / 12)
      const month = parseInt(this.career % 12)
      let career = ''
      if (year != 0) { career += year + '년 ' }
      if (month != 0) { career += month + '개월' }
      return career + " 경력"
    },
    transformMailTo () {
      return `mailto:${this.contents.profile.email}`
    }
  },
  data () {
    return {
      contents: Contents,
      career: 0
    }
  },
  created () {
    this.$event.onCareerAdd((career) => {
      this.career += career
    })
  }
}
</script>

<style lang="less" scoped>
section {
  margin-bottom: 40px;
}
section:nth-last-child(1) {
  margin-bottom: 0px;
}
.margin-bottom-0 {
  margin-bottom: 0px;
}
.index {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 30px 15px;
  margin: 30px auto;
  overflow: hidden;
}
.section-info {
  text-align: right;
  h1, h4 {
    font-weight: bold;
    margin-bottom: 10px;
  }
}
.section-contents {
  h5 {
    margin-bottom: 30px;
    color: #9e9e9e;
  }
  .div-sub-title {
    margin-bottom: 40px;
    h4 {
      margin-bottom: 10px;
    }
  }
}
@media (min-width: 480px) {
  .index {
    padding: 30px;
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
@import url(//fonts.googleapis.com/earlyaccess/notosanskr.css);

@color-main: #f3f3f3;

* { box-sizing: border-box; }
body {
  background-color: @color-main;
  line-height: 1.5;
  color: #4a4a4a;
  font-family: 'Noto Sans KR';
}
h1 { font-size: 26px; font-weight: bold; }
h2 { font-size: 22px; font-weight: bold; }
h3 { font-size: 18px; font-weight: bold; }
h4 { font-size: 16px; font-weight: bold; }
h5 { font-size: 14px; font-weight: bold; }

a, a:focus, a:visited, a:active, a:hover {
  color: #4a4a4a;
  overflow-wrap: break-word;
  word-wrap: break-word;
  word-break: break-all;
}

.container {
  display: flex;
  flex-wrap: wrap;
  max-width: 1140px;
  margin: 0 auto;
  padding: 30px 15px;
  background-color: #ffffff;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.3);
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

.col-1 { max-width: 8.333333%; flex: 0 0 8.333333%; }
.col-2 { max-width: 16.666667%; flex: 0 0 16.666667%; }
.col-3 { max-width: 25%; flex: 0 0 25%; }
.col-4 { max-width: 33.333333%; flex: 0 0 33.333333%; }
.col-5 { max-width: 41.666667%; flex: 0 0 41.666667%; }
.col-6 { max-width: 50%; flex: 0 0 50%; }
.col-7 { max-width: 58.333333%; flex: 0 0 58.333333%; }
.col-8 { max-width: 66.666667%; flex: 0 0 66.666667%; }
.col-9 { max-width: 75%; flex: 0 0 75%; }
.col-10 { max-width: 83.333333%; flex: 0 0 83.333333%; }
.col-11 { max-width: 91.666667%; flex: 0 0 91.666667%; }
.col-12 { max-width: 100%; flex: 0 0 100%; }

// pc
@media (min-width: 480px) {
  .col-p-1 { max-width: 8.333333%; flex: 0 0 8.333333%; }
  .col-p-2 { max-width: 16.666667%; flex: 0 0 16.666667%; }
  .col-p-3 { max-width: 25%; flex: 0 0 25%; }
  .col-p-4 { max-width: 33.333333%; flex: 0 0 33.333333%; }
  .col-p-5 { max-width: 41.666667%; flex: 0 0 41.666667%; }
  .col-p-6 { max-width: 50%; flex: 0 0 50%; }
  .col-p-7 { max-width: 58.333333%; flex: 0 0 58.333333%; }
  .col-p-8 { max-width: 66.666667%; flex: 0 0 66.666667%; }
  .col-p-9 { max-width: 75%; flex: 0 0 75%; }
  .col-p-10 { max-width: 83.333333%; flex: 0 0 83.333333%; }
  .col-p-11 { max-width: 91.666667%; flex: 0 0 91.666667%; }
  .col-p-12 { max-width: 100%; flex: 0 0 100%; }
  .container { padding: 40px; }
}
</style>