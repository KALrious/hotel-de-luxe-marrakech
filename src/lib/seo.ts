export function getRelAttributes(url: string) {
    if (!url) return undefined;

    // Palais Ronsard exceptions (internal or official domain)
    const isPalaisRonsard =
        url.startsWith('/') ||
        url.toLowerCase().includes('ronsard') ||
        url.toLowerCase().includes('palais-ronsard');

    if (isPalaisRonsard) return undefined;

    // All other external links are nofollow
    return "nofollow noopener noreferrer";
}
