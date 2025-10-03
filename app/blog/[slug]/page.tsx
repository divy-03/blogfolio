import fs from "fs";
import path from "path";

export default async function Page({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;
  const { default: Post } = await import(`../../../content/${slug}.mdx`);
  return <Post />;
}

export function generateStaticParams() {
  const contentDir = path.join(process.cwd(), "content");
  const files = fs.readdirSync(contentDir);

  return files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => ({
      slug: file.replace(/\.mdx$/, ""),
    }));
}

export const dynamicParams = false;

