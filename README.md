# Weifeng Xu — Personal Homepage

> 🔗 **Live site**: [https://simon-xu-dev.github.io/](https://simon-xu-dev.github.io/)

A single-page personal academic & professional homepage. Built with **pure vanilla HTML5 / CSS3 / ES6 JavaScript** — zero frameworks, zero CDN, zero external dependencies.

## Sections

| # | Section | Content |
|---|---------|---------|
| 1 | **Profile** | Weifeng Xu · Staff AI Engineer · 8+ years in data mining, ML, and generative AI |
| 2 | **Education** | M.Eng. Software Engineering (Dalian University, 2015–2018) · B.Eng. Communication Engineering (West Anhui University, 2011–2015) |
| 3 | **Work Experience** | Chery Automobile (2024–present, Lead AI Engineer) · Medical AI (2018–2024) · Meitu Inc. (2018–2019, Data Scientist) |
| 4 | **Projects** | SalesFlow (LLM Agent, 2026) · AutoMind (LLM, 2025–2026) · EMR/MR Intelligent Quality Control (ML) |
| 5 | **Open Source** | CIMS 2024 — Product quality prediction (WGAN + LightGBM) · IEEE Access 2020 — Sleep stage classification (stacked ensemble) |
| 6 | **Publications** | 4 Journal Papers · 2 Conference Papers · ArXiv Preprints (TBD) · 9 Patents |
| 7 | **PlayGround** | Quantitative research (Growth Value Strategy) · WeChat Public Account (coming soon) |
| 8 | **Invited Talks** | NEXTAI Quality Insight Platform (2025–2026) |
| 9 | **Interests** | TBD |

## Tech Stack

- **HTML5** — semantic single-page structure
- **CSS3** — custom properties for light/dark theming, responsive grid, micro-animations
- **Vanilla ES6 JavaScript** — IntersectionObserver scroll reveals, scroll-spy nav, theme toggle with localStorage

No build step. No `node_modules`. No package.json. Just open `index.html`.

## Project Structure

```
.
├── index.html              # Single-page site (all sections)
├── README.md
├── .gitignore
├── assets/
│   ├── css/
│   │   └── style.css       # All styles (themes, layout, animations)
│   └── js/
│       └── main.js         # Theme toggle, scroll spy, reveal, mobile menu
├── pictures/
│   └── xwf.jpg             # Profile photo
├── papers/                 # Publication PDFs (URL-safe filenames)
│   ├── sleep_stage_classification_2020.pdf
│   ├── product_quality_prediction_2024.pdf
│   ├── icu_los_prediction_2019.pdf
│   ├── epileptic_seizure_detection_2019.pdf
│   ├── parkinsons_updrs_2017.pdf
│   └── diabetes_risk_prediction_2017.pdf
├── patents/                # Patent application PDFs
│   ├── patent_prompt_optimization.pdf
│   ├── patent_mrag_multimodal.pdf
│   ├── patent_field_inference.pdf
│   ├── patent_unreasonable_expenses.pdf
│   ├── patent_diagnosis_surgery_matching.pdf
│   ├── patent_icd_conversion.pdf
│   ├── patent_surgery_omission.pdf
│   ├── patent_epilepsy_detection.pdf
│   └── patent_updrs_prediction.pdf
├── videos/
│   └── nextai_quality_insight.mp4   # Invited talk recording (59 MB)
└── playground/
    └── growth_value_strategy_article.html  # Quant strategy article
```

## Features

- 🌓 Dark/light theme toggle (persisted in localStorage, respects `prefers-color-scheme`)
- ✨ Scroll-triggered reveal animations (IntersectionObserver)
- 🧭 Sticky navbar with active-section highlighting (scroll spy)
- 📱 Fully responsive — mobile hamburger menu
- 🎨 Modern tech aesthetic — gradient accents, card-based layout
- ⚡ Zero dependencies — loads instantly, works offline

## Customization

### Content
All content lives in `index.html`. Search for section comments like `<!-- ==================== PROFILE ==================== -->` to jump to each section.

### Colors / Theme
Edit CSS custom properties in `assets/css/style.css`:
- `:root` block → light theme
- `[data-theme="dark"]` block → dark theme

### Adding a Publication / Patent
Follow the existing `<li class="pub-item">` pattern in the Publications section. Drop the PDF into `papers/` or `patents/` with a URL-safe filename.

### Adding a PlayGround Item
Follow the existing `<div class="card ...">` pattern in the PlayGround section. Put any HTML articles in `playground/`.

## Deploy

This site is deployed via **GitHub Pages**:

1. Push to the `main` branch of `simon-xu-dev.github.io` repo
2. GitHub Pages auto-builds from root
3. Live at `https://simon-xu-dev.github.io/`

```bash
git add -A
git commit -m "Update site content"
git push origin main
```

> **Note**: Git is configured to use HTTP/1.1 (`git config --global http.version HTTP/1.1`) to avoid HTTP/2 framing layer errors on unstable connections.

## License

Personal content © Weifeng Xu. Template structure free to adapt.
