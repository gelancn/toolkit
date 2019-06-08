'use strict';
const path = require('path');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config');

const rootPath = path.join(__dirname, '../');
webpackConfig.entry = {
    test: './test/test.ts',
};
webpackConfig.output.path = path.join(rootPath, './test');

async function test() {
    await new Promise((resolve, reject) => {
        webpack(webpackConfig, function(err, stats) {
            if (err) {
                throw err;
            }
            process.stdout.write(
                stats.toString({
                    colors: false,
                    modules: false,
                    children: false,
                    chunks: false,
                    chunkModules: false,
                }) + '\n\n',
            );

            if (stats.hasErrors()) {
                console.log('  webpack打包失败\n');
                process.exit(1);
            }

            console.log('  webpack打包完成\n');
            resolve();
        });
    });
}

test();
