import { EnumEventLoader } from '../src/enum/EnumEventLoader';
import { EnumHttpMethod } from '../src/enum/EnumHttpMethod';
import { HttpLoader } from '../src/index';
import { HttpLoaderParams } from '../src/loader/HttpLoader';

export async function TestHttpLoader(): Promise<void> {
    console.log(`---------- TestHttpLoader ----------`);
    console.log(`\n`);
    const httpLoader: HttpLoader = new HttpLoader();
    const url: string = 'http://www.test.17zuoye.net/resources/apps/student/megrez/assets/full_reading_loading_ske-7f463979.json';
    const config: HttpLoaderParams = {
        url,
        method: EnumHttpMethod.GET,
        responseType: 'json',
    };

    console.log(`send`, config);
    await new Promise((resolve: Function) => {
        httpLoader.load(config);
        httpLoader.on(
            EnumEventLoader.COMPLETE,
            (data: unknown) => {
                console.log(EnumEventLoader.COMPLETE);
                resolve();
            },
            null,
        );
        httpLoader.on(
            EnumEventLoader.ERROR,
            (err: Error) => {
                console.log(EnumEventLoader.ERROR, err);
                resolve();
            },
            null,
        );
    });

    console.log(`---------- ---------- ----------`);
    console.log(`\n\n`);
}
