import { PromiseProxy } from "../../src/base/PromiseProxy";
import { EnumPromiseProxy } from "../../src/enum/EnumPromiseProxy";

export default async function () {
    console.log("…………………… test_PromiseProxy ……………………");
    let proxy = new PromiseProxy((resolve, reject) => {});
    proxy.on(EnumPromiseProxy.ON_RESOLVE, () => {
        console.log(EnumPromiseProxy.ON_RESOLVE);
    });
    proxy.resolve("resolve data");
    const result = await proxy.promise;
    console.log(result);

    console.log("\n");

    proxy = new PromiseProxy((resolve, reject) => { });
    proxy.on(EnumPromiseProxy.ON_REJECT, () => {
        console.log(EnumPromiseProxy.ON_REJECT);
    });
    try {
        proxy.reject("reject data");
        await proxy.promise;
    } catch (e) {
        console.log(e);
    }
    console.log("…………………… test_PromiseProxy ……………………");
    console.log("\n\n");
};
