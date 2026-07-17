---
name: libtv-short-video
description: Convert WeChat public-account articles or local Markdown into LibTV short-video asset packages, including script, storyboard, cover, voiceover, and background music. Use when the user wants to turn an article into a short video, generate LibTV/Seedance content, create viral short-video scripts, or produce shot lists and covers for video platforms.
---

# LibTV Short Video

Turn a WeChat article or Markdown file into a LibTV-ready short-video package. This skill orchestrates content extraction, viral-script writing, storyboarding, cover generation, voiceover planning, and music planning. It does not render the final video inside the agent; instead it produces a canvas-compatible asset bundle that the user can import into LibTV/Seedance for final composition.

## When to use

- "把这篇文章转成短视频"
- "用 LibTV 做一条爆款视频"
- "公众号文章转视频"
- "生成口播脚本和分镜"
- "为这篇文章设计封面和配音"

## Workflow

1. **Prepare**: validate input, download/read the article, collect images, set output directory.
2. **Analyze**: extract 3-5 core points, emotional hook, target audience, visual-asset strategy, and recommend a LibTV style/skill.
3. **Script**: write a spoken script matched to the target duration (220-260 words/minute) with a strong hook and CTA.
4. **Storyboard**: split the script into timed shots; reuse original article images whenever possible; generate new images only when needed.
5. **Cover**: design a viral cover title/subtitle and generate the cover image.
6. **Voiceover**: produce a readable voiceover text, voice tone prompt, and optional TTS audio.
7. **Music**: decide mood, write a music prompt, and optional musicgen audio.
8. **Assemble**: output `libtv-canvas.json`, `asset-manifest.json`, and a user guide for the next steps in LibTV.

## Tooling

- `canghe-wechat-article-extractor` Skill for URL-to-Markdown extraction.
- `kimi-webbridge` as fallback for browser-based extraction.
- `guizang-material-illustration` Skill for labeled explanatory images.
- `imagegen` Skill for scene/atmosphere images.
- `tts` Skill for voice synthesis (optional).
- `musicgen` Skill for background music (optional).

## Output conventions

- All files are saved under the workflow output directory.
- Original article images go to `assets/original-images/`.
- Generated images go to `assets/generated-images/`.
- Cover, voiceover, and music go directly under `assets/`.
- Every prompt and intermediate plan is persisted for reproducibility.

## Constraints

- Prefer original article images over generated ones to keep authenticity.
- Aspect ratio must match the parameter (`9:16` by default).
- Script duration should stay within ±15 seconds of the target.
- Generated images must include the aspect ratio in their prompt.
