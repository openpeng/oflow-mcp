## Current task

分析公众号文章内容，提炼适合短视频传播的核心看点、情绪钩子与视觉素材策略。

## Context

- 文章路径：`{{markdown_path}}`
- 文章标题：`{{article_title}}`
- 文章作者：`{{article_author}}`
- 目标画幅：`{{aspect_ratio}}`
- 目标时长：`{{duration}}` 秒
- 用户指定风格：`{{style}}`

## Instructions

1. 读取完整 Markdown 内容。
2. 提炼 3-5 个核心看点，每个看点用一句话概括，并说明「为什么适合做成短视频镜头」。
3. 确定目标受众：一句话描述谁会看这条视频。
4. 找出情绪钩子：前 3 秒最能抓住用户的冲突、好奇或痛点。
5. 梳理可复用/需生成的视觉素材：
   - 原文图片哪些可以直接作为分镜素材。
   - 哪些概念需要生成新图（示意图、场景图、人物图等）。
6. 推荐 LibTV 风格/Skill：
   - 若用户已指定 `{{style}}`，直接使用并说明理由。
   - 若未指定，从以下方向选择最匹配的一种并说明理由：
     - 知识口播
     - 新中式美学 TVC
     - 皮克斯动画广告
     - 无厘头喜剧
     - 古典武侠电影
     - 游戏实机 PV
     - 活人感美妆测评
     - 精品女频爽剧
     - 其他合适的平台 Skill
7. 输出文章摘要（200 字以内），用于后续脚本生成。

## Required outputs

- `core_points`: 3-5 个核心看点及短视频适配理由
- `target_audience`: 目标受众一句话
- `emotional_hook`: 情绪钩子文案
- `visual_assets`: 视觉素材策略 JSON 字符串，结构建议：
  ```json
  {
    "reusable": [{"path": "...", "suggested_use": "..."}],
    "to_generate": [{"concept": "...", "reason": "..."}]
  }
  ```
- `recommended_style`: 推荐的 LibTV 风格/Skill 名称
- `article_summary`: 文章摘要

## Completion criteria

- 核心看点、受众、钩子、风格均已明确。
- `recommended_style` 非空。
