const packageJson = require("../package.json");
const distJson = require("../dist/package.json");
const process = require("process");
const readline = require("readline");
const fs = require("fs");

async function version() {
    const ver = await new Promise((resolve, reject) => {
        let version = packageJson.version || "0.0.0";
        const confirm = (value) => {
            const rl3 = readline.createInterface({
                input: process.stdin,
                output: process.stdout,
            });
            rl3.question(`version is: ${value}, are you sure? yes/no \n`, (answer3) => {
                rl3.close();
                switch(answer3) {
                    case "yes":
                        version = value;
                        resolve(version);
                        break;
                    case "no":
                        ask();
                        break;
                    default:
                        ask();
                }
            });
        };
        const ask = () => {
            const rl = readline.createInterface({
                input: process.stdin,
                output: process.stdout,
            });
            rl.question(`(1)upgrade 1 version / (2)input version / (3)no upgrade \n`, (answer) => {
                rl.close();
                switch(answer) {
                    case "1":
                        const verSplits = version.split(".");
                        verSplits[2] = (parseFloat(verSplits[2]) + 1) + "";
                        const ver1 = verSplits.join(".");
                        confirm(ver1);
                        break;
                    case "2":
                        const rl2 = readline.createInterface({
                            input: process.stdin,
                            output: process.stdout,
                        });
                        rl2.question(`please input version, like 0.0.1 \n`, (answer2) => {
                            rl2.close();
                            const ver2 = answer2;
                            const reg = /^([0-9]\d|[0-9])(\.([0-9]\d|\d)){2}$/;
                            if(reg.test(ver2)) {
                                confirm(ver2);
                            } else {
                                ask();
                            }
                        });
                        
                        break;
                    case "3":
                        const ver3 = version;
                        confirm(ver3);
                        break;
                    default:
                }
            });
        };
        ask();
    });
    console.log("version is:", ver);

    if (ver === packageJson.version) {
        return;
    }
    packageJson.version = ver;
    fs.writeFileSync("./package.json", JSON.stringify(packageJson, null, "\t"));
    distJson.version = ver;
    fs.writeFileSync("./dist/package.json", JSON.stringify(distJson, null, "\t"));
}

version();
