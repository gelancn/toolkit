export declare const BrokenPromise: {
    /**
     * 获取[Promise, resolve, reject]
     */
    get<T>(): [Promise<T>, (value?: T | PromiseLike<T> | undefined) => void, (reason?: unknown) => void];
};
