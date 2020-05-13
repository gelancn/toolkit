import { Emitter } from '../base/Emitter';
import { AudioTagFactory } from './AudioTagFactory';

/** 过程枚举 */
export enum EnumAudioProcess {
    START = "start",
    STOP = "stop",
    PAUSE = "pause",
    END = "end",
    PROGRESS = "progress",
    ERROR = "error",
}


export class Audio extends Emitter {
    static factory: AudioTagFactory = new AudioTagFactory();

    /** 解锁音频标签 */
    static unlock(): void {
        Audio.factory.unlock();
    }

    /**
     * 设置静音
     * @param value 
     */
    static setMute(value: boolean): void {
        Audio.factory.setMute(value);
    }
}