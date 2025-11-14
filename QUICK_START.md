# Quick Start Guide

## ⚠️ IMPORTANT: Install Node.js First!

**If you see "npm is not recognized"**, you need to install Node.js first:
1. Go to https://nodejs.org/
2. Download and install the LTS version
3. **Restart PowerShell** after installation
4. Verify: `node --version` and `npm --version` should show numbers

**See `START_HERE.md` or `INSTALL_NODEJS.md` for detailed instructions.**

---

## 🚀 Run Locally in 3 Steps

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Start Development Server
```bash
npm run dev
```

### Step 3: Open in Browser
Go to: **http://localhost:4321**

That's it! Your site is now running locally.

---

## 📋 Available Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server (with hot reload) |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm start` | Same as `npm run dev` |

---

## 🔍 What to Check

1. **Home Page** (`/`) - Should show:
   - Hero section with logo
   - Services section
   - About section
   - Process section
   - Call-to-action

2. **Contact Page** (`/contact`) - Should show:
   - Contact information
   - Contact form

3. **Navigation** - Header links should work

---

## ⚠️ Troubleshooting

**"npm is not recognized"**
→ Install Node.js from [nodejs.org](https://nodejs.org/)

**Port already in use**
→ Run: `npm run dev -- --port 4322`

**Images not showing**
→ Check that files are in `/public/assets/WebsiteMarketing/`

---

For detailed instructions, see **LOCAL_TESTING.md**

