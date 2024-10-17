<script setup lang="ts">
import { nextTick, ref, type Component } from 'vue'
import { useDark, useToggle, useScroll } from '@vueuse/core'
import { logoImage } from '@/config'
import { MoonNight, Sunrise, MoreFilled } from '@element-plus/icons-vue'
import { computed } from 'vue'
import { watch } from 'vue'
import router from '@/router'
import AboutDialog from './AboutDialog.vue'

const isDark = useDark({ disableTransition: false })
const toggleDark = useToggle(isDark)

const showMenuBox = ref(false)
const showMenuBoxToggle = () => {
  showMenuBox.value = !showMenuBox.value
}
</script>
<template>
  <AboutDialog v-model="showMenuBox"></AboutDialog>
  <div class="info-bar">
    <div class="switch-box">
      <el-switch
        class="switch-dark"
        size="large"
        :modelValue="isDark"
        inline-prompt
        :active-icon="MoonNight"
        :inactive-icon="Sunrise"
        @click="toggleDark()"
      />
    </div>
    <div class="more-box" @click="showMenuBoxToggle">
      <el-icon
        size="36"
        style="width: 36px; margin-right: 0"
        class="more-icon"
        :class="{ action: showMenuBox }"
      >
        <MoreFilled />
      </el-icon>
    </div>
    <div class="mask-box">
      <LinkGroup></LinkGroup>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.info-bar {
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
}

.switch-box {
  height: 100%;
  display: flex;
  align-items: center;
  margin: 18px 0;
  padding: 0 18px;
  // border-left: 2px solid var(--color-border); /* 左边框 */
  // border-right: 2px solid var(--color-border); /* 右边框 */
}
.switch-dark {
  --el-switch-off-color: var(--el-color-primary);
  --el-switch-on-color: var(--el-color-primary);
  :deep() {
    .el-switch__action {
      background-color: var(--color-background);
    }
    .el-icon {
      font-size: 16px;
    }
  }
}

.more-box {
  height: 100%;
  padding: 0 20px;
  display: flex;
  align-items: center;
  cursor: pointer;
}
.more-icon {
  transition:
    transform 0.5s,
    color 0.2s;
  &.action {
    transform: rotate(90deg);
  }
}

.mask-box {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none; /* 使点击穿透 */
  .link-group {
    pointer-events: auto; /* 使 LinkGroup 内的内容可点击 */
  }
}
</style>
