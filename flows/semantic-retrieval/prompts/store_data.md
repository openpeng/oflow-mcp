## 当前任务

根据相似度检查结果决定是否存储数据。

## 上下文

- 高相似度发现：`{{steps.check_similarity.outputs.high_similarity_found}}`
- 文本片段：`{{steps.split_text.outputs.text_chunks}}`
- 向量：`{{steps.vectorize.outputs.vectors}}`
- 表名：`{{steps.create_table.outputs.table_name}}`
- 文件标识符：`{{steps.confirm_params.outputs.file_identifier}}`

## 执行步骤

1. **检查是否可以存储**：
   - 如果 `{{steps.check_similarity.outputs.can_store}}` = false：
     - 不执行存储操作
     - 设置 stored = false
     - 生成提示消息，告知用户存在重复内容，需要修改

   - 如果 `{{steps.check_similarity.outputs.can_store}}` = true：
     - 遍历文本片段和向量，逐条插入表中
     - ```sql
       INSERT INTO {{steps.create_table.outputs.table_name}} 
       (file_identifier, original_content, vector, metadata)
       VALUES ('{{steps.confirm_params.outputs.file_identifier}}', '<内容>', <向量BLOB>, '{}');
       ```
     - 设置 stored = true
     - 记录存储的数量

2. **生成结果消息**：
   - 如果存储成功，提供成功消息和存储数量
   - 如果未存储，提供高相似度内容的详细信息，提示用户修改

## 产出物

调用 `workflow_advance` 时提供：

- **stored**：`true` 表示存储成功，`false` 表示未存储
- **stored_count**：存储的记录数量（未存储时为 0）
- **message**：存储结果消息，包含成功或失败的详细信息