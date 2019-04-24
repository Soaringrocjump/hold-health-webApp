<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import "@/assets/style/style.scss";
/* --reset */
* {
  font-family:"Microsoft YaHei", Arial, Helvetica, sans-serif;
  box-sizing: border-box;
  font-size: inherit;
}
body, dl, dd, p,  form, h1, h2, h3, h4, h5, h6{
  margin:0;
}	
ol,ul{
  margin:0;
  padding:0;
}
li {
  list-style: none;
}
dt,th,h1,h2,h3,h4,h5,h6 { 
  font-weight: normal; 
  font-size: 100%;
}
input,textarea{
  padding: 0;
  outline: none;
}
img {
  width: 100%;
  height: auto;
  vertical-align: top;
}
/* --reset */
/* --common */
body {
  min-height: 100vh;
  background-color: #F3F2F7;
}
.fl {
  float: left;
}
.fr {
  float: right;
}
.tl {
  text-align: left;
}
.tc {
  text-align: center;
}
.tr {
  text-align: right;
}
.clear-fix:before,.clear-fix:after,.clearfix:before,.clearfix:after {
  content: "";
  display: table;
  clear: both;
}
[w-750] {
  width: 750px;
}
/* --common */
/* --flex basic */
.display-flex {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  display: -webkit-flex;
}
.flex-direction-column {
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
}
.justify-content-start {
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
  -webkit-justify-content: flex-start;
}
.justify-content-center {
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-justify-content: center;
}
.justify-content-end {
  -webkit-box-pack: end;
  -ms-flex-pack: end;
  justify-content: flex-end;
  -webkit-justify-content: flex-end;
}
.justify-content-space-around {
  -ms-flex-pack: distribute;
  justify-content: space-around;
  -webkit-justify-content: space-around;
}
.justify-content-space-between {
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-justify-content: space-between;
}
.align-items-start {
  -webkit-box-align: start;
  -ms-flex-align: start;
  align-items: flex-start;
  -webkit-align-items: flex-start;
}
.align-items-center {
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-align-items: center;
}
.align-items-end {
  -webkit-box-align: end;
  -ms-flex-align: end;
  align-items: flex-end;
  -webkit-align-items: flex-end;
}
.flex-1 {
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  -webkit-flex: 1;
}
/* --flex basic */
</style>
