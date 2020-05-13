import { Loader } from "../../src/base/Loader";

export default async function () {
    console.log("…………………… test_Loader ……………………");

    const imgUrl: string = "https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png";

    console.log("loadImage");
    const img = await Loader.loadImage({
        url: imgUrl,
        onProgress: (loaded, total) => {
            console.log("onProgress", loaded, total);
        },
        onLoaded: (i: HTMLImageElement) => {
            console.log(i);
        },
    });
    document.body.appendChild(img);
    try {
        await Loader.loadImage({
            url: "???",
            onError: (err) => {
                console.log(err);
            },
        });
    } catch (err) {

    }

    console.log("\n");
    
    console.log("loadScript");
    await Loader.loadScript({
        url: "test.js",
        onProgress: (loaded, total) => {
            console.log("onProgress", loaded, total);
        },
        onLoaded: (s: HTMLScriptElement) => {
            console.log(s);
        },
    });

    console.log("\n");

    console.log("sendHttpRequest");
    const response = await Loader.sendHttpRequest({
        method: "GET",
        url: "http://localhost:3000/index.html",
    });
    console.log(response);

    console.log("…………………… test_Loader ……………………");
    console.log("\n\n");
};
