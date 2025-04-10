/**
 * 通用 JSON 回退數據加載器
 * 用於在 API 請求失敗時加載預設的 JSON 數據
 */

// 檢查是否啟用回退機制
export function isFallbackEnabled(): boolean {
  return process.env.NEXT_PUBLIC_DATE_JSON_FALLBACK === 'true';
}

// 動態加載 JSON 文件
export async function loadFallbackData<T>(dataType: string): Promise<T | null> {
  if (!isFallbackEnabled()) {
    return null;
  }

  try {
    console.log(`嘗試加載回退數據文件: ${dataType}.json`);
    // 動態導入 JSON 文件
    const data = await import(`@/data/json/${dataType}.json`);
    return data.default as T;
  } catch (error) {
    console.error(`無法加載回退數據文件: ${dataType}.json`, error);
    return null;
  }
}

// 同步版本 - 用於已經導入的數據
export function useFallbackData<T>(fallbackData: T): T | null {
  return isFallbackEnabled() ? fallbackData : null;
}
