# 🚀 DEPLOYMENT CHECKLIST FOR TIDY HOME

## ✅ Pre-Deployment Tasks

### 1. Local Testing
- [ ] Run `npm install` to install all dependencies
- [ ] Run `npm run dev` and test the site locally
- [ ] Test all pages and features
- [ ] Check responsive design on mobile/tablet views
- [ ] Verify contact form works
- [ ] Test newsletter subscription

### 2. Environment Setup
- [ ] Create `.env` file with necessary variables
- [ ] Add `.env` to `.gitignore` (should already be there)
- [ ] Document all required environment variables

### 3. Code Preparation
- [ ] Run `npm run check` to check for TypeScript errors
- [ ] Fix any linting issues
- [ ] Update README.md with project details
- [ ] Remove any console.logs or debugging code

## 📦 GitHub Setup

### 1. Initialize Repository
```bash
cd C:\Users\sergi\Documents\PROJECTS\tidy-home\TidyHomePR-1\TidyHomePR-1
git init
git add .
git commit -m "Initial commit - Tidy Home website"
```

### 2. Create GitHub Repository
- [ ] Go to https://github.com/new
- [ ] Name: `tidy-home`
- [ ] Description: "Professional organizing services website"
- [ ] Public repository (for free Vercel hosting)
- [ ] DO NOT initialize with README

### 3. Connect and Push
```bash
git remote add origin https://github.com/YOUR_USERNAME/tidy-home.git
git branch -M main
git push -u origin main
```

## 🔷 Vercel Deployment

### Method 1: Vercel Dashboard (Easiest)
1. [ ] Go to https://vercel.com/new
2. [ ] Click "Import Git Repository"
3. [ ] Select your `tidy-home` repository
4. [ ] Configure:
   - Framework Preset: `Other`
   - Build Command: `npm run build`
   - Output Directory: `dist/public`
5. [ ] Add environment variables (if any)
6. [ ] Click "Deploy"

### Method 2: Vercel CLI
```bash
npm i -g vercel
vercel
```

## 🔍 Post-Deployment Verification

- [ ] Visit deployment URL
- [ ] Check all pages load correctly
- [ ] Test contact form submission
- [ ] Test newsletter signup
- [ ] Verify responsive design
- [ ] Check console for errors (F12)

## 🌐 Custom Domain (Optional)

1. [ ] In Vercel Dashboard → Settings → Domains
2. [ ] Add your domain (e.g., www.tidyhome.com)
3. [ ] Update DNS records:
   - A Record: `76.76.21.21` (Vercel IP)
   - CNAME: `cname.vercel-dns.com`

## 📊 Analytics Setup (Optional)

1. [ ] Create Google Analytics 4 property
2. [ ] Get Measurement ID (G-XXXXXXXXXX)
3. [ ] Add to Vercel environment variables:
   - `VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX`
4. [ ] Redeploy

## 🐛 Common Issues & Solutions

### Build Fails
- Check Node version: `node --version` (should be 18+)
- Clear npm cache: `npm cache clean --force`
- Delete node_modules and reinstall: `rm -rf node_modules && npm install`

### 404 Errors on Routes
- Verify `vercel.json` rewrites are correct
- Check that SPA routing is configured

### API Endpoints Not Working
- Check `/api` folder has the serverless functions
- Verify environment variables are set in Vercel
- Check function logs in Vercel dashboard

## 📝 Notes

- Production URL: _________________
- Staging URL: _________________
- Last deployed: _________________
- Deployed by: _________________

## 🆘 Need Help?

- Vercel Docs: https://vercel.com/docs
- Vite Docs: https://vitejs.dev
- React Docs: https://react.dev

---

**Remember to celebrate when deployment is successful! 🎉**
