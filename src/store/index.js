import Vue from 'vue';
import Vuex from 'Vuex';
import axios from 'axios'
Vue.use(Vuex,axios);

export default new Vuex.Store({
    state: {
        DataLists: [],
        MessageLists: []
    },
    getters: {
        DataLists(state) {
            return state.DataLists;
        },
        MessageLists(state) {
            return state.DataLists.filter( item=> {
                
            });
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
                url:'http://localhost:8080/static/data.json'
           }).then(response=>{
                console.log(response.data.DataLists.length)
                store.commit('updatedataList',response.data.DataLists);
           });
        }
    }
})