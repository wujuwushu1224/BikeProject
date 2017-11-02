<template>
  <div>
      <XHeader>
        SuperBike
        <span slot="overwrite-left">个人中心</span>
        
        <router-link :to="{name:'Message'}" slot="right" >我的消息</router-link>
     </XHeader>
  </div>
</template>
<script>
import { XHeader  } from 'vux'

export default {
  name:'index',
  components: {
    XHeader
  },
}
</script>
