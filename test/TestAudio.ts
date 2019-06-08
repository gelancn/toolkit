import { AudioSourceData } from '../src/audio/AudioSourceData';
import { Audio } from '../src/index';

export async function TestAudio(): Promise<void> {
    console.log(`---------- TestAudio ----------`);
    console.log(`\n`);
    const audio: Audio = new Audio();
    const url: string = './test_audio.mp3';

    const button: HTMLButtonElement = document.createElement('button');
    button.textContent = '点击按钮解锁audio标签';
    document.body.append(button);

    await new Promise((resolve: Function) => {
        audio.setTagLimit(10);
        button.onclick = () => {
            console.log(`onclick`);
            document.body.removeChild(button);
            console.log(audio.factory);
            resolve();
        };
    });

    await new Promise((resolve: Function) => {
        console.log(`load`);
        audio.load({
            url,
            onComplete: (data: AudioSourceData) => {
                console.log(`onComplete`);
                console.log(data);
                console.log(`play`);
                audio.play({
                    url,
                });

                setTimeout(() => {
                    console.log(`stop`);
                    audio.stop(url);
                    resolve();
                }, 3000);
            },
        });
    });

    console.log(`\n`);

    await new Promise((resolve: Function) => {
        console.log(`removeSource(${url})`);
        audio.removeSource(url);
        console.log(`getSource(${url}):${audio.getSource(url)}`);
        console.log(`play`);
        audio.play({
            url,
        });
        setTimeout(() => {
            console.log(`stop`);
            audio.stop(url);
            resolve();
        }, 10000);
        setTimeout(() => {
            console.log(`setMuted`, true);
            audio.setMuted(true);
            setTimeout(() => {
                console.log(`setMuted`, false);
                audio.setMuted(false);
            }, 2000);
        }, 5000);
    });

    console.log(`\n`);

    console.log(`---------- ---------- ----------`);
    console.log(`\n\n`);
}
