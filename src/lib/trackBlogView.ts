import { redis } from "./redis";

export async function trackBlogView(slug: string, ip: string) {
    try {
        const ipViewKey = `blog:view:${slug}:${ip}`;
        const totalViewKey = `blog:view:${slug}:total`;

        await redis.incr(ipViewKey);
        await redis.incr(totalViewKey);

    } catch (error) {
        console.log("error while tracking blog view", error);

    }
}