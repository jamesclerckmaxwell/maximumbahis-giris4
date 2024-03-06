/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://maximumbahis-giris.vercel.app",
  generateRobotsTxt: true,
  sitemapSize: 7000,
  async generateSitemap({ sitemap, post }) {
    sitemap.add(
      {
        url: `/uyelik`,
        lastmod: new Date(post.modified),
      },
      {
        url: "/maximumbahis-iletisim",
        lastmod: new Date(post.modified),
      },
      {
        url: "/maximumbahis-yorumlari",
        lastmod: new Date(post.modified),
      },
      {
        url: "/maximumbahis-yatirim-bonuslari",
        lastmod: new Date(post.modified),
      },
      {
        url: "/maximumbahis-bonuslari",
        lastmod: new Date(post.modified),
      },
      {
        url: "/maximumbahis-canli-destek",
        lastmod: new Date(post.modified),
      },
      {
        url: "/maximumbahis-casino",
        lastmod: new Date(post.modified),
      },
      {
        url: "/maximumbahis-hesap-silme",
        lastmod: new Date(post.modified),
      },
      {
        url: "/maximumbahis-kayip-bonuslari",
        lastmod: new Date(post.modified),
      },
      {
        url: "/maximumbahis-para-cekme",
        lastmod: new Date(post.modified),
      },
      {
        url: "/maximumbahis-para-yatirma",
        lastmod: new Date(post.modified),
      },
      {
        url: "/maximumbahis-uygulama",
        lastmod: new Date(post.modified),
      }
    );
  },
};
