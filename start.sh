#!/bin/bash

# Jogpro 3D Website - Quick Start Script

echo "🚀 Starting Jogpro 3D Website..."
echo ""

cd ~/jogpro-3d-website

# Check if dependencies installed
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

# Build if needed
if [ ! -d ".next" ]; then
    echo "🔨 Building project..."
    npm run build
fi

# Start server
echo "✅ Starting production server..."
echo "🌐 Website akan tersedia di: http://localhost:3000"
echo "🛠️ Admin panel: http://localhost:3000/admin"
echo ""
echo "Press Ctrl+C to stop"
echo ""

npm start
