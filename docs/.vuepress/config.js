module.exports = {
  base: '/ffui/',
  title: 'Form Factory Component Library',
  description: 'Vue.js Components using bootstrap 4 styling for use in form factory projects.',
  plugins: [
    ['demo-code', {
      minHeight: 200,
      onlineBtns: {
        codepen: false,
        jsfiddle: false,
        codesandbox: false,
      },
    }]
  ],
  themeConfig: {
    repo: 'showjoe/ffui',
    docsDir: 'docs',
    sidebar: [{
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
          'components/modal',
          'components/navs',
          'components/number',
          'components/row_and_column',
          'components/progress-bar',
          'components/slider',
          'components/tabs',
          'components/textbox',
          'components/typeahead',
          'components/font-awesome'
        ]
      }
    ]
  },
  markdown: {
    lineNumbers: true
  },
  extendMarkdown: md => {
    // use more markdown-it plugins!
  }
}