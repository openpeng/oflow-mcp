## 当前任务

将 Markdown 文档转换为适合微信公众号的 HTML 格式，并处理图片素材。

## 前置信息

- 文档路径: {{article_path}}
- 封面图片: {{cover_image}}
- 文章标题: {{steps.prepare.outputs.article_title}}

## 操作步骤

1. 使用 Markdown 转换器（如 pandoc、markdown-it 等）将本地文档转换为 HTML
2. 优化 HTML 格式以适配微信公众号编辑器：
   - 去除多余的样式和脚本
   - 添加适合手机阅读的内联样式（字体、行间距、段落间距）
   - 将代码块转换为微信支持的格式
   - 处理表格、引用等特殊元素
3. 提取文档中的图片链接
4. 如果有封面图片，上传到微信永久素材库获取 media_id
5. 如果正文有图片，逐一上传到微信永久素材库

## 工具推荐

可用工具（选择其一或组合）：
- wechat-oa-skill: 轻量 CLI 工具，支持 Markdown→草稿箱一键推送
- wechatpy: Python 微信公众号 SDK，支持素材上传和草稿管理
- wxauto: 基于微信客户端的自动化工具（需要安装微信客户端）

## 输出要求

提供以下 required_outputs：

- html_content: 转换后的 HTML 内容，长度至少100字符
- cover_media_id: 封面图的 media_id（无封面则为空字符串）

可选输出：

- content_images: 正文图片的 media_id 列表（JSON 数组格式）

## 完成标准

- html_content 非空且长度 > 100
- cover_media_id 要么为空字符串，要么是有效的微信 media_id