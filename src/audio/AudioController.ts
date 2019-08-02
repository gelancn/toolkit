import { Singleton } from '..';
import { Emitter } from '../base/Emitter';
import { AudioSource } from './AudioSource';
import { HTMLAudioFactory } from './HTMLAudioFactory';

export class AudioController extends Emitter {
    constructor() {
        super();
        this.onPlay = (evt: Event) => {};
        this.onProgress = (evt: ProgressEvent) => {};
        this.onEnded = (evt: Event) => {};
    }

    private _audioTag: HTMLAudioElement;

    private _url: string;
    public getUrl(): string {
        return this._url;
    }

    public getDuration(): number {
        const el: HTMLAudioElement = this._getTag();
        return el.duration;
    }

    private _loop: boolean = false;
    public getLoop(): boolean {
        return this._loop;
    }
    public setLoop(value: boolean) {
        this._loop = !!value;
        const el: HTMLAudioElement = this._getTag();
        this._updateSettings(el);
    }

    private _volume: number = 1;
    public getVolume(): number {
        return this._volume;
    }
    public setVolume(value: number) {
        this._volume = value;
        const el: HTMLAudioElement = this._getTag();
        this._updateSettings(el);
    }

    private _muted: boolean = false;
    public getMuted(): boolean {
        return this._muted;
    }
    public setMuted(value: boolean) {
        this._muted = !!value;
        const el: HTMLAudioElement = this._getTag();
        this._updateSettings(el);
    }

    private _playing: boolean = false;
    public getPlaying(): boolean {
        return this._playing;
    }

    private _currentTime: number = 0;
    public getCurrentTime(): number {
        return this._currentTime;
    }
    public setCurrentTime(value: number) {
        this._currentTime = value;
        const el: HTMLAudioElement = this._getTag();
        this._updateSettings(el);
    }

    public async play(url: string, cache?: boolean): Promise<void> {
        this._url = url;
        const source: AudioSource = await AudioSource.load(url, cache);
        const el: HTMLAudioElement = this._getTag();
        el.src = source.getBase64();
        el.play();
        await new Promise((resolve: Function) => {});
    }

    public pause(): void {
        const el: HTMLAudioElement = this._getTag();
        el.pause();
        this._recoveryTag();
    }

    public stop(): void {
        const el: HTMLAudioElement = this._getTag();
        el.pause();
        if (el.readyState > 0) {
            el.currentTime = 0;
        }
        this._recoveryTag();
    }

    public seek(value: number): void {
        if (value == null || typeof value !== 'number') {
            return;
        }
        const el: HTMLAudioElement = this._getTag();
        if (el.readyState > 0) {
            el.currentTime = value;
        }
    }

    private _updateSettings(el: HTMLAudioElement): void {
        el.loop = this._loop;
        el.volume = this._volume;
        el.muted = this._muted;
        el.currentTime = this._currentTime;
    }

    private _getTag(): HTMLAudioElement {
        if (this._audioTag == null) {
            const factory: HTMLAudioFactory = Singleton.instance.get(HTMLAudioFactory);
            const el: HTMLAudioElement = factory.get();
            this._updateSettings(el);
            el.onprogress = this.onProgress;
            el.onplay = this.onPlay;
            el.onended = this.onEnded;
            this._audioTag = el;
        }
        return this._audioTag;
    }

    private _recoveryTag(): void {
        const el: HTMLAudioElement = this._audioTag;
        if (el == null) {
            return;
        }
        this._audioTag = null;
        el.loop = false;
        el.volume = 1;
        el.muted = false;
        el.onprogress = null;
        el.onplay = null;
        el.onended = null;
        const factory: HTMLAudioFactory = Singleton.instance.get(HTMLAudioFactory);
        factory.recovery(el);
    }

    protected onProgress: (evt: Event) => void;
    protected onPlay: (evt: Event) => void;
    protected onEnded: (evt: Event) => void;
}
