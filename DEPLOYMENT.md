# Deployment Guide - Cloudflare Pages

## Quick Deploy

### Step 1: Install Dependencies

```bash
npm install
```

### Step 2: Build the Site

```bash
npm run build
```

### Step 3: Deploy to Cloudflare Pages

#### Option A: Using Git (Recommended)

1. **Push to GitHub/GitLab**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **Connect to Cloudflare Pages**
   - Go to [Cloudflare Dashboard](https://dash.cloudflare.com/)
   - Navigate to "Pages" → "Create a project"
   - Connect your Git repository
   - Configure build settings:
     - **Framework preset**: Astro
     - **Build command**: `npm run build`
     - **Build output directory**: `dist`
     - **Root directory**: `/` (leave empty)
   - Click "Save and Deploy"

#### Option B: Using Wrangler CLI

```bash
npm install -g wrangler
wrangler login
wrangler pages deploy dist --project-name=infradevconsulting
```

## Contact Form Setup

The contact form needs a backend handler. Here are your options:

### Option 1: Cloudflare Workers (Recommended)

Create a Worker to handle form submissions:

1. Create `functions/api/contact.ts`:
```typescript
export async function onRequestPost(context: EventContext) {
  const { request } = context;
  const formData = await request.formData();
  
  // Process form data and send email
  // Use a service like SendGrid, Mailgun, or Resend
  
  return new Response(JSON.stringify({ success: true }), {
    headers: { 'Content-Type': 'application/json' },
  });
}
```

### Option 2: Third-Party Services

Update `src/components/ContactForm.astro` with your service:

**Formspree:**
```astro
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

**FormSubmit:**
```astro
<form action="https://formsubmit.co/YOUR_EMAIL" method="POST">
```

**EmailJS:**
- Requires JavaScript integration
- See [EmailJS documentation](https://www.emailjs.com/)

### Option 3: Simple Mailto (Fallback)

For a simple solution, you can use mailto:

```astro
<form action="mailto:info@infradevconsulting.com" method="POST" enctype="text/plain">
```

## Custom Domain Setup

1. In Cloudflare Pages, go to your project
2. Navigate to "Custom domains"
3. Click "Set up a custom domain"
4. Enter: `infradevconsulting.com`
5. Follow DNS configuration instructions
6. Cloudflare will automatically provision SSL

## Environment Variables

If you need environment variables:

1. In Cloudflare Pages project settings
2. Go to "Environment variables"
3. Add your variables
4. They'll be available at build time

## Continuous Deployment

Once connected to Git, Cloudflare Pages will automatically:
- Build and deploy on every push to main
- Create preview deployments for pull requests
- Roll back to previous versions if needed

## Performance Optimization

Cloudflare Pages automatically provides:
- ✅ Global CDN
- ✅ Free SSL certificates
- ✅ Automatic compression
- ✅ Image optimization (if configured)
- ✅ Edge caching

## Troubleshooting

### Build Fails
- Check Node.js version (requires 18+)
- Verify all dependencies are in `package.json`
- Check build logs in Cloudflare dashboard

### Assets Not Loading
- Ensure assets are in `/public` directory
- Check file paths are correct (case-sensitive)
- Verify file extensions match

### Form Not Working
- Check form action URL is correct
- Verify CORS settings if using external API
- Check browser console for errors

