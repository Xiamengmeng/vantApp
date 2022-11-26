//可以在该组件中修改webopack 的默认配置
const {
	defineConfig
} = require('@vue/cli-service')
module.exports = defineConfig({
	transpileDependencies: true,
	lintOnSave: false, //修改webpack 的默认配置
	devServer: {
		port: 8088,
		proxy: { //代理
			'/api': {
				target: 'http://kumanxuan1.f3322.net:8001/', //使用本地服务器代理请求远程服务器
				ws: true,
				ChangeOrigin: true
			}
		}
	}
})
