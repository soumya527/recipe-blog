import Link from "next/link";

export default function PostCard(props) {
  const { post } = props;

  return (
    <Link className="unstyled" href={`/recipe/${post.slug}`}>
      <div className="postCard">
        <h3>{post.title}</h3>
        <p>{post.bio}</p>

        <div>
          <h5>Prep Time</h5>
          <p>{post.prep_time}</p>
        </div>
        <div>Cook TIme</div>
        <p>{post.cook_time}</p>
      </div>
    </Link>
  );
}
