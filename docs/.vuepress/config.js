module.exports = {
  base: '/ffui/',
  title: 'Form Factory Component Library',
  description: 'Vue.js Components using bootstrap 4 styling for use in form factory projects.',
  plugins:[
    require('jquery'),require('moment'),
  ],
  head: [
    ['script', { src: `http://code.jquery.com/jquery-3.3.1.min.js` }],
    ['link', { rel: 'icon', href: '/node_modules/tempusdominus-bootstrap-4/build/css/tempusdominus-bootstrap-4.min.css' }]
  ],
  themeConfig: {
    repo: 'showjoe/ffui',
    docsDir: 'docs',
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
          'components/alert',
          'components/btn',
          'components/btn-group',
          'components/card',
          'components/checkbox',
          'components/collapse',
          'components/datepicker',
          'components/dropdown',
          'components/form-group',
          'components/input-group',
          'components/list-group',
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