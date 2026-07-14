## 当前任务

检查并安装 sqlite-vec Python 包。

## 执行步骤

1. **检查 sqlite-vec 是否已安装**：
   ```bash
   pip show sqlite-vec
   ```

2. **如果未安装，执行安装**：
   ```bash
   pip install sqlite-vec
   ```

3. **验证安装结果**：
   ```bash
   python -c "import sqlite_vec; print('sqlite-vec installed successfully')"
   ```

## 产出物

调用 `workflow_advance` 时提供：

- **sqlite_vec_installed**：`true` 表示已安装，`false` 表示安装失败
- **install_result**：安装过程的结果描述