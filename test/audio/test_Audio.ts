import { Audio, AudioController, EnumAudioEvent } from "../../src/Audio/Audio";
import { AudioRes } from "../../src/Audio/AudioRes";

export default async function () {
    console.log("…………………… test_Audio ……………………");
    const audio = new Audio();
    const audioRes = new AudioRes();
    let ctrl: AudioController;
    const url = "test/assets/test.mp3";
    const container = document.createElement("div");
    document.body.appendChild(container);
    window.onmousedown = () => {
        audio.unlock();
        ctrl = audio.getController() as AudioController;
        ctrl.on(EnumAudioEvent.ON_PLAY, (evt: Event) => {
            console.log(evt.type);
        });
        ctrl.on(EnumAudioEvent.ON_STOP, (evt: Event) => {
            console.log(evt.type);
        });
        ctrl.on(EnumAudioEvent.ON_END, (evt: Event) => {
            console.log(evt.type);
        });
        ctrl.on(EnumAudioEvent.ON_PROGRESS, (cur: number, total: number) => {
            console.log(cur, total);
        });
        console.log("onmousedown");
    };
    await new Promise((resolve: Function, reject: Function) => {
        const btnConfig = [
            {
                title: "预加载并播放",
                handler: async () => {
                    console.log("预加载并播放");
                    const res = await audioRes.load(url);
                    console.log(res);
                    ctrl.src = res.base64 as string;
                    ctrl.play();
                },
            },
            {
                title: "播放音频",
                handler: () => {
                    console.log("播放音频");
                    ctrl.src = url;
                    ctrl.play();
                },
            },
            {
                title: "结束测试",
                handler: () => {
                    console.log("结束测试");
                    if (ctrl != null) {
                        audio.recoveryController(ctrl);
                    }
                    resolve();
                },
            },
        ];
        btnConfig.forEach(value => {
            const btn = document.createElement("button");
            btn.textContent = value.title;
            btn.onclick = value.handler;
            container.appendChild(btn);
        });
    });

    document.body.removeChild(container);

    console.log("…………………… test_Audio ……………………");
    console.log("\n\n");
};