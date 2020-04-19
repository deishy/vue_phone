<template>
  <div class="index">
    <div class="index_head">Welcome use my space!</div>
    <div class="index_title_pic1">
      <transition name="van-slide-left">
        <div v-show="visible">   
          To wish you joy at this holy season. Wishing every happiness will always be with you.
          <!-- <van-image width="180" height="180" src="https://deishy.oss-cn-beijing.aliyuncs.com/index_pic_1.jpg" /> -->
        </div>
      </transition>
    </div>
    <div class="index_title_pic2">
      <transition name="van-slide-right">
        <div v-show="visible">   
          I want to wish you longevity and health!
          <!-- <van-image width="180" height="180" src="https://deishy.oss-cn-beijing.aliyuncs.com/inde_pic_2.jpg" /> -->
        </div>
      </transition>
    </div>
    <span id="index_ba">
      转载内容版权归作者及来源网站所有，本站原创内容转载请注明来源，商业媒体及自媒请先联系WX：DeishyWork
      <br />
      <img src="../assets/index_ba.png" />法律声明&nbsp; 苏ICP备20018679号-1
    </span>
  </div>
</template>


<script>
import css from "../css/index.css";
export default {
  name: "index",
  data() {
    return {
      visible: false
    };
  },
  methods: {
    get() {
      console.log(this.visible);
      this.visible = true
      console.log(this.visible);
    }
  },
  mounted() {
    this.timer = setTimeout(this.get, 800);
  },
  beforeDestroy() {
    clearTimeout(this.timer);
  }
};
</script>