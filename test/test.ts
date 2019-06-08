import {
    Audio,
    Emitter,
    HttpLoader,
    ImageLoader,
    ScriptLoader,
    Singleton,
} from '../src/index';

const audio: Audio = new Audio();

const emitter: Emitter = new Emitter();

const httpLoader: HttpLoader = new HttpLoader();

const scriptLoader: ScriptLoader = new ScriptLoader();

const imageLoader: ImageLoader = new ImageLoader();

const singleton: Singleton = new Singleton();
