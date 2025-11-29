#!/bin/bash
# Shopify Theme Zip Creator

echo "Creating Shopify theme zip file..."
cd "/home/moiz/Documents/Shopify Theme"

zip -r shopify-theme.zip . \
  -x "*.git*" \
  -x "*.md" \
  -x "*.DS_Store" \
  -x "node_modules/*" \
  -x "*.sh" \
  -x ".gitignore"

if [ $? -eq 0 ]; then
    echo "✅ Zip file created successfully: shopify-theme.zip"
    ls -lh shopify-theme.zip
else
    echo "❌ Error creating zip file"
fi
