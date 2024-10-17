<script setup lang="ts">
import { onMounted } from 'vue'
import { HomeFilled } from '@element-plus/icons-vue'
import InfoBar from './components/InfoBar.vue'

onMounted(async () => {
  //
})
</script>
<template>
  <div class="layout-container">
    <div class="container-box">
      <router-view></router-view>
    </div>
    <div class="footer-box">
      <InfoBar></InfoBar>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.layout-container {
  min-height: 100vh;
  position: relative;
}
$footer-height: 60px;
.footer-box {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: $footer-height;
  // background-color: aqua;
}

// 响应式边距
$ref-padding-12: 120px;
$ref-padding-14: 200px;
$ref-padding-16: 300px;
$ref-padding-shim-12: 100px;
$ref-padding-shim-14: 150px;
$ref-padding-shim-16: 200px;
$top-gap: 20px;
$bottom-gap: 20px;
$ref-padding-top: $top-gap;
$ref-padding-bottom: calc($footer-height + $bottom-gap);
$page-min-height: calc(100vh - $footer-height - $bottom-gap - $top-gap);
.container-box {
  padding: $ref-padding-top 20px $ref-padding-bottom 20px;
  margin: 0 auto;
  max-width: 1920px;
  // background-color: aquamarine;
  > div {
    min-height: $page-min-height;
  }
}
@media (min-width: 1200px) {
  .container-box {
    padding: $ref-padding-top $ref-padding-12 $ref-padding-bottom
      $ref-padding-12;
  }
}
@media (min-width: 1400px) {
  .container-box {
    padding: $ref-padding-top $ref-padding-14 $ref-padding-bottom
      $ref-padding-14;
  }
}
@media (min-width: 1600px) {
  .container-box {
    padding: $ref-padding-top $ref-padding-16 $ref-padding-bottom
      $ref-padding-16;
  }
}
// 1920px将会以6列显示，所以将padding改小
// @media (min-width: 1920px) {
//   .container-box {
//     padding: $ref-padding-top 100px $ref-padding-bottom 100px;
//   }
// }
</style>
