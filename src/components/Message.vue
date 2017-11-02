<template>
    <div>
        <XHeader>
            <span class= "messageTitle">我的消息</span>
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
      // DataLists: [
      //   {
      //     imgURL:'static/img01.jpg',
      //     title:'世界城市日，骑行点亮城市',
      //     time:'2017/10/31'
      //   },
      //   {
      //     imgURL:'static/img02.jpg',
      //     title:'顺风车，五折拼一下!',
      //     time:'2017/10/30'
      //   },
      //   {
      //     imgURL:'static/img01.jpg',
      //     title:'世界城市日，骑行点亮城市',
      //     time:'2017/10/31'
      //   },
      //   {
      //     imgURL:'static/img02.jpg',
      //     title:'顺风车，五折拼一下!',
      //     time:'2017/10/30'
      //   },
      //   {
      //     imgURL:'static/img01.jpg',
      //     title:'世界城市日，骑行点亮城市',
      //     time:'2017/10/31'
      //   },
      //   {
      //     imgURL:'static/img02.jpg',
      //     title:'顺风车，五折拼一下!',
      //     time:'2017/10/30'
      //   },
      //    {
      //     imgURL:'static/img01.jpg',
      //     title:'世界城市日，骑行点亮城市',
      //     time:'2017/10/31'
      //   },
      //   {
      //     imgURL:'static/img02.jpg',
      //     title:'顺风车，五折拼一下!',
      //     time:'2017/10/30'
      //   },
      //    {
      //     imgURL:'static/img01.jpg',
      //     title:'世界城市日，骑行点亮城市',
      //     time:'2017/10/31'
      //   },
      //   {
      //     imgURL:'static/img02.jpg',
      //     title:'顺风车，五折拼一下!',
      //     time:'2017/10/30'
      //   }
      // ],
      MessageLists: [
        {
          imgURL:'static/img02.jpg',
          title:'顺风车，五折拼一下!',
          time:'2017/10/30'
        },
        {
          imgURL:'static/img02.jpg',
          title:'顺风车，五折拼一下!',
          time:'2017/10/30'
        },
        {
          imgURL:'static/img02.jpg',
          title:'顺风车，五折拼一下!',
          time:'2017/10/30'
        },
        {
          imgURL:'static/img02.jpg',
          title:'顺风车，五折拼一下!',
          time:'2017/10/30'
        },
        {
          imgURL:'static/img02.jpg',
          title:'顺风车，五折拼一下!',
          time:'2017/10/30'
        }
      ]
    }
  },
  computed: {
   
  },
  methods: {
    refresh (done) {

      //这里模拟请求数据
      setTimeout(function () {
        for (var i = 0; i <5 ; i++) {
          
        }
        done();
      },1500)
    },
    infinite (done) {
      var that = this;
      setTimeout(function() {
        for (var i = 0; i < that.DataLists.length ; i++) {
          console.log(that.DataLists[i])
          that.MessageLists.push( that.DataLists[i] )
        }
        done();
      },1500)
    }
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