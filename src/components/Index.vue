<template>
  <div style="height:100%; backgroundColor:#000" >
    <!-- 右边按钮功能 -->
    <div v-transfer-dom>
      <loading ></loading>
    </div>
    <div v-transfer-dom>
      <actionsheet :menus="menus" v-model="showMenu" @on-click-menu="changeLocale"></actionsheet>
    </div>

    <drawer
      width="200px;"
    :show.sync="drawerVisibility"
    :show-mode="showModeValue"
    :placement="showPlacementValue"
    :drawer-style="{'background-color':'#eee', width: '200px'}"
    >  

    <!-- drawer content -->
      <div slot="drawer">
        <group title="个人中心" style="margin-top:20px;font-size:40px;" >
          <img src="static/bike.jpg" style="margin-left:30px"> 
          <cell title="我的钱包" link="/MyMoney" value="0.0元" @click.native="drawerVisibility = false">
          </cell>
          <cell title="我的卡券" link="/MyCard" @click.native="drawerVisibility = false">
          </cell>
          <cell title="我的行程" link="/MyDistance" value="32.2公里" @click.native="drawerVisibility = false">
          </cell>
        </group>
    </div>

    <!-- main content -->
      <view-box ref="viewBox" body-padding-top="46px" body-padding-bottom="55px">
        <x-header
          title="bike"
          :left-options="leftOptions"
          :transition="headerTransition"
          @on-click-more="onClickMore"
          style="width:100%;position:absolute;left:0;top:0;z-index:100;"
        >
          <span slot="overwrite-left" @click="drawerVisibility = !drawerVisibility">
            <x-icon type="navicon" size="35" style="fill:#fff;position:relative;top:-8px;left:-3px;"></x-icon>
          </span>
            <router-link :to="{name:'Message'}" slot="right" >
                我的消息
            </router-link>
        </x-header>

      <!-- map -->
      <el-amap   vid="amap"  :plugin="plugin" class="amap-demo" :center="center" :zoom="zoom" map-style="amap://styles/13a609e12b67f1e17b89e94a097dc5cc">
        <el-amap-marker v-for="marker in markers" :position="marker.position" ></el-amap-marker>
         <div >
        <a class="camera">
          扫码
        </a>
         <input id="takepicture" type="file" accept="image/*" capture="camera" style="opacity:0;width:100%" >
      </div>
      </el-amap>
     
      </view-box>
    </drawer>
  </div>
</template>
<script>
import { Radio, Group, Cell, Badge, Drawer, Actionsheet, ButtonTab, ButtonTabItem, ViewBox, XHeader, Tabbar, TabbarItem, Loading, TransferDom } from 'vux'
import { mapState, mapActions } from 'vuex'
import axios from 'axios'

