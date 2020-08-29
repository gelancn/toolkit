import { Instance } from "../../src/base/Instance";

export default async function () {
    console.log("…………………… test_Instance ……………………");
    class A { }
    const key = "A";

    Instance.set(key, new A());
    console.log(Instance.get(key));
    Instance.delete(key);
    console.log(Instance.get(key));

    console.log("…………………… test_Instance ……………………");
    console.log("\n\n");
};
