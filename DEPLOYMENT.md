# Deployment Guide

This guide covers deploying your portfolio to popular hosting platforms.

## 🚀 Netlify Deployment

### Option 1: Netlify CLI

1. Install Netlify CLI:
```bash
npm install -g netlify-cli
```

2. Build your project:
```bash
npm run build
```

3. Deploy:
```bash
netlify deploy --prod --dir=dist
```

### Option 2: Netlify UI

1. Push your code to GitHub
2. Go to [Netlify](https://netlify.com) and sign in
3. Click "Add new site" → "Import an existing project"
4. Connect to your GitHub repository
5. Configure build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
6. Click "Deploy site"

### Environment Variables (if needed)

Add environment variables in Netlify dashboard:
- Site settings → Environment variables
- Add your variables (e.g., `VITE_API_URL`)

## 🔷 Vercel Deployment

### Option 1: Vercel CLI

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

3. Follow the prompts

### Option 2: Vercel UI

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com) and sign in
3. Click "Add New" → "Project"
4. Import your GitHub repository
5. Vercel auto-detects Vite settings
6. Click "Deploy"

## 🌐 GitHub Pages

1. Install gh-pages:
```bash
npm install -D gh-pages
```

2. Add to `package.json`:
```json
{
  "homepage": "https://yourusername.github.io/portfolio",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

3. Update `vite.config.js`:
```js
export default defineConfig({
  base: '/portfolio/',
  // ... rest of config
})
```

4. Deploy:
```bash
npm run deploy
```

## 🔧 Custom Domain Setup

### Netlify

1. Go to Site settings → Domain management
2. Click "Add custom domain"
3. Follow DNS configuration instructions

### Vercel

1. Go to Project settings → Domains
2. Add your custom domain
3. Configure DNS records as instructed

## 📊 Analytics Setup

### Google Analytics

1. Get your GA4 Measurement ID
2. Add to `.env`:
```
VITE_GA_ID=G-XXXXXXXXXX
```

3. Add tracking code to `index.html` or use a React package

### Vercel Analytics

1. Install Vercel Analytics:
```bash
npm install @vercel/analytics
```

2. Add to `src/main.jsx`:
```js
import { inject } from '@vercel/analytics';
inject();
```

## 🔒 Security Headers

Add to `netlify.toml`:
```toml
[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-Content-Type-Options = "nosniff"
    X-XSS-Protection = "1; mode=block"
    Referrer-Policy = "strict-origin-when-cross-origin"
```

Or for Vercel, add to `vercel.json`:
```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        }
      ]
    }
  ]
}
```

## ✅ Pre-Deployment Checklist

- [ ] Update all personal information (name, email, social links)
- [ ] Replace placeholder resume with actual PDF
- [ ] Update meta tags in `index.html`
- [ ] Update sitemap.xml with your domain
- [ ] Test all links and forms
- [ ] Run `npm run build` locally to check for errors
- [ ] Test responsive design on multiple devices
- [ ] Check accessibility with Lighthouse
- [ ] Verify dark mode works correctly
- [ ] Test all animations and interactions

## 🐛 Troubleshooting

### Build fails on deployment

- Check Node.js version (use 18+)
- Verify all dependencies are in `package.json`
- Check for environment-specific issues

### Routes not working (404 errors)

- Ensure `_redirects` file is in `public/` folder (Netlify)
- Ensure `vercel.json` has rewrite rules (Vercel)

### Styles not loading

- Check that Tailwind CSS is properly configured
- Verify PostCSS config is correct
- Clear build cache and rebuild

## 📞 Support

If you encounter issues:
1. Check the hosting platform's documentation
2. Review build logs for errors
3. Search for similar issues on GitHub/Stack Overflow
