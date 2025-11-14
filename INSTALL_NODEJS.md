# Installing Node.js - Step by Step Guide

## The Problem
You're seeing: `npm : The term 'npm' is not recognized`

This means Node.js (which includes npm) is not installed on your computer.

---

## Solution: Install Node.js

### Step 1: Download Node.js

1. **Open your web browser**
2. **Go to**: https://nodejs.org/
3. **You'll see two green download buttons:**
   - **LTS** (Recommended) - This is the stable version
   - **Current** - Latest features (may have bugs)
4. **Click the LTS button** (it will say something like "v20.x.x LTS")
5. **The installer will download** (file will be named something like `node-v20.x.x-x64.msi`)

---

### Step 2: Install Node.js

1. **Find the downloaded file** (usually in your Downloads folder)
2. **Double-click the installer file** (the `.msi` file)
3. **Windows may ask for permission** - Click "Yes" or "Run"
4. **The Node.js Setup Wizard will open**

5. **Follow the installation wizard:**
   - Click **"Next"** on the welcome screen
   - **Accept the license agreement** and click "Next"
   - **Choose installation location** (default is fine) - Click "Next"
   - **Select components** - Keep all checked (default) - Click "Next"
   - **Click "Install"** (may ask for admin password)
   - **Wait for installation to complete** (takes 1-2 minutes)
   - **Click "Finish"** when done

---

### Step 3: Verify Installation

1. **Close ALL PowerShell/Command Prompt windows** (important!)
2. **Open a NEW PowerShell window:**
   - Press `Windows Key`
   - Type "PowerShell"
   - Press Enter

3. **In the new PowerShell window, type:**
   ```powershell
   node --version
   ```
   Press Enter

4. **You should see something like:**
   ```
   v20.11.0
   ```
   (The version number may be different - that's fine!)

5. **Now check npm:**
   ```powershell
   npm --version
   ```
   Press Enter

6. **You should see something like:**
   ```
   10.2.4
   ```
   (Again, version may differ - that's fine!)

**If you see version numbers for both commands, Node.js is installed correctly! ✅**

**If you still get errors, see "Troubleshooting" below.**

---

### Step 4: Navigate to Your Project

1. **In the same PowerShell window, type:**
   ```powershell
   cd "C:\Users\marce\Documents\Repositories\www\Infradevconsulting.com"
   ```
   Press Enter

2. **Verify you're in the right place:**
   ```powershell
   pwd
   ```
   (or `Get-Location` in PowerShell)
   
   You should see: `C:\Users\marce\Documents\Repositories\www\Infradevconsulting.com`

---

### Step 5: Install Project Dependencies

1. **Now run:**
   ```powershell
   npm install
   ```
   Press Enter

2. **Wait for it to finish** (this takes 1-2 minutes)
   - You'll see lots of text scrolling
   - Wait until you see: `added XXX packages` or `audited XXX packages`
   - You should see your command prompt again when it's done

3. **If you see any errors**, note what they say and let me know

---

### Step 6: Start the Development Server

1. **Once `npm install` is done, run:**
   ```powershell
   npm run dev
   ```
   Press Enter

2. **Wait a few seconds** - You should see:
   ```
   astro  v4.x.x ready in XXX ms

   ➜  Local:   http://localhost:4321/
   ```

3. **Keep this window open!** The server needs to keep running.

---

### Step 7: View Your Website

1. **Open your web browser** (Chrome, Edge, Firefox, etc.)
2. **Type in the address bar:**
   ```
   http://localhost:4321
   ```
3. **Press Enter**
4. **You should see your website!** 🎉

---

## Troubleshooting

### Problem: Still getting "npm is not recognized" after installing

**Solution 1: Restart Your Computer**
- Sometimes Windows needs a restart to update the PATH
- Restart your computer and try again

**Solution 2: Check if Node.js is installed**
1. Press `Windows Key + R`
2. Type: `appwiz.cpl` and press Enter
3. Look for "Node.js" in the list
4. If you see it, it's installed but PATH might be wrong
5. If you don't see it, reinstall Node.js

**Solution 3: Manually add to PATH (Advanced)**
1. Find where Node.js is installed (usually `C:\Program Files\nodejs\`)
2. Add it to your system PATH (Google "how to add to PATH Windows 10/11")

**Solution 4: Use Node Version Manager (Alternative)**
- Install nvm-windows: https://github.com/coreybutler/nvm-windows
- Then install Node.js through nvm

---

### Problem: "Access Denied" or Permission Errors

**Solution:**
- Right-click PowerShell
- Select "Run as Administrator"
- Try the commands again

---

### Problem: Installation takes forever or hangs

**Solution:**
- Check your internet connection
- Try again later
- If using a VPN, try disabling it
- If behind a corporate firewall, contact IT

---

### Problem: Wrong folder / "Cannot find package.json"

**Solution:**
1. Make sure you're in the correct folder:
   ```powershell
   cd "C:\Users\marce\Documents\Repositories\www\Infradevconsulting.com"
   ```
2. Verify the file exists:
   ```powershell
   dir package.json
   ```
   (Should show package.json file)

---

## Quick Checklist

- [ ] Downloaded Node.js from nodejs.org
- [ ] Installed Node.js (ran the installer)
- [ ] Closed and reopened PowerShell
- [ ] Verified `node --version` works
- [ ] Verified `npm --version` works
- [ ] Navigated to project folder
- [ ] Ran `npm install` successfully
- [ ] Ran `npm run dev` successfully
- [ ] Opened http://localhost:4321 in browser

---

## Still Having Issues?

If you're still stuck:
1. **Take a screenshot** of the error message
2. **Note which step** you're on
3. **Check the error message** - what does it say exactly?
4. **Let me know** and I can help troubleshoot further

---

## Alternative: Use a Package Manager

If you have **Chocolatey** or **Winget** installed:

**Using Winget (Windows 11):**
```powershell
winget install OpenJS.NodeJS.LTS
```

**Using Chocolatey:**
```powershell
choco install nodejs-lts
```

Then restart PowerShell and continue from Step 3 above.

