import { Audio, AudioController } from "../../src/Audio";

export default async function () {
    console.log("…………………… test_Audio ……………………");
    const audio = new Audio();
    const url = "test/assets/test.mp3";
    const container = document.createElement("div");
    document.body.appendChild(container);
    window.onmousedown = () => {
        audio.tags.unlock();
        console.log("onmousedown");
    };
    const playAudio = (source: string) => {
        const ctrl: AudioController = new AudioController();
        ctrl.on(AudioController.ON_PLAY, () => {
            console.log(AudioController.ON_PLAY);
        });
        ctrl.on(AudioController.ON_STOP, () => {
            console.log(AudioController.ON_STOP);
        });
        ctrl.on(AudioController.ON_END, () => {
            console.log(AudioController.ON_END);
        });
        ctrl.on(AudioController.ON_PROGRESS, (cur: number, total: number) => {
            console.log(cur, total);
        });
        ctrl.play(source);
        return ctrl;
    }
    await new Promise((resolve: Function, reject: Function) => {
        const btnConfig = [
            {
                title: "预加载并播放",
                handler: async () => {
                    console.log("预加载并播放");
                    const res = await audio.res.load(url);
                    console.log(res);
                    audio.play(url).then(() => {
                        console.log("播放完成");
                    }).catch(() => {
                        console.log("播放停止", url);
                        playAudio(res.base64 as string);
                    });
                    setTimeout(() => {
                        audio.stop(url);
                    }, 1000);
                },
            },
            {
                title: "播放音频",
                handler: () => {
                    console.log("播放音频");
                    const ctrl = playAudio(url);
                    setTimeout(() => {
                        ctrl.play(url);
                    }, 500);
                },
            },
            {
                title: "结束测试",
                handler: () => {
                    console.log("结束测试");
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