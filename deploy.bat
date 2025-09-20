@echo off
echo ========================================
echo    TIDY HOME - VERCEL DEPLOYMENT
echo ========================================
echo.

echo Current directory: %CD%
echo.

echo STEP 1: Checking Git Status
echo ---------------------------
git status
echo.
pause

echo STEP 2: Adding all files to Git
echo -------------------------------
git add .
echo.

echo STEP 3: Creating commit
echo ----------------------
set /p commit_msg="Enter commit message (or press Enter for default): "
if "%commit_msg%"=="" set commit_msg=Update Tidy Home website

git commit -m "%commit_msg%"
echo.
pause

echo STEP 4: GitHub Setup
echo -------------------
git remote -v
echo.
echo If no remote is shown above, you need to:
echo 1. Create a new repository on GitHub.com
echo 2. Run: git remote add origin https://github.com/YOUR_USERNAME/tidy-home.git
echo.
pause

echo STEP 5: Push to GitHub
echo ---------------------
echo Pushing to GitHub...
git push -u origin main
echo.
pause

echo STEP 6: Deploy to Vercel
echo -----------------------
echo.
echo Now you can deploy to Vercel:
echo.
echo OPTION 1 - Using Vercel CLI:
echo   1. Install: npm i -g vercel
echo   2. Run: vercel
echo   3. Follow the prompts
echo.
echo OPTION 2 - Using Vercel Dashboard:
echo   1. Go to https://vercel.com
echo   2. Click "Add New Project"
echo   3. Import your GitHub repository
echo   4. Click "Deploy"
echo.
echo ========================================
echo    Deployment preparation complete!
echo ========================================
echo.
pause
