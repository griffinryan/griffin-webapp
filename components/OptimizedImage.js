import { useState, useEffect } from 'react';
import NextImage from 'next/image';
import imageManifest from '../lib/image-manifest.json';

const OptimizedImage = ({ 
  src, 
  alt, 
  className, 
  priority = false,
  sizes = '(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw',
  style,
  fill,
  width,
  height,
  placeholder = 'blur',
  blurDataURL,
  loading,
  onLoad,
  ...props 
}) => {
  const [imgSrc, setImgSrc] = useState(src);
  const [supportsWebP, setSupportsWebP] = useState(true);
  
  // Check WebP support on mount
  useEffect(() => {
    const checkWebPSupport = async () => {
      const webP = new window.Image();
      webP.onload = webP.onerror = () => {
        setSupportsWebP(webP.height === 2);
      };
      webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
    };
    
    checkWebPSupport();
  }, []);
  
  // Get optimized image sources from manifest
  const getOptimizedSrc = () => {
    // If src is already a WebP, use it directly
    if (src.endsWith('.webp')) {
      return {
        src: src,
        srcSet: null
      };
    }
    
    // Check if we have WebP versions in the manifest
    const manifestEntry = imageManifest[src];
    
    if (!manifestEntry || !supportsWebP) {
      return {
        src: src,
        srcSet: null
      };
    }
    
    // Use WebP version if available
    const webpSrc = manifestEntry.webp?.original || src;
    
    // Build srcSet for responsive images
    let srcSet = null;
    if (manifestEntry.webp) {
      const srcSetParts = [];
      
      // Add responsive sizes
      ['320w', '640w', '1280w'].forEach(size => {
        if (manifestEntry.webp[size]) {
          srcSetParts.push(`${manifestEntry.webp[size]} ${size}`);
        }
      });
      
      // Add original as fallback
      if (manifestEntry.webp.original && manifestEntry.dimensions?.width) {
        srcSetParts.push(`${manifestEntry.webp.original} ${manifestEntry.dimensions.width}w`);
      }
      
      srcSet = srcSetParts.length > 0 ? srcSetParts.join(', ') : null;
    }
    
    return {
      src: webpSrc,
      srcSet
    };
  };
  
  const { src: optimizedSrc, srcSet } = getOptimizedSrc();
  
  // Handle image loading errors (fallback to PNG)
  const handleError = () => {
    if (imgSrc !== src) {
      console.warn(`WebP failed to load, falling back to PNG: ${src}`);
      setImgSrc(src);
    }
  };
  
  // For fill mode
  if (fill) {
    return (
      <NextImage
        src={imgSrc}
        alt={alt}
        className={className}
        fill
        sizes={sizes}
        priority={priority}
        placeholder={placeholder}
        blurDataURL={blurDataURL}
        style={style}
        onError={handleError}
        onLoad={onLoad}
        {...props}
      />
    );
  }
  
  // For fixed dimensions
  return (
    <NextImage
      src={imgSrc}
      alt={alt}
      width={width}
      height={height}
      className={className}
      sizes={sizes}
      priority={priority}
      placeholder={placeholder}
      blurDataURL={blurDataURL}
      loading={loading}
      style={style}
      onError={handleError}
      onLoad={onLoad}
      {...(srcSet && { srcSet })}
      {...props}
    />
  );
};

// Picture element version for maximum compatibility
export const OptimizedPicture = ({ 
  src, 
  alt, 
  className, 
  sizes,
  loading = 'lazy',
  style,
  ...props 
}) => {
  const manifestEntry = imageManifest[src];
  
  if (!manifestEntry) {
    return <img src={src} alt={alt} className={className} loading={loading} style={style} {...props} />;
  }
  
  return (
    <picture>
      {/* WebP sources */}
      {manifestEntry.webp && (
        <>
          {/* Responsive WebP sources */}
          {manifestEntry.webp['320w'] && (
            <source
              type="image/webp"
              media="(max-width: 640px)"
              srcSet={manifestEntry.webp['320w']}
            />
          )}
          {manifestEntry.webp['640w'] && (
            <source
              type="image/webp"
              media="(max-width: 1280px)"
              srcSet={manifestEntry.webp['640w']}
            />
          )}
          {/* Default WebP source */}
          <source
            type="image/webp"
            srcSet={manifestEntry.webp.original}
          />
        </>
      )}
      
      {/* PNG fallback */}
      <img
        src={src}
        alt={alt}
        className={className}
        loading={loading}
        style={style}
        {...props}
      />
    </picture>
  );
};

export default OptimizedImage;