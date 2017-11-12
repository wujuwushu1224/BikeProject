<template>
    <div>
        <x-header></x-header>
        <scroller
            style="padding-top: 44px;"
        >
            <h2>我的钱包</h2>
        </scroller>
        
    </div>
</template>
<script>
import { XHeader} from 'vux'
import VueScroller from 'vue-scroller'
import Vue from 'vue'
Vue.use(VueScroller)
export default {
    name:"mymoney",
    components:{
        XHeader
      
    }
}
</script>
