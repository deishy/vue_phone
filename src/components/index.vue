<template>
  <div id="index">
    <div class="index">
      <div class="index_head">Welcome use my space!</div>
    </div>
    <div id="index_ba">
      <div>转载内容版权归作者及来源网站所有，本站原创内容转载请注明来源，商业媒体及自媒请先联系WX：DeishyWork</div>
      <div>
        <img src="../assets/index_ba.png" />法律声明&nbsp; 苏ICP备20018679号-1
      </div>
    </div>
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
      this.visible = true;
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