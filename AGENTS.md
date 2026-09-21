# AGENTS.md — zeus-landing

供 AI coding agents（Claude Code / Codex / Cursor / Copilot 等）在本仓库工作时自动读取。

## 项目概览
Zeus 产品落地页：以用户数据目录为底座、多 Agent 协作的操作系统。
对个人是记忆的避风港与可传承的藏宝图；对企业是即插即用的虚拟部门。
Astro 7 静态站点 + 原生 CSS 工业 HUD 设计系统，中英双语。

## 技术栈
| 类别 | 方案 |
|------|------|
| 框架 | Astro 7（SSG，`output: 'static'`） |
| 交互 | React 19 island（`@astrojs/react`） |
| 样式 | 原生 CSS，design token 集中在 `src/styles/global.css` 的 `@layer tokens` |
| i18n | Astro i18n：`/` 英文（默认无前缀）、`/zh/` 中文 |
| 共享包 | `@bay/landing-ui`（品牌返链、GitHub Star） |
| Node / 包管理 | >= 22.12 / npm |

## 常用命令
```bash
npm install
npm run dev       # 开发服务器
npm run build     # astro build
npm run preview
npm run check     # astro check
```

## 约定
- 所有文案走 `src/i18n/ui.ts`，新增字符串**必须**同时提供中英两版。
- 设计 token（钢色阶 / 信号色 / 金属面板 / LED / 按钮）只在 `global.css` 里改，组件内不重复定义。
- 改域名要同步 `src/consts.ts` 的 `SITE_URL`、`SOCIAL.github`，以及 `public/robots.txt`。
- 内容叙事以 `zeus/docs/product-portrait.md` 为单一事实源；改定位先改那边，再回来同步落地页文案。

## 不要做的事
- 不要直接改构建产物 `dist/`。
- 不要把文案硬编码进组件（一律走 i18n 字典）。
- 不要提交 `node_modules/`、`dist/`、`.env` 或任何密钥。
- 不要把 `@bay/landing-ui` 的组件样式用 scoped CSS 覆盖；需要定制时用 `:global` 选择器。
