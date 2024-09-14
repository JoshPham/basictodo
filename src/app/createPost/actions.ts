"use server";

import { prisma } from "@/server/prisma";
import { PostProps } from "../post-component";
import { revalidatePath } from "next/cache";

export const createPost = async (post: FormData) => {
    const headerInput = post.get("header") as string
    const bodyInput = post.get("body") as string

    await prisma.post.create({
        data: {
            header: headerInput,
            body: bodyInput
        }
    })

} 