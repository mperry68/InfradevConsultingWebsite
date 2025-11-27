# 🚀 START HERE - Complete Setup Guide

## You're seeing: "npm is not recognized"

**This means Node.js is not installed.** Follow these steps in order:

---

## ✅ STEP 1: Install Node.js (REQUIRED)

### Download and Install:

1. **Go to**: https://nodejs.org/
2. **Click the green "LTS" button** (left side, recommended version)
3. **Run the downloaded installer** (`.msi` file)
4. **Follow the wizard** - Click "Next" through all screens
5. **Click "Install"** when ready
6. **Wait for it to finish** (1-2 minutes)
7. **Click "Finish"**

### Verify Installation:

1. **Close ALL PowerShell windows** (important!)
2. **Open a NEW PowerShell window**
3. **Type this and press Enter:**
   ```powershell
   node --version
   ```
4. **You should see a version number** (like `v20.11.0`)
5. **Type this and press Enter:**
   ```powershell
   npm --version
   ```
6. **You should see a version number** (like `10.2.4`)

**✅ If both show version numbers, you're ready for Step 2!**

**❌ If you get errors, see the troubleshooting section below**

---

## ✅ STEP 2: Navigate to Project Folder

1. **In PowerShell, type:**
   ```powershell
   cd "C:\Users\marce\Documents\Repositories\www\Infradevconsulting.com"
   ```
2. **Press Enter**

---

## ✅ STEP 3: Install Dependencies

1. **Type:**
   ```powershell
   npm install
   ```
2. **Press Enter**
3. **Wait 1-2 minutes** for it to finish
4. **You'll see**: `added XXX packages` when done

---

## ✅ STEP 4: Start the Server

1. **Type:**
   ```powershell
   npm run dev
   ```
2. **Press Enter**
3. **Wait a few seconds**
4. **You'll see**: `Local: http://localhost:4321/`

---

## ✅ STEP 5: View Your Site

1. **Open your browser**
2. **Go to**: `http://localhost:4321`
3. **You should see your website!** 🎉

---

## 🛑 To Stop the Server

Press `Ctrl + C` in the PowerShell window

---

## 📋 Complete Command List (Copy & Paste)

```powershell
# 1. Check Node.js is installed
node --version
npm --version

# 2. Go to project folder
cd "C:\Users\marce\Documents\Repositories\www\Infradevconsulting.com"

# 3. Install dependencies (first time only)
npm install

# 4. Start server
npm run dev

# 5. Open browser to: http://localhost:4321
```

---

## ❓ Common Issues

### "npm is not recognized"
→ **Node.js is not installed** - Go back to STEP 1

### "Cannot find package.json"
→ **Wrong folder** - Make sure you're in the project folder (STEP 2)

### "Port 4321 already in use"
→ **Another server is running** - Close it or use: `npm run dev -- --port 4322`

### Installation takes forever
→ **Check internet connection** - npm needs to download packages

---

## 📚 More Help

- **Testing guide**: See `LOCAL_TESTING.md`
- **Deployment guide**: See `DEPLOYMENT.md`
- **Quick start**: See `QUICK_START.md`

---

## ✅ Success Checklist

- [ ] Node.js installed (`node --version` works)
- [ ] npm installed (`npm --version` works)
- [ ] In project folder
- [ ] Dependencies installed (`npm install` completed)
- [ ] Server running (`npm run dev` shows localhost URL)
- [ ] Website loads in browser

---

**Start with STEP 1 above and work through each step in order!**

