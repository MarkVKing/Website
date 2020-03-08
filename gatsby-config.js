module.exports = {
  siteMetadata: {
    title: 'Mark V. King website',
    titleTemplate: `A website to showcase the book Mark wrote.`,
    author: 'Dillon Simeone',
    description: 'A website to showcase the book Mark wrote.',
  },
  plugins: [
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
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        // your wordpress source //
        baseUrl: `markvkingwebsite.wordpress.com`,
        //Old website: ittakesjustoneblog.wordpress.com/
        protocol: `https`,
        // is it hosted on wordpress.com, or self-hosted?
        hostingWPCOM: true,
        // does your site use the Advanced Custom Fields Plugin?
        useACF: false,
        // auth: {
        //   htaccess_user: process.env.WP_USER,
        //   htaccess_pass: process.env.WP_PASS,
        //   htaccess_sendImmediately: false,
        // },
        excludedRoutes: [],
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'disqus-react',
  ],
}
