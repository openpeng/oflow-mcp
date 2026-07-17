## Current task

整合所有素材，生成 LibTV 画布 JSON 与素材清单，输出最终可导入包。

## Context

- 输出目录：`{{output_dir}}`
- 脚本路径：`{{script_path}}`
- 分镜表：`{{storyboard}}`
- 封面路径：`{{cover_path}}`
- 配音路径：`{{audio_path}}`
- 配音文本：`{{voiceover_text}}`
- 音乐路径：`{{music_path}}`
- 音乐情绪：`{{music_mood}}`
- 目标画幅：`{{aspect_ratio}}`
- 目标时长：`{{duration}}` 秒

## Instructions

1. 读取之前步骤生成的所有文件，确认文件存在。
2. 生成 `libtv-canvas.json`：
   - `project_name`: 基于文章标题的 LibTV 项目名称
   - `aspect_ratio`: `{{aspect_ratio}}`
   - `duration`: `{{duration}}`
   - `script_path`: 口播脚本路径
   - `voiceover`: { `text_path`, `audio_path` }
   - `music`: { `mood`, `prompt`, `audio_path` }
   - `cover`: { `image_path`, `title`, `subtitle` }
   - `shots`: 分镜表数组，每镜含时间码、文案、素材路径、生成提示词
   - `style`: 推荐 LibTV Skill/风格
3. 生成 `asset-manifest.json`，列出所有素材的：
   - 文件绝对路径
   - 用途
   - 所属分镜/环节
4. 将所有文件整理到 `package_dir`（即 `{{output_dir}}`）。
5. 输出 `next_actions`：告诉用户在 LibTV 中如何导入、合成、微调并导出。

## Required outputs

- `canvas_json_path`: `libtv-canvas.json` 的绝对路径
- `asset_manifest`: 素材清单 JSON 字符串
- `package_dir`: 最终打包目录绝对路径
- `next_actions`: 用户在 LibTV 中的下一步操作指引

## Completion criteria

- 画布 JSON 与素材清单已保存。
- `next_actions` 清晰说明用户后续操作。
