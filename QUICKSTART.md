# Quick Start Guide

Get your portfolio up and running in 5 minutes!

## 🚀 Installation & Setup

```bash
# Navigate to the project directory
cd portfolio

# Install dependencies (if not already done)
npm install

# Start development server
npm run dev
```

Visit `http://localhost:5173` in your browser.

## ✏️ Essential Customizations

### 1. Update Your Name (2 minutes)

**File: `src/components/Hero.jsx`** (Line 15)
```jsx
Hi, I'm [Your Name]
```

**File: `src/components/Footer.jsx`** (Line 18)
```jsx
© {currentYear} [Your Name]. All rights reserved.
```

**File: `index.html`** (Line 9)
```html
<title>[Your Name] - Full-Stack Developer Portfolio</title>
```

### 2. Update Contact Info (3 minutes)

**File: `src/components/Contact.jsx`** (Lines 18-21)
```jsx
const contactLinks = [
  { icon: '📧', label: 'Email', value: 'your@email.com', href: 'mailto:your@email.com' },
  { icon: '💼', label: 'LinkedIn', value: 'linkedin.com/in/yourname', href: 'https://linkedin.com/in/yourname' },
  { icon: '🐙', label: 'GitHub', value: 'github.com/yourname', href: 'https://github.com/yourname' },
  { icon: '🐦', label: 'Twitter', value: '@yourname', href: 'https://twitter.com/yourname' },
];
```

**File: `src/components/Footer.jsx`** (Lines 6-9)
```jsx
const socialLinks = [
  { name: 'GitHub', url: 'https://github.com/yourname', icon: '🐙' },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/yourname', icon: '💼' },
  { name: 'Twitter', url: 'https://twitter.com/yourname', icon: '🐦' },
  { name: 'Email', url: 'mailto:your@email.com', icon: '📧' },
];
```

### 3. Add Your Projects (5 minutes)

**File: `src/components/Projects.jsx`** (Lines 10-70)

Replace the example projects with your own:

```jsx
const projects = [
  {
    id: 1,
    title: 'Your Project Name',
    description: 'Brief description of your project',
    tags: ['React', 'Node.js', 'MongoDB'],
    image: '🚀',
    details: 'Detailed description...',
    features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4'],
  },
  // Add more projects...
];
```

### 4. Update Your Bio (2 minutes)

**File: `src/components/About.jsx`** (Lines 40-45)
```jsx
<p>
  I'm a passionate [your role] with [X]+ years of experience...
</p>
```

### 5. Add Your Resume (1 minute)

Replace `public/resume.pdf` with your actual resume PDF file.

## 🎨 Quick Style Changes

### Change Primary Color

**File: `src/index.css`** (Lines 3-12)
```css
@theme {
  --color-primary-600: #0284c7; /* Change this hex color */
}
```

Use [Tailwind Color Generator](https://uicolors.app) to generate a full color scale.

## 📦 Build & Deploy

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

### Deploy to Netlify (Easiest)
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod --dir=dist
```

Or connect your GitHub repo to Netlify for automatic deployments.

## 📚 Next Steps

1. ✅ Customize content (name, projects, contact info)
2. ✅ Add your resume PDF
3. ✅ Update colors and branding
4. ✅ Test on mobile devices
5. ✅ Deploy to hosting platform
6. ✅ Add custom domain (optional)

## 📖 Full Documentation

- [README.md](./README.md) - Complete project overview
- [CUSTOMIZATION.md](./CUSTOMIZATION.md) - Detailed customization guide
- [DEPLOYMENT.md](./DEPLOYMENT.md) - Deployment instructions

## 🆘 Need Help?

Common issues and solutions:

**Dev server won't start:**
```bash
# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

**Build fails:**
```bash
# Check for errors
npm run lint
```

**Styles not updating:**
- Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)
- Restart dev server

## 🎯 Checklist Before Deploying

- [ ] Updated all personal information
- [ ] Added real projects
- [ ] Replaced resume.pdf
- [ ] Updated meta tags in index.html
- [ ] Tested on mobile
- [ ] Tested dark mode
- [ ] Checked all links work
- [ ] Ran `npm run build` successfully

## 🚀 You're Ready!

Your portfolio is now ready to showcase your work. Happy coding! 🎉
