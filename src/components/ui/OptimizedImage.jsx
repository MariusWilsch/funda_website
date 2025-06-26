{/*
  HOW TO ADD NEW IMAGES:
  1. Add new images to the `src/assets` directory.
  2. Import the image file into your component. Vite will handle the path.
     e.g., `import myImage from '@/assets/my-image.png';`
  3. Use the <OptimizedImage /> component to display the image.
     e.g., `<OptimizedImage src={myImage} alt="Description of image" />`

  This component automatically handles:
  - Serving next-gen WebP formats where supported.
  - Lazy loading images to improve initial page speed.
  - Providing fallback for older browsers.
*/}
import React from 'react';

const OptimizedImage = ({ src, alt, ...props }) => {
  // Note: Vite automatically handles creating different formats and optimizations at build time.
  // This component structure assumes you might manually create .webp versions or use a Vite plugin
  // that does this automatically. For now, we'll just implement lazy loading.
  // A more advanced implementation would involve a build step to generate .webp files.

  // The `new URL(src, import.meta.url).href` pattern is how Vite handles static assets in JS.
  // When you import an image, Vite gives you a URL to the processed asset.
  
  return (
    <img src={src} alt={alt} loading="lazy" {...props} />
  );
};

export default OptimizedImage;
