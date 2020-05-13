import { PromiseProxy } from "../../src/base/PromiseProxy";

export default async function () {
    console.log("…………………… test_PromiseProxy ……………………");
    let proxy = new PromiseProxy((resolve, reject) => { });
    proxy.resolve("resolve data");
    const result = await proxy.promise;
    console.log(result);

    console.log("\n");

    proxy = new PromiseProxy((resolve, reject) => { });
    proxy.reject("reject data");
    await proxy.promise.catch((data) => {
        console.log(data);
    });
    console.log("…………………… test_PromiseProxy ……………………");
    console.log("\n\n");
};
