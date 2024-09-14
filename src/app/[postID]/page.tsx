import { prisma } from "@/server/prisma";
import { PostCard } from "../post-component";


export default async function Post({ params }: { params: { postID: string } }) {
    const post = await prisma.post.findUnique({
        where: {
            id: parseInt(params.postID, 0)
        }
    })

    if (post) {
        return (
            <h1>
                <PostCard
                    header={post.header}
                    body={post.body}
                />
            </h1>
        )
    }

    return (
        <h1>Post not found.</h1>
    )
}