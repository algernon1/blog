<template>
  <div class="container wrap">
    <div class="article-list">
      <ul class="items" v-show="!isSearch">
        <!-- <li v-for="(item,index) in articleList" class="item" :key="index">
          <nuxt-link class="title" :to="{name:'article-id',params:{id:item.date}}">{{item.title}}</nuxt-link>
          <article class="content">{{item.content | markdownParse | cutString(200)}}</article>
        </li> -->
        <li class="item" v-for="item,index in articleData">
          <router-link  :to="{path:'/detail/'+item.articleId,params:item}"  class="title">
            {{index}}{{item.articleName}}{{item.articleId}}
          </router-link> 
          <article class="content">{{item.articleContent}}</article>
        </li>
      </ul>
      <ul class="items" v-show="hasResult">
        <li class="item" v-for="item,index in resultData">
          <router-link  :to="{path:'/detail/'+item.articleId,params:item}"  class="title">
            {{index}}{{item.articleName}}{{item.articleId}}
          </router-link> 
          <article class="content">{{item.articleContent}}</article>
        </li>
      </ul>
      <!-- <div class="tips" v-if="articleList.length === 0 && this.$route.name === 'search'">
        <p>没有搜索到和
          <strong>{{ category }}</strong>相关的文章！</p>
      </div>
      <div class="tips" v-if="articleList.length === 0 && this.$route.name !== 'search'">
        <p>哇哦，一篇文章都没有!</p>
      </div>
      <div class="page" v-show="maxPage > 1">
        <a v-if="page > 1" class="prev" @click="prevPage">《上一页</a>
        <a v-else class="disabled prev">《上一页</a>
        <a v-if="hasMore" class="next" @click="nextPage">下一页》</a>
        <a v-else class="disabled next">下一页》</a>
      </div> -->
      <div class="tips" v-show="!hasResult&&isSearch">
        <p>没有搜索到和
          <strong>{{searchName}}</strong>相关的文章！</p>
      </div>
      <div class="tips" v-show="articleTips">
        <p>哇哦，一篇文章都没有!</p>
      </div>
      <div class="page" >
        <a class="disabled prev">《上一页</a>
        <a class="disabled next">下一页》</a>
      </div>
      
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import store from '@/vuex/store'
  import {mapGetters, mapActions} from "vuex"
  export default {
    data(){
      return {
        articleData:[], 
        articleTips:false
      }
    },
    computed:mapGetters([//实时变化吐出数据？vuex
      "resultData",
      "isSearch",
      "hasResult",
      "searchName"

    ]),
    mounted:function(){
      this.articleList();
    },
    methods:{
      articleList:function(){
        axios.get("/api/article/articleList").then((res) => {
          this.articleData = res.data;
          if(this.articleData.length==0){
            this.articleTips = true;
          }else{
            this.articleTips = false;
          }
        })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
