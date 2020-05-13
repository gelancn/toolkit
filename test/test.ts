import test_Emitter from "./base/test_Emitter";
import test_Singleton from "./base/test_Singleton";
import test_PromiseProxy from "./base/test_PromiseProxy";

async function run() {
    await test_Singleton();
    await test_Emitter();
    await test_PromiseProxy();
}

run();
