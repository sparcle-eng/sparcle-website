# Sparcle Website - Deployment Guide

## Quick Deploy to GitHub Pages

### 1. Enable GitHub Pages

1. Go to https://github.com/rajenp/sparcle-website/settings/pages
2. Under "Source", select:
   - Branch: `main`
   - Folder: `/ (root)`
3. Click "Save"

Your site will be available at: `https://rajenp.github.io/sparcle-website/`

### 2. Configure Custom Domain (sparcle.app)

#### In GitHub:
1. Go to Settings → Pages
2. Under "Custom domain", enter: `sparcle.app`
3. Check "Enforce HTTPS" (after DNS propagates)

#### In Your Domain Registrar:

**Option A: Using A Records (Recommended)**
Add these A records for `sparcle.app`:
```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

Add CNAME record for `www`:
```
www.sparcle.app → rajenp.github.io
```

**Option B: Using CNAME**
Add CNAME record:
```
sparcle.app → rajenp.github.io
```

#### DNS Propagation
- Takes 5 minutes to 48 hours
- Check status: https://www.whatsmydns.net/

### 3. Verify Setup

1. Wait for DNS to propagate
2. Visit https://sparcle.app
3. Verify HTTPS certificate (may take a few minutes after DNS)

## Alternative Hosting Options

### Netlify
1. Connect GitHub repo
2. Build settings: None (static site)
3. Publish directory: `/`
4. Custom domain: Add `sparcle.app`

### Vercel
```bash
npm i -g vercel
cd sparcle-website
vercel
```

### Cloudflare Pages
1. Connect GitHub repo
2. Build command: (none)
3. Build output: `/`
4. Custom domain: Add `sparcle.app`

## Testing Locally

```bash
# Python
python -m http.server 8000

# Node.js
npx serve

# Open browser
open http://localhost:8000
```

## Next Steps After Deployment

- [ ] Test website on mobile devices
- [ ] Add Google Analytics or similar
- [ ] Create favicon and touch icons
- [ ] Test email waitlist form
- [ ] Set up email notifications for signups
- [ ] Add product screenshots/demo video when available
- [ ] Test dark mode on different devices
- [ ] Submit to search engines (Google Search Console)
