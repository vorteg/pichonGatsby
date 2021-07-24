module.exports = {
  siteMetadata: {
    title: 'Pichones Corp',
    author: 'Pichones',
    description: 'Desarrollo de Software en: Python, JS, CSS, Gatsby.js , React, Computer Vision, AI, Machin Learning',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
  ],
}
