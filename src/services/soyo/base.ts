import { soyoLinkConfig } from '@/config'
import { binaryStringToNumber, numberToBinaryString } from '../data'

// soyo字符串中，前部代表版本的字符串数量
const soyoVersionStrLength = soyoLinkConfig.versionStrLength
// 前部代表版本的二进制位数
const soyoVersion01Length = soyoLinkConfig.version01Length
// so代表0
const soyoZeroStr = soyoLinkConfig.zero
// yo代表1
const soyoOneStr = soyoLinkConfig.one
// 基础网址
const soyoBaseUrl = soyoLinkConfig.baseUrl

// 将soyo字符串转为01字符串，不能完全匹配时抛出错误（链接无效）
export const soyoStrTo01 = (soyoStr: string): string => {
  // 先替换所有的 soyoZeroStr 为 '0'，再替换所有的 soyoOneStr 为 '1'
  const result = soyoStr
    .replace(new RegExp(soyoZeroStr, 'g'), '0')
    .replace(new RegExp(soyoOneStr, 'g'), '1')

  // 检查转换后的结果是否仅包含 '0' 和 '1'
  if (/[^01]/.test(result)) {
    throw new Error('链接无效')
  }

  return result
}

// 将01字符串转为soyo字符串
export const soyo01ToStr = (data01Str: string): string => {
  return data01Str.replace(/0/g, soyoZeroStr).replace(/1/g, soyoOneStr)
}

type SoyoInfo = {
  // 版本数字
  versionNum: number
  // 01字符串
  data01Str: string
}

// 将soyo字符串中的版本与数据获取（将使用soyoVersionStrLength）
export const soyoSplitVersionAndData = (soyoStr: string): SoyoInfo => {
  // 获取版本字符串
  const versionStr = soyoStr.slice(0, soyoVersionStrLength)
  // 获取数据部分
  const dataStr = soyoStr.slice(soyoVersionStrLength)

  // 将版本字符串转换为 01 字符串
  const version01Str = soyoStrTo01(versionStr)
  // 将版本 01 字符串转换为数字
  const versionNum = binaryStringToNumber(version01Str)

  // 将数据部分转换为 01 字符串
  const data01Str = soyoStrTo01(dataStr)

  return {
    versionNum,
    data01Str
  }
}

// 将版本与01字符串数据生成soyo字符串
export const soyoMergeVersionAndData = (soyoInfo: SoyoInfo): string => {
  // 将版本号转换为二进制字符串
  const version01Str = numberToBinaryString(
    soyoInfo.versionNum,
    soyoVersion01Length
  )
  // 将 01 版本字符串转换为 soyo 字符串
  const versionSoyoStr = soyo01ToStr(version01Str)

  // 将数据 01 字符串转换为 soyo 字符串
  const dataSoyoStr = soyo01ToStr(soyoInfo.data01Str)

  // 合并版本与数据部分，生成完整的 soyo 字符串
  return versionSoyoStr + dataSoyoStr
}

// 合并完整的链接
export const soyoStrMergeBaseUrl = (soyoStr: string) => {
  return soyoBaseUrl + soyoStr
}
