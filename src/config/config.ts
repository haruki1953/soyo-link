export const axiosConfig = {
  baseUrl: '/',
  timeout: 10000
}

export const webName = 'soyo-link'

export const soyoLinkConfig = {
  // baseUrl: 'https://soyo.mom/',
  baseUrl: 'https://soyo-link.pages.dev/',
  // baseUrl: 'http://localhost:5173/',
  zero: 'so',
  one: 'yo',
  linkVersion: 0,
  version01Length: 8,
  versionStrLength: 16
}

// logo图标
import logoImage from '@/assets/soyo.png'
export { logoImage }

interface LinkInfo {
  [key: string]: {
    name: string
    fontawesomeClass: string
    // logoUrl?: string
    description: string
    link: string
  }
}
// 联系方式
export const contactInfo: LinkInfo = {
  twitter: {
    name: 'X / Twitter', // 平台名称
    fontawesomeClass: 'fa-brands fa-x-twitter', // fontawesome图标的class
    // logoUrl: '', // 图标地址(有fontawesomeClass则不显示)
    description: '@harukiO_0', // 描述,简介
    link: 'https://x.com/harukiO_0' // 链接
  },
  discord: {
    name: 'Discord',
    fontawesomeClass: 'fa-brands fa-discord',
    description: '小祥の小窝',
    link: 'https://discord.gg/nZWpvz2WNW'
  },
  github: {
    name: 'Github',
    fontawesomeClass: 'fa-brands fa-github',
    description: 'haruki1953/soyo-link',
    link: 'https://github.com/haruki1953/soyo-link'
  }
}

// 关于页的信息
export const aboutInfo = {
  contact: [
    {
      link: 'https://twitter.com/harukiO_0',
      img: logoImage,
      name: 'haruki🐻',
      isRadiu: true
    },
    {
      link: 'https://discord.gg/nZWpvz2WNW',
      img: logoImage,
      name: 'Discord',
      isRadiu: false
    },
    {
      link: 'https://twitter.com/sakiko214',
      img: logoImage,
      name: 'X / Twitter',
      isRadiu: false
    },
    {
      link: 'https://sakiko.top/',
      img: logoImage,
      name: 'xLog',
      isRadiu: false
    }
  ],
  friend: [
    {
      link: 'https://bangumi.sakiko.top/',
      img: logoImage,
      name: '小祥の小窝',
      isRadiu: false
    },
    {
      link: 'https://www.cycg.xyz/',
      img: 'https://www.cycg.xyz/favicon.ico',
      name: 'Sperteの次元茶馆',
      isRadiu: false
    },
    {
      link: 'https://llili.li/',
      img: logoImage,
      name: '棒棒网址生成器',
      isRadiu: true
    }
  ]
}
