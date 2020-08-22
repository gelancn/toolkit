"use strict";
const del = require("del");
const child_process = require("child_process");

async function build() {
    await del("./dist!package.json");
    const cmdList = [
        {
            command: `eslint src/**`,
        },
        {
            command: `tsc -p tsconfig.json`,
        },
        {
            command: `prettier --write "src/**/*.{ts,js,css,json,md}"`,
        },
    ];
    for (let i = 0; i < cmdList.length; i += 1) {
        const cmd = cmdList[i];
        await new Promise((resolve, reject) => {
            child_process.exec(cmd.command, { cwd: cmd.cwd }, (err, info) => {
                if (err) {
                    reject(err);
                }
                resolve();
                console.log(i, cmd);
                console.log(info);
            });
        });
    }
}

build();
