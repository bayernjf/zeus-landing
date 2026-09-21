// Bilingual copy dictionary. Flat dot-keyed so a missing key is obvious at the
// call site; read through useTranslations(lang), never indexed directly.
// Privacy / terms copy lives in ./legal and is spread in below, so the legal
// pages still read through the same t() pipeline.
import { LEGAL_EN, LEGAL_ZH } from "./legal";

export const languages = {
  en: "English",
  zh: "简体中文",
} as const;

export const defaultLang = "en";

export const ui = {
  en: {
    "meta.title": "Zeus — the agent OS where your directory is the throne",
    "meta.description":
      "Zeus is an operating system built on your own data directory. Agents are your vassals, MCP connects the world, Skills compound, and A2A holds them together. For individuals: a harbor for memory and a map you can pass on. For teams: a plug-in virtual department that onboards on day one.",

    "nav.langSwitch": "中文",
    "hud.home": "Zeus home",
    "hud.res.realms": "REALMS",
    "hud.res.vassals": "VASSALS",
    "hud.res.protocols": "PROTOCOLS",

    "hero.badge": "v0.1 · early access",
    "hero.title.line1": "Your directory is the throne.",
    "hero.title.pre": "Agents are your ",
    "hero.title.accent": "vassals.",
    "hero.title.post": "",
    "hero.sub":
      "Zeus is an operating system that takes one folder as its data seat of power. It connects MCP tools, grows Skills, and lets agents delegate to one another over A2A — while you remain the driver who steers, reviews and decides. Your data leaves only on your order.",
    "hero.cta.primary": "Request access",
    "hero.cta.secondary": "See the architecture",
    "hero.meta.protocols": "protocols",
    "hero.meta.layers": "layers",
    "hero.meta.modes": "modes",
    "hero.meta.flowPre": "data stays in your ",
    "hero.meta.flowPost": "realm",
    "hero.map.bar": "SOVEREIGN REALM · LIVE",

    "tenets.bar": "THE THREE TENETS",
    "tenets.title": "Every capability enters through one of three doors.",
    "tenets.sub":
      "No feature is a one-off. Anything Zeus integrates must collapse to MCP, Skill, or A2A — the only postures the constitution permits.",
    "tenets.1.tag": "I · CONNECT",
    "tenets.1.title": "MCP — plug into the world",
    "tenets.1.desc":
      "Any system that speaks MCP becomes a data and tool source. Enterprise side: auditable, revocable, never a black box.",
    "tenets.2.tag": "II · GROW",
    "tenets.2.title": "Skill — teachable, hardenable",
    "tenets.2.desc":
      "Skill packages declare inputs, permissions and dependencies. A mentor agent can pass them to a new hire or a new agent.",
    "tenets.3.tag": "III · ORGANIZE",
    "tenets.3.title": "A2A — agents govern agents",
    "tenets.3.desc":
      "Every vassal product exposes an Agent Card. Zeus dispatches tasks, streams reports back, and escalates to you the moment a human call is needed.",

    "stack.bar": "THE STACK",
    "stack.title": "Five layers, one seam.",
    "stack.sub":
      "Narrative on top, data on the bottom. Every layer above is backed by a real, executable primitive below — poetry and engineering are the same map.",
    "stack.layer5.tag": "NARRATIVE",
    "stack.layer5.title": "Chronicle · Mentor · Harbor · Inheritance",
    "stack.layer5.desc":
      "Emotional value and belonging, not slogans — every story points to a recovery action.",
    "stack.layer4.tag": "COLLABORATE",
    "stack.layer4.title": "Team · A2A delegation · Oversight deck",
    "stack.layer4.desc":
      "A small society of agents, with you as the driver. Approve, reject, redirect.",
    "stack.layer3.tag": "GROW",
    "stack.layer3.title": "Skill packs · Mentor onboarding · Agent registry",
    "stack.layer3.desc":
      "Recruit, train, harden. Capability becomes an asset, not a one-off prompt.",
    "stack.layer2.tag": "CONNECT",
    "stack.layer2.title": "MCP connectors · External agents · Vassal products",
    "stack.layer2.desc":
      "pr-helper, loom, atlas — each keeps its own repo and deploy, reports back as war dispatches.",
    "stack.layer1.tag": "DATA",
    "stack.layer1.title": "Realm directory · Vault · Map manifest · Backups",
    "stack.layer1.desc":
      "You point at a folder. That folder is the database. Backups are a first-class citizen.",

    "dual.bar": "ONE ENGINE, TWO REGIMES",
    "dual.title": "Same primitives. Different sovereignty.",
    "dual.sub":
      "Personal and enterprise realms share every layer. The only thing that changes is who holds the keys and who may audit.",
    "dual.personal.tag": "PERSONAL REALM",
    "dual.personal.title": "A harbor for memory",
    "dual.personal.desc":
      "One sovereign. Your memories, your diary, your treasure map — encrypted, backed up, and inheritable under conditions you set.",
    "dual.personal.p1": "Single-owner directory",
    "dual.personal.p2": "Diary as narrative backup",
    "dual.personal.p3": "A map you can pass on",
    "dual.enterprise.tag": "ENTERPRISE REALM",
    "dual.enterprise.title": "A virtual department",
    "dual.enterprise.desc":
      "Multi-tenant, org-aware. A mentor agent briefs the new hire on day one; employees supervise agents, never hand-execute.",
    "dual.enterprise.p1": "Onboard on day one",
    "dual.enterprise.p2": "Knowledge survives turnover",
    "dual.enterprise.p3": "Audit-ready, data stays in the domain",

    "map.bar": "THE TREASURE MAP",
    "map.title": "The map is the recovery protocol.",
    "map.sub":
      "Zeus never stores your treasure in the cloud. It stores an encrypted manifest plus the route to your vault — so you hold the map, and Zeus only holds a backup of the map.",
    "map.p1":
      "Manifest, not data: an encrypted list of what you own, where it lives, and how to restore it.",
    "map.p2": "Diary as backup: memory written in story, replayable as events.",
    "map.p3":
      "The data diode: personal realm and enterprise realm never leak into each other without explicit authorization.",
    "map.p4":
      "Inheritance: a recovery protocol with conditions and keys — designed from day one, shipped later.",

    "cta.bar": "ACCESS REQUEST",
    "cta.eyebrow": "Early access",
    "cta.title": "Bring your directory.",
    "cta.sub":
      "No migration, no lock-in. Point Zeus at a folder and the OS stands it up. Take the folder away and Zeus is replaceable — that is the point.",
    "cta.list1": "First vassal: pr-helper, now in acceptance",
    "cta.list2": "Realm read / write / retrieve interface spec",
    "cta.list3": "A2A agent-card + task dispatch draft",
    "cta.list4": "Bilingual (en / zh) on day one",
    "cta.email": "your email",
    "cta.size": "what are you?",
    "cta.size1": "individual",
    "cta.size2": "small team",
    "cta.size3": "department",
    "cta.size4": "enterprise platform",
    "cta.submit": "Request access",
    "cta.note":
      "We read every request. No marketing lists — just the occasional changelog.",

    "foot.tag": "Your directory is the throne. Agents are the vassals.",
    "foot.nav.tenets": "Three tenets",
    "foot.nav.stack": "The stack",
    "foot.nav.dual": "Two regimes",
    "foot.nav.map": "Treasure map",
    "foot.nav.cta": "Access",
    "foot.nav.privacy": "Privacy",
    "foot.nav.terms": "Terms",

    ...LEGAL_EN,
  },

  zh: {
    "meta.title": "Zeus —— 以你的目录为王座的多 Agent 操作系统",
    "meta.description":
      "Zeus 是一个以用户数据目录为底座的操作系统：MCP 连接世界，Skill 持续成长，A2A 让 Agent 互相协作，而你始终是掌舵的驾驶员。对个人，是记忆的避风港与可传承的藏宝图；对企业，是即插即用、伴随成长的虚拟部门。",

    "nav.langSwitch": "EN",
    "hud.home": "Zeus 首页",
    "hud.res.realms": "数据域",
    "hud.res.vassals": "封臣",
    "hud.res.protocols": "协议",

    "hero.badge": "v0.1 · 早期准入",
    "hero.title.line1": "你的目录，即是王座。",
    "hero.title.pre": "Agent 皆是你的",
    "hero.title.accent": "封臣。",
    "hero.title.post": "",
    "hero.sub":
      "Zeus 以一个目录为数据底座，接入 MCP 工具、沉淀 Skill 技能、通过 A2A 让 Agent 之间互相委派与回流。你始终保留中断、改道与拍板的最高权——数据只在你点头时离开。",
    "hero.cta.primary": "申请准入",
    "hero.cta.secondary": "查看架构",
    "hero.meta.protocols": "协议",
    "hero.meta.layers": "层",
    "hero.meta.modes": "模式",
    "hero.meta.flowPre": "数据留守你的",
    "hero.meta.flowPost": "Realm",
    "hero.map.bar": "主权数据域 · 在线",

    "tenets.bar": "立国三纲",
    "tenets.title": "一切能力，只从三道门进入。",
    "tenets.sub":
      "Zeus 没有一次性功能。任何接入都必须落到 MCP、Skill 或 A2A——这是宪法规定的唯一姿势。",
    "tenets.1.tag": "I · 连接",
    "tenets.1.title": "MCP —— 连接世界",
    "tenets.1.desc":
      "任何说 MCP 的系统，都成为数据与工具来源。企业侧可审计、可断权，绝不是黑盒。",
    "tenets.2.tag": "II · 成长",
    "tenets.2.title": "Skill —— 可加固、可传承",
    "tenets.2.desc":
      "技能包声明输入、权限与依赖。导师 Agent 可以把它教给新员工或新 Agent。",
    "tenets.3.tag": "III · 组织",
    "tenets.3.title": "A2A —— Agent 治理 Agent",
    "tenets.3.desc":
      "每个封臣产品暴露一张 Agent Card。Zeus 派发任务、以 SSE 回流战报，需要人拍板时立刻升级。",

    "stack.bar": "五层架构",
    "stack.title": "五层，一条缝。",
    "stack.sub":
      "叙事在顶，数据在底。上层的每一句诗，都对应下层一段真实可执行的原语——诗与工程是同一张图。",
    "stack.layer5.tag": "叙事层",
    "stack.layer5.title": "藏宝图 · 日记 · 导师 · 港湾 · 传承",
    "stack.layer5.desc":
      "情绪价值与归属感，不靠口号——每一段叙事都指向一个恢复动作。",
    "stack.layer4.tag": "协作层",
    "stack.layer4.title": "编制(Team) · 委托(A2A) · 监督台",
    "stack.layer4.desc":
      "一个小小的 Agent 社会，你是驾驶员。批准、驳回、改道。",
    "stack.layer3.tag": "能力层",
    "stack.layer3.title": "Skill 技能包 · Mentor 带教 · Agent 注册",
    "stack.layer3.desc":
      "招兵买马、导师带教、技能加固。能力变成资产，而不是一次性提示词。",
    "stack.layer2.tag": "连接层",
    "stack.layer2.title": "MCP 连接器 · 外部 Agent · 封臣产品",
    "stack.layer2.desc":
      "pr-helper、loom、atlas——各自独立仓库与部署，以战报形式回流到 Zeus。",
    "stack.layer1.tag": "数据层",
    "stack.layer1.title": "Realm 目录 · Vault 宝库 · Map 清单 · 备份",
    "stack.layer1.desc":
      "你指一个目录，它就是数据库。备份是第一公民。",

    "dual.bar": "同一引擎，两套治理",
    "dual.title": "同一套原语，不同的主权。",
    "dual.sub":
      "个人版与企业版共用全部五层。唯一的差别，是谁握着钥匙、谁有权审计。",
    "dual.personal.tag": "个人 Realm",
    "dual.personal.title": "记忆的避风港",
    "dual.personal.desc":
      "单一主权。你的记忆、日记、藏宝图——加密、备份，并按你设定的条件传承。",
    "dual.personal.p1": "单一所有者目录",
    "dual.personal.p2": "日记即记忆备份",
    "dual.personal.p3": "可传承的藏宝图",
    "dual.enterprise.tag": "企业 Realm",
    "dual.enterprise.title": "即插即用的虚拟部门",
    "dual.enterprise.desc":
      "多租户、组织感知。导师 Agent 上岗第一天就向新员工讲清业务；员工是监督者，不再手工执行。",
    "dual.enterprise.p1": "新员工上岗即用",
    "dual.enterprise.p2": "人走，知识不走",
    "dual.enterprise.p3": "可审计，数据不出域",

    "map.bar": "藏宝图",
    "map.title": "藏宝图，即恢复协议。",
    "map.sub":
      "Zeus 不在云端存你的宝藏。它只存一份加密清单与回到宝库的路线图——图在你手，Zeus 只保管图的备份。",
    "map.p1":
      "存清单，不存宝藏：加密记录你拥有什么、它在哪、如何恢复。",
    "map.p2": "日记即备份：记忆以故事写下，以事件回放。",
    "map.p3":
      "数据二极管：个人域与企业域，未经授权绝不互通。",
    "map.p4":
      "传承：带条件与密钥的恢复协议——从第一天设计，晚些时候交付。",

    "cta.bar": "申请准入",
    "cta.eyebrow": "早期准入",
    "cta.title": "带上你的目录来。",
    "cta.sub":
      "不用迁移，不被锁定。指给 Zeus 一个目录，操作系统就立起来；拿走目录，Zeus 可被替换——这正是重点。",
    "cta.list1": "首个封臣 pr-helper，验收中",
    "cta.list2": "Realm 读写/检索接口规约",
    "cta.list3": "A2A Agent Card + 任务派发草案",
    "cta.list4": "上线即双语（中 / 英）",
    "cta.email": "你的邮箱",
    "cta.size": "你是谁？",
    "cta.size1": "个人",
    "cta.size2": "小团队",
    "cta.size3": "部门",
    "cta.size4": "企业平台",
    "cta.submit": "申请准入",
    "cta.note":
      "每封申请都会读。不发营销邮件——只偶尔发一份 changelog。",

    "foot.tag": "你的目录即王座，Agent 皆是封臣。",
    "foot.nav.tenets": "三纲",
    "foot.nav.stack": "架构",
    "foot.nav.dual": "双态",
    "foot.nav.map": "藏宝图",
    "foot.nav.cta": "准入",
    "foot.nav.privacy": "隐私",
    "foot.nav.terms": "条款",

    ...LEGAL_ZH,
  },
} as const;

export type Lang = keyof typeof ui;
export type UIKey = keyof (typeof ui)["en"];
