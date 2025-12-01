#!/bin/bash
# Comprehensive Image Audit Script
# Analyzes all images, finds duplicates, and identifies unused files

echo "=== Ez2Fix Image Audit ==="
echo "Starting: $(date)"
echo ""

WORKDIR="/Users/yaronhayo/Desktop/ez2fix-website/rebuild"
AUDIT_FILE="$WORKDIR/image-audit-results.txt"
USED_IMAGES_FILE="$WORKDIR/used-images.txt"
ALL_IMAGES_FILE="$WORKDIR/all-images-found.txt"

# Clear previous results
> "$AUDIT_FILE"
> "$USED_IMAGES_FILE"
> "$ALL_IMAGES_FILE"

echo "=== IMAGE AUDIT REPORT ===" >> "$AUDIT_FILE"
echo "Date: $(date)" >> "$AUDIT_FILE"
echo "" >> "$AUDIT_FILE"

# 1. Find all images
echo "Step 1: Finding all image files..."
echo "## ALL IMAGES FOUND ##" >> "$AUDIT_FILE"
echo "" >> "$AUDIT_FILE"

echo "### public/images ###" >> "$AUDIT_FILE"
find "$WORKDIR/public/images" -type f \( -name "*.jpg" -o -name "*.jpeg" -o -name "*.png" -o -name "*.webp" -o -name "*.gif" -o -name "*.svg" \) 2>/dev/null | while read img; do
    rel_path="${img#$WORKDIR/public/}"
    size=$(ls -lh "$img" | awk '{print $5}')
    echo "$rel_path ($size)" >> "$AUDIT_FILE"
    echo "$rel_path" >> "$ALL_IMAGES_FILE"
done

echo "" >> "$AUDIT_FILE"
echo "### src/assets/images ###" >> "$AUDIT_FILE"
find "$WORKDIR/src/assets/images" -type f \( -name "*.jpg" -o -name "*.jpeg" -o -name "*.png" -o -name "*.webp" -o -name "*.gif" -o -name "*.svg" \) 2>/dev/null | while read img; do
    rel_path="${img#$WORKDIR/}"
    size=$(ls -lh "$img" | awk '{print $5}')
    echo "$rel_path ($size)" >> "$AUDIT_FILE"
    echo "src/assets/$(basename $img)" >> "$ALL_IMAGES_FILE"
done

echo "" >> "$AUDIT_FILE"
echo "## TOTAL COUNTS ##" >> "$AUDIT_FILE"
PUBLIC_COUNT=$(find "$WORKDIR/public/images" -type f \( -name "*.jpg" -o -name "*.jpeg" -o -name "*.png" -o -name "*.webp" -o -name "*.gif" -o -name "*.svg" \) 2>/dev/null | wc -l | tr -d ' ')
ASSETS_COUNT=$(find "$WORKDIR/src/assets/images" -type f \( -name "*.jpg" -o -name "*.jpeg" -o -name "*.png" -o -name "*.webp" -o -name "*.gif" -o -name "*.svg" \) 2>/dev/null | wc -l | tr -d ' ')
TOTAL_COUNT=$((PUBLIC_COUNT + ASSETS_COUNT))

echo "Public images: $PUBLIC_COUNT" >> "$AUDIT_FILE"
echo "Asset images: $ASSETS_COUNT" >> "$AUDIT_FILE"
echo "TOTAL: $TOTAL_COUNT" >> "$AUDIT_FILE"
echo "" >> "$AUDIT_FILE"

PUBLIC_SIZE=$(du -sh "$WORKDIR/public/images" 2>/dev/null | awk '{print $1}')
ASSETS_SIZE=$(du -sh "$WORKDIR/src/assets/images" 2>/dev/null | awk '{print $1}')

echo "Public size: $PUBLIC_SIZE" >> "$AUDIT_FILE"
echo "Assets size: $ASSETS_SIZE" >> "$AUDIT_FILE"
echo "" >> "$AUDIT_FILE"

# 2. Find image references in code
echo "Step 2: Scanning codebase for image references..."
echo "## IMAGE USAGE IN CODE ##" >> "$AUDIT_FILE"
echo "" >> "$AUDIT_FILE"

# Search for image references
grep -r -h -o -E '(src=|import.*from|background.*url\(|content.*url\(|poster=|heroImage:)[^ ]*\.(jpg|jpeg|png|webp|gif|svg)' \
    "$WORKDIR/src" \
    "$WORKDIR/public" \
    --include="*.astro" \
    --include="*.tsx" \
    --include="*.ts" \
    --include="*.js" \
    --include="*.css" \
    2>/dev/null | \
    sed 's/.*["'\'']//' | \
    sed 's/["'\''].*//' | \
    sed 's/).*//' | \
    sort -u >> "$USED_IMAGES_FILE"

echo "Found $(wc -l < "$USED_IMAGES_FILE" | tr -d ' ') unique image references in code" >> "$AUDIT_FILE"
echo "" >> "$AUDIT_FILE"

# 3. Find duplicates (same filename, different extensions)
echo "Step 3: Checking for duplicate filenames with different extensions..."
echo "## POTENTIAL DUPLICATES ##" >> "$AUDIT_FILE"
echo "" >> "$AUDIT_FILE"

find "$WORKDIR/public/images" "$WORKDIR/src/assets/images" -type f \( -name "*.jpg" -o -name "*.jpeg" -o -name "*.png" -o -name "*.webp" -o -name "*.gif" \) 2>/dev/null | \
    sed 's/\.[^.]*$//' | \
    sort | \
    uniq -d | \
    while read base; do
        echo "Duplicate base name: $(basename "$base")" >> "$AUDIT_FILE"
        find "$WORKDIR/public/images" "$WORKDIR/src/assets/images" -name "$(basename "$base").*" 2>/dev/null | \
            while read file; do
                size=$(ls -lh "$file" | awk '{print $5}')
                echo "  - $file ($size)" >> "$AUDIT_FILE"
            done
    done

echo "" >> "$AUDIT_FILE"
echo "## IMAGES-ORIGINAL FOLDER ##" >> "$AUDIT_FILE"
if [ -d "$WORKDIR/public/images-original" ]; then
    ORIGINAL_COUNT=$(find "$WORKDIR/public/images-original" -type f \( -name "*.jpg" -o -name "*.jpeg" -o -name "*.png" -o -name "*.webp" -o -name "*.gif" -o -name "*.svg" \) 2>/dev/null | wc -l | tr -d ' ')
    ORIGINAL_SIZE=$(du -sh "$WORKDIR/public/images-original" 2>/dev/null | awk '{print $1}')
    echo "Files in images-original: $ORIGINAL_COUNT" >> "$AUDIT_FILE"
    echo "Size of images-original: $ORIGINAL_SIZE" >> "$AUDIT_FILE"
    echo "" >> "$AUDIT_FILE"
    echo "These are backups from previous optimization - can be deleted after verification" >> "$AUDIT_FILE"
else
    echo "No images-original folder found" >> "$AUDIT_FILE"
fi

echo "" >> "$AUDIT_FILE"
echo "=== AUDIT COMPLETE ===" >> "$AUDIT_FILE"
echo "Results saved to: $AUDIT_FILE" >> "$AUDIT_FILE"
echo "Used images list: $USED_IMAGES_FILE" >> "$AUDIT_FILE"
echo "All images list: $ALL_IMAGES_FILE" >> "$AUDIT_FILE"

echo ""
echo "Audit complete! Results in: image-audit-results.txt"
echo "Total images: $TOTAL_COUNT ($PUBLIC_SIZE + $ASSETS_SIZE)"
