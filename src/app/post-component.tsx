"use client";

import { useState } from "react";

export type PostProps = {
    header: string
    body: string
}

export function PostCard({
    header,
    body
} : PostProps) {
    const [newTitle, setNewTitle] = useState("");

    const basicFunc = (): PostProps => {
        return {header: "difjs"};
    }
    
    console.log(basicFunc())


    return (
        <div>
            <h1>{header}</h1>
            <p>{body}</p>
            <hr />
        </div>
    )
}