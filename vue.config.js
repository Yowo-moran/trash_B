const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
 devServer:{
    proxy:{
      '/':{
        ws: false,
        target:"http://114.115.240.135:38091",
        changeOrigin:true
      }
    }
  }
})
