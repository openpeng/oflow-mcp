## Current task

准备并提取公众号文章内容，为后续短视频生成提供原始素材。

## Input

- `article_source`: `{{article_source}}`
- `output_dir`: `{{output_dir}}`

## Instructions

1. 判断 `article_source` 是 URL 还是本地文件路径。
   - 若是 URL（以 `http://` 或 `https://` 开头）：
     - 优先使用 `canghe-wechat-article-extractor` Skill 下载文章为 Markdown。
     - 若该 Skill 不可用，使用 `kimi-webbridge` 打开页面并提取正文与图片。
   - 若是本地路径：直接读取 Markdown 文件。

2. 确定输出目录：
   - 如果 `output_dir` 为空，使用当前工作目录下的 `libtv-output/<timestamp>/`。
   - 使用 `general_purpose_task` 或文件工具创建该目录。

3. 收集文章信息：
   - 标题、作者（如有）。
   - 正文完整 Markdown。
   - 文章内所有图片：下载或复制到输出目录的 `assets/original-images/` 下，并记录绝对路径。

4. 将原始 Markdown 保存到输出目录的 `article.md`。

5. 若过程中发现文章无法访问或下载失败，通过 `workflow_inbox_save` 记录阻塞项并停止。

## Required outputs

- `article_title`: 文章标题
- `article_author`: 文章作者（无则空字符串）
- `article_url`: 原文 URL（本地文件则填本地路径）
- `markdown_path`: 本地 Markdown 文件绝对路径
- `image_paths`: 文章图片路径 JSON 数组字符串（例如 `["F:/.../assets/original-images/a.jpg"]`）
- `output_dir`: 素材包输出目录绝对路径
- `content_preview`: 正文前 500 字以内预览

## Completion criteria

- Markdown 文件存在且可读取。
- 输出目录已创建。
- `content_preview` 非空且长度大于 50。
