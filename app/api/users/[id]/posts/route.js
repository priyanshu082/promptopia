import { connectToDB } from "@/utils/database";
import Prompt from "@/models/Prompt";

export const GET=async(request,{params})=>{
    try{
        await connectToDB();

        const prompts= await Prompt.find({
            creator:params.id
        }).populate('creator')

        return new Response(JSON.stringify(prompts),{status:200})

    } catch(error){
        return new Response("failed to fetch ",{status:500})
    }
}