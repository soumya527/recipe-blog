import getPostMetadata from "@/utils/getPostMetadata";
import Markdown from "markdown-to-jsx";
import react from "react";
import fs from "fs";
import matter from "gray-matter";
function getPostCOntent(slug) {
  const folder = "recipes/";
  const file = folder + `${slug}.md`;
  const content = fs.readFileSync(file, "utf8");

  const matterResult = matter(content);
  return matterResult;
}

export const genarateStaticParams = async () => {
  const posts = getPostMetadata("recipes");
  return posts.map((post) => ({ slug: post.slug }));
};
export async function generateMetadata({ params, searchParams }) {
  const id = params?.slug ? "." + params?.slug : "";

  return {
    title: `The Bubblly Baker ${id.replaceAll("_", " ")}`,
  };
}
export default function RecipePage(props) {
  const slug = props.params.slug;
  const post = getPostCOntent(slug);
  console.log(post);
  return (
    <main>
      {" "}
      <article>
        <Markdown>{post.content}</Markdown>
      </article>
    </main>
  );
}
