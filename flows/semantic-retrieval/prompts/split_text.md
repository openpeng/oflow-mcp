## 当前任务

切分用户提供的文本内容。

## 上下文

- 原始文本：`{{params.text_content}}`
- 切分长度：`{{steps.confirm_params.outputs.split_length}}`

## 切分规则

1. **按字数切分**：以指定长度为目标，找到该位置附近的换行符进行切分
2. **浮动到下一个换行**：从目标长度位置向后查找，找到第一个换行符作为切分点
3. **最后一段处理**：如果最后一段长度小于目标长度的 60%，将其合并到上一段

## 执行步骤

1. **初始化变量**：
   - target_length = {{steps.confirm_params.outputs.split_length}}
   - chunks = []
   - current_position = 0

2. **循环切分**：
   - 从 current_position 开始，找到 current_position + target_length 位置
   - 从该位置向后查找第一个换行符（\n）
   - 如果找到换行符，以换行为界切分；否则在目标位置切分
   - 将切分后的片段加入 chunks
   - 更新 current_position

3. **处理最后一段**：
   - 检查最后一段长度
   - 如果长度 < target_length * 0.6，合并到上一段

## 产出物

调用 `workflow_advance` 时提供：

- **text_chunks**：切分后的文本片段数组
- **chunk_count**：片段数量