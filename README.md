# Personal Academic Homepage

A single-page personal academic website template. Built with vanilla HTML, CSS, and JavaScript — zero dependencies. Deploy to GitHub Pages in minutes.

## Quick Start

1. Clone or download this repository
2. Open `index.html` in your browser to preview
3. Edit `index.html` — search for `TODO:` and replace all placeholder content with your own
4. Replace the avatar placeholder with your photo (or remove it)
5. Customize colors in `assets/css/style.css` (look for CSS custom properties under `:root`)
6. Deploy to GitHub Pages or any static hosting

## Customization

### Content
All placeholder content is marked with `<!-- TODO: Replace with your ... -->` comments in `index.html`. Search for `TODO:` to find every piece of content you need to update.

### Colors
Edit the CSS custom properties in `assets/css/style.css` under the `:root` block (light theme) and `[data-theme="dark"]` block (dark theme).

### Sections
Each section is a `<section>` element with an `id`. To remove a section, delete the entire `<section>` block and its corresponding `<a>` tag in the navbar. To add a section, follow the existing pattern.

### Avatar
Replace the `<div class="avatar-placeholder">YN</div>` with an `<img>` tag pointing to your photo.

## Features

- 9 pre-built sections: Profile, Education, Work, Projects, Open Source, Publications, Research, Talks, Interests
- Dark/light theme toggle with localStorage persistence
- Scroll-triggered reveal animations
- Sticky navigation with active section highlighting
- Fully responsive (mobile-friendly)
- Zero external dependencies
- Semantic HTML, accessible

## Deploy to GitHub Pages

1. Push this repository to GitHub
2. Go to Settings → Pages
3. Set source to `main` branch, root folder
4. Your site will be live at `https://<username>.github.io/<repo>/`
