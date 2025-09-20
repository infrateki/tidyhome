@echo off
echo ========================================
echo Tidy Home - Client Update Workflow
echo ========================================
echo.

cd C:\Users\sergi\Documents\PROJECTS\tidy-home\TidyHomePR-1\TidyHomePR-1

echo Checking current branch...
git branch --show-current
echo.

echo Creating client updates branch...
git checkout -b client-updates-jan-2025 2>nul || git checkout client-updates-jan-2025
echo.

echo Current status:
git status --short
echo.

echo ========================================
echo Ready to make updates!
echo ========================================
echo.
echo Next steps:
echo 1. Make your changes in Cursor
echo 2. Test locally: npx vite --host
echo 3. Run: git add .
echo 4. Run: git commit -m "your message"
echo 5. Run: git push origin client-updates-jan-2025
echo.
echo To deploy to production:
echo 1. git checkout main
echo 2. git merge client-updates-jan-2025
echo 3. git push origin main
echo.
pause