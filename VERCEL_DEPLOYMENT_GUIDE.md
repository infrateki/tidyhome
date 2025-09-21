# 🚀 Vercel Deployment Guide for TidyHome

## Prerequisites
✅ GitHub repository set up  
✅ Vercel account created  
✅ Environment variables ready  

## Step-by-Step Deployment

### 1️⃣ Import Project to Vercel

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click **"Add New Project"**
3. Import from GitHub:
   - Click **"Import Git Repository"**
   - Select `infrateki/tidyhome`
   - Click **"Import"**

### 2️⃣ Configure Build Settings

Vercel should auto-detect Vite, but verify these settings:

- **Framework Preset**: `Other`
- **Build Command**: `npm run build`
- **Output Directory**: `dist/public`
- **Install Command**: `npm ci`
- **Development Command**: `npm run dev`

### 3️⃣ Set Environment Variables

Click on **"Environment Variables"** and add:

#### Required Variables:
```
DATABASE_URL = [Your PostgreSQL/Neon connection string]
SESSION_SECRET = [Generate random 32+ character string]
NODE_ENV = production
```

#### Optional Variables:
```
VITE_GA4_MEASUREMENT_ID = G-XXXXXXXXXX
VITE_APP_URL = https://your-domain.com
SMTP_HOST = [Your email provider]
SMTP_PORT = 587
SMTP_USER = [Email username]
SMTP_PASS = [Email password]
```

### 4️⃣ Deploy

1. Click **"Deploy"**
2. Wait for build to complete (2-5 minutes)
3. Check build logs if any errors occur

## 🔗 Custom Domain Setup

### Adding Your Domain

1. Go to **Settings** → **Domains**
2. Add your domain (e.g., `tidyhome.com`)
3. Choose configuration:
   - `tidyhome.com` (apex domain)
   - `www.tidyhome.com` (subdomain)

### DNS Configuration

#### For Apex Domain (tidyhome.com):
Add these records to your DNS provider:
```
Type: A
Name: @
Value: 76.76.21.21
```

#### For Subdomain (www.tidyhome.com):
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

### SSL Certificate
- Automatically provisioned by Vercel
- Usually active within 24 hours
- Check status in Domains settings

## 🛠 Troubleshooting

### Build Failures

#### TypeScript Errors
```bash
# Run locally first:
npm run check
```

#### Missing Dependencies
```bash
# Ensure all deps are in package.json:
npm install [package] --save
```

#### Environment Variables
- Double-check all required vars are set
- No quotes needed in Vercel UI
- Rebuild after adding new variables

### Runtime Issues

#### API Not Working
- Check `/api` folder structure
- Verify serverless functions format
- Check function logs in Vercel

#### Database Connection
- Verify DATABASE_URL is correct
- Check SSL settings in connection string
- Test connection locally first

#### Styling Missing
- Clear browser cache
- Check Tailwind config
- Verify PostCSS setup

## 📊 Monitoring

### Analytics Dashboard
- View in Vercel Analytics tab
- Real User Metrics (Web Vitals)
- Custom events tracking

### Function Logs
- Go to **Functions** tab
- View execution logs
- Monitor errors and performance

### Build Logs
- Check for warnings
- Optimize bundle size
- Review dependency issues

## 🔄 Continuous Deployment

### Automatic Deploys
- Every push to `main` triggers deploy
- Preview deployments for PRs
- Rollback capability available

### Manual Deploy
```bash
# Using Vercel CLI
vercel --prod
```

### Environment-Specific Deploys
- Production: `main` branch
- Staging: `staging` branch
- Development: `dev` branch

## 📝 Vercel.json Configuration

Current configuration in `vercel.json`:
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist/public",
  "installCommand": "npm ci",
  "framework": null,
  "rewrites": [
    {
      "source": "/api/:path*",
      "destination": "/api/:path*"
    },
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

## 🚨 Important Notes

1. **Build Time Limit**: 45 minutes (Free tier)
2. **Function Size**: 50MB compressed
3. **Environment Variables**: 4KB limit per variable
4. **Bandwidth**: 100GB/month (Free tier)

## 📞 Support Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Vercel Support](https://vercel.com/support)
- [Status Page](https://www.vercel-status.com/)
- [Community Forum](https://github.com/vercel/next.js/discussions)

## ✅ Post-Deployment Checklist

- [ ] Site loads correctly
- [ ] All pages accessible
- [ ] Contact form working
- [ ] Images loading
- [ ] Mobile responsive
- [ ] SSL certificate active
- [ ] Analytics tracking
- [ ] Error monitoring active
- [ ] Performance acceptable
- [ ] SEO meta tags present

---

**Last Updated**: September 21, 2025  
**Deployment Status**: Ready for Production  
**Support**: Contact INFRATEK team for assistance
