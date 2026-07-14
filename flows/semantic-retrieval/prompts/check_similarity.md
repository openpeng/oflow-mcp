## 当前任务

检查新生成的向量与表中已有向量的相似度。

## 上下文

- 新向量：`{{steps.vectorize.outputs.vectors}}`
- 表名：`{{steps.create_table.outputs.table_name}}`
- 文件标识符：`{{steps.confirm_params.outputs.file_identifier}}`

## 相似度检查规则

1. **阈值设定**：余弦相似度 >= 0.85 视为高相似度
2. **检查方式**：对每个新向量进行向量检索，查找最相似的已有向量
3. **处理策略**：
   - 如果发现任何一个高相似度结果，标记为 high_similarity_found = true
   - 高相似度时，记录相似内容信息，不存储数据
   - 低相似度时，允许存储

## 执行步骤

1. **对每个新向量执行相似度检索**：
   ```sql
   SELECT 
       file_identifier, 
       original_content, 
       distance
   FROM {{steps.create_table.outputs.table_name}}
   WHERE vector MATCH '<新向量>' 
     AND file_identifier != '{{steps.confirm_params.outputs.file_identifier}}'
   ORDER BY distance ASC
   LIMIT 3;
   ```

2. **判断相似度**：
   - 检查返回结果的 distance 值
   - 余弦相似度 = 1 - distance
   - 如果相似度 >= 0.85，记录为高相似度

3. **汇总结果**：
   - 如果有任何高相似度，设置 high_similarity_found = true
   - 记录所有相似度结果供用户参考

## 产出物

调用 `workflow_advance` 时提供：

- **high_similarity_found**：`true` 表示发现高相似度内容
- **similarity_results**：相似度检查结果数组，包含相似内容和相似度
- **can_store**：`true` 表示可以存储（无高相似度）