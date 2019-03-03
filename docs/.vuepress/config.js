module.exports = {
  base: '/ffui/',
  title: 'Form Factory Component Library',
  description: 'Vue.js Components using bootstrap 4 styling for use in form factory projects.',
  themeConfig: {
    nav: [
      { text: 'Home', link: 'introduction/guide' },
      { text: 'Github', link: 'http://www.github.com' },
    ],
    sidebar: [
      {
        title: 'Introduction',
        collapsable: false,
        children: [
          'introduction/guide'
        ]
      },
      {
        title: 'Components',
        collapsable: false,
        children: [
          'components/btn',
          'components/btn-group',
          'components/card',
          'components/form-group',
          'components/input-group',
          'components/number',
          'components/row_and_column',
          'components/progress-bar',
          'components/textbox'
        ]
      }
    ]
  },
  markdown: {
    lineNumbers: true
  },
  extendMarkdown: md => {
    // use more markdown-it plugins!
    md.use(require('markdown-it-vuepress-code-snippet-enhanced'))
  }
}