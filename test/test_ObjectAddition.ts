import { ObjectAddition } from "../src/ObjectAddition";

export default async function () {
    console.log("…………………… test_ObjectAddition ……………………");

    const temp: Object = {};
    ObjectAddition.set(temp, "1", 1);

    console.log(Object.getOwnPropertyNames(temp))

    console.log(ObjectAddition.get(temp, "1"));
    ObjectAddition.set(temp, "1", null);
    console.log(ObjectAddition.get(temp, "1"));

    console.log("…………………… test_ObjectAddition ……………………");
    console.log("\n\n");
};
