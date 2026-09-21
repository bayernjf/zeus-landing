# Zeus — Landing

Zeus 产品落地页：以你的目录为王座，Agent 皆是你的封臣。

- 线上（规划）：https://zeus.bayjf.com （English）· https://zeus.bayjf.com/zh/ （简体中文）
- 产品主仓库：`zeus/`（与本目录平级，见 `zeus/docs/product-portrait.md`）

## 技术栈

- [Astro 7](https://astro.build) 静态站点，`output: 'static'`
- React 19 island（`@astrojs/react`）
- 原生 CSS，design token 集中在 `src/styles/global.css` 的 `@layer tokens`
- `@bay/landing-ui` 提供品牌链接与 GitHub Star 组件
- 双语路由由 Astro i18n 提供：`/` 英文（默认，无前缀）、`/zh/` 中文

## 本地开发

需要 Node 22.12+：

```bash
npm install
npm run dev
```

开发服务器默认跑在 3016 端口。

## 构建

```bash
npm run build
```

产物在 `dist/`，含 `index.html`、`zh/index.html`、`404.html` 与 sitemap。

## 项目约定

见 [AGENTS.md](./AGENTS.md)。Commit 规范见 [git-commit-message.md](./git-commit-message.md)。
