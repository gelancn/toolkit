import { TestAudio } from './TestAudio';
import { TestEmitter } from './TestEmitter';
import { TestHttpLoader } from './TestHttpLoader';
import { TestImageLoader } from './TestImageLoader';
import { TestScriptLoader } from './TestScriptLoader';
import { TestSingleton } from './TestSingleton';

interface TestConfig {
    title: string;
    handler(): Promise<void>;
}

const configs: Array<TestConfig> = [
    {
        title: 'TestAudio',
        handler: TestAudio,
    },
    {
        title: 'TestEmitter',
        handler: TestEmitter,
    },
    {
        title: 'TestHttpLoader',
        handler: TestHttpLoader,
    },
    {
        title: 'TestScriptLoader',
        handler: TestScriptLoader,
    },
    {
        title: 'TestImageLoader',
        handler: TestImageLoader,
    },
    {
        title: 'TestSingleton',
        handler: TestSingleton,
    },
];

configs.forEach((value: TestConfig) => {
    const btn: HTMLButtonElement = document.createElement('button');
    btn.style.display = 'block';
    btn.style.margin = '10px';
    btn.textContent = value.title;
    btn.onclick = function(): void {
        value.handler();
    };
    document.body.append(btn);
});
