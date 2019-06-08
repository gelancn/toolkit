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
    await child_process.execSync('tsc -p tsconfig.json');
}

build();
