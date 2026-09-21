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
npm run build     # astro build → dist/
npm run check     # astro check
npm run preview
```

## Cloudflare Pages 配置（同源 agent-world-landing，去掉截图依赖）
| 配置项 | 值 |
|---|---|
| Production branch | `main` |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Environment variables | `NODE_VERSION = 22` |

与 agent-world-landing 的差别：本项目没有 `scripts/shot.mjs` 构建时截图，所以构建命令不带
`npx playwright install chromium`，也不需要 `PLAYWRIGHT_BROWSERS_PATH`。

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
已在 Pages 项目里绑定（状态 `initializing` / `pending`），但 Cloudflare **没有**自动补 DNS 记录：
试过 API 绑定与「解绑 → 重新绑定」，都停在 pending；用 wrangler 的 OAuth 凭据直接建记录返回 403。
原因大概率是绑定所用 API Token 只有 Pages 权限、没有 `DNS:Edit`，自动建记录的步骤被拒。

还差一条手动记录（Dashboard → bayjf.com → DNS）：

| 类型 | 名称 | 内容 | 代理状态 |
|---|---|---|---|
| CNAME | `zeus` | `zeus-landing.pages.dev` | Proxied |

记录生效后证书会自动签发（HTTP 验证），随后复查 `https://zeus.bayjf.com/` 与 `/zh/`。
另一条路：给 `CLOUDFLARE_API_TOKEN` 补上 `DNS:Edit`，改走
`POST /zones/{zone_id}/dns_records`，此后同类绑定就能一次跑完。

## 发布后验证
1. `/` 与 `/zh/` 双语首页可访问，`<title>` 与语言切换正常。
2. `robots.txt`、`sitemap-index.xml` 可访问，且域名与 `src/consts.ts` 的 `SITE_URL` 一致。
3. `favicon.svg` 可访问；React island 正常加载。
4. 自定义域名 `zeus.bayjf.com` 解析 + 证书生效后，五种路径逐一复验。

## 已知缺口（不影响站点上线，待补）
- **OG 预览图**：`src/consts.ts` 的 `OG_IMAGE` 指向 `/preview-en.png`、`/preview-zh.png`，
  但 `public/` 下没有这两个文件，页面 `og:image` / `twitter:image` 目前指向 404。
  agent-world-landing 的做法是构建时 Playwright 截图（`scripts/shot.mjs`），本项目未接这条管线。
- **品牌标记**：`BRAND_MARK = /brand/zeus-mark.svg` 用于 JSON-LD `Organization.logo`，
  `public/brand/` 目前是空目录。
- **robots.txt**：没有 `Sitemap:` 行（agent-world-landing 有，指向 sitemap-index.xml）。

## 改域名时的同步点
- `src/consts.ts` 的 `SITE_URL`
- `public/robots.txt`（补 `Sitemap:` 行时）
- Cloudflare Pages 项目的 Custom domains
