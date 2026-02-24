<div align="center">
  <img src="./assets/app-icon.svg" width="120" height="120" alt="Coral Pocket AI Logo">
  <h1>🌊 珊瑚口袋 AI (Coral Pocket)</h1>
  <p><strong>「 不被定义的 AI 终端：2026 次世代 · 单文件 · 全栈多模态随身智囊 」</strong></p>
  
  <p>🌍 🇨🇳 简体中文 | <a href="./README_EN.md">🇬🇧 English</a></p>

  <h3>
    🔴 <a href="https://hua.yooyo.asia/html_files/20260225_021715_26766a.html">点击这里：立即访问云端纯净体验节点 (Live WebUI)</a> 🔴
  </h3>

  <p>
    <img src="https://img.shields.io/badge/Architecture-Single--File-orange?style=for-the-badge" alt="Build">
    <img src="https://img.shields.io/badge/Platform-PWA%20%7C%20iOS%20%7C%20Android%20%7C%20Web-success?style=for-the-badge" alt="Platform">
    <img src="https://img.shields.io/badge/Privacy-100%25_Local-blueviolet?style=for-the-badge" alt="Privacy">
    <img src="https://img.shields.io/badge/license-MIT-blue?style=for-the-badge" alt="License">
  </p>
</div>

---

## 💡 序言：2026 年，你是否依旧困于“信息茧房”？

站在 AIGC 狂飙突进的时代节点，我们审视当下的开发者与普通用户生态，却发现令人窒息的痛点正在蔓延：
*   **昂贵的墙与被阉割的智力**：想要体验满血版 **ChatGPT (GPT-5.3)** 或是破圈的 **Claude-opus-4.1**，不仅需要面对严苛的 IP 封锁、海外信用卡风控，还要忍受极高的网络延迟。
*   **隐私的裸奔时代**：市面上充斥着各种“套壳镜像站”，它们在后端悄悄记录你的每一句涉密 Prompt（提示词）、商业企划甚至私人情感数据，以此作为二次训练的免费语料。
*   **极度臃肿的软件生态**：几个简单的对话框，被打包成了动辄几百 MB 的 App。弹窗广告、强迫注册、按月高昂订阅……

> *"The best software is the one that disappears." (最好的软件是那些不被察觉的软件。)*

**珊瑚口袋 AI (Coral Pocket)** 正是基于这种“反叛”的极客心理学诞生的。我们摒弃了 Node.js 后端，砍掉了庞大的框架，用极致的 `Single-File (纯单文件)` 架构，打造了这把通往次世代 AI 宇宙的万能钥匙。

## 🧬 极客哲学与架构之美

**1. 绝对的去中心化与数据主权 (Local-First)**
整个系统仅包含 HTML、CSS 和原生 JavaScript。**零后端服务器，零追踪脚本，零注册门槛**。你输入的每一个字符、配置的每一个 **API 代理密钥**，都 100% 物理隔绝地加密封存在你当前设备的本地浏览器缓存（IndexedDB/LocalStorage）中。

**2. 毫秒级的原生感知 (Zero-Latency Rendering)**
为了消除长文本模型（如 **Gemini-3.1-pro-preview**、**DeepSeek** 满血版）在吐字时的视觉撕裂感，我们放弃了沉重的 React/Vue 虚拟 DOM，由数十年前沿图形工程师主导，手写了**“双缓冲防抖动流式解析引擎 (Double-buffered Streaming Engine)”**。即使在使用高延迟的第三方中转接口时，也能为你呈现行云流水般的人类心流打字质感。

## ✨ 核心硬核特性 (Features Matrix)

- ⚡ **万能协议栈 (Protocol Agnostic)**
  - 深度遵循且严丝合缝地兼容 `OpenAI /v1/chat/completions` 标准协议。
  - **接口极度自由**：无论你是挂载本地部署的 Ollama / vLLM 微调模型，还是接入任何**高优网络中转站、专线 API 代理分发平台**，只需在此前端重写 Base URL，即可实现完美平替与无缝握手。

- 🌈 **次世代全网模型无缝平滑切换**
  - 内置智能调度策略，对齐目前全球最强算力：**GPT-5.3 视觉语音多模态、Claude-opus-4.1 长篇逻辑推理、Gemini-3.1 极速版、Grok、DeepSeek** 等大模型，无需切换应用，右上角一键任意漫游。

