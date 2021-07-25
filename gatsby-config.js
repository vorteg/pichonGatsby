module.exports = {
  siteMetadata: {
    siteUrl: `https://pichonescorp.com`,
    title: 'Pichones Corp',
    titleTemplate: "%s · Desarrollo de software",
    author: 'Pichones',
    description: 'Desarrollo de Software en: Python, JS, CSS, Gatsby.js , React, Computer Vision, AI, Machin Learning',
    url: `https://pichonescorp.com`,
    image: "/images/logo.svg", // Path to your image you placed in the 'static' folder
    twitterUsername: "@PichonesCorp",
  },
  plugins: [
    `gatsby-plugin-sitemap`,
    'gatsby-plugin-react-helmet',    
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'pichon web',
        short_name: 'pichones',
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
