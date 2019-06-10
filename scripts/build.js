'use strict';
const del = require('del');
const child_process = require('child_process');

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
    await new Promise((resolve, reject) => {
        child_process.exec('tsc -p tsconfig.json', (err, info) => {
            if (err) {
                reject(err);
            }
            resolve();
            console.log(info);
        });
    });
    await new Promise((resolve, reject) => {
        child_process.exec(
            'prettier --write "**/*.{ts,js,css,json,md}"',
            (err, info) => {
                if (err) {
                    reject(err);
                }
                resolve();
                console.log(info);
            },
        );
    });
}

build();
