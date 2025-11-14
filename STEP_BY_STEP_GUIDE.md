# Step-by-Step Guide: Running the Site Locally

## Prerequisites Check

### Step 1: Check if Node.js is Installed

1. Open **PowerShell** (Press `Windows Key`, type "PowerShell", press Enter)
2. Type this command and press Enter:
   ```powershell
   node --version
   ```

**If you see a version number** (like `v18.17.0` or higher):
- ✅ You're good to go! Skip to "Installing Dependencies" below.

**If you see an error** (like "node is not recognized"):
- ❌ You need to install Node.js first:
  1. Go to [https://nodejs.org/](https://nodejs.org/)
  2. Download the **LTS version** (recommended)
  3. Run the installer
  4. Follow the installation wizard (accept all defaults)
  5. **Restart PowerShell** after installation
  6. Run `node --version` again to verify

---

## Installing Dependencies

### Step 2: Open PowerShell in the Project Folder

**Option A: Using File Explorer**
1. Open File Explorer
2. Navigate to: `C:\Users\marce\Documents\Repositories\www\Infradevconsulting.com`
3. Click in the address bar and type: `powershell`
4. Press Enter
5. PowerShell will open in that folder

**Option B: Using PowerShell**
1. Open PowerShell
2. Type this command and press Enter:
   ```powershell
   cd "C:\Users\marce\Documents\Repositories\www\Infradevconsulting.com"
   ```

### Step 3: Install Project Dependencies

1. In PowerShell, type this command and press Enter:
   ```powershell
   npm install
   ```

2. **Wait for it to finish** - This may take 1-2 minutes. You'll see:
   ```
   added XXX packages, and audited XXX packages in XXs
   ```

3. **If you see any errors**, let me know what they say.

---

## Starting the Development Server

### Step 4: Start the Server

1. In the same PowerShell window, type:
   ```powershell
   npm run dev
   ```

2. **Wait a few seconds** - You should see output like:
   ```
   astro  v4.x.x ready in XXX ms

   ➜  Local:   http://localhost:4321/
   ➜  Network: use --host to expose
   ```

3. **Keep this window open!** The server needs to keep running.

---

## Viewing Your Website

### Step 5: Open in Browser

1. **Open your web browser** (Chrome, Edge, Firefox, etc.)

2. **Type this in the address bar:**
   ```
   http://localhost:4321
   ```

3. **Press Enter**

4. **You should see your InfraDev Consulting website!** 🎉

---

## Testing the Pages

### Step 6: Test Both Pages

1. **Home Page** - You should already be here at `http://localhost:4321`
   - Check that you see: Hero section, Services, About, Process, CTA

2. **Contact Page** - Click "Contact" in the navigation, or go to:
   ```
   http://localhost:4321/contact
   ```
   - Check that you see the contact form

3. **Navigation** - Click "Home" and "Contact" links to make sure they work

---

## Making Changes (Optional)

### Step 7: Try Making a Change

The server has **hot reload** - changes appear automatically!

1. **Keep the server running** (don't close PowerShell)

2. **Open any file** in the `src` folder (like `src/pages/index.astro`)

3. **Make a small change** (like change some text)

4. **Save the file**

5. **Check your browser** - It should automatically refresh with your changes!

---

## Stopping the Server

### Step 8: When You're Done

1. **Go back to the PowerShell window** where the server is running

2. **Press `Ctrl + C`** (hold Ctrl, press C)

3. **Confirm** if it asks (press Y or Enter)

4. The server will stop and you'll see your command prompt again

---

## Troubleshooting

### Problem: "npm is not recognized"
**Solution:** Node.js is not installed or not in your PATH
- Install Node.js from [nodejs.org](https://nodejs.org/)
- Restart PowerShell after installation

### Problem: "Port 4321 is already in use"
**Solution:** Another program is using that port
- Run this instead: `npm run dev -- --port 4322`
- Then use: `http://localhost:4322`

### Problem: "Cannot find module" errors
**Solution:** Dependencies not installed correctly
- Delete the `node_modules` folder
- Run `npm install` again

### Problem: Images not showing
**Solution:** Check file paths
- Make sure files are in `/public/assets/WebsiteMarketing/`
- Hard refresh browser: `Ctrl + Shift + R`

### Problem: Server won't start
**Solution:** Check for errors in the terminal
- Look at the error message
- Make sure you're in the correct folder
- Try `npm install` again

---

## Quick Reference

| What to do | Command |
|------------|---------|
| Install dependencies | `npm install` |
| Start server | `npm run dev` |
| Stop server | `Ctrl + C` |
| View site | `http://localhost:4321` |
| Build for production | `npm run build` |
| Preview production build | `npm run preview` |

---

## Need Help?

If you get stuck:
1. Check the error message in PowerShell
2. Make sure Node.js is installed (`node --version`)
3. Make sure you're in the correct folder
4. Try running `npm install` again

---

## Summary

1. ✅ Check Node.js is installed (`node --version`)
2. ✅ Open PowerShell in project folder
3. ✅ Run `npm install`
4. ✅ Run `npm run dev`
5. ✅ Open `http://localhost:4321` in browser
6. ✅ Test the site!

That's it! Your site is now running locally. 🚀

