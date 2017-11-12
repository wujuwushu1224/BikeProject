import Vue from 'vue';
import Vuex from 'Vuex';
import axios from 'axios'
Vue.use(Vuex,axios);

export default new Vuex.Store({
    state: {
        DataLists: []
    },
    getters: {
        DataLists(state) {
            return state.DataLists;
        }
    },
    mutations: {
        updatedataList(state, data) {
            state.DataLists = data;
        }
    },
    actions:{
       getDataList(store) {
           return axios({
                url:'https://www.easy-mock.com/mock/5a055972e264ca23e8c71689/example/dataLists'
           }).then(response=>{
                // console.log(response.data.DataLists.length)
                store.commit('updatedataList',response.data.DataLists);
           });
        }
    }
})