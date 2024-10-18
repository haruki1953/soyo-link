<script setup lang="ts">
import { logoImage } from '@/config'
import { soyoDecodeLink } from '@/services'

import { onMounted } from 'vue'

import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const soyoStr = route.params.soyoStr

const link = ref('')

if (typeof soyoStr === 'string') {
  try {
    link.value = soyoDecodeLink(soyoStr)
    window.location.href = link.value
  } catch (error) {
    ElNotification({
      type: 'warning',
      title: '链接无效',
      message: '如果有问题可以通过屏幕下方联系方式反馈'
    })
    ;(async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000))
      router.push('/')
    })()
    console.log(error)
  }
}

const showManualJump = ref(false)
onMounted(async () => {
  await new Promise((resolve) => setTimeout(resolve, 5000))
  showManualJump.value = true
})
</script>
<template>
  <div class="jump-page">
    <div class="center">
      <div
        class="logo"
        :style="{
          backgroundImage: `url(${logoImage})`
        }"
      ></div>
      <div class="title" v-if="link">即将跳转至 {{ link }}</div>
      <div class="manual-jump">
        <a
          class="blinking-2s"
          :href="link"
          target="_blank"
          rel="noopener noreferrer"
          v-if="showManualJump"
        >
          【手动跳转】
        </a>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.jump-page {
  // background-color: antiquewhite;
  display: flex;
  align-items: center;
  .center {
    width: 100%;
    // background-color: blue;
  }
}
.logo {
  margin: 0 auto;
  width: 81px;
  height: 81px;
  background-size: cover; /* 确保图片覆盖整个盒子 */
  background-repeat: no-repeat;
}
.title {
  margin: 0 auto;
  max-width: 500px;
  height: 40px;
  margin-top: 2px;
  padding: 0 30px;
  /* 从左到右的渐变色 */
  background: linear-gradient(
    to right,
    var(--el-color-primary),
    var(--el-color-success)
  );
  border-radius: 20px;
  color: var(--color-background);
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  line-height: 40px;
  // letter-spacing: 4px;
  transition: color 0.2s;
  user-select: none;
  /* 设置被选中文本的背景色和文本颜色 */
  // &::selection {
  //   background-color: var(--el-color-primary); /* 背景色 */
  //   color: var(--color-background); /* 文本颜色 */
  // }
  white-space: nowrap; /* 禁止换行 */
  overflow: hidden; /* 隐藏超出部分 */
  text-overflow: ellipsis; /* 显示省略号 */
}

.manual-jump {
  margin: 0 auto;
  max-width: 500px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  a {
    color: var(--color-text);
    text-decoration: none; // 平时不显示下划线
  }
}
</style>
