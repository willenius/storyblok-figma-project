export default function robots() {
    const baseUrl = 'https://storyblok-figma-project.vercel.app'
    return {
      rules: {
        userAgent: '*',
        allow: '/',
        disallow: '/global/',
      },
      sitemap: `${baseUrl}sitemap.xml`,
    }
  }