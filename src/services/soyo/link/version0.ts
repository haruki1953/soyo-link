import { binaryStringToString, stringToBinaryString } from '../../data'
import { soyoMergeVersionAndData, soyoSplitVersionAndData } from '../base'

const soyoLinkVersion = 0

const encodeLink = (linkStr: string) => {
  const data01Str = stringToBinaryString(linkStr)

  const soyoStr = soyoMergeVersionAndData({
    versionNum: soyoLinkVersion,
    data01Str
  })

  return soyoStr
}

const decodeLink = (soyoStr: string) => {
  const { data01Str } = soyoSplitVersionAndData(soyoStr)

  const linkStr = binaryStringToString(data01Str)

  return linkStr
}

export default {
  encodeLink,
  decodeLink
}
