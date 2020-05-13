import test_Emitter from "./base/test_Emitter";
import test_Loader from "./base/test_Loader";
import test_PromiseProxy from "./base/test_PromiseProxy";
import test_Singleton from "./base/test_Singleton";

async function run() {
    await test_Singleton();
    await test_Emitter();
    await test_PromiseProxy();
    await test_Loader();
}

run();
