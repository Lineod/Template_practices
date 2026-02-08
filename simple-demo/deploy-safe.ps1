# deploy-safe-final.ps1
# SAFE GitHub Pages Deployment - Won't delete your files
# This script does everything in a temporary location

Write-Host "SAFE GITHUB PAGES DEPLOYMENT" -ForegroundColor Green
Write-Host "=============================" -ForegroundColor Green

# Save current location
$originalDir = Get-Location
$currentBranch = git branch --show-current
Write-Host "Starting from: $originalDir" -ForegroundColor Cyan
Write-Host "Current branch: $currentBranch" -ForegroundColor Cyan

try {
    # Step 1: Build project
    Write-Host "`nStep 1: Building project..." -ForegroundColor Yellow
    npm run build
    
    if ($LASTEXITCODE -ne 0) {
        throw "Build failed"
    }
    
    Write-Host "Build successful" -ForegroundColor Green
    
    # Step 2: Create a temporary directory for deployment
    Write-Host "`nStep 2: Preparing deployment..." -ForegroundColor Yellow
    $tempDeployDir = Join-Path $env:TEMP "gh-pages-deploy-$(Get-Date -Format 'yyyyMMdd_HHmmss')"
    New-Item -ItemType Directory -Path $tempDeployDir -Force | Out-Null
    Write-Host "Using temp directory: $tempDeployDir"
    
    # Step 3: Clone the repository to temp directory (ONLY gh-pages branch)
    Write-Host "`nStep 3: Cloning gh-pages branch..." -ForegroundColor Yellow
    
    # Get the remote URL
    $remoteUrl = git remote get-url origin
    Write-Host "Remote URL: $remoteUrl"
    
    # Clone only the gh-pages branch to temp directory
    Set-Location $env:TEMP
    git clone --branch gh-pages --single-branch $remoteUrl $tempDeployDir 2>&1 | Out-Null
    
    if ($LASTEXITCODE -ne 0) {
        # If gh-pages branch doesn't exist yet, create an empty repo
        Write-Host "gh-pages branch not found, initializing new..."
        Remove-Item $tempDeployDir -Recurse -Force -ErrorAction SilentlyContinue
        New-Item -ItemType Directory -Path $tempDeployDir -Force | Out-Null
        Set-Location $tempDeployDir
        git init
        git checkout -b gh-pages
    } else {
        Set-Location $tempDeployDir
    }
    
    # Step 4: Clean the temp repo (remove all files)
    Write-Host "`nStep 4: Cleaning temp repository..." -ForegroundColor Yellow
    Get-ChildItem -Path . -Exclude .git | Remove-Item -Recurse -Force -ErrorAction SilentlyContinue
    
    # Step 5: Copy build files from original location
    Write-Host "`nStep 5: Copying build files..." -ForegroundColor Yellow
    $distPath = Join-Path $originalDir "dist"
    
    if (Test-Path $distPath) {
        Copy-Item "$distPath\*" . -Recurse -Force
        Write-Host "Files copied" -ForegroundColor Green
    } else {
        throw "ERROR: dist directory not found at $distPath"
    }
    
    # Step 6: Commit and push
    Write-Host "`nStep 6: Publishing..." -ForegroundColor Yellow
    
    git add -A
    $hasChanges = git status --porcelain
    if ($hasChanges) {
        git commit -m "Deploy: $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')"
        git push origin gh-pages --force
        Write-Host "Published successfully!" -ForegroundColor Green
    } else {
        Write-Host "No changes to publish" -ForegroundColor Yellow
    }
    
    # Step 7: Clean up and return to original location
    Write-Host "`nStep 7: Cleaning up..." -ForegroundColor Yellow
    Set-Location $originalDir
    
    # Remove temp directory
    Remove-Item $tempDeployDir -Recurse -Force -ErrorAction SilentlyContinue
    
    Write-Host "`nDEPLOYMENT COMPLETE!" -ForegroundColor Green
    Write-Host "====================" -ForegroundColor Green
    Write-Host "Your site is live at:" -ForegroundColor Cyan
    Write-Host "https://lineod.github.io/Template_practices/" -ForegroundColor White -BackgroundColor DarkBlue
    
} catch {
    Write-Host "`nERROR: $($_.Exception.Message)" -ForegroundColor Red
    Write-Host "`nPlease check the error above and try again." -ForegroundColor Yellow
    
    # Always return to original directory
    Set-Location $originalDir
    exit 1
}