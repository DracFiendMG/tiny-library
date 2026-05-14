export function matchPathname(pathname: string): boolean {
    return /^\/books\/[^/]+$/.test(pathname);
}