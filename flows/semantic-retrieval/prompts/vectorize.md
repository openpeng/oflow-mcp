## 当前任务

使用 Gitee AI Embeddings 接口将文本片段转换为向量。

## 上下文

- 文本片段：`{{steps.split_text.outputs.text_chunks}}`

## API 信息

- URL: https://ai.gitee.com/v1/embeddings
- Method: POST
- Headers:
  - Content-Type: application/json
  - X-Failover-Enabled: true
  - Authorization: Bearer <YOUR_API_KEY>
- Body:
  ```json
  {
    "input": "<文本内容>",
    "model": "Qwen3-Embedding-8B",
    "dimensions": 1024,
    "instruction": "<文本内容>"
  }
  ```

## 执行步骤

1. **遍历文本片段**：
   - 对每个文本片段调用 API
   - 将 instruction 替换为具体的文本内容

2. **处理响应**：
   - 从响应中提取 embedding 向量
   - 将向量转换为 BLOB 格式（bytes）

3. **记录 API 调用次数**

## 产出物

调用 `workflow_advance` 时提供：

- **vectors**：向量数组（每个元素是 BLOB 格式的向量）
- **vector_count**：向量数量
- **api_calls**：API 调用次数