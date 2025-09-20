import os
import shutil
from pathlib import Path

"""
Complete GitHub preparation script for Tidy Home
Runs all cleanup and verification steps
"""

def prepare_for_github():
    project_path = Path(r"C:\Users\sergi\Documents\PROJECTS\tidy-home\TidyHomePR-1\TidyHomePR-1")
    os.chdir(project_path)
    
    print("=" * 60)
    print("🚀 TIDY HOME - GITHUB PREPARATION TOOL")
    print("=" * 60)
    
    # 1. Check Git status
    print("\n📊 GIT STATUS CHECK:")
    print("-" * 40)
    
    git_dir = project_path / ".git"
    if git_dir.exists():
        print("✅ Git is initialized")
        
        # Check for remote
        config_file = git_dir / "config"
        with open(config_file, 'r') as f:
            config_content = f.read()
            if "remote" in config_content:
                print("⚠️  Git remote already configured")
                print("   You might have already pushed to GitHub")
            else:
                print("❌ No GitHub remote configured yet")
                print("   This is your first push - good!")
    else:
        print("❌ Git not initialized - run: git init")
    
    # 2. Clean unnecessary files
    print("\n🧹 CLEANUP:")
    print("-" * 40)
    
    files_to_remove = [
        "modal_debug_screenshot.png",
        ".replit",
        "replit.md",
        ".replit.nix"
    ]
    
    for file in files_to_remove:
        file_path = project_path / file
        if file_path.exists():
            os.remove(file_path)
            print(f"✅ Removed {file}")
        else:
            print(f"   {file} - already clean")
    
    # 3. Check for sensitive files
    print("\n🔒 SECURITY CHECK:")
    print("-" * 40)
    
    env_file = project_path / ".env"
    if env_file.exists():
        print("⚠️  WARNING: .env file exists!")
        print("   Make sure it's in .gitignore")
    else:
        print("✅ No .env file - safe to push")
    
    # 4. Check .gitignore
    gitignore = project_path / ".gitignore"
    if gitignore.exists():
        with open(gitignore, 'r') as f:
            ignore_content = f.read()
            if "node_modules" in ignore_content:
                print("✅ .gitignore properly configured")
            else:
                print("⚠️  .gitignore might need updates")
    
    # 5. Project size check
    print("\n📦 PROJECT SIZE:")
    print("-" * 40)
    
    total_size = 0
    file_count = 0
    
    for root, dirs, files in os.walk(project_path):
        # Skip node_modules and .git
        if 'node_modules' in dirs:
            dirs.remove('node_modules')
        if '.git' in dirs:
            dirs.remove('.git')
        
        for file in files:
            file_path = os.path.join(root, file)
            total_size += os.path.getsize(file_path)
            file_count += 1
    
    size_mb = total_size / (1024 * 1024)
    print(f"📁 Files to upload: {file_count}")
    print(f"💾 Total size: {size_mb:.2f} MB")
    
    if size_mb < 100:
        print("✅ Size is perfect for GitHub")
    else:
        print("⚠️  Large project - consider optimizing images")
    
    # 6. Ready check
    print("\n" + "=" * 60)
    print("📋 GITHUB READINESS SUMMARY:")
    print("=" * 60)
    
    print("\n✅ READY TO PUSH if all checks passed above")
    print("\n📝 NEXT STEPS:")
    print("1. Run: git add .")
    print("2. Run: git commit -m \"Initial commit - Tidy Home website\"")
    print("3. Create repo at: https://github.com/new")
    print("4. Run: git remote add origin https://github.com/YOUR_USERNAME/tidy-home.git")
    print("5. Run: git push -u origin main")
    
    print("\n🎯 Your site will be ready for Vercel deployment!")

if __name__ == "__main__":
    prepare_for_github()
