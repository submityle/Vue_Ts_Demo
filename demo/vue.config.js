const { defineConfig } = require('@vue/cli-service')
const { VantResolver } = require('unplugin-vue-components/resolvers')
const ComponentsPlugin = require('unplugin-vue-components/webpack')
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      ComponentsPlugin({
        resolvers: [VantResolver()]
      })
    ]
  },
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://localhost:9000',
        pathRewrite: { '^/api': 'http://localhost:9000' }
      }
    }
  }
})
