import { ModifyObject } from "../../src/util/ModifyObject";

export default async function () {
    console.log("…………………… test_ModifyObject ……………………");

    const temp: Object = {};
    ModifyObject.set(temp, "1", 1);

    console.log(Object.getOwnPropertyNames(temp))

    console.log(ModifyObject.get(temp, "1"));
    ModifyObject.set(temp, "1", null);
    console.log(ModifyObject.get(temp, "1"));

    console.log("…………………… test_ModifyObject ……………………");
    console.log("\n\n");
};
