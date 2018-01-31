<template>
  <div id="app">
    <com-header></com-header>  
    <router-view/>
    <com-footer></com-footer>
  </div>
</template>

<script>
import comHeader from "@/components/header.vue"
import comFooter from "@/components/footer.vue"
export default {
  data(){
    return{

    }
  },
  components:{
    comHeader,
    comFooter
  }
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
