export interface Article {
  id: string;
  title: string;
  summary: string;
  label: string;
  slug: string;
  content?: string;
  author: string;
  published: string;
  image: string;
  tags: string[];
}
