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
        // MessageLists(state) {
        //     var b = 0
        //     return state.DataLists.filter( a=> {
        //         b++;
        //         return  b <= state.end;
        //     });
        // }
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
                // console.log(response.data.DataLists.length)
                store.commit('updatedataList',response.data.DataLists);
           });
        }
    }
})