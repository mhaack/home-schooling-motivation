require('dotenv').config({
  path: `.env.${process.env.NODE_ENV || 'development'}`
})

const clientConfig = require('./client-config')
const token = process.env.SANITY_READ_TOKEN

const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  siteMetadata: {
    title: `Home Schooling is cool!`,
    author: {
      name: `Markus Haack`,
      summary: `...`
    },
    description: `...`,
    siteUrl: `https://home-schooling-motivation.netlify.app/`,
    social: {
      twitter: `mhaack`
    }
  },
  plugins: [
    {
      resolve: 'gatsby-source-sanity',
      options: {
        ...clientConfig.sanity,
        token,
        watchMode: !isProd,
        overlayDrafts: !isProd && token
      }
    },
    'gatsby-plugin-postcss',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: `Home Schooling is cool!`,
        short_name: `HS is cool!`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: 'src/images/icon.png'
      }
    }
  ]
}
