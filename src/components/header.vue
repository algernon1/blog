<template>
	<div class="header">
      <div class="container info">
        <div class="nickname">邓云锋个人博客</div>
        <div class="intro">学无止尽</div>
      </div>
      <nav class="container nav">
        <ul>
          <li>
            <router-link to="/" class="nuxt-link-exact-active nuxt-link-active">首页
            </router-link>
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
          <input type="search" name="search" placeholder="search" v-model="searchVal" @keyup.enter="search">
        </div>
      </nav>
	</div>
</template>

<script>
  
  import {mapGetters, mapActions} from "vuex"
  export default {
    data() {
      return{
        searchVal:"",
        searchResult:[]
      }
    },
    mounted:function(){
    },
    methods:{
      //...mapActions(["increment","decrement"]),
      search() {
          this.$store.dispatch("search", {"val":this.searchVal,"tipType":1})
      }
    }
            
    //methods:mapActions(["search"])//将actions步骤放到actions.js但是不知道如何传参？

    
    // methods:mapActions([
    //   "search"
    // ])
    // methods:{
    //   searchArticle:function(){
    //     axios.post("/api/article/searchArticles",{"searchVal":this.searchVal}).then((res) => {
    //       console.log(res.data)
    //       this.searchResult = res.data;
    //     })
    //   }
    // }

  }
</script>