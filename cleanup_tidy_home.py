import os
import json
import shutil
from pathlib import Path

"""
Tidy Home Project Cleanup Script
Run this to automatically clean up your Replit project for Vercel deployment
"""

def cleanup_project():
    """Automated cleanup for Tidy Home project"""
    
    project_path = Path(r"C:\Users\sergi\Documents\PROJECTS\tidy-home\TidyHomePR-1\TidyHomePR-1")
    
    print("🧹 Starting Tidy Home Project Cleanup...")
    
    # 1. Remove Replit-specific files
    replit_files = ['.replit', 'replit.md', '.replit.nix']
    replit_folders = ['.local', '.cache']
    
    for file in replit_files:
        file_path = project_path / file
        if file_path.exists():
            os.remove(file_path)
            print(f"✅ Removed {file}")
    
    for folder in replit_folders:
        folder_path = project_path / folder
        if folder_path.exists():
            shutil.rmtree(folder_path)
            print(f"✅ Removed {folder}/")
    
    print("\n✅ Cleanup Complete!")
    print("\nNext steps:")
    print("1. Run: npm install cross-env --save-dev")
    print("2. Run: npm run dev")
    print("3. Test locally at http://localhost:5173")

if __name__ == "__main__":
    cleanup_project()
