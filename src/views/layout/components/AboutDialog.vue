<script setup lang="ts">
import { generateRandomClassName, useDialogOptimization } from '@/utils'
import { Delete } from '@element-plus/icons-vue'
import { useWindowSize } from '@vueuse/core'
import { watch } from 'vue'
import { computed, ref } from 'vue'
import { aboutInfo } from '@/config'

const model = defineModel<boolean>({ required: true })

const dialogVisible = model

const open = () => {
  dialogVisible.value = true
}

defineExpose({
  open
})

const windowSize = useWindowSize()
const dialogWidth = computed(() => {
  const width = 920
  const windowWidth = windowSize.width.value
  return windowWidth * 0.9 < width ? '90%' : width
})

// 自定义遮罩类名，随机生成
const overlayClass = generateRandomClassName()

// 对话框优化
useDialogOptimization({
  dialogVisible,
  overlayClass
})
</script>
<template>
  <div class="about-dialog">
    <el-dialog
      v-model="dialogVisible"
      :width="dialogWidth"
      :lock-scroll="false"
      :modal-class="overlayClass"
    >
      <div class="markdown-content">
        <h2>关于【soyo链接生成器】🎉</h2>
        <p>将任意链接生成为如：soyo.mom/sosoyoyosoyosoyo…… 这样的链接</p>
        <!-- <h2>注意事项🦽</h2> -->
        <ul>
          <li>
            <strong>实现方式</strong>
            <p>
              没有后端，由前端来编码、解析、跳转。生成的链接一般会比较长，原始链接尽量保持在250个字符以内
            </p>
          </li>
        </ul>
        <template v-if="aboutInfo.contact.length">
          <h2>联系我📧</h2>
          <div class="link-container">
            <div
              class="link-box"
              v-for="(item, index) in aboutInfo.contact"
              :key="index"
            >
              <a class="avatar-name" :href="item.link" target="_blank">
                <img
                  class="avatar"
                  :class="{ radiu: item.isRadiu || false }"
                  :src="item.img"
                />
                <span class="name">{{ item.name }}</span>
              </a>
            </div>
          </div>
        </template>
        <template v-if="aboutInfo.friend.length">
          <h2>友情链接🌈</h2>
          <div class="link-container">
            <div
              class="link-box"
              v-for="(item, index) in aboutInfo.friend"
              :key="index"
            >
              <a class="avatar-name" :href="item.link" target="_blank">
                <img
                  class="avatar"
                  :class="{ radiu: item.isRadiu || false }"
                  :src="item.img"
                />
                <span class="name">{{ item.name }}</span>
              </a>
            </div>
          </div>
        </template>
      </div>
    </el-dialog>
  </div>
</template>

<style lang="scss" scoped>
.about-dialog {
  :deep() {
    .el-dialog {
      background-color: var(--color-background-soft);
    }
  }
}
.markdown-content {
  padding: 0 30px;
  padding-bottom: 10px;
  font-family: Arial, sans-serif;
  line-height: 1.6;
  font-size: 16px;
}

@media (max-width: 500px) {
  .markdown-content {
    padding: 0 5px;
  }
}

.markdown-content h2 {
  color: var(--color-heading);
  margin: 20px 5px 10px 5px;
  font-weight: bold;
  transition: all 0.5s;
}

.markdown-content strong {
  color: var(--color-heading);
  font-weight: bold;
  transition: all 0.5s;
}

.markdown-content p {
  margin: 10px 5px;
}

.markdown-content ul {
  list-style-type: disc;
  padding-left: 20px;
}

.markdown-content li {
  margin-bottom: 15px;
}

.markdown-content a {
  color: var(--el-color-primary);
  text-decoration: none;
  display: inline-block;
}

.markdown-content a:hover {
  text-decoration: underline;
}

.markdown-content code {
  background-color: var(--color-background);
  border: 1px solid var(--color-background-mute);
  border-radius: 3px;
  padding: 2px 4px;
  font-size: 90%;
  transition: all 0.5s;
}

.link-box {
  display: inline-block;
  margin: 10px;
  .avatar-name {
    height: 44px;
    display: flex;
    align-items: center;
    text-decoration: none;
    color: var(--color-text);
    .avatar {
      width: 44px;
      height: 44px;
      &.radiu {
        border-radius: 50%;
      }
    }
    .name {
      margin: 10px;
      transition: all 0.5s;
    }
  }
}
</style>
