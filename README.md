# Personal Portfolio Website

A modern, responsive personal portfolio website built with React, Tailwind CSS, and Framer Motion.

## ✨ Features

- **Responsive Design**: Mobile-first approach with seamless experience across all devices
- **Dark Mode**: Toggle between light and dark themes with persistent preference
- **Smooth Animations**: Powered by Framer Motion for elegant page transitions and micro-interactions
- **Accessible**: WCAG compliant with keyboard navigation, ARIA labels, and skip links
- **SEO Optimized**: Meta tags, Open Graph, Twitter Cards, sitemap, and robots.txt
- **Modern Stack**: Built with React 19, Vite, Tailwind CSS 4, and React Router

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors automatically
- `npm run format` - Format code with Prettier

## 🏗️ Project Structure

```
portfolio/
├── public/
│   ├── robots.txt
│   ├── sitemap.xml
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Blog.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── MobileMenu.jsx
│   │   ├── Navbar.jsx
│   │   └── Projects.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .github/
│   └── workflows/
│       └── ci.yml
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

## 🎨 Customization

### Update Personal Information

1. **Hero Section** (`src/components/Hero.jsx`):
   - Change name and tagline
   - Update CTA button links

2. **About Section** (`src/components/About.jsx`):
   - Update bio text
   - Modify skills and timeline

3. **Projects** (`src/components/Projects.jsx`):
   - Add your own projects with descriptions and tech stack

4. **Contact** (`src/components/Contact.jsx`):
   - Update contact information and social links

5. **Meta Tags** (`index.html`):
   - Update title, description, and Open Graph tags
   - Replace placeholder URLs with your domain

### Styling

The project uses Tailwind CSS. Customize colors in `tailwind.config.js`:

```js
theme: {
  extend: {
    colors: {
      primary: {
        // Your custom color palette
      },
    },
  },
}
```

## 🚢 Deployment

### Netlify

1. Push your code to GitHub
2. Connect your repository to Netlify
3. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Add environment variables if needed
5. Deploy!

### Vercel

1. Push your code to GitHub
2. Import project in Vercel
3. Vercel auto-detects Vite configuration
4. Deploy!

### Manual Deployment

```bash
npm run build
```

Upload the `dist` folder to your hosting provider.

## 🔧 Configuration

### GitHub Actions

The project includes a CI/CD pipeline (`.github/workflows/ci.yml`) that:
- Runs linting and formatting checks
- Builds the project
- Creates preview deployments for pull requests

To enable Netlify preview deployments, add these secrets to your GitHub repository:
- `NETLIFY_AUTH_TOKEN`
- `NETLIFY_SITE_ID`

## 🎯 Performance

- Optimized bundle size with Vite
- Lazy loading for images
- Reduced motion support for accessibility
- Efficient animations using transform and opacity

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

MIT License - feel free to use this template for your own portfolio!

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 👤 Author

**John Doe**
- Website: [yourportfolio.com](https://yourportfolio.com)
- GitHub: [@johndoe](https://github.com/johndoe)
- LinkedIn: [johndoe](https://linkedin.com/in/johndoe)

## ⭐ Show your support

Give a ⭐️ if you like this project!
