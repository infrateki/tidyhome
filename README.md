# 🏠 Tidy Home - Professional Organizing Services

A modern, responsive web application for Tidy Home, built with React, Vite, and Express.

## 🚀 Quick Deploy to Vercel

### Prerequisites
- Node.js 18+ installed
- Git installed
- GitHub account
- Vercel account (free at vercel.com)

## 📋 Pre-Deployment Checklist

### 1. Environment Setup
Create a `.env` file (DO NOT commit this to Git):
```env
# Database (if using Neon/PostgreSQL)
DATABASE_URL=your_database_url_here

# Google Analytics (optional)
VITE_GA_MEASUREMENT_ID=your_ga_id_here

# Other environment variables as needed
```

### 2. Database Setup (if needed)
If you're using the database features:
1. Set up a PostgreSQL database (Neon, Supabase, or similar)
2. Add the DATABASE_URL to your environment variables
3. Run migrations: `npm run db:push`

## 🔧 Deployment Steps

### Step 1: Prepare for GitHub
```bash
# Navigate to project directory
cd C:\Users\sergi\Documents\PROJECTS\tidy-home\TidyHomePR-1\TidyHomePR-1

# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - Tidy Home website"
```

### Step 2: Push to GitHub
```bash
# Create a new repository on GitHub.com named "tidy-home"

# Add remote origin
git remote add origin https://github.com/YOUR_USERNAME/tidy-home.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Deploy to Vercel

#### Option A: Using Vercel CLI (Recommended)
```bash
# Install Vercel CLI globally
npm i -g vercel

# Deploy
vercel

# Follow the prompts:
# - Link to existing project? No
# - What's your project's name? tidy-home
# - In which directory is your code located? ./
# - Want to override the settings? No
```

#### Option B: Using Vercel Dashboard
1. Go to [vercel.com](https://vercel.com)
2. Click "Add New Project"
3. Import your GitHub repository
4. Configure:
   - Framework Preset: Other
   - Build Command: `npm run build`
   - Output Directory: `dist/public`
5. Add environment variables if needed
6. Click "Deploy"

## 🔐 Environment Variables in Vercel

Add these in Vercel Dashboard → Settings → Environment Variables:
- `DATABASE_URL` (if using database)
- Any other production environment variables

## 📱 Features

- ✅ Responsive design for all devices
- ✅ Contact form with backend API
- ✅ Newsletter subscription
- ✅ Multi-language support (Language Context)
- ✅ WhatsApp integration
- ✅ Service showcase with modals
- ✅ Instagram feed integration ready
- ✅ SEO optimized

## 🛠 Tech Stack

- **Frontend**: React 18, Vite, Tailwind CSS
- **UI Components**: Radix UI, Lucide Icons
- **Backend**: Express.js (converted to Vercel Functions)
- **Database**: Drizzle ORM with PostgreSQL
- **Deployment**: Vercel

## 📂 Project Structure

```
tidy-home/
├── api/                 # Vercel serverless functions
├── client/              # React application
│   ├── public/          # Static assets
│   └── src/
│       ├── components/  # React components
│       ├── pages/       # Page components
│       ├── contexts/    # React contexts
│       └── lib/         # Utilities
├── server/              # Express server (local dev only)
├── shared/              # Shared types and schemas
├── vercel.json          # Vercel configuration
└── package.json         # Dependencies and scripts
```

## 🔄 Post-Deployment

### Custom Domain
1. In Vercel Dashboard → Settings → Domains
2. Add your custom domain (e.g., tidyhome.com)
3. Update DNS records as instructed

### Analytics
1. Set up Google Analytics 4
2. Add measurement ID to environment variables
3. Redeploy

### Database (if needed)
1. Set up production database
2. Add connection string to Vercel environment variables
3. Run migrations

## 🐛 Troubleshooting

### Build Fails
- Check Node version (should be 18+)
- Verify all dependencies are installed
- Check for TypeScript errors: `npm run check`

### API Not Working
- Verify API functions are in `/api` directory
- Check environment variables in Vercel
- Review function logs in Vercel dashboard

### Styling Issues
- Clear browser cache
- Check Tailwind configuration
- Verify PostCSS setup

## 📞 Support

For deployment issues:
- Check Vercel documentation: https://vercel.com/docs
- Review logs in Vercel dashboard
- Contact development team

---

© 2025 Tidy Home - Your Space Matters
