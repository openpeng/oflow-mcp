## 当前任务

归档本次微信公众号发布流程的所有结果。

## 前置信息

- 文章标题: {{steps.prepare.outputs.article_title}}
- 原始文档: {{article_path}}
- draft_id: {{steps.draft.outputs.draft_id}}
- create_time: {{steps.draft.outputs.create_time}}

发布信息（如已发布）：
- publish_id: {{steps.publish.outputs.publish_id}}
- article_url: {{steps.publish.outputs.article_url}}
- publish_time: {{steps.publish.outputs.publish_time}}

## 操作步骤

1. 创建归档目录（建议按日期组织）
2. 将发布结果保存为 JSON 文件，包含完整的发布信息
3. 如果已发布，记录文章 URL
4. 生成发布摘要总结
5. 可选：将原始文档复制到归档目录

## 归档文件格式示例

```json
{
  "article_title": "{{steps.prepare.outputs.article_title}}",
  "original_path": "{{article_path}}",
  "draft_id": "{{steps.draft.outputs.draft_id}}",
  "draft_created_at": "{{steps.draft.outputs.create_time}}",
  "published": {{do_publish == "true" ? "true" : "false"}},
  "publish_id": "{{steps.publish.outputs.publish_id}}",
  "article_url": "{{steps.publish.outputs.article_url}}",
  "publish_time": "{{steps.publish.outputs.publish_time}}",
  "archived_at": "当前时间戳",
  "workflow_instance": "工作流实例ID"
}
```

## 输出要求

提供以下 required_outputs：

- archive_path: 归档文件保存的完整路径
- summary: 本次发布流程的汇总信息（至少20字符）

## 完成标准

- archive_path 指向有效的文件路径
- summary 包含文章标题、发布状态、关键ID等信息