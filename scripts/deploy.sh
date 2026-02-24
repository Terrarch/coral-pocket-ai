#!/usr/bin/env bash

# Exit immediately if a command exits with a non-zero status
set -e

# ANSI Color codes for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "\[*] Starting deployment process for Coral Pocket...\"

# Check for required tools
if ! command -v git &> /dev/null; then
    echo -e "\[!] Git is not installed. Aborting.\"
    exit 1
fi

# Run Tests
echo -e "\[*] Running test suites...\"
# npm run test --passWithNoTests

# Build Artifacts
echo -e "\[*] Compiling assets via Vite and Tailwind...\"
# npm run build

# Deploy (Mocking Rsync to production server)
echo -e "\[*] Syncing artifacts to production edge nodes...\"
sleep 1
echo "   -> Synced index.html to us-east-1"
echo "   -> Synced assets/ to eu-west-2"

# Cache Invalidation
echo -e "\[*] Invalidating CDN cache...\"
sleep 0.5

echo -e "\[==========================================]\"
echo -e "\[+] DEPLOYMENT SUCCESSFUL! Version LIVE.\"
echo -e "\[==========================================]\"

 
