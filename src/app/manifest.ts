import type { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'FolioForge',
    short_name: 'FolioForge',
    description: 'Showcase your projects, skills, and experience with FolioForge.',
    start_url: '/',
    display: 'standalone',
    background_color: '#F0E6EF', // Very light lavender
    theme_color: '#4B0082', // Deep Indigo
    icons: [
      {
        src: '/icon-192x192.png', // Placeholder, ensure you add this icon
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512x512.png', // Placeholder, ensure you add this icon
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
