import { BrokenPromise } from "../../src/util/BrokenPromise";

export default async function () {
    console.log("…………………… test_BrokenPromise ……………………");

    const [p1, res1, rej1] = BrokenPromise.get();
    const [p2, res2, rej2] = BrokenPromise.get();

    res2();
    console.log("p2 resolve");

    setTimeout(() => {
        res1();
        console.log("p1 resolve");
    }, 1000);
    await p1;
    console.log('p1 完成')
    await p2;
    console.log('p2 完成')

    console.log("…………………… test_BrokenPromise ……………………");
    console.log("\n\n");
};
