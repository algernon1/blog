<template>
  <div class="container wrap">
    <div class="article-detail">
      <h3 class="title">{{articleDetail.articleName}}</h3>
      <div class="content-preview markdown-body">{{articleDetail.articleContent}}</div>
      <!-- <div class="content-preview markdown-body">
        <h2>感悟</h2> 
        <p>经过几个周六周日的尝试，终于解决了服务端渲染中的常见问题，当SEO不在是问题的时候，或许才是我们搞前端的真正的春天，其中也遇到了一些小坑，Nuxt.js官方还是很给力的，提issue后很积极的给予帮助，再次感谢Nuxt.js的开发团队。
        </p> 
        <h2>渲染组件内的数据</h2>
        <p>另一个小问题是components里数据如何渲染。在Nuxt.js中只有page里的组件有
          <code>fetch</code>和
          <code>asyncData</code>方法，所以当我们使用layout布局页面时如果组件需要请求数据，就无法渲染了，解决方法是在
          <code>nuxtServerInit</code>方法里初始化组件内的数据，如下：
        </p>
        <pre>
          <code><span class="hljs-keyword">async</span> nuxtServerInit ({ dispatch, commit }, { req, res }) {
            <span class="hljs-comment">// 初始化组件内的数据</span>
            <span class="hljs-keyword">await</span> dispatch(<span class="hljs-string">'ADMIN_INFO'</span>)
            <span class="hljs-keyword">await</span> dispatch(<span class="hljs-string">'TAGS'</span>)
            <span class="hljs-keyword">await</span> dispatch(<span class="hljs-string">'ARCHIVES'</span>)
          }
          </code>
        </pre>
      </div> -->
      <div class="manage" style="display: none;">
        <span ><a >编辑</a></span>
        <span ><a >删除</a></span>
      </div>
    </div>
  </div>
</template>


<script>
  import axios from 'axios'
  export default {
    data(){
      return {
        articleDetail:[]
      }
    },
    mounted:function(){
      this.articleList();
    },
    methods:{
      articleList:function(){
        axios.post("/api/article/findArticle",{"articleId":this.$route.params.id}).then((res) => {
          console.log(res.data)
          this.articleDetail = res.data;
        })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .markdown-body{
    
  }
</style>
