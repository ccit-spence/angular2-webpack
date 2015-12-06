var LiveReloadPlugin = require('webpack-livereload-plugin');
var webpack = require('webpack');

module.exports = {
    resolve: {
        extensions: ['', '.scss', '.ts', '.js']
    },

    plugins: [
        new LiveReloadPlugin()
    ],

    entry: './src/app/app.ts',
    output: {
        path: "./dist",
        publicPath: 'dist/',
        filename: "bundle.js"
    },

    devtool: 'source-map',

    module: {
        loaders: [
            {
                test: /\.ts$/,
                loader: 'ts-loader'
            },
            {
                test: /\.css$/,
                loader: 'style-loader'
            },
            {
                test: /\.scss$/,
                loaders: ["style", "css", "sass"]
            }
        ]
    },

    devServer: {
        historyApiFallback: true,
        hot: false
    }
};
