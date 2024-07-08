module.exports = {
  pathPrefix: `/wordpress-snake-adventure`,
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
    siteUrl: `https://adminmodernformspl.mf-admin.pl/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `wordpress snake adventure`,
        short_name: `wordpress snake`,
        start_url: `/wordpress-snake-adventure`,
        background_color: `rgb(245, 222, 179)`,
        theme_color: `rgb(103, 100, 11)`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `standalone`,
        icon: `src/assets/images/snake-icon.png`, // This path is relative to the root of the site.
        cache_busting_mode: 'none',

        crossOrigin: `use-credentials`, // `use-credentials` or `anonymous`
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline

    `gatsby-plugin-offline`,
    //   {
    //     resolve: 'gatsby-plugin-offline',
    //     options: {
    //        workboxConfig: {
    //           globPatterns: ['src/assets/images']
    //        }
    //     }
    //  }

  ],
}
