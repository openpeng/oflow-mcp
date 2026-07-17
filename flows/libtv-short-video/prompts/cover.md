## Current task

为短视频生成爆款封面图与封面文案。

## Context

- 文章标题：`{{article_title}}`
- 情绪钩子：`{{emotional_hook}}`
- 推荐风格：`{{recommended_style}}`
- 目标画幅：`{{aspect_ratio}}`
- 核心看点：`{{core_points}}`

## Instructions

1. 爆款封面要素（至少满足 2-3 条）：
   - 突出冲突/悬念/结果
   - 画面主体清晰，信息密度低
   - 配色与风格统一
   - 文字少而大，最多 8 个字主标题 + 6 个字副标题
2. 设计封面文案：
   - `cover_title`: 主标题，必须包含最强钩子
   - `cover_subtitle`: 副标题，补充悬念或利益点
3. 生成封面图：
   - 使用 `guizang-material-illustration` 或 `imagegen` Skill。
   - 提示词中注明画幅 `{{aspect_ratio}}`、标题文字、风格、情绪。
   - 保存到 `assets/cover.png`。
4. 将封面提示词与文案保存到 `cover.md`。

## Required outputs

- `cover_prompt`: 封面图生成提示词
- `cover_path`: 封面图保存的绝对路径
- `cover_title`: 封面主标题
- `cover_subtitle`: 封面副标题

## Completion criteria

- 封面图已保存。
- 封面提示词非空。
