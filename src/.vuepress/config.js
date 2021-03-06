const { description } = require('../../package')

module.exports = {  
  title: 'HOME',   
  description: description, 
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Web',
        link: '/web/',
      },
      {
        text: 'Facebook',
        link: 'https://www.facebook.com/',
      },
      {
        text: 'Youtube',
        link: 'https://www.youtube.com/',
      },
      {   
        text: 'SadMiss',
        link: 'https://bonhansaudoi.github.io/sadmiss/myMiss.html'
      },
    ],
    sidebar: {
      // '/guide/': [
      //   {
      //     title: 'Guide',
      //     collapsable: false,
      //     children: [
      //       '',
      //       'using-vue',
      //     ]
      //   }
      // ],
    }
  }, 
  plugins: [
    '@vuepress/plugin-back-to-top',
    // '@vuepress/plugin-medium-zoom',
  ]
}
