module.exports = {
  base: '/ffui/',
  title: 'Form Factory Component Library',
  description: 'Vue.js Components using bootstrap 4 styling for use in form factory projects.',
  head: [
    ['link', { rel: "apple-touch-icon", sizes: "180x180", href: "/assets/favicons/apple-touch-icon.png" }],
    ['link', { rel: "icon", type: "image/png", sizes: "32x32", href: "/assets/favicons/favicon-32x32.png" }],
    ['link', { rel: "icon", type: "image/png", sizes: "16x16", href: "/assets/favicons/favicon-16x16.png" }],
    ['link', { rel: "manifest", href: "/assets/favicons/site.webmanifest" }],
    ['link', { rel: "mask-icon", href: "/assets/favicons/favicon.ico", color:"#5bbad5" }],
    ['link', { rel: "shortcut icon", href: "/assets/favicon/safari-pinned-tab.svg", color:"#5bbad5" }],
    ['meta', { name: "msapplication-TileColor", content: "#da532c" }],
    ['meta', { name: "msapplication-config", content: "/assets/favicons/browserconfig.xml" }],
    ['meta', { name: "theme-color", content: "#ffffff" }]
  ],
  plugins: [
    require('./components/plugin-demo-code/index.js'),
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ],
  themeConfig: {
    repo: 'showjoe/ffui',
    docsDir: 'docs',
    docsRepo: 'showjoe/ffui/',
    docsBranch: 'gh-pages',
    editLinks: true,
    sidebar: [{
        title: 'Introduction',
        collapsable: false,
        children: [
          'introduction/guide',
          'introduction/i18n',
        ]
      }, {
        title: 'Layout',
        collapsable: false,
        children: [
          'layout/overview',
          'layout/grid',
        ]
      }, {
        title: 'Content',
        collapsable: false,
        children: [
          'content/typography',
          'content/code',
          'content/images',
          'content/tables',
          'content/figures',
        ]
      },
      {
        title: 'Components',
        collapsable: false,
        sidebarDepth: 2,
        children: [
          'components/alert',
          'components/badge',
          {
            title: 'Buttons',
            path: '/components/btn',
            collapsable: true,
            children: ['components/btn', 'components/btn-group']
          },
          {
            title: 'Cards',
            path: '/components/card',
            collapsable: true,
            children: ['components/card', 'components/card-group']
          },
          'components/checkbox',
          'components/collapse',
          'components/datepicker',
          'components/dropdown',
          'components/font-awesome',
          {
            title: 'Forms',
            collapsable: true,
            path: '/components/forms',
            children: ['/components/forms', 'components/form-group']
          },
          'components/input-group',
          {
            title: 'Lists',
            path: '/components/list-group',
            collapsable: true,
            children: ['components/list-group', 'components/list-group-item']
          },
          'components/media',
          'components/modal',
          'components/modal-guide',
          'components/navs',
          'components/number',
          'components/popover',
          'components/progress-bar',
          'components/radio',
          'components/row_and_column',
          'components/slider',
          'components/tabs',
          'components/textbox',
          'components/tooltip',
          'components/typeahead'

        ]
      }, {
        title: 'Directives',
        collapsable: false,
        children: [
          'directives/mask',
          'directives/popover',
          'directives/tooltip'
        ]
      }, {
        title: 'Utilities',
        collapsable: false,
        children: [
          'utilities/borders',
          'utilities/colors',
          'utilities/display',
          'utilities/embed',
          'utilities/flex',
          'utilities/float',
          'utilities/image-replacement',
          'utilities/interactions',
          'utilities/overflow',
          'utilities/position',
          'utilities/screen-readers',
          'utilities/shadows',
          'utilities/sizing',
          'utilities/spacing',
          'utilities/stretched-link',
          'utilities/text',
          'utilities/vertical-align',
          'utilities/visibility',

        ]
      }
    ]
  },
  markdown: {
    lineNumbers: true
  },
  extendMarkdown: md => {
    md.use(require('@toycode/markdown-it-class'), { table: 'table-responsive' })
    // use more markdown-it plugins!
  }
}