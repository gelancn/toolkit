import { Emitter } from '../src/index';

export async function TestEmitter(): Promise<void> {
    console.log(`---------- TestEmitter ----------`);
    console.log(`\n`);

    const emitter: Emitter = new Emitter();
    const type: string = 'test';
    const handler = () => {
        console.log(`This is handler`);
    };

    console.log(`on`);
    emitter.on(type, handler);
    console.log(`has`, emitter.has(type, handler));
    console.log(`emit ${type}`);
    emitter.emit(type);

    console.log(`\n`);

    console.log(`off`);
    emitter.off(type, handler);
    console.log(`has`, emitter.has(type, handler));
    console.log(`emit ${type}`);
    emitter.emit(type);

    console.log(`\n`);

    console.log(`once`);
    emitter.once(type, handler);
    console.log(`has`, emitter.has(type, handler));
    console.log(`emit ${type} 1`);
    emitter.emit(type);
    console.log(`has`, emitter.has(type, handler));
    console.log(`emit ${type} 2`);
    emitter.emit(type);

    console.log(`\n`);

    console.log(`---------- ---------- ----------`);
    console.log(`\n\n`);
}
