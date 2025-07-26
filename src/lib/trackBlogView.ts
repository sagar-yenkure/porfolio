import { redis } from "./redis";

export async function trackBlogView(slug: string) {
    try {
        const totalViewKey = `blog:view:${slug}:total`;
        await redis.incr(totalViewKey);

    } catch (error) {
        console.log("error while tracking blog view", error);
    }
}