export const BrokenPromise = {
    /**
     * 获取[Promise, resolve, reject]
     */
    get<T>() {
        const result = [];
        const promise = new Promise<T>((resolve, reject) => {
            result[1] = resolve;
            result[2] = reject;
        });
        result[0] = promise;
        return result as [Promise<T>, (value?: T | PromiseLike<T>) => void, (reason?: unknown) => void];
    },
};
