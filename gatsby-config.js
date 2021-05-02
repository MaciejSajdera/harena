module.exports = {
  siteMetadata: {
    title: `Harena`,
    description: `Harena - meble na zamówienie`,
    author: `@gatsbyjs`,
    siteURL: "http://harenaartis.com",
    keywords: [
      `harena`,
      `meble`,
      `custom`,
      `meble designerskie`,
      `harena.com`,
      `handmade`,
      `ręcznie wykonane`,
    ],
  },
  plugins: [
    `gatsby-plugin-glamor`,
    `gatsby-plugin-smoothscroll`,
    {
      resolve: `gatsby-plugin-transition-link`,
    },
    `gatsby-plugin-root-import`,
    `gatsby-plugin-sass`,
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Montserrat"],
        },
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/layout.js`),
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Harena`,
        short_name: `Harena`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/images/harena-logo-dark.png`, // This path is relative to the root of the site.
      },
    },
    "gatsby-plugin-offline",
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-datocms`,
      options: {
        // You can find your read-only API token under the Settings > API tokens
        // section of your administrative area:
        apiToken: `c8e2caa8eb0e979c797dd1a98094de`,
        // If you are working on development/staging environment, you might want to
        // preview the latest version of records instead of the published one:
        previewMode: false,

        // Disable automatic reloading of content when some change occurs on DatoCMS:
        disableLiveReload: false,

        // Custom API base URL (most don't need this)
        // apiUrl: 'https://site-api.datocms.com',

        // Setup locale fallbacks
        // In this example, if some field value is missing in Italian, fall back to English
        // localeFallbacks: {
        //   it: ['en'],
        // },
      },
    },
  ],
}
