export interface Article {
  id: number;
  title: string;
  summary: string;
  label: string;
  slug: string;
  content?: string;
  author: string;
  published: string;
  image: string;
  readTime?: number;
  views?: number;
  tags: string[];
}
