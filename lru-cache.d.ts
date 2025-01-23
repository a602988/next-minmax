/**
 * lru-cache 的類型定義
 *
 * LRU-cache（Least Recently Used Cache）是一種通用的緩存算法實現，
 * 它在有限的內存中儲存最近使用的項目。當緩存達到其容量限制時，
 * 它會自動刪除最久未使用的項目，以為新項目騰出空間。
 *
 * 此文件為 lru-cache 模組提供 TypeScript 類型聲明。
 * 它定義了 LRUCache 類及其相關的選項介面。
 *
 * 模組：lru-cache
 * 參考：https://github.com/isaacs/node-lru-cache
 */

declare module 'lru-cache' {
  export class LRUCache<K = any, V = any> {
    constructor(options?: LRUCache.Options<K, V>);
    set(key: K, value: V, ttl?: number): boolean;
    get(key: K): V | undefined;
    has(key: K): boolean;
    delete(key: K): boolean;
    clear(): void;
    readonly size: number;
  }

  namespace LRUCache {
    interface Options<K = any, V = any> {
      max?: number;
      ttl?: number;
      maxSize?: number;
      sizeCalculation?: (value: V, key: K) => number;
      dispose?: (value: V, key: K) => void;
      noDisposeOnSet?: boolean;
      updateAgeOnGet?: boolean;
      updateAgeOnHas?: boolean;
    }
  }

  export = LRUCache;
}
