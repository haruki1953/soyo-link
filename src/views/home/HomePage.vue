<script setup lang="ts">
import { logoImage } from '@/config'
import { webName } from '@/config'
import {
  binaryStringToString,
  soyoDecodeLink,
  soyoEncodeLink,
  soyoStrMergeBaseUrl
} from '@/services'
import { Link, Connection } from '@element-plus/icons-vue'
import { useClipboard } from '@vueuse/core'
import { computed } from 'vue'
import { ref } from 'vue'

const originalLink = ref('')
const generatedLink = ref('')

// 编码
const encodeLink = () => {
  const soyoStr = soyoEncodeLink(originalLink.value)
  generatedLink.value = soyoStrMergeBaseUrl(soyoStr)
  // console.log(soyoDecodeLink(soyoStr))
}

const originalLinkChange = () => {
  if (originalLink.value) {
    try {
      encodeLink()
      ElMessage.success('生成成功')
    } catch (error) {
      ElMessage.error('生成失败')
      console.log(error)
    }
  } else {
    generatedLink.value = ''
  }
}

const clipboard = useClipboard({ source: generatedLink })
const isSupported = clipboard.isSupported
// const isSupported = ref(false)
const isCopied = computed(() => {
  return clipboard.text.value === generatedLink.value
})
const copyLink = async () => {
  if (!generatedLink.value) {
    return
  }
  if (!isSupported.value) {
    return
  }
  await clipboard.copy(generatedLink.value)
  ElNotification({
    type: 'success',
    title: '复制成功',
    message: (() => {
      if (clipboard.text.value.length > 2000) {
        return `链接长度 ${clipboard.text.value.length}，老旧浏览器可能不支持`
      } else {
        return `链接长度 ${clipboard.text.value.length}，全部浏览器支持`
      }
    })()
  })
}
</script>
<template>
  <div class="home-page">
    <div class="center">
      <div
        class="logo"
        :style="{
          backgroundImage: `url(${logoImage})`
        }"
      ></div>
      <div class="title">{{ webName }}</div>
      <div class="original-link link-input">
        <el-input
          v-model="originalLink"
          :prefix-icon="Link"
          placeholder="链接输入 https://......"
          size="large"
          clearable
          @change="originalLinkChange"
        ></el-input>
      </div>
      <div
        class="generate-link link-input"
        :class="{
          'is-generated': generatedLink,
          'is-copied': isCopied,
          'is-supported': isSupported
        }"
        @click="copyLink"
      >
        <el-input
          v-model="generatedLink"
          :prefix-icon="Connection"
          placeholder="链接生成 https://soyo.mom/sosoyoyosoyosoyo......"
          size="large"
          readonly
        ></el-input>
      </div>
      <div
        class="click-copy"
        :class="{
          'is-generated': generatedLink,
          'is-copied': isCopied,
          'is-supported': isSupported
        }"
        @click="copyLink"
      >
        <span class="blinking-2s" v-if="clipboard.isSupported">
          【点击复制】
        </span>
        <span class="blinking-2s" v-else> 【请手动复制】 </span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home-page {
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
  max-width: 400px;
  height: 40px;
  margin-top: 2px;
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
  letter-spacing: 4px;
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
.link-input {
  margin: 0 auto;
  max-width: 400px;
  margin-top: 20px;
  .el-input {
    display: flex;
    :deep() {
      .el-input__wrapper {
        // padding: 1px 20px;
        border-radius: 20px;
        background-color: var(--color-background-soft);
        transition: all 0.5s;
        box-shadow: none;
        &:hover {
          box-shadow: none;
        }
        .el-input__inner {
          color: var(--color-text);
          font-weight: bold;
          line-height: 38px;
          // letter-spacing: 2px;
        }
      }
    }
  }
}

.generate-link {
  &.is-supported.is-generated {
    cursor: pointer;
    :deep() {
      .el-input__wrapper {
        cursor: pointer;
      }
      .el-input__inner {
        cursor: pointer;
      }
    }
  }
}

.click-copy {
  visibility: hidden;
  margin: 0 auto;
  max-width: 400px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  user-select: none;
  &.is-supported.is-generated {
    visibility: visible;
  }
  &.is-copied.is-copied {
    visibility: hidden;
  }
}
</style>
