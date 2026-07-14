## 当前任务

创建 SQLite 向量表，表结构包含：
- id: 主键自增
- file_identifier: 文件名/标识符
- original_content: 原始文本内容
- vector: 向量内容（BLOB 类型）
- metadata: 其他备注信息（JSON 类型）
- created_at: 创建时间

## 上下文

- 表名：使用当前工作流实例的 ID（`{{instance.id}}`）
- 数据库文件：存储在工作流数据目录下

## 执行步骤

1. **连接 SQLite 数据库**：
   ```python
   import sqlite3
   import sqlite_vec
   
   conn = sqlite3.connect('semantic_retrieval.db')
   conn.enable_load_extension(True)
   sqlite_vec.load(conn)
   conn.enable_load_extension(False)
   ```

2. **检查表是否存在**：
   ```sql
   SELECT name FROM sqlite_master WHERE type='table' AND name='{{instance.id}}';
   ```

3. **如果不存在则创建表**：
   ```sql
   CREATE TABLE IF NOT EXISTS {{instance.id}} (
       id INTEGER PRIMARY KEY AUTOINCREMENT,
       file_identifier TEXT NOT NULL,
       original_content TEXT NOT NULL,
       vector BLOB NOT NULL,
       metadata JSON,
       created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
   );
   
   CREATE INDEX IF NOT EXISTS idx_{{instance.id}}_identifier ON {{instance.id}}(file_identifier);
   ```

4. **创建向量索引**：
   ```sql
   INSERT INTO sqlite_vec_index (name, tbl, col, dim, metric)
   VALUES ('idx_{{instance.id}}_vector', '{{instance.id}}', 'vector', 1024, 'cosine')
   ON CONFLICT(name) DO NOTHING;
   ```

## 产出物

调用 `workflow_advance` 时提供：

- **table_created**：`true` 表示表已创建或已存在
- **table_name**：实际使用的表名