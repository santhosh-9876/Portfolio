# Customization Guide

This guide will help you customize the portfolio to make it your own.

## 🎨 Quick Customization Checklist

### 1. Personal Information

#### Hero Section (`src/components/Hero.jsx`)
```jsx
// Line 15-17: Update your name and title
<h1>Hi, I'm [Your Name]</h1>
<p>[Your Title/Role]</p>
```

#### About Section (`src/components/About.jsx`)
```jsx
// Line 40-45: Update your bio
<p>I'm a passionate [your role]...</p>

// Line 12-21: Update your skills
const skills = [
  { name: 'Your Skill', icon: '🎯' },
  // Add more skills
];

// Line 23-38: Update your experience timeline
const timeline = [
  {
    year: '2024',
    title: 'Your Position',
    company: 'Your Company',
    description: 'What you did',
  },
];
```

#### Contact Section (`src/components/Contact.jsx`)
```jsx
// Line 18-21: Update contact information
const contactLinks = [
  { icon: '📧', label: 'Email', value: 'your@email.com', href: 'mailto:your@email.com' },
  { icon: '💼', label: 'LinkedIn', value: 'linkedin.com/in/yourname', href: 'https://linkedin.com/in/yourname' },
  // Update all links
];
```

#### Footer (`src/components/Footer.jsx`)
```jsx
// Line 6-9: Update social links
const socialLinks = [
  { name: 'GitHub', url: 'https://github.com/yourusername', icon: '🐙' },
  // Update all links
];

// Line 18: Update copyright name
<p>© {currentYear} Your Name. All rights reserved.</p>
```

### 2. Projects

Edit `src/components/Projects.jsx` (lines 10-70):

```jsx
const projects = [
  {
    id: 1,
    title: 'Your Project Name',
    description: 'Short description (1-2 lines)',
    tags: ['React', 'Node.js', 'MongoDB'],
    image: '🚀', // Choose an emoji or replace with actual image
    details: 'Detailed description of your project...',
    features: ['Feature 1', 'Feature 2', 'Feature 3'],
  },
  // Add more projects
];
```

### 3. Meta Tags & SEO

Edit `index.html` (lines 8-30):

```html
<title>Your Name - Your Title</title>
<meta name="description" content="Your description" />
<meta property="og:title" content="Your Name - Your Title" />
<meta property="og:url" content="https://yourdomain.com/" />
<!-- Update all meta tags -->
```

Edit `public/sitemap.xml`:
- Replace `https://yourportfolio.com/` with your actual domain

### 4. Colors & Branding

#### Primary Color (`src/index.css`)
```css
@theme {
  --color-primary-50: #f0f9ff;
  --color-primary-600: #0284c7; /* Main brand color */
  /* Update all primary color shades */
}
```

#### Logo/Brand Name (`src/components/Navbar.jsx`)
```jsx
// Line 30: Update brand name
<Link to="/" className="text-2xl font-bold">
  YourBrand
</Link>
```

### 5. Resume

Replace `public/resume.pdf` with your actual resume PDF file.

### 6. Favicon

Replace `public/vite.svg` with your own favicon or logo.

## 🎯 Advanced Customization

### Adding New Sections

1. Create a new component in `src/components/`
2. Import it in `src/App.jsx`
3. Add a route if needed:

```jsx
<Route path="/new-section" element={<NewSection />} />
```

4. Add navigation link in `Navbar.jsx` and `MobileMenu.jsx`

### Custom Animations

Framer Motion is already set up. Add custom animations:

```jsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  Your content
</motion.div>
```

### Adding Images

1. Place images in `public/` folder or `src/assets/`
2. Reference them:

```jsx
// From public folder
<img src="/image.jpg" alt="Description" />

// From assets folder
import image from './assets/image.jpg';
<img src={image} alt="Description" />
```

### Custom Fonts

1. Add font files to `public/fonts/`
2. Update `src/index.css`:

```css
@font-face {
  font-family: 'YourFont';
  src: url('/fonts/YourFont.woff2') format('woff2');
}

body {
  font-family: 'YourFont', sans-serif;
}
```

Or use Google Fonts in `index.html`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
```

### Adding Analytics

#### Google Analytics

Add to `index.html` before `</head>`:

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Form Integration

To make the contact form functional:

1. Use a service like Formspree, Netlify Forms, or EmailJS
2. Update `src/components/Contact.jsx`:

```jsx
const handleSubmit = async (e) => {
  e.preventDefault();
  // Add your form submission logic
  const response = await fetch('YOUR_FORM_ENDPOINT', {
    method: 'POST',
    body: JSON.stringify(formData),
  });
};
```

### Blog Integration

To add a real blog:

1. Use a headless CMS (Contentful, Sanity, Strapi)
2. Or use markdown files with a static site generator
3. Update `src/components/Blog.jsx` to fetch and display posts

## 🎨 Design Tips

### Color Schemes

Use tools like:
- [Coolors.co](https://coolors.co) - Color palette generator
- [Tailwind Color Generator](https://uicolors.app) - Generate Tailwind color scales

### Icons

Replace emoji icons with:
- [React Icons](https://react-icons.github.io/react-icons/)
- [Heroicons](https://heroicons.com/)
- [Lucide Icons](https://lucide.dev/)

Install:
```bash
npm install react-icons
```

Use:
```jsx
import { FaGithub } from 'react-icons/fa';
<FaGithub className="w-6 h-6" />
```

### Typography

Adjust font sizes in `tailwind.config.js`:

```js
theme: {
  extend: {
    fontSize: {
      'hero': '5rem',
    },
  },
}
```

## 📱 Testing Your Changes

After making changes:

1. Run development server:
```bash
npm run dev
```

2. Test responsive design:
   - Use browser DevTools
   - Test on actual devices

3. Check accessibility:
   - Run Lighthouse audit
   - Test keyboard navigation
   - Test with screen reader

4. Build and preview:
```bash
npm run build
npm run preview
```

## 🐛 Common Issues

### Styles not updating
- Clear browser cache
- Restart dev server
- Check Tailwind class names

### Animations not working
- Check Framer Motion syntax
- Verify `prefers-reduced-motion` setting

### Build errors
- Check console for specific errors
- Verify all imports are correct
- Run `npm run lint` to check for issues

## 💡 Need Help?

- Check the [README.md](./README.md) for general information
- See [DEPLOYMENT.md](./DEPLOYMENT.md) for deployment help
- Open an issue on GitHub for bugs or questions
