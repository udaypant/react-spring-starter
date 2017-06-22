const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const devServer = {
    contentBase: path.join(__dirname, "target/dist"),
    compress: true,
    historyApiFallback: true,
    port: 9000,
    proxy: {
        "/api/*": "http://localhost:8080",
    }
};

const indexHtml = new HtmlWebpackPlugin({
    template: 'src/main/index.html',
    inject: 'body',
});

const extractSass = new ExtractTextPlugin('stylesheets/[name].css');

module.exports = {
    entry: './src/main/index.js',
    devtool: 'source-map',
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.(js|jsx)$/,
                use: {
                    loader: 'eslint-loader',
                    options: {
                        fix: true
                    }
                },
                exclude: /node_moduels/,
            },
            {test: /\.html$/, use: {loader: 'html-loader', options: {minimize: true}},},
            {
                test: /\.scss$/,
                use: extractSass.extract({
                    fallback: "style-loader",
                    publicPath: "../",
                    use: ['css-loader', 'sass-loader']
                })
            },
            {
                test: /\.(js|jsx)$/,
                use: {
                    loader: 'babel-loader', options: {
                        // plugins: ['istanbul'],
                        presets: ['es2015', 'react', 'stage-0'],
                    }
                }
            },
            { test: /\.eot(\?.*)?$/,   use: 'file-loader?prefix=fonts/&name=[path][name].[ext]' },
            { test: /\.otf(\?.*)?$/,   use: 'file-loader?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=font/opentype' },
            { test: /\.woff(\?.*)?$/,  use: 'url-loader?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=application/font-woff' },
            { test: /\.woff2(\?.*)?$/, use: 'url-loader?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=application/font-woff2' },
            { test: /\.ttf(\?.*)?$/,   use: 'url-loader?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=application/octet-stream' },
            { test: /\.svg(\?.*)?$/,   use: 'url-loader?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=image/svg+xml' },
            { test: /\.(png|jpg)$/,    use: 'url-loader?limit=8192' },
        ]
    },
    plugins: [
        extractSass,
        indexHtml,
    ],
    output: {
        filename: 'js/bundle.js',
        path: path.resolve(__dirname, '../target/dist')
    },
    devServer,
};
