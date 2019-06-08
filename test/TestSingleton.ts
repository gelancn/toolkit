import { Emitter, HttpLoader, Singleton } from '../src/index';

export async function TestSingleton(): Promise<void> {
    console.log(`---------- TestSingleton ----------`);
    console.log(`\n`);
    const singleton: Singleton = new Singleton();

    console.log('map Emitter');
    singleton.map(Emitter);
    console.log('get', singleton.get(Emitter));

    console.log(`\n`);

    console.log('map Emitter -> new HttpLoader()');
    singleton.map(Emitter, new HttpLoader());
    console.log('get', singleton.get(Emitter));

    console.log(`\n`);

    console.log('remove Emitter');
    singleton.remove(Emitter);

    console.log(`\n`);

    console.log(`---------- ---------- ----------`);
    console.log(`\n\n`);
}
