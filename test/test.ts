import test_Audio from "./audio/test_Audio";
import test_Emitter from "./base/test_Emitter";
import test_Loader from "./util/test_Loader";
import test_PromiseProxy from "./base/test_PromiseProxy";
import test_Singleton from "./base/test_Singleton";
import test_Instance from "./base/test_Instance";
import test_ModifyObject from "./util/test_ModifyObject";


async function run() {
    await test_Instance();
    await test_Singleton();
    await test_Emitter();
    await test_PromiseProxy();
    await test_Loader();
    await test_ModifyObject();

    await test_Audio();
}

run();
