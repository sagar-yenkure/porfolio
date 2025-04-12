export const BASE = process.env.NEXT_PUBLIC_CLOUDINARY_BASE ?? "";
export const cloudinaryUrl = (path: string) => `${BASE}/${path}`;
