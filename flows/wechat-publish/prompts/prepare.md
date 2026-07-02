## 当前任务

准备微信公众号发布所需的文档和配置。

## 输入参数

- article_path: {{article_path}}
- wechat_appid: {{wechat_appid}}
- wechat_appsecret: {{wechat_appsecret}}
- cover_image: {{cover_image}}
- title: {{title}}
- author: {{author}}
- do_publish: {{do_publish}}

## 操作步骤

1. 检查 article_path 指向的文档文件是否存在且可读取
2. 验证 wechat_appid 和 wechat_appsecret 是否已配置（非空）
3. 如果 cover_image 指定了路径，检查封面图片是否存在
4. 从文档中提取标题（如果 title 参数未指定）
5. 确认所有必要条件满足后进入下一阶段

## 输出要求

提供以下 required_outputs：

- document_exists: "true" 或 "false"，表示文档文件是否存在且可读取
- config_valid: "true" 或 "false"，表示公众号配置是否完整有效
- article_title: 文章标题（优先使用 title 参数，否则从文档提取）

## 完成标准

- document_exists == "true"
- config_valid == "true"
- article_title 长度至少5个字符