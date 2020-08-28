import { ModifyObject } from "../../src/util/ModifyObject";

export default async function () {
    console.log("…………………… test_ModifyObject ……………………");

    const temp: Object = {};
    ModifyObject.setValue(temp, "1", 1);
    console.log(temp.hasOwnProperty(ModifyObject._key));
    console.log(ModifyObject.getValue(temp, "1"));
    ModifyObject.setValue(temp, "1", null);
    console.log(ModifyObject.getValue(temp, "1"));

    console.log("…………………… test_ModifyObject ……………………");
    console.log("\n\n");
};
