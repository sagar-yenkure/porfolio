import { Card } from "./ui/card";
import { ArrowRight } from "lucide-react";
import { Article } from "@/constants/blogs";
import { Badge } from "./ui/badge";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import formatDateWithOrdinal from "@/hooks/useformatDateWithOrdinal";

const BlogCard = ({ post }: { post: Article }) => {
  return (
    <Card
      key={post.id}
      className="order-last border-0 bg-transparent shadow-none px-2 sm:order-first sm:col-span-12 lg:col-span-10 lg:col-start-2"
    >
      <div className="grid gap-y-6 sm:grid-cols-10 sm:gap-x-5 sm:gap-y-0 md:items-center md:gap-x-8 lg:gap-x-12">
        <div className="sm:col-span-5">
          <div className="mb-4 md:mb-6">
            <div className="flex flex-wrap gap-3 text-xs uppercase tracking-wider text-muted-foreground md:gap-5 lg:gap-6">
              {post.tags?.map((tag: string) => <Badge key={tag}>{tag}</Badge>)}
            </div>
          </div>
          <Link href={`/blogs/${post.slug}`} className="hover:underline">
            <h2 className="text-xl font-semibold md:text-2xl lg:text-3xl">
              {post.title}
            </h2>
          </Link>
          <p className="mt-4 text-muted-foreground md:mt-5">{post.summary}</p>
          <div className="mt-6 flex items-center space-x-4 text-sm md:mt-8">
            <span className="text-muted-foreground">{post.author}</span>
            <span className="text-muted-foreground">•</span>
            <span className="text-muted-foreground">
              {formatDateWithOrdinal(post.published)}
            </span>
          </div>
          <div className="mt-6 flex items-center md:mt-8">
            <Link
              href={`/blogs/${post.slug}`}
              className=" items-center justify-center font-semibold md:text-base"
            >
              <Button
                variant={"outline"}
                className="flex gap-2 justify-center items-center hover:cursor-pointer"
              >
                Read more
                <ArrowRight />
              </Button>
            </Link>
          </div>
        </div>
        <div className="order-first sm:order-last sm:col-span-5">
          <div className="aspect-[16/9] relative overflow-clip rounded-lg border border-border">
            <Image
              src={post.image}
              alt={post.title}
              quality={100}
              fill
              className="object-contain transition-opacity duration-300 fade-in hover:opacity-70"
            />
          </div>
        </div>
      </div>
    </Card>
  );
};

export default BlogCard;
