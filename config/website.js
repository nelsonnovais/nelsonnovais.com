const tailwind = require('../tailwind')

module.exports = {
  pathPrefix: "/", // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: "NelsonNovais", // Navigation and Site Title
  siteTitleAlt: "NelsonNovais", // Alternative Site title for SEO
  siteTitleShort: "Nelson", // short_name for manifest
  siteHeadline: "IT Consulting", // Headline for schema.org JSONLD
  siteUrl: "https://nelsonnovais.com", // Domain of your site. No trailing slash!
  siteLanguage: "en", // Language Tag on <html> element
  siteLogo: "/logo.png", // Used for SEO and manifest
  siteDescription: "Playful & Colorful One-Page website with Parallax effect",
  author: "Nelson Novais", // Author for schema.org JSONLD

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: "@delpi10", // Twitter Username
  ogSiteName: "nelsonnovais", // Facebook Site Name
  ogLanguage: "en_US", // Facebook Language
  googleAnalyticsID: "UA-144718905-1",

  // Manifest and Progress color
  themeColor: tailwind.colors.orange,
  backgroundColor: tailwind.colors.blue
};
