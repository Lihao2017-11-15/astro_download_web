# 苹果电脑MAC优质软件下载站

基于 Astro 构建的静态软件下载博客网站，支持软件分类浏览、站内搜索和详情展示。

## 功能特性

- 软件分类浏览 - 按类别查看所有软件
- 站内搜索 - 支持按名称、描述、标签搜索
- 软件详情页 - 展示软件详细信息和使用说明
- 下载统计 - 显示每款软件的下载次数
- 响应式设计 - 适配桌面和移动设备
- 自动部署 - 支持 Vercel 自动部署

## 技术栈

- [Astro](https://astro.build/) - 静态站点生成器
- TypeScript - 类型安全
- Vercel - 托管和部署

## 项目结构

```
├── src/
│   ├── components/     # 可复用组件
│   ├── content/        # 软件内容数据
│   ├── layouts/        # 页面布局
│   └── pages/          # 页面路由
├── public/             # 静态资源
└── astro.config.mjs    # Astro 配置
```

## 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建
npm run build

# 预览构建结果
npm run preview
```

## 添加新软件

在 `src/content/software/` 目录下创建新的 Markdown 文件：

```markdown
---
title: "软件名称"
description: "软件描述"
version: "1.0.0"
category: "分类名称"
tags: ["标签1", "标签2"]
downloadUrl: "https://example.com/download"
fileSize: "10 MB"
publishDate: 2024-03-01
updateDate: 2024-03-01
author: "作者"
downloadCount: 0
featured: false
---

## 软件介绍

软件详细介绍...

## 主要特性

- 特性1
- 特性2
```

## 部署到 Vercel

### 方法1：通过 Git 部署

1. 将代码推送到 GitHub
2. 在 Vercel 导入项目
3. 自动部署

### 方法2：使用 Vercel CLI

```bash
# 安装 Vercel CLI
npm i -g vercel

# 登录
vercel login

# 部署
vercel --prod
```

## 许可证

MIT
