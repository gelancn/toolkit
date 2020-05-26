import { Loader } from "../../src/base/Loader";

export default async function () {
    console.log("…………………… test_Loader ……………………");

    const imgUrl: string = "https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png";

    console.log("loadImage");
    const img = await Loader.loadImage(imgUrl);
    document.body.appendChild(img);
    try {
        await Loader.loadImage("???");
    } catch (err) {

    }

    console.log("\n");

    console.log("loadScript");
    await Loader.loadScript("test.js");

    console.log("\n");

    console.log("loadCSS");
    await Loader.loadCSS("https://dss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/css/components/user_quit_dialog-527f3ede74.css");

    console.log("\n");

    console.log("sendHttpRequest");
    const response = await Loader.sendHttpRequest({
        method: "GET",
        url: "http://localhost:3000/index.html",
        onProgress: (c, t) => { console.log(c, t) },
    });
    console.log(response);

    console.log("…………………… test_Loader ……………………");
    console.log("\n\n");
};
