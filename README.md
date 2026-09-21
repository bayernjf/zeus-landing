# Zeus — Landing

Zeus 产品落地页：以你的目录为王座，Agent 皆是你的封臣。

- 线上：https://zeus.bayjf.com （English）· https://zeus.bayjf.com/zh/ （简体中文）
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

`astro build` 之后会自动跑 `scripts/shot.mjs`：在 `dist/` 上起静态服务，用 Playwright 截取两种
语言的首屏，产出 `dist/preview-en.png` 与 `dist/preview-zh.png`（1280×800 @2x）——同一份图既是
页面的 og:image，也是 bayjf 主站产品卡片的封面。预览图不入库，每次构建现生成，所以改了首屏视觉
不用手动重截。首次构建前装一次浏览器内核：

```bash
npx playwright install chromium
```

其他脚本：

```bash
npm run preview   # 预览 dist
npm run check     # astro check 类型检查
npm run shot      # 只重截预览图（需要 dist 已存在）
```

产物在 `dist/`，含 `index.html`、`zh/index.html`、`404.html`、双语预览图与 sitemap。

## 部署到 Cloudflare Pages（Git 集成）

Pages 项目 `zeus-landing` 已连接 GitHub 仓库 `bayernjf/zeus-landing`：推送到 `main` 自动构建发布，
`dev` 等其他分支只产出 preview 部署（配置与 agent-world-landing 同款）：

- Production branch：`main`
- Build command：`npx playwright install chromium && npm run build`
- Build output directory：`dist`
- Environment variables：`NODE_VERSION = 22`、`PLAYWRIGHT_BROWSERS_PATH = 0`

域名：`zeus-landing.pages.dev` + 自定义域名 `zeus.bayjf.com`。完整配置、首次部署过程与验证清单见
[docs/DEPLOYMENT.md](./docs/DEPLOYMENT.md)。

## 项目约定

见 [AGENTS.md](./AGENTS.md)。Commit 规范见 [git-commit-message.md](./git-commit-message.md)。
