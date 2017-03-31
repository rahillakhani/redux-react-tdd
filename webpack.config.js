const path = require('path');

const output = path.resolve(__dirname, 'public');
const dev = path.resolve(__dirname, 'app');
// const server = path.resolve(__dirname, 'server');
console.log(output);
const clientConfig = {
	target: 'web',
	entry: `${dev}/index.js`,
	output: {
		path: output,
		filename: 'js/bundle.js',
	},
	resolve: {
		extensions: ['', '.js', '.jsx'],
	},
	module: {
		loaders: [{
			test: /\.jsx?$/,
			exclude: 'node_modules',
			include: dev,
			loader: 'babel',
		}],
	},
};

module.exports = [clientConfig];

