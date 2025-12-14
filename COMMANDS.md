# Commands Reference

Quick reference for all available commands in this project.

## 🚀 Getting Started

```bash
# Navigate to project directory
cd portfolio

# Install dependencies (if needed)
npm install

# Start development server
npm run dev
```

Visit: http://localhost:5173

## 📦 Development Commands

### Start Development Server
```bash
npm run dev
```
Starts Vite dev server with hot module replacement (HMR).

### Build for Production
```bash
npm run build
```
Creates optimized production build in `dist/` folder.

### Preview Production Build
```bash
npm run preview
```
Serves the production build locally for testing.

## 🔍 Code Quality Commands

### Run Linter
```bash
npm run lint
```
Checks code for errors and style issues.

### Fix Linting Errors
```bash
npm run lint:fix
```
Automatically fixes fixable linting errors.

### Format Code
```bash
npm run format
```
Formats all code files with Prettier.

## 🌐 Deployment Commands

### Deploy to Netlify (CLI)
```bash
# Install Netlify CLI globally
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy to production
netlify deploy --prod --dir=dist
```

### Deploy to Vercel (CLI)
```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel
vercel login

# Deploy
vercel
```

### Deploy to GitHub Pages
```bash
# Install gh-pages
npm install -D gh-pages

# Add to package.json scripts:
# "deploy": "gh-pages -d dist"

# Deploy
npm run deploy
```

## 🛠️ Maintenance Commands

### Update Dependencies
```bash
# Check for outdated packages
npm outdated

# Update all dependencies
npm update

# Update specific package
npm update <package-name>
```

### Clean Install
```bash
# Remove node_modules and package-lock.json
rm -rf node_modules package-lock.json

# Fresh install
npm install
```

### Clear Build Cache
```bash
# Remove dist folder
rm -rf dist

# Remove Vite cache
rm -rf node_modules/.vite
```

## 🧪 Testing Commands (Future)

```bash
# Run tests (when implemented)
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

## 📊 Analysis Commands

### Bundle Size Analysis
```bash
# Install bundle analyzer
npm install -D rollup-plugin-visualizer

# Build with analysis
npm run build

# View bundle report (add to vite.config.js)
```

### Lighthouse Audit
```bash
# Install Lighthouse CLI
npm install -g lighthouse

# Build project
npm run build

# Serve and audit
npm run preview
lighthouse http://localhost:4173 --view
```

## 🔧 Git Commands

### Initial Setup
```bash
# Initialize git repository
git init

# Add all files
git add .

# First commit
git commit -m "Initial commit: Portfolio website"

# Add remote repository
git remote add origin <your-repo-url>

# Push to GitHub
git push -u origin main
```

### Regular Workflow
```bash
# Check status
git status

# Add changes
git add .

# Commit changes
git commit -m "Your commit message"

# Push to remote
git push
```

## 📝 Customization Workflow

### 1. Update Personal Info
```bash
# Edit these files:
# - src/components/Hero.jsx (name, title)
# - src/components/About.jsx (bio, skills, timeline)
# - src/components/Contact.jsx (contact info)
# - src/components/Footer.jsx (social links)
# - index.html (meta tags)
```

### 2. Add Projects
```bash
# Edit: src/components/Projects.jsx
# Update the projects array with your projects
```

### 3. Customize Colors
```bash
# Edit: src/index.css
# Update the @theme section with your colors
```

### 4. Test Changes
```bash
# Start dev server
npm run dev

# Check in browser
# Test responsive design
# Test dark mode
# Test all links
```

### 5. Build and Deploy
```bash
# Build
npm run build

# Preview
npm run preview

# Deploy (choose one)
netlify deploy --prod --dir=dist
# or
vercel
```

## 🐛 Troubleshooting Commands

### Dev Server Won't Start
```bash
# Kill process on port 5173 (Windows)
netstat -ano | findstr :5173
taskkill /PID <PID> /F

# Kill process on port 5173 (Mac/Linux)
lsof -ti:5173 | xargs kill -9

# Restart dev server
npm run dev
```

### Build Fails
```bash
# Check for errors
npm run lint

# Clear cache and rebuild
rm -rf node_modules/.vite dist
npm run build
```

### Styles Not Updating
```bash
# Clear browser cache
# Ctrl+Shift+R (Windows/Linux)
# Cmd+Shift+R (Mac)

# Restart dev server
# Ctrl+C to stop
npm run dev
```

### Dependencies Issues
```bash
# Clear and reinstall
rm -rf node_modules package-lock.json
npm install

# Or use npm ci for clean install
npm ci
```

## 📚 Useful NPM Commands

```bash
# List installed packages
npm list --depth=0

# Check package info
npm info <package-name>

# Search for packages
npm search <keyword>

# View package documentation
npm docs <package-name>

# View package repository
npm repo <package-name>
```

## 🔐 Environment Variables

```bash
# Create .env file
cp .env.example .env

# Edit .env file with your values
# Note: Vite requires VITE_ prefix for client-side variables
```

## 📦 Package Management

### Add New Package
```bash
# Production dependency
npm install <package-name>

# Development dependency
npm install -D <package-name>

# Specific version
npm install <package-name>@<version>
```

### Remove Package
```bash
npm uninstall <package-name>
```

### Update Package
```bash
npm update <package-name>
```

## 🎯 Quick Reference

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Check code quality |
| `npm run format` | Format code |
| `netlify deploy --prod` | Deploy to Netlify |
| `vercel` | Deploy to Vercel |

## 💡 Pro Tips

1. **Use npm scripts**: Add custom scripts to `package.json` for repeated tasks
2. **Commit often**: Make small, focused commits with clear messages
3. **Test before deploy**: Always run `npm run build` and `npm run preview` before deploying
4. **Keep dependencies updated**: Regularly check for updates with `npm outdated`
5. **Use environment variables**: Store sensitive data in `.env` files (never commit these!)

---

For more detailed information, see:
- [README.md](./README.md) - Project overview
- [QUICKSTART.md](./QUICKSTART.md) - Quick start guide
- [CUSTOMIZATION.md](./CUSTOMIZATION.md) - Customization guide
- [DEPLOYMENT.md](./DEPLOYMENT.md) - Deployment guide
