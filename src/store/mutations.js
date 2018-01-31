import {SEARCH} from "./types"
import getters from "./getters"
import axios from 'axios'
const state = {
	resultData:[]
}

const mutations = {
	[SEARCH](state){

		console.log(state);
		axios.post("/api/article/searchArticles",{"searchVal":"a"}).then((res) => {
          this.searchResult = res.data;
        })
	}
}

export default {
	state,
	mutations,
	getters
}