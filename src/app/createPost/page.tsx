import { createPost } from "./actions";

export default async function Page() {
    return (
        <form action={async (formData: FormData) => {
            "use server";
            console.log(formData)
            await createPost(formData);
        }}>
            <input type="text" name="header" className="text-black"/> <br /> <br />
            <input type="text" name="body" className="text-black"/> <br />
            <button type="submit">submit</button>
        </form>
    )
}