import { redis } from "./redis";

export async function trackBlogView(slug: string, ip: string) {
    const ipViewKey = `blog:view:${slug}:${ip}`;
    const totalViewKey = `blog:view:${slug}:total`;

    await Promise.all([
        redis.incr(ipViewKey),
        redis.incr(totalViewKey),
    ]);
}