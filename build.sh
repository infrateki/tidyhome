#!/bin/bash
# Build script for Vercel deployment

echo "Building Tidy Home for production..."

# Install dependencies
npm install

# Build the client
npm run build

# Create dist/public directory if it doesn't exist
mkdir -p dist/public

# Copy client build to dist/public
cp -r dist/client/* dist/public/ 2>/dev/null || true

echo "Build complete!"
echo "Output directory: dist/public"
