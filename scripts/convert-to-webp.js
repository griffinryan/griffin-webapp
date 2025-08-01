const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');

// Configuration
const QUALITY_LEVELS = {
  high: 95,
  medium: 85,
  low: 75
};

const SIZES = {
  small: 320,
  medium: 640,
  large: 1280,
  original: null
};

async function generateBlurDataURL(inputPath) {
  try {
    const buffer = await sharp(inputPath)
      .resize(10, 10, { fit: 'inside' })
      .blur()
      .toBuffer();
    
    const base64 = buffer.toString('base64');
    const mimeType = inputPath.endsWith('.png') ? 'image/png' : 'image/jpeg';
    return `data:${mimeType};base64,${base64}`;
  } catch (error) {
    console.error(`❌ Error generating blur data URL for ${inputPath}:`, error.message);
    return null;
  }
}

async function convertToWebP(inputPath, outputPath, quality = QUALITY_LEVELS.high) {
  try {
    const metadata = await sharp(inputPath).metadata();
    
    await sharp(inputPath)
      .webp({ quality })
      .toFile(outputPath);
    
    const inputStats = await fs.stat(inputPath);
    const outputStats = await fs.stat(outputPath);
    
    const savings = ((1 - outputStats.size / inputStats.size) * 100).toFixed(1);
    
    console.log(`✅ Converted: ${path.basename(inputPath)}`);
    console.log(`   Original: ${(inputStats.size / 1024).toFixed(1)}KB`);
    console.log(`   WebP: ${(outputStats.size / 1024).toFixed(1)}KB`);
    console.log(`   Savings: ${savings}%`);
    
    // Generate blur data URL
    const blurDataURL = await generateBlurDataURL(inputPath);
    if (blurDataURL) {
      console.log(`   🌫️  Generated blur placeholder`);
    }
    
    return {
      original: inputPath,
      webp: outputPath,
      originalSize: inputStats.size,
      webpSize: outputStats.size,
      savings: parseFloat(savings),
      dimensions: {
        width: metadata.width,
        height: metadata.height
      },
      blurDataURL
    };
  } catch (error) {
    console.error(`❌ Error converting ${inputPath}:`, error.message);
    throw error;
  }
}

async function generateResponsiveSizes(inputPath, baseName, outputDir) {
  const results = [];
  
  for (const [sizeName, width] of Object.entries(SIZES)) {
    if (width === null) {
      // Original size
      const outputPath = path.join(outputDir, `${baseName}.webp`);
      const result = await convertToWebP(inputPath, outputPath, QUALITY_LEVELS.high);
      results.push({ ...result, sizeName: 'original' });
    } else {
      // Resized versions
      const outputPath = path.join(outputDir, `${baseName}-${width}w.webp`);
      
      try {
        const metadata = await sharp(inputPath).metadata();
        
        // Only resize if image is larger than target width
        if (metadata.width > width) {
          await sharp(inputPath)
            .resize(width, null, { withoutEnlargement: true })
            .webp({ quality: QUALITY_LEVELS.medium })
            .toFile(outputPath);
          
          const outputStats = await fs.stat(outputPath);
          
          console.log(`   📐 ${width}w: ${(outputStats.size / 1024).toFixed(1)}KB`);
          
          results.push({
            original: inputPath,
            webp: outputPath,
            webpSize: outputStats.size,
            sizeName,
            width
          });
        }
      } catch (error) {
        console.error(`   ❌ Error creating ${width}w version:`, error.message);
      }
    }
  }
  
  return results;
}

async function processDirectory(dirPath) {
  const files = await fs.readdir(dirPath, { withFileTypes: true });
  const results = [];
  let totalOriginalSize = 0;
  let totalWebPSize = 0;
  
  for (const file of files) {
    const filePath = path.join(dirPath, file.name);
    
    if (file.isDirectory()) {
      // Recursively process subdirectories
      const subResults = await processDirectory(filePath);
      results.push(...subResults);
    } else if (file.name.endsWith('.png')) {
      const baseName = path.basename(file.name, '.png');
      const outputDir = path.dirname(filePath);
      
      console.log(`\n🖼️  Processing: ${filePath}`);
      
      try {
        // Generate all sizes
        const sizeResults = await generateResponsiveSizes(filePath, baseName, outputDir);
        results.push(...sizeResults);
        
        // Calculate totals from original size conversion
        const originalConversion = sizeResults.find(r => r.sizeName === 'original');
        if (originalConversion) {
          totalOriginalSize += originalConversion.originalSize;
          totalWebPSize += originalConversion.webpSize;
        }
      } catch (error) {
        console.error(`Failed to process ${filePath}:`, error);
      }
    }
  }
  
  if (totalOriginalSize > 0) {
    console.log('\n📊 Directory Summary:');
    console.log(`   Total PNG size: ${(totalOriginalSize / 1024 / 1024).toFixed(2)}MB`);
    console.log(`   Total WebP size: ${(totalWebPSize / 1024 / 1024).toFixed(2)}MB`);
    console.log(`   Total savings: ${((1 - totalWebPSize / totalOriginalSize) * 100).toFixed(1)}%`);
  }
  
  return results;
}

async function generateImageManifest(results) {
  const manifest = {};
  
  for (const result of results) {
    const pngPath = result.original.replace(/^.*\/public\//, '/');
    
    if (!manifest[pngPath]) {
      manifest[pngPath] = {
        original: pngPath,
        webp: {},
        dimensions: result.dimensions || {},
        blurDataURL: null
      };
    }
    
    if (result.sizeName === 'original') {
      manifest[pngPath].webp.original = result.webp.replace(/^.*\/public\//, '/');
      // Store blur data URL from the original conversion
      if (result.blurDataURL) {
        manifest[pngPath].blurDataURL = result.blurDataURL;
      }
    } else if (result.width) {
      manifest[pngPath].webp[`${result.width}w`] = result.webp.replace(/^.*\/public\//, '/');
    }
  }
  
  const manifestPath = path.join(__dirname, '..', 'lib', 'image-manifest.json');
  await fs.writeFile(manifestPath, JSON.stringify(manifest, null, 2));
  
  console.log(`\n📝 Generated image manifest at: ${manifestPath}`);
  
  return manifest;
}

async function main() {
  console.log('🚀 Starting WebP conversion...\n');
  
  const publicDir = path.join(__dirname, '..', 'public');
  
  try {
    // Process all images in public directory
    const results = await processDirectory(publicDir);
    
    // Generate manifest file
    await generateImageManifest(results);
    
    console.log('\n✨ WebP conversion completed successfully!');
    console.log(`   Processed ${results.filter(r => r.sizeName === 'original').length} images`);
    console.log(`   Generated ${results.length} total files (including responsive sizes)`);
    
  } catch (error) {
    console.error('\n❌ Conversion failed:', error);
    process.exit(1);
  }
}

// Run the script
if (require.main === module) {
  main();
}

module.exports = { convertToWebP, generateResponsiveSizes };