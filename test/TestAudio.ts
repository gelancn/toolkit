import { AudioController } from '../src/audio/AudioController';
import { AudioSource } from '../src/audio/AudioSource';
import { EnumProcess } from '../src/enum/EnumProcess';

export async function TestAudio(): Promise<void> {
    console.log(`---------- TestAudio ----------`);
    console.log(`\n`);
    const url: string = './test_audio.mp3';

    const source: AudioSource = await AudioSource.load(url);
    console.log(source);

    const controller: AudioController = new AudioController();
    controller.loop = true;
    controller.play(source.base64);
    controller.on(EnumProcess.START, () => {
        console.log(EnumProcess.START);
    });
    controller.on(EnumProcess.STOP, () => {
        console.log(EnumProcess.STOP);
    });
    controller.on(EnumProcess.PAUSE, () => {
        console.log(EnumProcess.PAUSE);
    });
    controller.on(EnumProcess.END, () => {
        console.log(EnumProcess.END);
    });
    controller.on(EnumProcess.PROGRESS, (cur: number, total: number) => {
        // console.log(EnumProcess.PROGRESS, cur, total);
    });
    setTimeout(() => {
        controller.pause();
        AudioController.factory.get();
        setTimeout(() => {
            controller.play();
        }, 3000);
    }, 3000);

    console.log(`\n`);

    console.log(`---------- ---------- ----------`);
    console.log(`\n\n`);
}
