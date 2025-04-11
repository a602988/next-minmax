/**
 * @function withTimeout
 * 包裝一個 Promise，設置超時機制。
 * 
 * 如果 Promise 在指定時間內未完成，則中止操作並拋出 'AbortError'。
 * 使用 AbortController 來中止未完成的請求。
 * 
 * @template T - Promise 的返回類型。
 * @returns {Promise<T>} - 返回一個新的 Promise，帶有超時控制。
 */
export function withTimeout<T>(
    promise: Promise<T>,
    timeout: number,
    controller: AbortController
): Promise<T> {
    return new Promise<T>((resolve, reject) => {
        const id = setTimeout(() => {
            controller.abort(); // 中止請求
            reject({ name: 'AbortError', message: 'Request timed out' }); // 拋出超時錯誤
        }, timeout);

        promise
            .then(res => {
                clearTimeout(id); // 清除超時計時器
                resolve(res); // 解決 Promise
            })
            .catch(err => {
                clearTimeout(id); // 清除超時計時器
                reject(err); // 拒絕 Promise
            });
    });
}
