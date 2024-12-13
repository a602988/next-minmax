import type { MetadataRoute } from 'next'
import { getWebData } from '@/services/getWebData';

export default async function manifest(): Promise<MetadataRoute.Manifest> {
  const data = await getWebData();
  return {
    name: (data.company_name as string | undefined) ?? '',
    short_name: (data.site_title as string | undefined) ?? '',
    description: (data.meta_description as string | undefined) ?? '',
    start_url: '/',
    display: 'standalone',
    background_color: '#fff',
    theme_color: '#fff',
    "icons": [
      {
        "src": "/favicon-16x16.png",
        "sizes": "16x16",
        "type": "image/png"
      },
      {
        "src": "/favicon-32x32.png",
        "sizes": "32x32",
        "type": "image/png"
      },
      {
        "src": "/favicon-96x96.png",
        "sizes": "96x96",
        "type": "image/png"
      },
      {
        "src": "/icon-192.png",
        "sizes": "192x192",
        "type": "image/png"
      },
      {
        "src": "/icon-512.png",
        "sizes": "512x512",
        "type": "image/png"
      }
    ]
  }
}