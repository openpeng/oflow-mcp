# LibTV 画布 JSON 格式

`libtv-canvas.json` 是本工作流输出给 LibTV/Seedance 的元数据文件，描述项目结构、素材引用与分镜时间线。

## 顶层字段

```json
{
  "project_name": "文章标题 - LibTV 短视频",
  "aspect_ratio": "9:16",
  "duration": 60,
  "style": "知识口播",
  "script_path": ".../script.md",
  "voiceover": {
    "text_path": ".../voiceover.md",
    "audio_path": ".../assets/voiceover.mp3"
  },
  "music": {
    "mood": "轻快",
    "prompt": "...",
    "audio_path": ".../assets/background-music.mp3"
  },
  "cover": {
    "image_path": ".../assets/cover.png",
    "title": "主标题",
    "subtitle": "副标题"
  },
  "shots": []
}
```

## 分镜字段

```json
{
  "index": 1,
  "time_start": 0,
  "time_end": 5,
  "narration": "对应口播文案",
  "shot_type": "特写",
  "visual_prompt": "画面描述，用于生成或匹配图片",
  "source_image": ".../assets/original-images/xxx.jpg",
  "generated_image": ".../assets/generated-images/shot-01.png"
}
```

## 字段说明

| 字段 | 类型 | 说明 |
|------|------|------|
| `project_name` | string | 项目名称 |
| `aspect_ratio` | string | 画幅比例 |
| `duration` | number | 目标时长（秒） |
| `style` | string | 推荐 LibTV Skill/风格 |
| `script_path` | string | 口播脚本路径 |
| `voiceover.text_path` | string | 配音文本路径 |
| `voiceover.audio_path` | string | 配音音频路径，可能为空 |
| `music.mood` | string | 音乐情绪 |
| `music.prompt` | string | 音乐生成/检索提示词 |
| `music.audio_path` | string | 音乐音频路径，可能为空 |
| `cover.image_path` | string | 封面图路径 |
| `cover.title` | string | 封面主标题 |
| `cover.subtitle` | string | 封面副标题 |
| `shots[].index` | number | 分镜序号 |
| `shots[].time_start` | number | 开始时间（秒） |
| `shots[].time_end` | number | 结束时间（秒） |
| `shots[].narration` | string | 口播文案 |
| `shots[].shot_type` | string | 镜头类型 |
| `shots[].visual_prompt` | string | 画面提示词 |
| `shots[].source_image` | string | 复用原文图片路径，空表示不复用 |
| `shots[].generated_image` | string | 生成图片路径，空表示未生成 |

## 使用方式

1. 在 LibTV 中新建项目。
2. 按画幅 `aspect_ratio` 设置画布。
3. 导入 `assets/` 下的所有素材。
4. 按 `shots` 时间线排列分镜。
5. 导入配音与背景音乐。
6. 添加字幕与封面。
7. 点击合成并导出。
