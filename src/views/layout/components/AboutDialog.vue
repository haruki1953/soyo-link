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
        <h2>关于【小祥の小窝】🎉</h2>
        <p>是一个基于onedrive的番剧小窝</p>
        <!-- <h2>注意事项🦽</h2> -->
        <ul>
          <li>
            <strong>关于下载</strong>
            <p>
              建议下载观看，右键点击或长按文件下载，暂不支持文件夹与多个文件下载
            </p>
            <p>
              下载时请尽量使用<code>IDM</code>等多线程下载软件
              <a href="https://bangumi.sakiko.top/Soft/IDM/" target="_blank">
                IDM
              </a>
              |
              <a href="https://bangumi.sakiko.top/Soft/FDM/" target="_blank">
                FDM
              </a>
            </p>
            <p>
              下载超时时可以在<code>IDM</code>右键下载文件刷新下载地址，然后重新回到本站右键点击对应文件下载
            </p>
          </li>
          <li>
            <strong>关于新番更新</strong>
            <p>一般在当天半夜更新，建议次日早上看</p>
            <p>部分新番因巴哈姆特没有，字幕组更新会较晚</p>
          </li>
          <li>
            <strong>如果想看的番剧小窝里没有</strong>
            <p>
              因为服务器每月流量有限，所以并没有订阅一些冷门新番和大部分老番。
            </p>
            <p>
              如果想看可以
              <a href="javascript:;">联系我📧</a>，或在
              <a href="https://pan.cycg.xyz/" target="_blank"> 次元图书馆 </a> |
              <a
                href="https://pan.timero.xyz/onedrive/vcr_lib_001"
                target="_blank"
              >
                ximu's pan
              </a>
              找找看， 也可以在
              <a href="https://mikanani.me/" target="_blank"> 蜜柑计划 </a> 下载
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
