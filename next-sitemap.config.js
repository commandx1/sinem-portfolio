const pages = ['/', '/hakkimda', '/blog-yazilari', '/uzmanliklar', '/iletisim'];

module.exports = {
    siteUrl: 'https://sinemodalibelen.com',
    generateRobotsTxt: true,
    generateIndexSitemap: true,
    transform: async (_, path) => {
        return {
            loc: path,
            changefreq: 'weekly',
            priority: 0.7,
            lastmod: new Date().toISOString(),
            alternateRefs: []
        };
    },
    additionalPaths: async () => {
        return pages.map(page => ({
            loc: page,
            lastmod: new Date().toISOString()
        }));
    }
};
