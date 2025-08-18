import client from "@/lib/contentful";
import BlogHero from "@/components/blog/BlogHero";
import BlogCategories from "@/components/blog/BlogCategories";
import BlogFeatured from "@/components/blog/BlogFeatured";
import BlogGrid from "@/components/blog/BlogGrid";
import CTA from "@/components/CTA";
import { IBlogPost } from "@/components/blog/BlogDetail";
import { Document } from "@contentful/rich-text-types";
import { EntrySkeletonType, Asset } from "contentful";

interface BlogFields {
  title: string;
  slug: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: number;
  image?: Asset;
  category: string;
  featured?: boolean;
  content?: Document;
}

type BlogEntrySkeleton = EntrySkeletonType<BlogFields>;

export async function getBlogPosts(): Promise<IBlogPost[]> {
  const entries = await client.getEntries<BlogEntrySkeleton>({
    content_type: "blog",
  });

  return entries.items.map((item) => {
    const { fields, sys } = item;

    const imageAsset = fields.image as Asset | undefined;
    const imageUrl = imageAsset?.fields?.file?.url;

    console.log("Image URL: ", imageUrl);

    return {
      id: sys.id,
      title: fields.title,
      slug: fields.slug,
      excerpt: fields.excerpt,
      author: fields.author,
      date: new Date(fields.date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
      readTime: `${fields.readTime} min read`,
      image: imageUrl ? "https:" + imageUrl : "/placeholder.jpg",
      category: fields.category,
      featured: fields.featured ?? false,
      content: fields.content,
    };
  });
}

const Blog = async () => {
  const posts = await getBlogPosts();

  return (
    <div className="relative overflow-hidden">
      <BlogHero />
      <BlogCategories />
      <BlogFeatured posts={posts} />
      <BlogGrid posts={posts} />

      <section className="relative py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <CTA />
        </div>
      </section>
    </div>
  );
};

export default Blog;
