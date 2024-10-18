export interface SoyoLinkService {
  encodeLink: (linkStr: string) => string
  decodeLink: (soyoStr: string) => string
}
