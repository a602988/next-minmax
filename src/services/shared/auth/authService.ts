import { getRefreshToken } from '@/services/shared/interceptors/tokenProvider';

export async function refreshAuthToken(): Promise<void> {
    const refreshToken = getRefreshToken('cookie');
    if (!refreshToken) throw new Error('No refresh token in cookie');

    const res = await fetch('/auth/refresh', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ refreshToken }),
    });

    if (!res.ok) throw new Error('Refresh token failed');

    const data = await res.json();
    localStorage.setItem('token', data.token); // 也可存 cookie
    localStorage.setItem('refreshToken', data.refreshToken);
}
