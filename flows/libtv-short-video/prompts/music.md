## Current task

为短视频匹配背景音乐情绪，并输出音乐方案/音频。

## Context

- 情绪钩子：`{{emotional_hook}}`
- 推荐风格：`{{recommended_style}}`
- 用户指定音乐情绪：`{{music_mood}}`
- 目标时长：`{{duration}}` 秒

## Instructions

1. 确定音乐情绪：
   - 若用户指定 `{{music_mood}}`，直接使用。
   - 否则根据风格与情绪钩子自动推导，常见方向：
     - 知识口播 → 轻快、清晰、不抢戏
     - 新中式/TVC → 优雅、大气
     - 武侠/PV → 史诗、紧张、鼓点
     - 喜剧 → 活泼、搞怪
     - 女频爽剧 → 情绪起伏大、戏剧化
2. 编写音乐提示词 `music_prompt`，包含：
   - 情绪关键词
   - 乐器/节奏描述
   - 时长 `{{duration}}` 秒
   - 是否需要起伏/高潮点
3. 如果 `musicgen` Skill 可用，尝试生成背景音乐并保存到 `assets/background-music.mp3`。
   - 若不可用或失败，`music_path` 留空并在 `next_actions` 中说明。
4. 保存音乐方案到 `music-plan.md`。

## Required outputs

- `music_mood`: 最终采用的音乐情绪
- `music_prompt`: 音乐生成/检索提示词
- `music_path`: 音乐音频路径，未生成则为空字符串
- `music_plan_path`: `music-plan.md` 的绝对路径

## Completion criteria

- 音乐方案已保存。
- 音乐提示词非空。
