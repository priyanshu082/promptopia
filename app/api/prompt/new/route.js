import Prompt from "@/models/Prompt";
import { connectToDB } from "@/utils/database";
 
export const POST = async (req) => {
    const { name,image,email, prompt, tag } = await req.json();

    try {
        await connectToDB();
        const newPrompt = new Prompt({ 
            email:email,
             prompt, 
             tag,
             image,
             name,
            });
        await newPrompt.save();
        return new Response(JSON.stringify(newPrompt), { status: 201 })
    } catch (error) {
        return new Response("Failed to create a new prompt", { status: 500 });
    }
}