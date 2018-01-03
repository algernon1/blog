<template>
  <div id="app">
    <header class="header">
      <div class="container info">
        <div class="nickname">邓云锋个人博客</div>
        <div class="intro">学无止尽</div>
      </div>
      <nav class="container nav">
        <ul>
          <li>
            <a href="javascript:;" class="nuxt-link-exact-active nuxt-link-active">首页</a>
          </li>
          <li>
            <a href="javascript:;">css</a>
          </li>
          <li>
            <a href="javascript:;">js</a>
          </li>
          <li>
            <a href="javascript:;">webpack+vue</a>
          </li>
        </ul>
        <div class="search">
          <input type="search" name="search" placeholder="search" >
        </div>
      </nav>
    </header>
    <router-view/>
    <footer class="container footer">
      <div class="copy">
        <div class="licensed">Licensed under 
          <a href="javascript:;">GPL-3.0</a> license.
        </div>
        <div class="powered">Powered by 
          <a href="javascript:;">VueBlog</a>. Theme by <a href="javascript:;">wmui</a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'app'
}
// import Vue from 'vue';
// Vue.component('vFooter', {
//   template: '<div>footer</div>'
// })
</script>

<style>
#app {
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;*/
}
</style>
