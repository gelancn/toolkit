import { TestAudio } from './TestAudio';
import { TestEmitter } from './TestEmitter';
import { TestHttpLoader } from './TestHttpLoader';
import { TestImageLoader } from './TestImageLoader';
import { TestScriptLoader } from './TestScriptLoader';
import { TestSingleton } from './TestSingleton';

async function runTest(): Promise<void> {
    await TestAudio();
    await TestEmitter();
    await TestHttpLoader();
    await TestScriptLoader();
    await TestImageLoader();
    await TestSingleton();
}

runTest();
