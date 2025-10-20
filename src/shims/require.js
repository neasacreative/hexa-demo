// Global require shim for Vite
// Handles dynamic image imports that use require()

// Use Vite's glob import to eagerly load all static assets
const imageModules = import.meta.glob('/src/static/img/**/*.{png,jpg,jpeg,svg,gif,webp,ico}', { 
  eager: true,
  import: 'default'
});

// Debug: Log loaded images on first load
if (import.meta.env.DEV) {
  console.log('[Require Shim] 🖼️  Loaded', Object.keys(imageModules).length, 'images');
  // Log first few for debugging
  const sampleKeys = Object.keys(imageModules).slice(0, 5);
  console.log('[Require Shim] Sample paths:', sampleKeys);
  console.log('[Require Shim] Sample URLs:', sampleKeys.map(k => imageModules[k]));
  
  // Check if Logo_Dark.svg is in the map
  const logoKeys = Object.keys(imageModules).filter(k => k.includes('Logo_Dark'));
  console.log('[Require Shim] Logo_Dark paths found:', logoKeys);
  if (logoKeys.length > 0) {
    console.log('[Require Shim] Logo_Dark URL:', imageModules[logoKeys[0]]);
  }
}

window.require = (path) => {
  const originalPath = path;
  
  // Handle @/ alias
  if (path.startsWith('@/')) {
    path = path.replace('@/', '/src/');
  }
  
  // Handle relative paths (../ or ./)
  // These are relative to the file calling require, but we need absolute paths
  if (path.startsWith('../') || path.startsWith('./')) {
    // Remove all ../ and ./ prefixes and prepend /src/
    // e.g., '../../static/img/icon/arrow-left.svg' -> '/src/static/img/icon/arrow-left.svg'
    path = '/src/' + path.replace(/^(\.\.\/)+/, '').replace(/^\.\//, '');
  }
  
  // Handle paths that don't start with / but should (from JSON data)
  // e.g., "static/img/chat-author/t1.jpg" -> "/src/static/img/chat-author/t1.jpg"
  if (!path.startsWith('/') && path.includes('static/img')) {
    path = '/src/' + path;
  }
  
  // Normalize path: remove any remaining ../ segments
  // e.g., '/src/../static/img/...' -> '/src/static/img/...'
  path = path.replace(/\/[^\/]+\/\.\.\//g, '/').replace(/\/\.\//g, '/');
  
  // For static assets (images, fonts, etc.), look up in the glob import map
  if (path.match(/\.(png|jpe?g|gif|svg|webp|ico)$/i)) {
    // Try to find the asset in our glob imports
    const asset = imageModules[path];
    if (asset) {
      // Uncomment for debugging:
      // if (import.meta.env.DEV) {
      //   console.log('[Require Shim] ✓ Found:', originalPath, '->', asset);
      // }
      return asset;
    }
    
    // If not found, try with different extensions
    const basePath = path.replace(/\.[^.]+$/, '');
    const extensions = ['.png', '.jpg', '.jpeg', '.svg', '.gif', '.webp'];
    for (const ext of extensions) {
      const tryPath = basePath + ext;
      if (imageModules[tryPath]) {
        // Uncomment for debugging:
        // if (import.meta.env.DEV) {
        //   console.log('[Require Shim] ✓ Found with alt ext:', originalPath, '->', imageModules[tryPath]);
        // }
        return imageModules[tryPath];
      }
    }
    
    // Fallback: return the path as-is (Vite will handle it)
    console.warn(`[Require Shim] ✗ Asset not found: ${originalPath} (resolved to: ${path})`);
    console.warn(`[Require Shim] Available keys sample:`, Object.keys(imageModules).slice(0, 5));
    return path;
  }
  
  // For non-asset files, return the path for Vite's import system
  return path;
};

export default window.require;