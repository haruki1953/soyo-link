# 关于【soyo-link】🎉

soyo！soyorin！soyolink！ soyo链接生成器，将任意链接生成为： soyo.link/sosoyoyosoyosoyo……

**实现方式**  

由前端来编码、解析、跳转，没有后端。这也导致生成的链接会很长，请尽量保持原始链接较短

**编码过程**

1. 将字符串转为二进制数据

2. 用合适的算法压缩二进制数据（暂未实现，谁能教教我）

3. 将二进制数据转为01字符串，再替换为自定义字符 “so” 与 “yo”

4. 链接路径中，前8位（16个字符）代表当前编码版本，解析时会据此采用相应的编码方式。此后改进编码算法后，不会影响到之前生成的链接


## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
pnpm install
```

### Compile and Hot-Reload for Development

```sh
pnpm dev
```

### Type-Check, Compile and Minify for Production

```sh
pnpm build
```

### Lint with [ESLint](https://eslint.org/)

```sh
pnpm lint
```
