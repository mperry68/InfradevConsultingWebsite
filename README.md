# InfraDev Consulting Website

A modern, fast, and responsive 2-page marketing website built with Astro and optimized for Cloudflare Pages.

## 🚀 Features

- **Fast Performance**: Static site generation with minimal JavaScript
- **Responsive Design**: Mobile-first approach that works on all devices
- **Modern Stack**: Built with Astro for optimal performance
- **Cloudflare Pages Ready**: Optimized for deployment on Cloudflare Pages

## 📁 Project Structure

```
/
├── public/
│   └── assets/
│       └── WebsiteMarketing/    # All marketing assets (icons, logos, images)
├── src/
│   ├── components/              # Reusable Astro components
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── Hero.astro
│   │   ├── Services.astro
│   │   ├── About.astro
│   │   ├── Process.astro
│   │   ├── CTA.astro
│   │   └── ContactForm.astro
│   ├── layouts/
│   │   └── Layout.astro        # Base layout with global styles
│   └── pages/
│       ├── index.astro         # Home page
│       └── contact.astro       # Contact page
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## 🛠️ Development

### Prerequisites

- Node.js 18+ and npm

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Visit `http://localhost:4321` to see your site.

### Build for Production

```bash
npm run build
```

The built site will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## 📦 Deployment to Cloudflare Pages

### Option 1: Git Integration (Recommended)

1. Push your code to GitHub or GitLab
2. Go to [Cloudflare Pages Dashboard](https://dash.cloudflare.com/)
3. Click "Create a project" and connect your repository
4. Configure build settings:
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Root directory**: `/` (or leave empty)
5. Click "Save and Deploy"

### Option 2: Wrangler CLI

```bash
npm install -g wrangler
wrangler pages deploy dist
```

### Custom Domain

1. In Cloudflare Pages, go to your project settings
2. Navigate to "Custom domains"
3. Add your domain: `infradevconsulting.com`
4. Follow the DNS configuration instructions

## 🎨 Brand Colors

- **Primary Orange**: `#ff8427`
- **Dark Brown**: `#6e2505`
- **Text**: `#2c2c2c`
- **Background**: `#ffffff`

## 📝 Contact Form

The contact form is configured for Netlify Forms by default. To use a different form handler:

1. Update `ContactForm.astro` with your form action URL
2. Modify the form attributes as needed
3. For Cloudflare Pages, consider using Cloudflare Workers or a third-party service

## 🔧 Configuration

- **Site URL**: Update in `astro.config.mjs` if needed
- **Meta tags**: Edit `src/layouts/Layout.astro`
- **Contact info**: Update in `src/pages/contact.astro`

## 📄 License

© 2024 InfraDev Consulting. All rights reserved.

