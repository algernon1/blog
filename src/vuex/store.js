import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const state = {
    count:2
}
export default new Vuex.Store({
    state
});

function count(state){
	return state.count;
}