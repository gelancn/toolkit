import { Emitter } from "../base/Emitter";
import { AudioTagImpl } from "./AudioTagImpl";

/** 音频事件 */
export enum EnumAudioEvent {
    ON_PLAY = "ON_PLAY",
    ON_STOP = "ON_STOP",
    ON_PAUSE = "ON_PAUSE",
    ON_END = "ON_END",
    ON_PROGRESS = "ON_PROGRESS",
    ON_ERROR = "ON_ERROR",

    ON_MUTED_CHANGE = "ON_MUTED_CHANGE",
    ON_VOLUME_CHANGE = "ON_VOLUME_CHANGE",
    ON_LOOP_CHANGE = "ON_LOOP_CHANGE",
    ON_CURRENT_TIME_CHANGE = "ON_CURRENT_TIME_CHANGE",
}

export class Audio {
    constructor(impl?: AudioImpl) {
        if (impl == null) {
            this._impl = new AudioTagImpl();
        } else {
            this._impl = impl;
        }
    }

    private _impl: AudioImpl;

    /** 设置静音 */
    set muted(value: boolean) {
        value = !!value;
        this._impl.muted = value;
    }
    /** 获取静音 */
    get muted(): boolean {
        return this._impl.muted;
    }

    /** 获取一个音频控制器 */
    get(): AudioController {
        return this._impl.get();
    }
    /** 回收一个音频控制器 */
    recovery(ctrl: AudioController): void {
        this._impl.recovery(ctrl);
    }

    private _queueMap: { [key: string]: PlayQueueTask } = {};
    /**
     * 播放音频队列
     * @param task
     */
    playQueue(task: PlayQueueTask): number {
        const impl = this._impl;
        const queueMap = this._queueMap;
        const ctrl = impl.get();
        const key: number = ctrl.uid;
        task.ctrl = ctrl;
        queueMap[key] = task;
        const length = task.list.length;
        const list: Array<string> = task.list.concat();
        const runTask = () => {
            if (list.length === 0) {
                if (task.onEnd != null) {
                    task.onEnd();
                }
                this.stopQueue(key);
            } else {
                const url: string = list.pop() as string;
                ctrl.src = url;
                ctrl.play();
                ctrl.once(EnumAudioEvent.ON_END, () => {
                    ctrl.offAll();
                    runTask();
                });
                ctrl.on(EnumAudioEvent.ON_PROGRESS, (current: number, total: number) => {
                    if (task.onProgress != null) {
                        task.onProgress(length - list.length - 1 + current / total, length);
                    }
                });
            }
        };
        runTask();
        return key;
    }
    /**
     * 停止一个音频队列
     * @param key
     */
    stopQueue(key: number): void {
        const impl = this._impl;
        const queueMap = this._queueMap;
        if (key == null || queueMap[key] == null) {
            return;
        }
        const task = queueMap[key];
        delete queueMap[key];
        if (task.ctrl == null) {
            return;
        }
        const ctrl = task.ctrl;
        delete task.ctrl;
        ctrl.stop();
        impl.recovery(ctrl);
    }
}

interface PlayQueueTask {
    list: Array<string>;
    onProgress?(current: number, total: number): void;
    onEnd?(): void;
    ctrl?: AudioController;
}

export interface AudioController extends Emitter {
    readonly uid: number;
    src: string;
    loop: boolean;
    volume: number;
    muted: boolean;
    currentTime: number;
    play(): void;
    stop(): void;
    pause(): void;
    resume(): void;
}

export interface AudioImpl {
    muted: boolean;
    get(): AudioController;
    recovery(value: AudioController): void;
    unlock(): void;
}
