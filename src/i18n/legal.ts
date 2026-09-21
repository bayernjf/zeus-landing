// Privacy / terms copy. Kept beside the main dictionary so both locales sit in
// one place and the pair can be diffed line by line; ui.ts spreads these in,
// which keeps useTranslations() the only way pages read copy.
export const LEGAL_EN = {
  "legal.back": "Back to the realm",

  "legal.privacy.metaTitle": "Privacy Policy | Zeus",
  "legal.privacy.metaDesc":
    "How the Zeus landing site handles information related to your visit.",
  "legal.privacy.stencil": "privacy policy",
  "legal.privacy.h1": "Privacy Policy",
  "legal.privacy.updated": "Last updated: September 21, 2026",

  "legal.privacy.s1.title": "1. Overview",
  "legal.privacy.s1.body":
    "Zeus (the “Site”) introduces an operating system built on your own data directory. We respect and protect the privacy of our visitors. This policy explains how information related to your visit is handled. By using the Site you agree to its terms.",

  "legal.privacy.s2.title": "2. Information We Handle",
  "legal.privacy.s2.intro":
    "The Site offers no accounts and keeps no visitor data of its own.",
  "legal.privacy.s2.li1":
    "The directory you hand to Zeus — the whole premise of the product — is yours and stays on your own machine. This Site never asks for it.",
  "legal.privacy.s2.li2":
    "The early-access form on this Site is a front-end demonstration: submitting it does not transmit anything to a server. If a real intake channel opens, this policy will be updated before any information is collected.",
  "legal.privacy.s2.li3":
    "The hosting platform (Cloudflare Pages) may record basic access logs (IP, User-Agent and similar) under its own policies, outside our control.",
  "legal.privacy.s2.li4":
    "If analytics are enabled later, only anonymized usage statistics (page views, referrers) will be used, and never to identify individuals.",

  "legal.privacy.s3.title": "3. Live Readouts and the Demo Realm",
  "legal.privacy.s3.body":
    "The clock, the realm counters and the SOVEREIGN REALM panel on the Site are illustrative demo data rendered in your browser. They are not wired to a backend, and nothing you do with them is transmitted or stored.",

  "legal.privacy.s4.title": "4. Cookies & Local Storage",
  "legal.privacy.s4.body":
    "The Site may use browser cookies or localStorage to remember interface preferences such as language. These are used solely to improve browsing and never for cross-site tracking. You can disable or clear them in your browser settings.",

  "legal.privacy.s5.title": "5. Third-Party Links",
  "legal.privacy.s5.body":
    "The Site links to third-party sites such as GitHub. Their privacy practices are not covered by this policy; please refer to their own policies.",

  "legal.privacy.s6.title": "6. Children",
  "legal.privacy.s6.body":
    "The Site is not directed at children under 14, and we do not knowingly collect personal information from them.",

  "legal.privacy.s7.title": "7. Changes",
  "legal.privacy.s7.body":
    "This policy may be updated as the product evolves. Changes will be posted on this page together with a new revision date.",

  "legal.privacy.s8.title": "8. Contact",
  "legal.privacy.s8.pre": "Questions about this policy can be raised via Issues on our ",
  "legal.privacy.s8.link": "GitHub repository",
  "legal.privacy.s8.mid": ", or by email at ",
  "legal.privacy.s8.post": ".",

  "legal.terms.metaTitle": "Terms of Service | Zeus",
  "legal.terms.metaDesc":
    "The terms covering use of the Zeus landing site and its content.",
  "legal.terms.stencil": "terms of service",
  "legal.terms.h1": "Terms of Service",
  "legal.terms.updated": "Last updated: September 21, 2026",

  "legal.terms.s1.title": "1. Acceptance",
  "legal.terms.s1.body":
    "Welcome to Zeus (the “Site”). By accessing or using the Site you agree to be bound by these terms. If you do not agree, please do not use the Site.",

  "legal.terms.s2.title": "2. Site Content",
  "legal.terms.s2.body":
    "Content on the Site is provided “as is” to introduce the product, and it changes as the product evolves. We strive for accuracy but make no express or implied warranty regarding completeness or timeliness.",

  "legal.terms.s3.title": "3. Product Stage",
  "legal.terms.s3.body":
    "Zeus is at v0.1 and in early access. The capabilities, architecture layers and access paths described here are an evolving design: nothing on the Site commits us to ship a particular capability on a particular date, or guarantees admission to the early-access group.",

  "legal.terms.s4.title": "4. Illustrative Data and the Demo Realm",
  "legal.terms.s4.body":
    "The clock, the realm and vassal counters, the SOVEREIGN REALM panel and the treasure-map walkthrough are illustrative samples used to demonstrate the interface. They are not benchmarks and are not connected to a live deployment.",

  "legal.terms.s5.title": "5. Your Data Stays Yours",
  "legal.terms.s5.body":
    "The Site does not host, receive or process your data directory. Data sovereignty — one folder as the seat of power, replaceable if you walk away — is a property of the product you install, not of this page. Backup, encryption and recovery behaviour is governed by the product itself as it ships.",

  "legal.terms.s6.title": "6. Intellectual Property",
  "legal.terms.s6.body":
    "The Site's copy, design and branding belong to the project team and may not be used commercially without permission. Source code is governed by the license declared in its repository.",

  "legal.terms.s7.title": "7. Acceptable Use",
  "legal.terms.s7.body":
    "Do not use the Site in ways that could harm or disrupt its operation or infringe on the rights of others, including malicious scraping, injection attacks, or impersonation of the Site.",

  "legal.terms.s8.title": "8. Limitation of Liability",
  "legal.terms.s8.body":
    "To the maximum extent permitted by law, the Site is not liable for any indirect, incidental or consequential damages arising from the use of, or inability to use, its content.",

  "legal.terms.s9.title": "9. Changes",
  "legal.terms.s9.body":
    "These terms may be updated; changes will be posted on this page. Continued use of the Site constitutes acceptance of the updated terms.",

  "legal.terms.s10.title": "10. Contact",
  "legal.terms.s10.pre": "Questions about these terms can be raised via Issues on our ",
  "legal.terms.s10.link": "GitHub repository",
  "legal.terms.s10.mid": ", or by email at ",
  "legal.terms.s10.post": ".",
} as const;

