import { Singleton } from "../../src/base/Singleton";

export default async function () {
    console.log("…………………… test_Singleton ……………………");
    class B { }
    class C { }

    Singleton.set(B, new B());
    console.log(Singleton.get(B));

    console.log(Singleton.get(C));

    console.log(Object.getOwnPropertyDescriptors(B), Object.getOwnPropertyDescriptors(C))

    console.log("…………………… test_Singleton ……………………");
    console.log("\n\n");
};
