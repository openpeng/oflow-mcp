## 当前任务

将转换好的文章推送到微信公众号草稿箱。

## 前置信息

- AppID: {{wechat_appid}}
- AppSecret: {{wechat_appsecret}}
- 文章标题: {{steps.prepare.outputs.article_title}}
- HTML内容: {{steps.convert.outputs.html_content}}
- 封面 media_id: {{steps.convert.outputs.cover_media_id}}
- 作者: {{author}}

## 操作步骤

1. 获取微信公众号 access_token（有效期2小时，建议缓存）
2. 调用微信公众号 API 创建草稿箱文章：
   - API: POST https://api.weixin.qq.com/cgi-bin/draft/add
   - 请求体包含：title, author, digest, content, content_source_url, thumb_media_id
3. 将 HTML 内容作为 content 字段传入
4. 如果有封面，将 cover_media_id 作为 thumb_media_id 传入
5. 验证 API 返回结果，确认草稿创建成功

## 微信 API 调用示例

```bash
# 获取 access_token
ACCESS_TOKEN=$(curl -s "https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid={{wechat_appid}}&secret={{wechat_appsecret}}" | jq -r '.access_token')

# 创建草稿
curl -X POST "https://api.weixin.qq.com/cgi-bin/draft/add?access_token=$ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "articles": [
      {
        "title": "{{steps.prepare.outputs.article_title}}",
        "author": "{{author}}",
        "digest": "文章摘要",
        "content": "...HTML内容...",
        "content_source_url": "",
        "thumb_media_id": "{{steps.convert.outputs.cover_media_id}}"
      }
    ]
  }'
```

## 输出要求

提供以下 required_outputs：

- draft_id: 微信返回的草稿箱 ID，长度至少10字符
- create_time: 创建时间戳

## 完成标准

- draft_id 非空且长度 > 10
- API 返回状态码为 0（成功）