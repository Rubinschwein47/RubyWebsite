export type Project = {
    logoPath: string;
    logoAlt: string;
    externalLinks: { text: string, url: string }[] | [],
    name: string,
    badges: { text: string, color: string }[] | [],
    texts: { tabName: string, text: string }[] | [],
    images: { path: string; alt: string; }[] | [],
    colorRotation: number,
}