# TidyHome Project Organization Script for Windows
# Run this in PowerShell to organize your project structure

Write-Host "Starting TidyHome project organization..." -ForegroundColor Green

# Create directories if they don't exist
Write-Host "Creating directory structure..." -ForegroundColor Yellow
if (!(Test-Path "docs")) { 
    New-Item -ItemType Directory -Path "docs" | Out-Null 
}
if (!(Test-Path "scripts")) { 
    New-Item -ItemType Directory -Path "scripts" | Out-Null 
}
if (!(Test-Path "scripts\deployment")) { 
    New-Item -ItemType Directory -Path "scripts\deployment" | Out-Null 
}
if (!(Test-Path "scripts\utility")) { 
    New-Item -ItemType Directory -Path "scripts\utility" | Out-Null 
}
if (!(Test-Path "scripts\development")) { 
    New-Item -ItemType Directory -Path "scripts\development" | Out-Null 
}

# Move documentation files to docs folder
Write-Host "Moving documentation files..." -ForegroundColor Yellow
$docFiles = @(
    "CLIENT_UPDATES.md",
    "COMPONENT_FILE_MAP.md", 
    "DEPLOYMENT_CHECKLIST.md",
    "GA4_SETUP.md",
    "GITHUB_READY_CHECKLIST.md",
    "IMPLEMENTATION_PLAN.md",
    "QUICK_START.md",
    "README_UPDATES.md"
)

foreach ($file in $docFiles) {
    if (Test-Path $file) {
        Move-Item -Path $file -Destination "docs\" -Force
        Write-Host "  Moved $file" -ForegroundColor Green
    }
}

# Move Python scripts to scripts/utility folder
Write-Host "Moving Python scripts..." -ForegroundColor Yellow
$pythonFiles = @(
    "cleanup_tidy_home.py",
    "github_ready.py"
)

foreach ($file in $pythonFiles) {
    if (Test-Path $file) {
        Move-Item -Path $file -Destination "scripts\utility\" -Force
        Write-Host "  Moved $file" -ForegroundColor Green
    }
}

# Move batch files to appropriate scripts folders
Write-Host "Moving batch/shell scripts..." -ForegroundColor Yellow
if (Test-Path "deploy.bat") {
    Move-Item -Path "deploy.bat" -Destination "scripts\deployment\" -Force
    Write-Host "  Moved deploy.bat" -ForegroundColor Green
}
if (Test-Path "run-local.bat") {
    Move-Item -Path "run-local.bat" -Destination "scripts\development\" -Force
    Write-Host "  Moved run-local.bat" -ForegroundColor Green
}
if (Test-Path "start-client-updates.bat") {
    Move-Item -Path "start-client-updates.bat" -Destination "scripts\development\" -Force
    Write-Host "  Moved start-client-updates.bat" -ForegroundColor Green
}
if (Test-Path "build.sh") {
    Move-Item -Path "build.sh" -Destination "scripts\deployment\" -Force
    Write-Host "  Moved build.sh" -ForegroundColor Green
}

# Also move the organization scripts
if (Test-Path "organize-project.sh") {
    Move-Item -Path "organize-project.sh" -Destination "scripts\utility\" -Force -ErrorAction SilentlyContinue
    Write-Host "  Moved organize-project.sh" -ForegroundColor Green
}
if (Test-Path "organize-project.ps1") {
    Move-Item -Path "organize-project.ps1" -Destination "scripts\utility\" -Force -ErrorAction SilentlyContinue
    Write-Host "  Moved organize-project.ps1" -ForegroundColor Green
}

Write-Host "" 
Write-Host "File organization complete!" -ForegroundColor Green
Write-Host ""
Write-Host "Project structure refactored successfully!" -ForegroundColor Green
Write-Host ""
Write-Host "Next steps:" -ForegroundColor Yellow
Write-Host "1. Review the changes" -ForegroundColor White
Write-Host "2. Commit: git add ." -ForegroundColor White
Write-Host "3. Commit: git commit -m 'Refactor: Organize project structure'" -ForegroundColor White
Write-Host "4. Push: git push origin main" -ForegroundColor White
Write-Host "5. Deploy to Vercel" -ForegroundColor White
