export const revalidate = 300;

interface Post {
  slug: string;
  title: string;
  content: string;
}

interface Props {
  params: {
    slug: string;
  };
}

export const generateStaticParams = async () => {
  const posts = await fetch("http://localhost:3000/api/content").then((res) =>
    res.json()
  );

  return posts.map((post: Post) => ({
    slug: post.slug,
  }));
};

export default async function BlogPost({ params }: Props) {
  const post = await fetch("http://localhost:3000/api/content")
    .then((res) => res.json())
    .then((posts: Post[]) => posts.find((post) => post.slug === params.slug));

  if (!post) {
    return <h1>Post not found</h1>;
  }

  return (
    <main className="p-4">
      <h1 className="text-4xl font-bold">{post.title}</h1>
      <p className="mt-4 text-lg">{post.content}</p>
    </main>
  );
}
