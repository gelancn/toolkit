'use strict';
const del = require('del');
const child_process = require('child_process');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config');

async function build() {
    await del('./dist');
    await new Promise((resolve, reject) => {
        child_process.exec(
            'tslint --project tsconfig.json --config tslint.json ./**/*.ts',
            (err, info) => {
                if (err) {
                    reject(err);
                }
                resolve();
                console.log(info);
            },
        );
    });
    await child_process.execSync('tsc -p tsconfig.json');
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

build();
