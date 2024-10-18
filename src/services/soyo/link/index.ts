import { soyoLinkConfig } from '@/config'
import lv0 from './version0'
import { soyoSplitVersionAndData } from '../base'

const soyoLinkServiceVersionList = {
  0: lv0
} as const

const nowLinkVersion = soyoLinkConfig.linkVersion

// 类型守卫函数，判断 version 是否是 soyoLinkVersionList 的有效键
function isValidVersion(
  version: number
): version is keyof typeof soyoLinkServiceVersionList {
  return version in soyoLinkServiceVersionList
}

const getLinkVersion = (version: number) => {
  // 使用类型守卫检查版本是否有效
  if (isValidVersion(version)) {
    return soyoLinkServiceVersionList[version] // TypeScript 在这里知道 version 是有效的键
  } else {
    throw new Error(`版本 ${version} 不存在`)
  }
}

export const soyoEncodeLink = (linkStr: string) => {
  const soyoLinkService = getLinkVersion(nowLinkVersion)
  return soyoLinkService.encodeLink(linkStr)
}

export const soyoDecodeLink = (soyoStr: string) => {
  const { versionNum } = soyoSplitVersionAndData(soyoStr)
  // console.log(versionNum)
  const soyoLinkService = getLinkVersion(versionNum)
  return soyoLinkService.decodeLink(soyoStr)
}
