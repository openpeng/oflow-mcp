## 当前任务

将草稿箱中的文章正式发布到微信公众号。

## 前置信息

- AppID: {{wechat_appid}}
- AppSecret: {{wechat_appsecret}}
- draft_id: {{steps.draft.outputs.draft_id}}
- 文章标题: {{steps.prepare.outputs.article_title}}

## 操作步骤

1. 获取微信公众号 access_token（确保有效期内）
2. 调用微信发布 API 将草稿正式发布：
   - API: POST https://api.weixin.qq.com/cgi-bin/freepublish/submit
   - 请求体包含：draft_id
3. 获取发布任务 ID，轮询发布状态：
   - API: POST https://api.weixin.qq.com/cgi-bin/freepublish/get
4. 等待发布完成，获取最终文章 URL

## 微信 API 调用示例

```bash
# 获取 access_token
ACCESS_TOKEN=$(curl -s "https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid={{wechat_appid}}&secret={{wechat_appsecret}}" | jq -r '.access_token')

# 提交发布
PUBLISH_RESULT=$(curl -X POST "https://api.weixin.qq.com/cgi-bin/freepublish/submit?access_token=$ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"draft_id": "{{steps.draft.outputs.draft_id}}"}')

PUBLISH_ID=$(echo $PUBLISH_RESULT | jq -r '.publish_id')

# 查询发布状态（轮询直到完成）
while true; do
  STATUS=$(curl -X POST "https://api.weixin.qq.com/cgi-bin/freepublish/get?access_token=$ACCESS_TOKEN" \
    -H "Content-Type: application/json" \
    -d "{\"publish_id\": \"$PUBLISH_ID\"}")
  if echo $STATUS | grep -q '"publish_status": 0'; then
    ARTICLE_URL=$(echo $STATUS | jq -r '.article_url')
    break
  fi
  sleep 5
done
```

## 注意事项

- 正式发布后文章不可撤回，请谨慎操作
- 发布状态查询可能需要轮询多次（通常1-3分钟）
- 确保公众号已完成开发者认证且开通相关权限

## 输出要求

提供以下 required_outputs：

- publish_id: 发布任务 ID
- article_url: 发布成功后的文章访问链接
- publish_time: 正式发布时间戳

## 完成标准

- publish_id 非空
- article_url 非空且为有效的 URL 格式