- 📊 **[核心] 中枢资产与数字账单控制台**
  - 使用复杂的大语言模型，绝不能是一笔糊涂账。结合复杂的 Tokens 计算逻辑，我们在侧边栏深植了企业级的监控中枢。
  - 👉 **[🔴 点击此处：直达全局 API 资产与额度总控看板 (Console)](https://api.inyu.top/console)**。不仅可以可视化您的历史并发图表、Token 调用开销，还能在此处集中调试您的备用网络通道与高速轮询密钥。

- 📱 **PWA 沉浸式引擎 (Mobile-Native Illusion)**
  - 彻底抛弃应用商店的审核霸权。利用 Progressive Web App 技术，在 Safari 或 Chrome 浏览器中点击“添加到主屏幕”，瞬间化身为纯粹、无边框、支持单手全局滑动的 App。

- 📎 **全维多模态沙盒 (Multi-Modal Vision)**
  - PDF 文献解析、超高清原图视觉理解、复杂代码沙盒拖拽。不挑格式，本地预处理直传模型核心流。

## 🚀 极速部署指南 (Deploy in 3 Seconds)

作为工程设计的最高境界，我们提供以下三种几乎“零摩擦”的接入方式：

### 方案 A：云端免部署体验 (Zero-Config)
这是最低门槛的解决方案。您的客户端会直接请求您设定的 LLM 节点：
👉 **[点击启动 WebUI 在线体验端](https://hua.yooyo.asia/html_files/20260225_021715_26766a.html)** *(即使在断网状态下也能查阅历史存储数据)*

### 方案 B：Air-Gapped 物理私有化 (绝对安全推荐)
1. 点击本仓库右上角 `Code` -> `Download ZIP`，解压提取 `index.html`。
2. 将该文件断网传输至任何设备（甚至是可以插 U 盘的老旧内网电脑）。
3. 使用任何现代浏览器直接双击打开运行。
4. 点击界面左下角 **⚙️ 环境配置**，填入你的 `接口鉴权地址 (Base URL)` 与 `通信证书 (Token Key)`，开启对话。

> 💡 **进阶破壁提示 (Advanced Workaround):** 
> 很多用户苦于无法解决官方信用卡限制，或者 IP 被频繁 Block。
> 我们推荐您直接登入 **[统一标准中转服务前端 (API Console)](https://api.inyu.top/console)**。在这里，您可以一站式获取到免挂梯子、免除风控风暴的 **GPT-5.3 和 Claude-opus-4.1 高速无码专线密钥 (Token)**，完美契合本客户端。

### 方案 C：Vercel / Cloudflare 边缘托管
如果您极客之心未泯，想将此站点绑定在自己的顶级域名下：
<a href="https://vercel.com/new/clone?repository-url=https://github.com/inyu/coral-pocket">
  <img src="https://vercel.com/button" alt="Deploy with Vercel">
</a>

## 🤝 致敬远见者与极客同盟

科技不应是封闭的城墙。我们深知在探索顶级 AIGC 生产力的道路上，提示词工程 (Prompt Engineering)、跨域限制 (CORS)、高并发链路优化等问题常常令人抓狂。

为止，我们建立了一个纯粹的**硬核玩家共建联盟**。
🎁 **入群隐藏掉落**：为了降低新手的接入摩擦，我们会在交流群内，每日不定期掉落**由社区赞助的免费 GPT-5.3 / Claude-4.1 公益体验 Token 兑换码及稳定直连 BaseUrl 教程**。名额有限，为求知者而留：

<div align="center">
  <img src="https://sss.inyu.top/img/2026/02/25/025321_0382e898.png" width="300" alt="扫码获取免梯子极速专线教程与公益额度">
  <br>
  <p><i>👆 识别上方数字信标，接入『珊瑚口袋 AI』全球极客极速通信频道 👆</i></p>
</div>

## 🛠️ 底层技术栈 (Technology Stack)

*   **DOM 构建**: `Vanilla Javascript (ES2026)` - 拒绝虚拟 DOM 损耗。
*   **样式重置与引擎**: `Tailwind CSS V4` (Minified & Purged) - 亚毫秒级排版。
*   **Markdown 流式解析**: 首创重构版 `Marked.js` 流水线映射。
*   **高亮沙盒**: `Highlight.js` 轻量静态切割。
*   **本地金库**: `IndexedDB API` / `Web Crypto API`。

## 📜 契约精神 (License)

在闭源与垄断横行的 2026 年，我们逆流而上。
本项目基于纯粹的 **[MIT License](LICENSE)** 许可协议进行永久开源防篡改公示。您可以自由地在商业闭源系统中嵌入本单页，或对其进行无限制的二次分发（注：请遵循当地通用数字版权法）。
