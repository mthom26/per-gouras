/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

require("dotenv").config();

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Per Gouras',
        short_name: 'Per Gouras',
        start_url: '/',
        background_color: '#f7f0eb',
        theme_color: '#a2466c',
        display: 'standalone',
        icon: 'src/assets/images/icon.svg'
      }
    }
  ]
};
