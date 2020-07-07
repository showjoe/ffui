module.exports = {
  
  devServer: {
    overlay: {
      warnings: true,
      errors: true
    }
  },
  css: {
    sourceMap: true,
    extract: true,
    loaderOptions: {
      sass: {
        includePaths: ["./node_modules"],
      }
    }
  },
  pluginOptions: {
    moment: {
      locales: [
        'en','ja'
      ]
    },
    webpackBundleAnalyzer: {
      openAnalyzer: true
    },
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: true
    }
  }
}
