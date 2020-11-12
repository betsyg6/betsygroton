module.exports = {
  author: "@betsyg6",
  siteTitle: "Betsy Groton",
  siteShortTitle: "BG", // Used as logo text in header, footer, and splash screen
  siteDescription: "Betsy Groton's Software Engineering Portfolio.",
  siteUrl: "http://www.betsygroton.com/", //not sure yet
  image: "content/portfolio.png",
  siteLanguage: "en_US",
  siteIcon: "content/favicon.png", // Relative to gatsby-config file
  seoTitleSuffix: "Portfolio", // SEO title syntax will be e.g. "Imprint - {seoTitleSuffix}"

  splashScreen: false, // Set this to true if you want to use the splash screen

  // You can create your own Medium feed with this rss to json converter: https://rss2json.com/
  // To access your Medium RSS feed, just replace this url with your username: https://medium.com/feed/@{yourname}
  mediumRssFeed:
    "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40grotoned",
  shownArticles: 1,

  socialMedia: [
    {
      name: "Linkedin",
      url: "https://www.linkedin.com/in/elizabethgroton/",
    },
    {
      name: "Github",
      url: "https://github.com/betsyg6",
    },
    {
      name: "Medium",
      url: "https://grotoned.medium.com/",
    },
  ],

  navLinks: {
    menu: [
      {
        name: "About Me",
        url: "/#about",
      },
      {
        name: "Projects",
        url: "/#projects",
      },
      {
        name: "Articles",
        url: "/#articles",
      },
    ],

    button: {
      name: "Contact",
      url: "/#contact",
    },
  },

  footerLinks: [
    {
      name: "Privacy",
      url: "/privacy",
    },
    {
      name: "Imprint",
      url: "/imprint",
    },
  ],
}
