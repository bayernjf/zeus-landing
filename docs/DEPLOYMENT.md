# 部署 — zeus-landing

更新时间：2026-09-21

## 站点信息
- 线上：`https://zeus.bayjf.com`（English）· `https://zeus.bayjf.com/zh/`（简体中文）
- Pages 项目：`zeus-landing`（已连接 GitHub 仓库 `bayernjf/zeus-landing`）
- Pages 域名：`zeus-landing.pages.dev`（已生效）；自定义域名 `zeus.bayjf.com`（已在 Pages 绑定，
  DNS 记录待补，见「自定义域名」一节）
- 技术栈：Astro 7（SSG）+ React 19 island + `@bay/landing-ui` + `@astrojs/sitemap`
- Node：`>=22.12.0`；包管理器 npm

## 构建
```bash
npm install
npm run build     # astro build && node scripts/shot.mjs → dist/
npm run check     # astro check
npm run preview
npm run shot      # 只重截预览图（需要 dist 已存在）
```

## 预览图管线（与 agent-world-landing 同款）
`scripts/shot.mjs` 在 `astro build` 之后起一个 `dist/` 静态服务，用 Playwright（1280×800 @2x）
截取两种语言的首屏，产出 `dist/preview-en.png` 与 `dist/preview-zh.png`——同一份图既作
og:image / twitter:image，也是 bayjf 主站产品卡片的封面（`https://zeus.bayjf.com/preview-*.png`）。
预览图属于构建产物，不进版本库。首次构建前需 `npx playwright install chromium`。

## Cloudflare Pages 配置（与 agent-world-landing 一致）
| 配置项 | 值 |
|---|---|
| Production branch | `main` |
| Build command | `npx playwright install chromium && npm run build` |
| Build output directory | `dist` |
| Environment variables | `NODE_VERSION = 22`、`PLAYWRIGHT_BROWSERS_PATH = 0` |

`npx playwright install chromium` 保证 CI 的 `npm install` 不会漏装浏览器内核；
`PLAYWRIGHT_BROWSERS_PATH = 0` 让它装进项目目录，避开系统路径权限问题。
2026-09-21 已通过 API 把构建命令与两个环境变量写入项目（production + preview 同步）。

**分支策略**：日常开发在 `dev`，合进 `main` 才发生产；`dev` 等其他分支只产出 preview 部署
（`https://dev.zeus-landing.pages.dev`）。

## 首次部署（2026-09-21 已执行）
项目经 Cloudflare API 创建（`source.type = github`）。创建后 Cloudflare 不回溯历史代码，
需要手动触发一次构建：

```bash
curl -X POST \
  "https://api.cloudflare.com/client/v4/accounts/$CLOUDFLARE_ACCOUNT_ID/pages/projects/zeus-landing/deployments" \
  -H "Authorization: Bearer $CLOUDFLARE_API_TOKEN"
```

结果：main `2fd61f9` 构建成功（queued → initialize → clone_repo → build → deploy 全绿），
`zeus-landing.pages.dev` 立即生效。

自动部署依赖 Cloudflare Pages 的 GitHub App 对本仓库的授权。若后续 push 没有触发构建、
部署记录的 `deployment_trigger.type` 仍为 `ad_hoc`，到
https://github.com/settings/installations 把 `zeus-landing` 加入 Cloudflare Pages 的仓库授权，
或在 Dashboard 里手动 Retry deployment。

## 自定义域名（zeus.bayjf.com）
已生效：`zeus.bayjf.com` 解析到 Cloudflare 代理 IP，HTTPS 200，证书由 Pages 自动签发；
`/`、`/zh/`、`/privacy/`、`/terms/`、`preview-*.png`、`llms*.txt`、`sitemap-index.xml` 均已复验。

绑定过程留个记录：Pages 侧绑定后 Cloudflare **没有**自动补 DNS 记录（API 绑定与「解绑 → 重新绑定」
都停在 `pending`；用 wrangler 的 OAuth 凭据直接建记录返回 403——绑定所用 API Token 只有 Pages
权限、没有 `DNS:Edit`），最后是手动加的一条记录：

| 类型 | 名称 | 内容 | 代理状态 |
|---|---|---|---|
| CNAME | `zeus` | `zeus-landing.pages.dev` | Proxied |

以后同类绑定有两条路：在 Dashboard 手加这条记录，或给 `CLOUDFLARE_API_TOKEN` 补 `DNS:Edit`
后走 `POST /zones/{zone_id}/dns_records` 一次跑完。

## 发布后验证
1. `/` 与 `/zh/` 双语首页可访问，`<title>` 与语言切换正常（根目录英文、`/zh/` 中文）。
2. `preview-en.png` / `preview-zh.png` 可访问，且内容分别对应英文 / 中文首屏
   （bayjf 主站产品卡片直接引用这两个地址）。
3. `brand/zeus-mark.svg`、`robots.txt`（含 Sitemap 行）、`sitemap-index.xml` 可访问，
   域名与 `src/consts.ts` 的 `SITE_URL` 一致。
4. `favicon.svg` 可访问；React island 正常加载。
5. 自定义域名 `zeus.bayjf.com` 解析 + 证书生效后，以上路径逐一复验。

## 2026-09-21 已闭合的缺口
- **OG 预览图**：接入 `scripts/shot.mjs` + playwright `^1.62.1`，`npm run build` 现产出
  `dist/preview-en.png` / `dist/preview-zh.png`（2560×1600），线上 `/preview-*.png` 已 200。
- **品牌标记**：补上 `public/brand/zeus-mark.svg`（盾形外壳 + 数据环 + 闪电，配色取自 favicon），
  JSON-LD `Organization.logo` 不再是 404。
- **robots.txt**：补齐 AI 爬虫白名单与 `Sitemap: https://zeus.bayjf.com/sitemap-index.xml`。

## 2026-09-21 第二轮对齐（legal / GEO / 类型修复）
- **legal 页面**：补齐 `/privacy`、`/terms` 与 `/zh/` 版本，版式沿用 agent-world-landing 的
  `doc` 结构（`global.css` 里两边样式本就同源，无需新增），页脚补上两条入口。
  文案集中在 `src/i18n/legal.ts`（中英成对），经 `ui.ts` spread 进字典，页面只通过 `t()` 取词。
- **GEO 资产**：新增 `public/llms.txt`（中文）与 `public/llms-en.txt`（英文），事实来源为
  `zeus/docs/product-portrait.md` 与内核现状，涵盖定位、三纲、词汇表、两种数据域、五层架构、
  协议要求、封臣式产品矩阵与差异点。
- **类型与文案修复**：`src/i18n/ui.ts` 补回 `Lang` / `UIKey` 导出（此前 `npm run check` 报 7 个错误）；
  `Stack.astro` 的图层 tag key 补上 `.tag` 后缀——此前线上页面直接渲染出 `stack.layer1` 字面量。
  现在 `npm run check` 为 25 文件 0 error / 0 warning / 0 hint，与 agent-world-landing 相同。

## 改域名时的同步点
- `src/consts.ts` 的 `SITE_URL`
- `public/robots.txt`（补 `Sitemap:` 行时）
- Cloudflare Pages 项目的 Custom domains
