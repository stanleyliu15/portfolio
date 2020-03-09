const config = require("./src/config")

module.exports = {
  siteMetadata: {
    author: config.author,
    title: config.title,
    description: config.description,
    url: config.url,
    twitter: config.twitter,
    ogLanguage: config.ogLanguage,
    image: config.image,
    imageWidth: config.imageWidth,
    imageHeight: config.imageHeight,
    language: config.language,
    keywords: config.keywords,
  },
  plugins: [
    // The order of plugins matter!
    //
    // https://theleakycauldronblog.com/blog/problems-with-gatsby-image-and-their-workarounds/
    // The ’gatsby-source-filesystem’ media folder must be included before the other plugins,
    // especially Netlfiy CMS...Not only that, it’ll be best if you include
    // ’gatsby-transformer-sharp’ ’gatsby-plugin-sharp’ and ’gatsby-transformer-remark’
    //  before any other plugin in gatsby-config.js.
    // Not doing this might lead to the following error:
    // Field "image" must not have a selection since type "String" has no subfields
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-transformer-remark",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "content",
        path: `${__dirname}/src/content`,
      },
    },
    {
      resolve: "gatsby-plugin-eslint",
      options: {
        test: /\.js$|\.jsx$/,
        exclude: /(node_modules|.cache|public)/,
        stages: ["develop"],
        options: {
          emitWarning: true,
          failOnError: false,
        },
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-styled-components",
    {
      // This plugin allows users to add your site to their home screen on most mobile browsers
      resolve: "gatsby-plugin-manifest",
      options: {
        display: "minimal-ui",
        start_url: "/",
        name: config.title,
        short_name: config.titleAlt,
        lang: config.language,
        description: config.description,
        background_color: config.backgroundColor,
        theme_color: config.themeColor,
        icon: config.favicon,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    "gatsby-plugin-offline",
  ],
}
