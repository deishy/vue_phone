<template>
  <div class="music">
    <aplayer :autoplay="videoUpload.autoplay" :mini="videoUpload.mini" :music="videoUpload.music"></aplayer>
  </div>
</template>

<script>
import aplayer from "vue-aplayer";

export default {
  name: "music",
  components: {
    aplayer
  },
  data() {
    return {
      videoUpload: {
        mini: true,
        progress: false,
        autoplay: true,
        progressPercent: 0,
        successPercent: 0,
        music: {
          title: "dieshy",
          author: "dieshy",
          pic:
            "https://deishy.oss-cn-beijing.aliyuncs.com/music1.jpg",
          url:
            "https://deishy.oss-cn-beijing.aliyuncs.com/%E7%94%B5%E9%B8%9F%E4%B8%AA%E7%81%AF%E6%B3%A1%20-%20Yellow%EF%BC%88%E7%BF%BB%E8%87%AA%20%E6%9C%89%E6%A9%9F%E9%85%B8%EF%BC%89.mp3",
          lrc: "[00:00.00]lrc here\n[00:01.00]aplayer"
        }
      }
    };
  }
};
</script>

<style >
.aplayer {
  width: 375px;
  height: 66px;
}
</style>