# Sparcle Website

Official website for [sparcle.app](https://sparcle.app) - AI-powered productivity assistant for macOS.

## Overview

The official website for Sparcle, showcasing features and providing access to the **Alpha Release**.

- Direct download for Alpha builds (`.zip` / `.dmg`)
- Feature highlights and walkthrough videos
- Installation guide (Alpha security notes)
- Clean, modern design with dark mode support

## Features

- 🎨 Modern gradient design with Sparcle branding
- 🌓 Automatic dark/light mode based on system preference
- 📱 Fully responsive mobile-first design
- ⬇️ **Download Page**: Direct access to Alpha builds
- ✨ Smooth animations and transitions
- ⚡ Pure HTML/CSS/JS - no build process required

## Local Development

Simply open `index.html` in a browser, or use a local server:

```bash
# Python 3
python -m http.server 8000

# Node.js
npx serve

# PHP
php -S localhost:8000
```

Then visit http://localhost:8000

## Deployment

This static site can be deployed to:

- **GitHub Pages** (recommended for this repo)
- **Netlify**
- **Vercel**
- **Cloudflare Pages**
- Any static hosting service

### GitHub Pages Setup

1. Go to repository Settings → Pages
2. Source: Deploy from a branch
3. Branch: `main` / (root)
4. Save

Your site will be live at `https://rajenp.github.io/sparcle-website/`

### Custom Domain

To use `sparcle.app`:

1. Add a `CNAME` file with content: `sparcle.app`
2. Configure DNS:
   - Add A records pointing to GitHub Pages IPs
   - Or add CNAME record pointing to `rajenp.github.io`

## Customization

- **Colors**: Edit CSS variables in `styles.css` `:root` section
- **Content**: Update text in `index.html`
- **Logo**: Replace SVG in header section
- **Downloads**: Update `download.html` with latest release links

## License

Copyright © 2025 Sparcle. All rights reserved.

See [LICENSE](LICENSE) for details.