export const LEGAL_ZH: Record<keyof typeof LEGAL_EN, string> = {
  "legal.back": "返回王座",

  "legal.privacy.metaTitle": "隐私政策 | Zeus",
  "legal.privacy.metaDesc": "Zeus 落地页如何处理与你的访问相关的信息。",
  "legal.privacy.stencil": "隐私政策",
  "legal.privacy.h1": "隐私政策",
  "legal.privacy.updated": "最后更新：2026 年 9 月 21 日",

  "legal.privacy.s1.title": "1. 概述",
  "legal.privacy.s1.body":
    "Zeus（以下称「本站」）是一个产品介绍网站，介绍一套以你自己的数据目录为底座的操作系统。我们尊重并保护访问者的隐私。本政策说明我们如何处理与你的访问相关的信息。使用本站即表示你同意本政策的条款。",

  "legal.privacy.s2.title": "2. 我们处理的信息",
  "legal.privacy.s2.intro": "本站不提供账号，也不保存自己的访客数据。",
  "legal.privacy.s2.li1":
    "你交给 Zeus 的那个目录——产品全部前提所在——属于你自己，始终留在你的机器上。本站不会索取它。",
  "legal.privacy.s2.li2":
    "本站的准入申请表是纯前端演示：提交不会把任何内容发送到服务器。将来若开放真实的申请通道，我们会在收集任何信息之前先更新本政策。",
  "legal.privacy.s2.li3":
    "托管平台（Cloudflare Pages）可能按其自身政策记录基础访问日志（IP、User-Agent 等），这部分不在我们的控制范围内。",
  "legal.privacy.s2.li4":
    "若将来启用统计分析，也只使用匿名化的访问统计（页面浏览量、来源等），不用于识别个人。",

  "legal.privacy.s3.title": "3. 实时读数与演示领域",
  "legal.privacy.s3.body":
    "本站的时钟、领域计数与「主权领域」面板都是在你的浏览器里渲染的演示数据，没有连接任何后端；你对它们的任何操作都不会被传输或存储。",

  "legal.privacy.s4.title": "4. Cookie 与本地存储",
  "legal.privacy.s4.body":
    "本站可能使用浏览器 cookie 或 localStorage 记住语言等界面偏好。这些仅用于改善浏览体验，不用于跨站追踪。你可以在浏览器设置中禁用或清除它们。",

  "legal.privacy.s5.title": "5. 第三方链接",
  "legal.privacy.s5.body":
    "本站包含指向 GitHub 等第三方网站的链接。它们的隐私做法不在本政策覆盖范围内，请查阅其各自的政策。",

  "legal.privacy.s6.title": "6. 儿童",
  "legal.privacy.s6.body":
    "本站不面向 14 岁以下儿童，我们也不会在知情的情况下收集他们的个人信息。",

  "legal.privacy.s7.title": "7. 变更",
  "legal.privacy.s7.body":
    "本政策可能随产品演进更新，变更将在本页发布并更新修订日期。",

  "legal.privacy.s8.title": "8. 联系",
  "legal.privacy.s8.pre": "关于本政策的问题，可以在我们的 ",
  "legal.privacy.s8.link": "GitHub 仓库",
  "legal.privacy.s8.mid": " 提 Issue，或发邮件到 ",
  "legal.privacy.s8.post": "。",

  "legal.terms.metaTitle": "服务条款 | Zeus",
  "legal.terms.metaDesc": "使用 Zeus 落地页及其内容所适用的条款。",
  "legal.terms.stencil": "服务条款",
  "legal.terms.h1": "服务条款",
  "legal.terms.updated": "最后更新：2026 年 9 月 21 日",

  "legal.terms.s1.title": "1. 接受条款",
  "legal.terms.s1.body":
    "欢迎访问 Zeus（以下称「本站」）。访问或使用本站，即表示你同意受本条款约束；若不同意，请勿使用本站。",

  "legal.terms.s2.title": "2. 站点内容",
  "legal.terms.s2.body":
    "本站内容以「现状」提供，用于介绍产品，并随产品演进变化。我们力求准确，但不对完整性或时效性作任何明示或默示担保。",

  "legal.terms.s3.title": "3. 产品阶段",
  "legal.terms.s3.body":
    "Zeus 处于 v0.1 早期准入阶段。本站描述的能力、架构分层与接入路径都是演进中的设计：本站不构成「在某个日期交付某项能力」的承诺，也不保证获得准入资格。",

  "legal.terms.s4.title": "4. 示意数据与演示领域",
  "legal.terms.s4.body":
    "本站的时钟、领域与封臣计数、「主权领域」面板以及藏宝图演示，都是用于展示界面的示例数据。它们不是性能基准，也没有连接任何真实部署。",

  "legal.terms.s5.title": "5. 你的数据始终属于你",
  "legal.terms.s5.body":
    "本站不托管、不接收、也不处理你的数据目录。数据主权——一个目录即王座、离开时可替换——是你安装的产品所具有的属性，而不是这个页面的。备份、加密与恢复行为以产品实际交付为准。",

  "legal.terms.s6.title": "6. 知识产权",
  "legal.terms.s6.body":
    "本站的文案、设计与品牌归项目团队所有，未经许可不得用于商业用途。源码遵循其仓库声明的开源协议。",

  "legal.terms.s7.title": "7. 可接受使用",
  "legal.terms.s7.body":
    "请勿以可能损害或干扰本站运行、或侵犯他人权利的方式使用本站，包括恶意爬取、注入攻击或冒充本站。",

  "legal.terms.s8.title": "8. 责任限制",
  "legal.terms.s8.body":
    "在法律允许的最大范围内，对于因使用或无法使用本站内容而产生的任何间接、附带或后果性损害，本站不承担责任。",

  "legal.terms.s9.title": "9. 变更",
  "legal.terms.s9.body":
    "本条款可能更新，变更将在本页发布。继续使用本站即视为接受更新后的条款。",

  "legal.terms.s10.title": "10. 联系",
  "legal.terms.s10.pre": "关于本条款的问题，可以在我们的 ",
  "legal.terms.s10.link": "GitHub 仓库",
  "legal.terms.s10.mid": " 提 Issue，或发邮件到 ",
  "legal.terms.s10.post": "。",
};
