import { EnumEventLoader } from '../src/enum/EnumEventLoader';
import { ImageLoader } from '../src/index';
import { ImageLoaderParams } from '../src/loader/ImageLoader';

export async function TestImageLoader(): Promise<void> {
    console.log(`---------- TestImageLoader ----------`);
    console.log(`\n`);
    const imageLoader: ImageLoader = new ImageLoader();
    const config: ImageLoaderParams = {
        url: 'https://www.baidu.com/img/xinshouye_1aa82cd448e4c0aee0961ed6e290baaf.gif',
    };

    console.log(`send`, config);
    await new Promise((resolve: Function) => {
        imageLoader.load(config);
        imageLoader.on(EnumEventLoader.COMPLETE, (data: unknown) => {
            console.log(EnumEventLoader.COMPLETE, data);
            resolve();
        });
        imageLoader.on(EnumEventLoader.ERROR, (err: Error) => {
            console.log(EnumEventLoader.ERROR, err);
            resolve();
        });
    });

    console.log(`---------- ---------- ----------`);
    console.log(`\n\n`);
}
