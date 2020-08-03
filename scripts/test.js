const child_process = require('child_process');

child_process.spawn("tsc", ["-w"], { shell: true, cwd: "test" });
const liteServer = child_process.spawn("lite-server", { shell: true, cwd: "test" });
liteServer.stdout.pipe(process.stdout);
