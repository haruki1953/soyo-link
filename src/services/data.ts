export function stringToBinary(str: string): Uint8Array {
  const encoder = new TextEncoder()
  return encoder.encode(str)
}

export function binaryToString(binary: Uint8Array): string {
  const decoder = new TextDecoder()
  return decoder.decode(binary)
}

export function uint8ArrayToBinaryString(uint8Array: Uint8Array): string {
  return Array.from(uint8Array)
    .map((byte) => byte.toString(2).padStart(8, '0')) // 将每个字节转换为二进制字符串，并填充到8位
    .join('') // 将所有二进制字符串连接成一个字符串
}

export function binaryStringToUint8Array(binaryString: string): Uint8Array {
  const numBytes = binaryString.length / 8
  const uint8Array = new Uint8Array(numBytes)

  for (let i = 0; i < numBytes; i++) {
    const byteString = binaryString.slice(i * 8, i * 8 + 8)
    uint8Array[i] = parseInt(byteString, 2)
  }

  return uint8Array
}

export const stringToBinaryString = (str: string) => {
  return uint8ArrayToBinaryString(stringToBinary(str))
}

export const binaryStringToString = (str: string) => {
  return binaryToString(binaryStringToUint8Array(str))
}

export function binaryStringToNumber(binaryString: string): number {
  return parseInt(binaryString, 2)
}

export function numberToBinaryString(
  number: number,
  bitLength: number
): string {
  return number.toString(2).padStart(bitLength, '0')
}
