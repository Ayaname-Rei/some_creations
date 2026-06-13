# RoboGame 搭车日志

这是 RoboGame 团队生活记录网页的 React 版本。页面拆分为：

- 首页
- 团队成员主页
- 工作日志
- 快乐瞬间
- 难忘瞬间
- Reward

## 本地运行

```bash
npm install
npm run dev
```

## 构建

```bash
npm run build
```

构建产物位于 `dist/`，Vite 已配置 GitHub Pages 子路径：

```js
base: "/some_creations/"
```

## 后续替换建议

1. 在仓库中新建 `assets/photos/`，放入工作照、搭车照、合影和赛场照。
2. 在 React 组件中把 `.placeholder` / `.media-slot` 替换为 `<img src="/assets/photos/xxx.jpg" alt="...">`。
3. 在视频区把视频占位替换为 `<video>` 或 iframe 嵌入。
4. 将队员卡片中的姓名、分工和占位描述替换为真实内容。
