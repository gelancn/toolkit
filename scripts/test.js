const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const devServer = {
    historyApiFallback: true,
    hot: true,
    host: "localhost",
    port: 8080,
    open: false,
    overlay: {
        warnings: false,
        errors: true,
    },
    publicPath: '/',
    quiet: true,
    watchOptions: {
        poll: false,
    },
    disableHostCheck: true,
};

const webpackConfig = {
    entry: {
        index: './test/test.ts',
    },
    resolve: {
        extensions: ['.js', '.ts', '.json', '.html', '.css'],
    },
    module: {
        rules: [
            {
                test: /\.ts?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    devtool: 'source-map',
    performance: {
        hints: false,
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: './test/index.html',
        }),
    ],
    devServer,
};

module.exports = webpackConfig;
