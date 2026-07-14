## 当前任务

确认用户提供的参数，并清理表中相同标识符的已有记录。

## 上下文

- 文件标识符：`{{params.file_identifier}}`
- 切分长度：`{{params.split_length}}`
- 表名：`{{steps.create_table.outputs.table_name}}`

## 执行步骤

1. **确认参数有效性**：
   - file_identifier 不能为空
   - split_length 必须是大于 0 的整数

2. **检查并清理相同标识符的记录**：
   ```sql
   DELETE FROM {{steps.create_table.outputs.table_name}} 
   WHERE file_identifier = '{{params.file_identifier}}';
   ```

3. **记录删除的行数**

## 产出物

调用 `workflow_advance` 时提供：

- **file_identifier**：确认后的文件标识符
- **split_length**：确认后的切分长度
- **existing_records_deleted**：`true` 表示已执行清理操作
- **deleted_count**：删除的记录数量（0 表示没有重复记录）