export default {
  directives: {
    TransferDom
  },
  name:'index',
  components: {
   Radio,
    Group,
    Cell,
    Badge,
    Drawer,
    ButtonTab,
    ButtonTabItem,
    ViewBox,
    XHeader,
    Tabbar,
    TabbarItem,
    Loading,
    Actionsheet
  },
  created() {

  },
  data() {
    let self = this;
    return {
      center: [121.59996, 31.197646],
      lng: 0,
      lat: 0,
      loaded: false,
      markers: [],
      zoom: 18,
      plugin: [
        {
          pName: 'Geolocation',
          events: {
            init(o) {
            // o 是高德地图定位插件实例
              o.getCurrentPosition((status, result) => {
                // console.log(result)
                if (result && result.position) {
                  self.lng = result.position.lng;
                  self.lat = result.position.lat;
                  for(var i=1; i<=5; i++) {
                    var r = (Math.random()*100 - 50)/100;
                    // console.log( r )
                    self.markers.push( {position: [self.lng + 0.001*r ,self.lat - 0.01*r ]} )
                  }
                  self.center = [self.lng, self.lat];
                  self.loaded = true;
                  self.$nextTick();
                  
                }
              });
            }
          }
        }
      ],
      showMenu: false,
      menus: {
        
      },
      drawerVisibility: false,
      showMode: 'push',
      showModeValue: 'push',
      showPlacement: 'left',
      showPlacementValue: 'left'
      
    }
  },
  methods: {
    onShowModeChange (val) {
      /** hide drawer before changing showMode **/
      this.drawerVisibility = false
      setTimeout(one => {
        this.showModeValue = val
      }, 400)
    },
    onPlacementChange (val) {
      /** hide drawer before changing position **/
      this.drawerVisibility = false
      setTimeout(one => {
        this.showPlacementValue = val
      }, 400)
    },
    onClickMore () {
     
      this.showMenu = true
    },
    changeLocale (locale) {
      this.$i18n.set(locale)
      this.$locale.set(locale)
    }
  },
  computed: {
    rightOptions () {
      // return {
      //   showMore: true
      // }
    },
    leftOptions () {
      return {
        showBack: true
      }
    },
    headerTransition () {
      return this.direction === 'forward' ? 'vux-header-fade-in-right' : 'vux-header-fade-in-left'
    },
    isTabbarDemo () {
      return /tabbar/.test("")
    },
  },
   mounted() {

  }
}
</script>
<style lang="less">
@import '~vux/src/styles/reset.less';
@import '~vux/src/styles/1px.less';
@import '~vux/src/styles/tap.less';
body {
  background-color: #fbf9fe;
}
html, body {
  height: 100%;
  width: 100%;
  overflow-x: hidden;
}
.demo-icon-22 {
  font-family: 'vux-demo';
  font-size: 22px;
  color: #888;
}
.weui-tabbar.vux-demo-tabbar {
  /** backdrop-filter: blur(10px);
  background-color: none;
  background: rgba(247, 247, 250, 0.5);**/
}
.vux-demo-tabbar .weui-bar__item_on .demo-icon-22 {
  color: #F70968;
}
.vux-demo-tabbar .weui-tabbar_item.weui-bar__item_on .vux-demo-tabbar-icon-home {
  color: rgb(53, 73, 94);
}
.demo-icon-22:before {
  content: attr(icon);
}
.vux-demo-tabbar-component {
  background-color: #F70968;
  color: #fff;
  border-radius: 7px;
  padding: 0 4px;
  line-height: 14px;
}
.weui-tabbar__icon + .weui-tabbar__label {
  margin-top: 0!important;
}
.vux-demo-header-box {
  z-index: 100;
  position: absolute;
  width: 100%;
  left: 0;
  top: 0;
}
@font-face {
  font-family: 'vux-demo';  /* project id 70323 */
  src: url('https://at.alicdn.com/t/font_h1fz4ogaj5cm1jor.eot');
  src: url('https://at.alicdn.com/t/font_h1fz4ogaj5cm1jor.eot?#iefix') format('embedded-opentype'),
  url('https://at.alicdn.com/t/font_h1fz4ogaj5cm1jor.woff') format('woff'),
  url('https://at.alicdn.com/t/font_h1fz4ogaj5cm1jor.ttf') format('truetype'),
  url('https://at.alicdn.com/t/font_h1fz4ogaj5cm1jor.svg#iconfont') format('svg');
}
.demo-icon {
  font-family: 'vux-demo';
  font-size: 20px;
  color: #04BE02;
}
.demo-icon-big {
  font-size: 28px;
}
.demo-icon:before {
  content: attr(icon);
}
.router-view {
  width: 100%;
  top: 46px;
}
.vux-pop-out-enter-active,
.vux-pop-out-leave-active,
.vux-pop-in-enter-active,
.vux-pop-in-leave-active {
  will-change: transform;
  transition: all 500ms;
  height: 100%;
  top: 46px;
  position: absolute;
  backface-visibility: hidden;
  perspective: 1000;
}
.vux-pop-out-enter {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
.vux-pop-out-leave-active {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.vux-pop-in-enter {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.vux-pop-in-leave-active {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
.menu-title {
  color: #888;
}
.camera {
  position: absolute;
  width: 100%;
  background-color:#000;
  color:#fff;
  text-align: center;
}
</style>