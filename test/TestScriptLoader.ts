import { EnumEventLoader } from '../src/enum/EnumEventLoader';
import { ScriptLoader } from '../src/index';
import { ScriptLoaderParams } from '../src/loader/ScriptLoader';

export async function TestScriptLoader(): Promise<void> {
    console.log(`---------- TestScriptLoader ----------`);
    console.log(`\n`);
    const scriptLoader: ScriptLoader = new ScriptLoader();

    const config: ScriptLoaderParams = {
        url: './test_scriptloader.js',
    };

    console.log(`send`, config);
    await new Promise((resolve: Function) => {
        scriptLoader.load(config);
        scriptLoader.on(EnumEventLoader.COMPLETE, (data: unknown) => {
            console.log(EnumEventLoader.COMPLETE, data);
            resolve();
        });
        scriptLoader.on(EnumEventLoader.ERROR, (err: Error) => {
            console.log(EnumEventLoader.ERROR, err);
            resolve();
        });
    });

    console.log(`---------- ---------- ----------`);
    console.log(`\n\n`);
}
