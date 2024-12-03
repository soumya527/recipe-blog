import getPostMetadata from "@/utils/getPostMetadata";
import PostCard from "@/components/PostCard";
export default function Home() {
  const postMetadata = getPostMetadata("recipes");

  console.log(postMetadata);
  return (
    <main>
      <div className="postsContainer">
        {postMetadata.map((post, postIndex) => {
          return <PostCard key={postIndex} post={post} />;
        })}
      </div>
    </main>
  );
}
