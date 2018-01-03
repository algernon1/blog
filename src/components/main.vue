<template>
  <div class="container wrap">
    <div class="article-list">
      <ul class="items">
        <!-- <li v-for="(item,index) in articleList" class="item" :key="index">
          <nuxt-link class="title" :to="{name:'article-id',params:{id:item.date}}">{{item.title}}</nuxt-link>
          <article class="content">{{item.content | markdownParse | cutString(200)}}</article>
        </li> -->
        <li class="item">
          <router-link to="detail" class="title">Nuxt.js服务端渲染实践，从开发到部署</router-link> 
          <article class="content">感悟
  经过几个周六周日的尝试，终于解决了服务端渲染中的常见问题，当SEO不在是问题的时候，或许才是我们搞前端的真正的春天，其中也遇到了一些小坑，Nuxt.js官方还是很给力的，提issue后很积极的给予帮助，再次感...</article>
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
      <div class="tips" >
        <p>没有搜索到和
          <strong></strong>相关的文章！</p>
      </div>
      <div class="tips" >
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

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
