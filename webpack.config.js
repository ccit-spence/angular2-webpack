var LiveReloadPlugin = require('webpack-livereload-plugin');
var webpack = require('webpack');


var config = {
    resolve: {
        extensions: ['', '.scss', '.ts', '.js']
    },

    context: __dirname + '/src/app',
    entry: {
        app: './app.ts',
        vendor: ['zone.js', 'reflect-metadata', 'angular2/angular2']
    },
    output: {
        path: __dirname + "/dist",
        publicPath: 'dist/',
        filename: "bundle.js"
    },

    plugins: [
        new LiveReloadPlugin(),
        new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"vendor.bundle.js")
    ],

    devtool: 'source-map',

    module: {
        loaders: [

            {test: /\.ts$/, loader: 'ts'},
            {test: /\.html$/, loader: 'html'},
            {test: /\.css$/, loader: 'raw'},
            {test: /\.scss$/, loader: 'raw!sass'},

        ]
    },
    devServer: {
        historyApiFallback: true,
        hot: false
    }
};

if(process.env.NODE_ENV === 'production') {
    config.output.path = __dirname + '/dist';
}

module.exports = config;
