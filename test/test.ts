import test_Audio from "./audio/test_Audio";
import test_Emitter from "./test_Emitter";
import test_Instance from "./test_Instance";
import test_Singleton from "./test_Singleton";
import test_Loader from "./test_Loader";
import test_ObjectAddition from "./test_ObjectAddition";


async function run() {
    // await test_Instance();
    // await test_Singleton();
    // await test_Emitter();
    // await test_Loader();
    // await test_ObjectAddition();

    await test_Audio();
}

run();
