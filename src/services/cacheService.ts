import { LRUCache } from 'lru-cache';

const cache = new LRUCache<string, any>({ max: 100, ttl: 1000 * 60 * 5 }); // 5分鐘緩存

export function getFromCache<T>(key: string): T | undefined {
  return cache.get(key) as T | undefined;
}

export function setInCache<T>(key: string, value: T): void {
  cache.set(key, value);
}
