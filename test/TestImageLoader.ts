import { EnumProcess } from '../src/enum/EnumProcess';
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
        imageLoader.on(EnumProcess.END, (data: unknown) => {
            console.log(EnumProcess.END, data);
            resolve();
        });
        imageLoader.on(EnumProcess.ERROR, (err: Error) => {
            console.log(EnumProcess.ERROR, err);
            resolve();
        });
    });

    console.log(`---------- ---------- ----------`);
    console.log(`\n\n`);
}
