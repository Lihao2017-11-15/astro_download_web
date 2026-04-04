# 部署指南

## 方式一：使用 Vercel CLI 部署（推荐）

### 1. 安装 Vercel CLI

```bash
npm i -g vercel
```

### 2. 登录 Vercel

```bash
vercel login
```

选择登录方式（GitHub、Google、Email 等），按提示完成授权。

### 3. 部署项目

```bash
# 首次部署
vercel

# 后续部署到生产环境
vercel --prod
```

## 方式二：通过 GitHub 自动部署

### 1. 创建 GitHub 仓库

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/你的用户名/软件下载站.git
git push -u origin main
```

### 2. 在 Vercel 导入项目

1. 访问 https://vercel.com/new
2. 选择你的 GitHub 仓库
3. 框架预设选择 "Astro"
4. 点击 "Deploy"

### 3. 配置自动部署

Vercel 会自动配置 GitHub Webhook，每次推送到 main 分支都会自动重新部署。

## 方式三：手动上传静态文件

如果只需要静态托管，可以直接上传 `dist` 文件夹中的内容到任何静态托管服务：

- Vercel: 拖拽 dist 文件夹到 https://vercel.com/new
- Netlify: 拖拽 dist 文件夹到 https://app.netlify.com/drop
- GitHub Pages: 将 dist 内容推送到 gh-pages 分支

## 部署后的配置

### 自定义域名

1. 在 Vercel Dashboard 中选择项目
2. 进入 Settings > Domains
3. 添加你的自定义域名
4. 按提示配置 DNS 记录

### 环境变量

如需配置环境变量（如 API 密钥等）：

1. 进入 Settings > Environment Variables
2. 添加变量名和值
3. 重新部署项目

## 更新网站内容

### 添加新软件

1. 在 `src/content/software/` 目录创建新的 Markdown 文件
2. 按照现有文件格式填写软件信息
3. 提交并推送代码（自动部署）或手动重新部署

### 修改现有软件

直接编辑对应的 Markdown 文件，然后重新部署。

## 常见问题

### 构建失败

检查 `astro.config.mjs` 配置是否正确，确保所有依赖已安装：

```bash
npm install
npm run build
```

### 页面 404

确保 `vercel.json` 中的路由配置正确，或者使用 `output: 'static'` 模式。

### 样式丢失

检查 `astro.config.mjs` 中的 `site` 配置是否正确指向你的域名。
