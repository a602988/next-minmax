// TypeScript
// 作用：提供跨層可重用的 IP 解析工具，避免直接耦合 Next 的型別

/**
 * 從 Headers 物件萃取客戶端 IP
 * 檢查順序：
 * 1) X-Forwarded-For 的第一個 IP（代理/負載均衡器常見）
 * 2) X-Real-IP（某些代理伺服器使用）
 */
export function extractClientIpFromHeaders(
    headers: Headers | Record<string, string | string[] | undefined>
): string | undefined {
    // 讀取 header（相容 Headers 與一般物件）
    const getHeader = (name: string): string | undefined => {
        if (typeof (headers as any)?.get === 'function') {
            const v = (headers as Headers).get(name);
            return v ?? undefined;
        }
        const raw = (headers as Record<string, any>)[name.toLowerCase()] ?? (headers as Record<string, any>)[name];
        if (Array.isArray(raw)) return raw[0];
        return raw;
    };

    // 1) x-forwarded-for: 可能是 "client, proxy1, proxy2"，取第一個
    const xff = getHeader('x-forwarded-for');
    if (xff) {
        const first = xff.split(',')[0]?.trim();
        const ip = normalizeIp(first);
        if (ip) return ip;
    }

    // 2) x-real-ip
    const xri = getHeader('x-real-ip');
    if (xri) {
        const ip = normalizeIp(xri.trim());
        if (ip) return ip;
    }

    return undefined;
}

/**
 * 從 NextRequest 推導客戶端 IP（不直接依賴 Next 型別）
 * - 先用 headers 萃取
 * - 失敗再嘗試 req.ip（若存在）
 */
export function getClientIpFromRequest(req: { headers: any; ip?: string }): string | undefined {
    const fromHeaders = extractClientIpFromHeaders(req.headers);
    if (fromHeaders) return fromHeaders;

    const possible = req.ip;
    return normalizeIp(possible);
}

/**
 * 檢查是否為內網/保留位址（可用於過濾）
 */
export function isPrivateOrReservedIp(ip?: string): boolean {
    if (!ip) return true;
    const v4 = ip.includes('.');
    if (v4) {
        if (ip.startsWith('10.')) return true;
        const parts = ip.split('.');
        const a = Number(parts[0]), b = Number(parts[1]);
        if (a === 172 && b >= 16 && b <= 31) return true;
        if (ip.startsWith('192.168.')) return true;
        if (ip === '127.0.0.1') return true;
    } else {
        // IPv6 常見本機/保留
        if (ip === '::1') return true;
        if (ip.toLowerCase().startsWith('fc') || ip.toLowerCase().startsWith('fd')) return true; // Unique local
    }
    return false;
}

/**
 * 將輸入正規化為非空的 IP 字串（若不合法則回傳 undefined）
 */
function normalizeIp(val: unknown): string | undefined {
    if (typeof val !== 'string') return undefined;
    const s = val.trim();
    if (!s) return undefined;
    // 基礎檢核（不做嚴格驗證，保留彈性）
    if (!(s.includes('.') || s.includes(':'))) return undefined;
    return s;
}