## Current task

将口播脚本拆分为带时间码的分镜表，决定每镜复用原文图片还是生成新图。

## Context

- 脚本：`{{script_text}}`
- 目标时长：`{{duration}}` 秒
- 目标画幅：`{{aspect_ratio}}`
- 推荐风格：`{{recommended_style}}`
- 原文图片：`{{image_paths}}`
- 视觉素材策略：`{{visual_assets}}`

## Instructions

1. 按脚本节奏拆分为 5-12 个分镜，每个分镜标注：
   - `time_start` / `time_end`（秒）
   - `narration`：对应口播文案
   - `shot_type`：特写/中景/全景/文字卡/动画/产品展示等
   - `visual_prompt`：画面描述（用于生成或匹配图片）
   - `source_image`：若复用原文图片，填写其路径；否则空字符串
   - `generated_image`：若生成新图，填写生成后保存的绝对路径；否则空字符串
2. **优先复用原文图片**：只有当原文没有合适素材、或画面需要风格化/示意图时才生成新图。
3. 生成新图时：
   - 使用 `guizang-material-illustration` Skill 做带中文标签的说明图/概念图。
   - 或使用 `imagegen` Skill 做场景/氛围图。
   - 所有生成图片保存到 `assets/generated-images/`，文件名含序号，例如 `shot-03.png`。
   - 提示词中必须包含画幅 `{{aspect_ratio}}`。
4. 输出分镜表 JSON 并保存到 `storyboard.json` 与 `storyboard.md`。

## Required outputs

- `storyboard`: 分镜表 JSON 字符串
- `shot_count`: 分镜总数（数字）
- `reused_images`: 复用原文图片清单 JSON 数组
- `generated_images`: 新生成图片清单 JSON 数组
- `storyboard_path`: `storyboard.json` 的绝对路径

## Completion criteria

- 分镜表已保存且至少包含 3 个分镜。
- 每镜时间连续且覆盖主要脚本段落。
