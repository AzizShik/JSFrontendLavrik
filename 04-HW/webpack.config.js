let path = require('path');

let conf = {
	entry: './src/main.js',
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: 'main.js',
		publicPath: 'dist/'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: '/node_modules/'
			}
		]
	},
	devServer: {
		overlay: true,
		proxy: {
			'/js-hw-api/**': {
				target: 'http://faceprog.ru/',
				secure: false,
				changeOrigin: true
			}
		}
	}
};

module.exports = (env, argv) => {
	conf.devtool = (argv.mode === 'production') ? 'none' : 'eval-cheap-module-source-map';
	return conf;
}