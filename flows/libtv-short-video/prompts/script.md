## Current task

基于文章分析结果，生成适配目标时长的爆款短视频口播脚本。

## Context

- 文章标题：`{{article_title}}`
- 文章摘要：`{{article_summary}}`
- 核心看点：`{{core_points}}`
- 情绪钩子：`{{emotional_hook}}`
- 目标受众：`{{target_audience}}`
- 推荐风格：`{{recommended_style}}`
- 目标时长：`{{duration}}` 秒
- 用户指定风格：`{{style}}`

## Instructions

1. 目标字数按每分钟 220-260 字计算，总字数约等于 `{{duration}} / 60 * 240`，允许 ±10% 浮动。
2. 脚本结构必须包含：
   - **前 3 秒钩子**：直接抛出冲突、疑问或结果，禁止平淡开场。
   - **中段**：按核心看点展开，每 10-15 秒一个小高潮或转折。
   - **结尾 CTA**：引导点赞、评论、关注或跳转公众号。
3. 语言风格：口语化、有节奏感、适合朗读，避免长句和学术表达。
4. 在关键句后标注 `[停顿]`、`[重音]`、`[快]` 等朗读提示。
5. 将脚本保存到输出目录的 `script.md` 与 `script.txt`。

## Required outputs

- `script_text`: 完整口播文案（含朗读标记）
- `word_count`: 脚本字数（数字）
- `estimated_duration`: 估算时长（秒，数字）
- `hook`: 前 3 秒钩子文案
- `cta`: 结尾引导文案
- `script_path`: `script.md` 的绝对路径

## Completion criteria

- 脚本已保存且内容非空。
- `estimated_duration` 与目标 `{{duration}}` 相差不超过 15 秒。
