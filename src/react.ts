/** 
import { useEffect, useState } from "react";

export interface Posts {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface PostList {
  items: Posts[];
}

export default function PostsPage() {
  const [posts, setPosts] = useState<Posts[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch posts");
        }

        const data: Posts[] = await response.json();
        setPosts(data);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Something went wrong"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return <p>Loading posts...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <main className="p-6">
      <h1 className="mb-6 text-3xl font-bold">All Posts</h1>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <article
            key={post.id}
            className="rounded-lg border p-4 shadow-sm"
          >
            <p className="text-sm text-gray-500">
              Post ID: {post.id} | User ID: {post.userId}
            </p>

            <h2 className="my-2 text-xl font-semibold">
              {post.title}
            </h2>

            <p>{post.body}</p>
          </article>
        ))}
      </div>
    </main>
  );
}
*/