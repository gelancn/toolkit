export var BrokenPromise = {
    /**
     * 获取[Promise, resolve, reject]
     */
    get: function () {
        var result = [];
        var promise = new Promise(function (resolve, reject) {
            result[1] = resolve;
            result[2] = reject;
        });
        result[0] = promise;
        return result;
    },
};
