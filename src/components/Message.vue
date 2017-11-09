<template>
    <div>
        <XHeader>
            <span class= "messageTitle">我的消息</span>
              <router-link :to="{ name:'Index' }" slot="overwrite-left">
                  返回
              </router-link> 
        </XHeader>
         <scroller 
          :on-refresh="refresh"
          :on-infinite="infinite"
          style="padding-top: 44px;"
         >
            <ul class="messageList" >
              <li v-for=" MessageList in MessageLists">
                <img :src=" MessageList.imgURL ">
                <p>{{MessageList.title}}</p>
                <span>{{MessageList.time}}</span>
              </li>
            </ul>
         </scroller >
    </div>
</template>
<script>
import Vue from 'vue'
import { XHeader } from 'vux'
import InfiniteLoading from 'vue-infinite-loading'
import VueScroller from 'vue-scroller'
Vue.use(VueScroller)

export default {
  name:'message',
  components: {
      XHeader,
      InfiniteLoading,
  },
  data() {
    return {
      pageSize: 5,
      currentPage: 1,
      onff:0,
    }
  },
  created() {
      this.$store.dispatch('getDataList');
  },
  computed: {
    MessageLists() {
      let start = (this.currentPage - 1) * this.pageSize;
      let end = start + this.pageSize;
      return this.$store.getters.DataLists.filter( (item,index) => {
        return index >=start && index < end;
      } );
    },
    DataLists() {
      return this.$store.getters.DataLists;
    }
  },
  methods: {
    refresh (done) {
     
      //这里模拟请求数据
      setTimeout(function () {
        // for (var i = start; i < pages ; i++) {
          
        // }
        done();
      },1500)
    },
    infinite (done) {
        var that = this;
      // console.log(this.$store.state.DataLists)
        setTimeout(function() {
          that.onff++;
          console.log(that.onff)
          if(that.onff>1) {
            that.pageSize+=5;
            done(true);
          } else {
            done();
          }
          
        },1500)
      }
  },
  mounted() {
    // console.log(this.$store.getters.MessageLists)
  }
}
</script>
<style>
  li {
    list-style-type: none;
  }
  #app .messageList{
    padding:0;
  }
  ul img{
    width: 100%;
    height: 300px;
    display: block;
  }
  .messageTitle {
  
  }
</style>