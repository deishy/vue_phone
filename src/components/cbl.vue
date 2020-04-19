<template>
  <div class="cbl_div">
    <div class="cbl_xx_div">
      <van-icon name="bars" size="40px" @click="showPopup" />
    </div>
    <music />
    <div class="cbl_div_cbl">
      <van-popup v-model="show" round position="left" style="{ height: '20%' }">
        <van-sidebar v-model="activeKey" @change="onChange">
          <van-sidebar-item to="/" tag @click="closePopup" title="首页" />
          <van-sidebar-item to="book" @click="closePopup" title="文章" />
          <van-sidebar-item to="music" @click="closePopup" title="音乐" />
          <van-sidebar-item to="video" @click="closePopup" title="视频" />
        </van-sidebar>
      </van-popup>
    </div>
  </div>
</template>

<script>
import css from "../css/cbl.css";
import Vue from "vue";
import { Sidebar, SidebarItem } from "vant";
import { Notify } from "vant";
import music from "./music";
Vue.use(Sidebar);
Vue.use(SidebarItem);
export default {
  name: "cbl",
  components: {
    music
  },
  data() {
    return {
      activeKey: 0,
      show: false,
      overlay: false
    };
  },
  methods: {
    onChange(index) {
      let set = "您已切换到";
      switch (index) {
        case 0:
          index = set + "首页";
          break;
        case 1:
          index = set + "文章";
          break;
        case 2:
          index = set + "音乐";
          break;
        case 3:
          index = set + "视频";
          break;
      }
      Notify({ type: "primary", message: index });
    },
    showPopup() {
      this.show = true;
    },
    closePopup() {
      this.show = false;
    }
  }
};
</script>