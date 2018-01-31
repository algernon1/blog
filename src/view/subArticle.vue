<template>
  <div class="container wrap">
    <p class="conTit">
      <label for="">标题</label>
      <input type="text" v-model="articleName" class="conTit-text">
    </p>
    <!-- <textarea name="" id="" cols="30" rows="10" v-model="articleContent"></textarea> -->
    <!-- <quill-editor class="quill-editor" ref="myTextEditor" v-model="articleContent" :config="editorOption"></quill-editor> -->
    <quill-editor class="quill-editor" ref="myTextEditor" v-model="articleContent" ></quill-editor>

    <!-- <div class="btn-groups">
      <button @click="save">保存编辑</button>
    </div> -->

    <a href="javascript:;" @click="subArticles" class="subBtn">提交文章</a>
  </div>
</template>


<script>
  // import "//cdn.quilljs.com/0.19.10/quill.snow.css";
  // import "//cdn.quilljs.com/0.19.10/quill.min.js"
  import axios from 'axios';
  import { quillEditor } from 'vue-quill-editor';
  import 'quill/dist/quill.core.css';
  import 'quill/dist/quill.snow.css';

  export default {
    data(){
      return {
        articleName:"",
        articleContent:""
      }
    },
    components:{
       quillEditor
    },
    mounted:function(){
    },
    methods:{
      subArticles:function(){
      	var reqParam = {articleId:"1111",articleName:this.articleName ,articleContent:this.articleContent}
      	console.log(reqParam)
        axios.post("/api/article/subArticles",reqParam).then((res) => {
          console.log(res)
          this.articleData = res.data;
          alert("提交成功！");
          window.location.href = window.location.href;
          
        })
      }
    }
  }


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .conTit {padding:20px 10px 10px;}
  .conTit-text {
    border:1px solid #ccc;
    height:30px;
    width:300px;
  }



.quill-editor {
 height: 445px;
 padding:10px;
 
}
.ql-editor{
  height:379px;
}


.subBtn {
  width:200px;
  height:30px;
  margin:100px auto 0 auto;
  background:#33363B;
  text-align:center;
  line-height:30px;
  color:white;
  border-radius:5px;
  cursor:pointer;
  display:block;
}
 
</style>
