<template>
  <div class="music">
    <aplayer :autoplay="videoUpload.autoplay" :mini="videoUpload.mini" :music="videoUpload.music" style=""></aplayer>
  </div>
</template>

<script>
import aplayer from "vue-aplayer";
import css from "../css/music.css"
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
          pic: "https://deishy-public.oss-cn-beijing.aliyuncs.com/%E6%9E%97%E5%AD%90%E7%A5%A5.jpg",
          url:"https://deishy-public.oss-cn-beijing.aliyuncs.com/%E6%95%A2%E7%88%B1%E6%95%A2%E5%81%9A.mp3",
          lrc: "[00:00.00]lrc here\n[00:01.00]aplayer"
        }
      }
    };
  }
};
</script>
