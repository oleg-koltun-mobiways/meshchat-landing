/**
 * Cookie management utilities
 */

const COOKIE_NAME = 'meshchat_auth';
const COOKIE_MAX_AGE = 7 * 24 * 60 * 60; // 7 days in seconds

/**
 * Set authentication cookie
 */
export function setAuthCookie(): void {
    document.cookie = `${COOKIE_NAME}=authenticated; max-age=${COOKIE_MAX_AGE}; path=/; SameSite=Strict`;
}

/**
 * Get authentication cookie value
 */
export function getAuthCookie(): string | null {
    const cookies = document.cookie.split(';');
    const authCookie = cookies.find(cookie => cookie.trim().startsWith(`${COOKIE_NAME}=`));

    if (!authCookie) {
        return null;
    }

    return authCookie.split('=')[1].trim();
}

/**
 * Remove authentication cookie
 */
export function removeAuthCookie(): void {
    document.cookie = `${COOKIE_NAME}=; max-age=0; path=/; SameSite=Strict`;
}

/**
 * Check if user is authenticated
 */
export function isAuthenticated(): boolean {
    return getAuthCookie() === 'authenticated';
}

/**
 * Encode credentials to base64
 * Format: login+password
 */
export function encodeCredentials(login: string, password: string): string {
    const credentials = `${login}+${password}`;
    return btoa(credentials);
}

/**
 * Validate credentials against the token from environment
 */
export function validateCredentials(login: string, password: string): boolean {
    const encodedCredentials = encodeCredentials(login, password);
    const expectedToken = import.meta.env.VITE_AUTH_TOKEN;

    return encodedCredentials === expectedToken;
}
