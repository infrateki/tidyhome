#!/bin/bash

# TidyHome Project Organization Script
# This script moves all files to their proper locations

echo "🧹 Starting TidyHome project organization..."

# Create directories if they don't exist
echo "📁 Creating directory structure..."
mkdir -p docs
mkdir -p scripts
mkdir -p scripts/deployment
mkdir -p scripts/utility
mkdir -p scripts/development

# Move documentation files to docs folder
echo "📄 Moving documentation files..."
[ -f "CLIENT_UPDATES.md" ] && git mv CLIENT_UPDATES.md docs/ 2>/dev/null || mv CLIENT_UPDATES.md docs/ 2>/dev/null
[ -f "COMPONENT_FILE_MAP.md" ] && git mv COMPONENT_FILE_MAP.md docs/ 2>/dev/null || mv COMPONENT_FILE_MAP.md docs/ 2>/dev/null
[ -f "DEPLOYMENT_CHECKLIST.md" ] && git mv DEPLOYMENT_CHECKLIST.md docs/ 2>/dev/null || mv DEPLOYMENT_CHECKLIST.md docs/ 2>/dev/null
[ -f "GA4_SETUP.md" ] && git mv GA4_SETUP.md docs/ 2>/dev/null || mv GA4_SETUP.md docs/ 2>/dev/null
[ -f "GITHUB_READY_CHECKLIST.md" ] && git mv GITHUB_READY_CHECKLIST.md docs/ 2>/dev/null || mv GITHUB_READY_CHECKLIST.md docs/ 2>/dev/null
[ -f "IMPLEMENTATION_PLAN.md" ] && git mv IMPLEMENTATION_PLAN.md docs/ 2>/dev/null || mv IMPLEMENTATION_PLAN.md docs/ 2>/dev/null
[ -f "QUICK_START.md" ] && git mv QUICK_START.md docs/ 2>/dev/null || mv QUICK_START.md docs/ 2>/dev/null
[ -f "README_UPDATES.md" ] && git mv README_UPDATES.md docs/ 2>/dev/null || mv README_UPDATES.md docs/ 2>/dev/null

# Move Python scripts to scripts/utility folder
echo "🐍 Moving Python scripts..."
[ -f "cleanup_tidy_home.py" ] && git mv cleanup_tidy_home.py scripts/utility/ 2>/dev/null || mv cleanup_tidy_home.py scripts/utility/ 2>/dev/null
[ -f "github_ready.py" ] && git mv github_ready.py scripts/utility/ 2>/dev/null || mv github_ready.py scripts/utility/ 2>/dev/null

# Move batch files to scripts folders
echo "🔧 Moving batch/shell scripts..."
[ -f "deploy.bat" ] && git mv deploy.bat scripts/deployment/ 2>/dev/null || mv deploy.bat scripts/deployment/ 2>/dev/null
[ -f "run-local.bat" ] && git mv run-local.bat scripts/development/ 2>/dev/null || mv run-local.bat scripts/development/ 2>/dev/null
[ -f "start-client-updates.bat" ] && git mv start-client-updates.bat scripts/development/ 2>/dev/null || mv start-client-updates.bat scripts/development/ 2>/dev/null
[ -f "build.sh" ] && git mv build.sh scripts/deployment/ 2>/dev/null || mv build.sh scripts/deployment/ 2>/dev/null

echo "✅ File organization complete!"

# Show the new structure
echo ""
echo "📂 New project structure:"
echo "================================"
echo "Root directory now contains only:"
ls -la | grep -E "^-" | grep -E "\.(json|js|ts|md|example)$|^\.git|^\.env"

echo ""
echo "📁 Documentation files moved to /docs:"
ls -la docs/ 2>/dev/null

echo ""
echo "📁 Scripts moved to /scripts:"
ls -la scripts/ 2>/dev/null
ls -la scripts/deployment/ 2>/dev/null
ls -la scripts/utility/ 2>/dev/null
ls -la scripts/development/ 2>/dev/null

echo ""
echo "================================"
echo "🎉 Project structure refactored successfully!"
echo ""
echo "Next steps:"
echo "1. Review the changes"
echo "2. Commit: git add . && git commit -m 'Refactor: Organize project structure for production'"
echo "3. Push: git push origin main"
echo "4. Deploy to Vercel"
