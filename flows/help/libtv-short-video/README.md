# LibTV 公众号转短视频 Skill

将公众号文章或本地 Markdown 一键转换为 LibTV / Seedance 可导入的短视频素材包。

## 触发方式

- “把这篇文章转成 LibTV 短视频”
- “生成口播脚本和分镜”
- “为公众号文章做爆款视频”
- “用 Seedance 做一条短视频”

## 输入

| 参数 | 必填 | 说明 |
|------|------|------|
| `article_source` | 是 | 公众号文章 URL 或本地 Markdown 绝对路径 |
| `output_dir` | 否 | 输出目录，默认当前目录 `libtv-output/<timestamp>/` |
| `aspect_ratio` | 否 | 画幅，默认 `9:16`，可选 `16:9`/`1:1`/`3:4`/`4:3` |
| `duration` | 否 | 目标时长（秒），默认 `60` |
| `style` | 否 | 视频风格，留空自动匹配 |
| `voice_type` | 否 | 配音音色，留空自动匹配 |
| `subtitle_style` | 否 | 字幕样式偏好 |
| `music_mood` | 否 | 背景音乐情绪 |

## 输出目录结构

```text
libtv-output/<timestamp>/
├── article.md                      # 原文 Markdown
├── script.md / script.txt          # 口播脚本
├── storyboard.json / storyboard.md # 分镜表
├── cover.md                        # 封面方案
├── voiceover.md                    # 配音文本
├── music-plan.md                   # 音乐方案
├── libtv-canvas.json               # LibTV 画布元数据
├── asset-manifest.json             # 素材清单
└── assets/
    ├── cover.png
    ├── original-images/            # 原文图片
    ├── generated-images/           # AI 生成图片
    ├── voiceover.mp3               # 配音音频（若生成）
    └── background-music.mp3        # 背景音乐（若生成）
```

## 与 LibTV 的关系

本 Skill 不直接渲染视频，而是按照苍何文章中描述的「公众号转爆款短视频」方法论，把创作流程自动化为可复用的 Agent 工作流。最终产物是一个 LibTV 画布包，用户在 LibTV 中导入后即可点击合成、微调并导出成片。

> 参考文章：[https://mp.weixin.qq.com/s/Fmd4X0usMIb544DeMqNCmw](https://mp.weixin.qq.com/s/Fmd4X0usMIb544DeMqNCmw)

## 参考资料

- [`references/libtv-skills.md`](./references/libtv-skills.md) — LibTV 可选 Skill 目录
- [`references/short-script-pattern.md`](./references/short-script-pattern.md) — 爆款口播脚本模板
- [`references/viral-cover.md`](./references/viral-cover.md) — 爆款封面设计规则
- [`references/canvas-format.md`](./references/canvas-format.md) — LibTV 画布 JSON 格式
