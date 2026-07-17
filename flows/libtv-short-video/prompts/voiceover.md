## Current task

生成配音朗读文本与音色方案，必要时合成配音音频。

## Context

- 口播脚本：`{{script_text}}`
- 用户指定配音：`{{voice_type}}`
- 目标时长：`{{duration}}` 秒
- 目标受众：`{{target_audience}}`

## Instructions

1. 基于 `script_text` 生成更适合朗读的版本：
   - 去掉冗余的书面语。
   - 增加停顿、换气、重音标记。
   - 保留原有情绪起伏。
2. 确定配音音色/情绪：
   - 若用户指定 `{{voice_type}}`，直接使用。
   - 否则根据内容与受众自动匹配，例如：
     - 知识口播 → 沉稳、清晰、有信任感
     - 喜剧/剧情 → 有表现力、节奏快
     - 广告/TVC → 饱满、有感染力
3. 如果 `tts` Skill 可用，尝试生成配音音频并保存到 `assets/voiceover.mp3`。
   - 若不可用或失败，`audio_path` 留空并在 `next_actions` 中说明。
4. 保存配音文本到 `voiceover.md`。

## Required outputs

- `voiceover_text`: 优化后的配音朗读文本
- `voice_prompt`: 配音音色/情绪提示词
- `voiceover_path`: `voiceover.md` 的绝对路径
- `audio_path`: 配音音频路径，未生成则为空字符串

## Completion criteria

- 配音文本已保存且非空。
- 已指定配音音色方案。
