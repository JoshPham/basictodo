import { prisma } from "@/server/prisma";
import { PostCard } from "./post-component";

export default async function Home() {
  const posts = await prisma.post.findMany();

  return (
    <div>
      {posts.map((post, key) => (
        <PostCard 
          header={post.header}
          body={post.body}
        />
      ))}
    </div>
  );
}
