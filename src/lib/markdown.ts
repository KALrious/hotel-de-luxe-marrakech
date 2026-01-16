import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDirectory = path.join(process.cwd(), "content");

export interface HotelData {
    slug: string;
    title: string;
    featured: boolean;
    stars: number;
    description: string;
    category: string;
    image: string;
    location: string;
    amenities: string[];
    bookingUrl: string;
    content: string;
}

export interface RestaurantData {
    slug: string;
    name: string;
    hotel: string;
    cuisine: string;
    description: string;
    image: string;
    chef: string;
    bookingUrl: string;
    content: string;
}

export interface SpaData {
    slug: string;
    name: string;
    hotel: string;
    description: string;
    image: string;
    highlights: string[];
    bookingUrl: string;
    content: string;
}

export function getHotels(): HotelData[] {
    const hotelsPath = path.join(contentDirectory, "hotels");
    if (!fs.existsSync(hotelsPath)) return [];

    const fileNames = fs.readdirSync(hotelsPath);
    return fileNames
        .filter((fileName) => fileName.endsWith(".md"))
        .map((fileName) => {
            const slug = fileName.replace(/\.md$/, "");
            const fullPath = path.join(hotelsPath, fileName);
            const fileContents = fs.readFileSync(fullPath, "utf8");
            const { data, content } = matter(fileContents);

            return {
                slug,
                ...data,
                content,
            } as HotelData;
        })
        .sort((a, b) => (a.featured === b.featured ? 0 : a.featured ? -1 : 1));
}

export function getHotelBySlug(slug: string): HotelData | null {
    const fullPath = path.join(contentDirectory, "hotels", `${slug}.md`);
    if (!fs.existsSync(fullPath)) return null;

    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
        slug,
        ...data,
        content,
    } as HotelData;
}

export function getSpas(): SpaData[] {
    const spasPath = path.join(contentDirectory, "spas");
    if (!fs.existsSync(spasPath)) return [];

    const fileNames = fs.readdirSync(spasPath);
    return fileNames
        .filter((fileName) => fileName.endsWith(".md"))
        .map((fileName) => {
            const slug = fileName.replace(/\.md$/, "");
            const fullPath = path.join(spasPath, fileName);
            const fileContents = fs.readFileSync(fullPath, "utf8");
            const { data, content } = matter(fileContents);

            return {
                slug,
                ...data,
                content,
            } as SpaData;
        });
}

export function getSpaBySlug(slug: string): SpaData | null {
    const fullPath = path.join(contentDirectory, "spas", `${slug}.md`);
    if (!fs.existsSync(fullPath)) return null;

    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
        slug,
        ...data,
        content,
    } as SpaData;
}

export function getRestaurants(): RestaurantData[] {
    const restPath = path.join(contentDirectory, "gastronomie");
    if (!fs.existsSync(restPath)) return [];

    const fileNames = fs.readdirSync(restPath);
    return fileNames
        .filter((fileName) => fileName.endsWith(".md"))
        .map((fileName) => {
            const slug = fileName.replace(/\.md$/, "");
            const fullPath = path.join(restPath, fileName);
            const fileContents = fs.readFileSync(fullPath, "utf8");
            const { data, content } = matter(fileContents);

            return {
                slug,
                ...data,
                content,
            } as RestaurantData;
        });
}

export function getRestaurantBySlug(slug: string): RestaurantData | null {
    const fullPath = path.join(contentDirectory, "gastronomie", `${slug}.md`);
    if (!fs.existsSync(fullPath)) return null;

    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
        slug,
        ...data,
        content,
    } as RestaurantData;
}

export interface ContentItem {
    slug: string;
    title: string;
    description: string;
    date?: string;
    image?: string;
    content: string;
}

export function getContentItems(subDir: string): ContentItem[] {
    const dirPath = path.join(contentDirectory, subDir);
    if (!fs.existsSync(dirPath)) return [];

    const fileNames = fs.readdirSync(dirPath);
    return fileNames
        .filter((fileName) => fileName.endsWith(".md"))
        .map((fileName) => {
            const slug = fileName.replace(/\.md$/, "");
            const fullPath = path.join(dirPath, fileName);
            const fileContents = fs.readFileSync(fullPath, "utf8");
            const { data, content } = matter(fileContents);

            return {
                slug,
                ...data,
                content,
            } as ContentItem;
        });
}

export function getContentItemBySlug(subDir: string, slug: string): ContentItem | null {
    const fullPath = path.join(contentDirectory, subDir, `${slug}.md`);
    if (!fs.existsSync(fullPath)) return null;

    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
        slug,
        ...data,
        content,
    } as ContentItem;
}

