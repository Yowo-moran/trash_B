const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/': {
        ws: false,
        target: "https://rmb.sipcoj.com",
        changeOrigin: true
      }
    }
  }
})
