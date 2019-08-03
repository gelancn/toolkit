import { EnumProcess } from '../src/enum/EnumProcess';
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
        scriptLoader.on(EnumProcess.END, (data: unknown) => {
            console.log(EnumProcess.END, data);
            resolve();
        });
        scriptLoader.on(EnumProcess.ERROR, (err: Error) => {
            console.log(EnumProcess.ERROR, err);
            resolve();
        });
    });

    console.log(`---------- ---------- ----------`);
    console.log(`\n\n`);
}
