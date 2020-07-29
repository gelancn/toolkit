import { Singleton } from "../../src/base/Singleton";

export default async function () {
    console.log("…………………… test_Singleton ……………………");
    class B { }
    class C { }

    const singleton = new Singleton();
    console.log('new Singleton()');
    singleton.set(B, new B());
    console.log(singleton.get(B));

    console.log(singleton.get(C));

    console.log('\n');

    console.log('static Singleton');
    Singleton.set(B, new B());
    console.log(Singleton.get(B));

    console.log(Singleton.get(C));

    console.log("…………………… test_Singleton ……………………");
    console.log("\n\n");
};
