import { Instance } from "../../src/base/Instance";

export default async function () {
    console.log("…………………… test_Instance ……………………");
    class A { }
    const key = "A";

    console.log('new Instance()');
    const instance = new Instance();

    instance.set(key, new A());
    console.log(instance.get(key));
    instance.delete(key);
    console.log(instance.get(key));

    console.log('\n');

    console.log('static Instance');
    Instance.set(key, new A());
    console.log(Instance.get(key));
    Instance.delete(key);
    console.log(Instance.get(key));

    console.log("…………………… test_Instance ……………………");
    console.log("\n\n");
};
