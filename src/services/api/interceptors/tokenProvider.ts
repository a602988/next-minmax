export type TokenSource = 'localStorage' | 'cookie';

export async function getAccessToken(source: TokenSource = 'localStorage'): Promise<string | null> {
    if (typeof window === 'undefined') {
        // 服务器端
        if (source === 'cookie') {
            try {
                // Import cookies only when on the server side
                const { cookies } = await import('next/headers');
                const cookieStore = await cookies(); // Await the promise
                return cookieStore.get('token')?.value || null;
            } catch {
                return null;
            }
        }
        return null;
    } else {
        // 客户端
        if (source === 'localStorage') {
            return localStorage.getItem('token');
        } else if (source === 'cookie') {
            const match = document.cookie.match(/(^|; )token=([^;]*)/);
            return match ? decodeURIComponent(match[2]) : null;
        }
    }
    return null;
}

export async function getRefreshToken(source: TokenSource = 'localStorage'): Promise<string | null> {
    if (typeof window === 'undefined') {
        // 服务器端
        if (source === 'cookie') {
            try {
                // Import cookies only when on the server side
                const { cookies } = await import('next/headers');
                const cookieStore = await cookies(); // Await the promise
                return cookieStore.get('refreshToken')?.value || null;
            } catch {
                return null;
            }
        }
        return null;
    } else {
        // 客户端
        if (source === 'localStorage') {
            return localStorage.getItem('refreshToken');
        } else if (source === 'cookie') {
            const match = document.cookie.match(/(^|; )refreshToken=([^;]*)/);
            return match ? decodeURIComponent(match[2]) : null;
        }
    }
    return null;
}
