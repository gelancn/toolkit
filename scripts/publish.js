"use strict";
const del = require("del");
const child_process = require("child_process");

async function publish() {
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
        {
            command: `npm publish`,
            cwd: `dist`,
        },
    ];
    for (let i = 0; i < cmdList.length; i += 1) {
        const cmd = cmdList[i];
        await new Promise((resolve, reject) => {
            console.log(i, cmd);
            child_process.exec(cmd.command, { cwd: cmd.cwd }, (err, info) => {
                if (err) {
                    reject(err);
                }
                resolve();
                console.log(info);
            });
        });
    }
}

publish();
