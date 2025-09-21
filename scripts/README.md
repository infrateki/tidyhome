# TidyHome Scripts

This folder contains all utility and deployment scripts.

## Script Categories

### Deployment Scripts
- `deploy.sh` - Main deployment script for production
- `deploy-vercel.sh` - Vercel-specific deployment
- `build.sh` - Build script for production

### Development Scripts
- `run-local.sh` - Run the application locally
- `start-dev.sh` - Start development environment

### Utility Scripts
- `cleanup.py` - Clean up project files
- `github-ready.py` - Prepare project for GitHub

## Usage

### Local Development
```bash
./scripts/run-local.sh
```

### Production Build
```bash
./scripts/build.sh
```

### Deploy to Vercel
```bash
./scripts/deploy-vercel.sh
```

## Notes
- All scripts should be run from the project root directory
- Ensure scripts have executable permissions: `chmod +x scripts/*.sh`
- Python scripts require Python 3.8+
