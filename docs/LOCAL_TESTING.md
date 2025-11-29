# How to Run and Test Locally

## Prerequisites

Before you start, make sure you have:
- **Node.js** version 18 or higher installed
- **npm** (comes with Node.js) or **pnpm** or **yarn**

### Check Your Node.js Version

Open PowerShell or Command Prompt and run:
```bash
node --version
```

If you don't have Node.js or have an older version, download it from [nodejs.org](https://nodejs.org/)

## Step-by-Step Instructions

### 1. Install Dependencies

Open PowerShell in the project directory and run:

```bash
npm install
```

This will install all required packages (Astro, TypeScript, etc.). This may take a minute or two.

### 2. Start the Development Server

Once installation is complete, run:

```bash
npm run dev
```

You should see output like:
```
  astro  v4.x.x ready in XXX ms

  ➜  Local:   http://localhost:4321/
  ➜  Network: use --host to expose
```

### 3. View Your Site

Open your web browser and go to:
```
http://localhost:4321
```

You should see your InfraDev website!

### 4. Test the Pages

- **Home Page**: `http://localhost:4321/` - Should show the full marketing page
- **Contact Page**: `http://localhost:4321/contact` - Should show the contact form

### 5. Hot Reload

The development server has **hot reload** enabled, which means:
- Any changes you make to files will automatically refresh in the browser
- You don't need to restart the server for most changes
- Just save your file and the browser will update automatically

### 6. Stop the Server

To stop the development server, press `Ctrl + C` in the terminal.

## Testing Checklist

### Visual Testing
- [ ] Home page loads correctly
- [ ] All images and icons display properly
- [ ] Logo appears in header
- [ ] Navigation links work (Home, Contact)
- [ ] Footer displays correctly
- [ ] All sections are visible (Hero, Services, About, Process, CTA)

### Responsive Testing
- [ ] Resize browser window to test mobile view
- [ ] Check that layout adapts on smaller screens
- [ ] Test on actual mobile device (if possible)

### Functionality Testing
- [ ] Click "Get Started" button - should go to contact page
- [ ] Click "Our Services" button - should scroll to services section
- [ ] Click "Get in Touch" button - should go to contact page
- [ ] Test contact form (note: form won't actually submit in dev mode without backend)

### Browser Testing
Test in different browsers:
- [ ] Chrome/Edge
- [ ] Firefox
- [ ] Safari (if on Mac)

## Common Issues and Solutions

### Issue: "npm is not recognized"
**Solution**: Node.js is not installed or not in your PATH. Install Node.js from [nodejs.org](https://nodejs.org/)

### Issue: "Port 4321 is already in use"
**Solution**: Another process is using that port. Either:
- Stop the other process
- Or run: `npm run dev -- --port 4322` (or any other port)

### Issue: Images not loading
**Solution**: 
- Make sure assets are in `/public/assets/WebsiteMarketing/`
- Check that file paths in components match actual file locations
- Clear browser cache (Ctrl + Shift + R)

### Issue: "Cannot find module" errors
**Solution**: 
- Delete `node_modules` folder
- Delete `package-lock.json`
- Run `npm install` again

### Issue: TypeScript errors
**Solution**: 
- Make sure you're using Node.js 18+
- Run `npm install` again
- Check that `tsconfig.json` is correct

## Building for Production

To test the production build locally:

```bash
npm run build
```

This creates an optimized version in the `dist/` folder.

Then preview it:

```bash
npm run preview
```

This starts a local server with the production build at `http://localhost:4321`

## Development Tips

1. **Keep the terminal open** - The dev server needs to stay running
2. **Check the terminal** - Error messages will appear there
3. **Browser DevTools** - Press F12 to open and check for console errors
4. **File watching** - The server watches for file changes automatically

## Next Steps

Once everything works locally:
1. Test all functionality
2. Make any content/styling adjustments
3. Build for production: `npm run build`
4. Deploy to Cloudflare Pages (see DEPLOYMENT.md)

## Need Help?

If you encounter issues:
1. Check the terminal output for error messages
2. Check browser console (F12) for JavaScript errors
3. Verify all files are in the correct locations
4. Make sure Node.js version is 18 or higher

