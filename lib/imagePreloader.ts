/**
 * Helper utility to preload images programmatically in the browser.
 * Ensures the premium portrait or any other assets are loaded and cached in memory.
 */
export function preloadImage(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    if (typeof window === 'undefined') {
      reject(new Error('Preloading only works in the browser'));
      return;
    }

    const img = new Image();
    img.src = src;
    img.onload = () => resolve(img);
    img.onerror = (err) => reject(err);
  });
}
