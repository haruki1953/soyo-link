<script setup lang="ts">
import { logoImage } from '@/config'
import { webName } from '@/config'
import { Link, Connection } from '@element-plus/icons-vue'
import { ref } from 'vue'

const originalLink = ref('')
const generateLink = ref('')
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
        ></el-input>
      </div>
      <div class="generate-link link-input">
        <el-input
          v-model="generateLink"
          :prefix-icon="Connection"
          placeholder="链接生成 https://soyo.mom/sosoyoyosoyosoyo......"
          size="large"
          readonly
        ></el-input>
      </div>
      <div class="click-copy">
        <span class="blinking-2s">【点击复制】</span>
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

.click-copy {
  margin: 0 auto;
  max-width: 400px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  user-select: none;
}
</style>
