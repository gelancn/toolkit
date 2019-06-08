const path = require('path');

const rootPath = path.join(__dirname, '../');
const distPath = path.join(rootPath, './dist');

module.exports = {
    entry: {
        tookit: './src/index.ts',
    },

    output: {
        path: distPath,
        filename: '[name].js',
        // library: 'toolkit',
        // libraryTarget: 'umd',
    },

    resolve: {
        extensions: ['.js', '.ts', '.json'],
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: 'ts-loader',
                options: {
                    transpileOnly: true,
                },
            },
        ],
    },

    devtool: 'source-map',

    mode: 'development',

    performance: {
        hints: false,
    },

    plugins: [],
};
