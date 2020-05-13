import { Emitter } from "../../src/base/Emitter";

export default async function () {
    console.log("…………………… test_Emitter ……………………");

    let mark: number = 0;
    const TEST = "TEST";
    const emitter = new Emitter();

    function send() {
        console.log("send:", mark)
        emitter.emit(TEST, mark);
        mark++;
    }

    function onListen(value: string) {
        console.log("received:", value)
    }

    console.log("once");
    emitter.once(TEST, onListen);
    send();
    send();
    console.log("\n");

    console.log("on");
    emitter.on(TEST, onListen);
    send();
    send();
    console.log("\n");

    console.log("off");
    emitter.off(TEST, onListen);
    send();
    send();
    console.log("\n");

    console.log("offByHandler");
    emitter.on(TEST, onListen);
    send();
    emitter.offByHandler(onListen);
    send();
    console.log("\n");

    console.log("offByTarget");
    const target = {};
    emitter.on(TEST, onListen, target);
    send();
    emitter.offByTarget(target);
    send();
    console.log("\n");

    console.log("offByType");
    emitter.on(TEST, onListen);
    send();
    emitter.offByType(TEST);
    send();
    console.log("\n");

    console.log("…………………… test_Emitter ……………………");
    console.log("\n\n");
};
