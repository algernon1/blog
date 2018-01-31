import Vue from "vue"
import Vuex from "vuex"
import axios from 'axios'
const store = new Vuex.Store({
    state: {
        resultData:[],//搜索结果
        isSearch:false,//是否搜索
        hasResult:false,//搜索是否有文章
        searchName:""//搜索关键词
    },
    mutations: {
        search(state, obj){
            axios.post("/api/article/searchArticles",{"searchVal":obj.val}).then((res) => {
              state.resultData = res.data;
              state.searchName = obj.val;
              state.isSearch = true;
              if(state.resultData.length == 0){
                state.hasResult = false;
              }else{
                state.hasResult = true;
              }
              console.log(state.hasResult)
              console.log(state.searchName)
            })
        }
    },
    actions: {
        search({commit}, value){
            commit("search",value)
        }
    },
    getters:{
        resultData:(state) => {
            return state.resultData;
        },
        isSearch:(state) => {
            return state.isSearch;
        },
        hasResult:(state) => {
            return state.hasResult;
        },
        searchName:(state) => {
            return state.searchName;
        }
    }
})

export default store;