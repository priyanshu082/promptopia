import { connectToDB } from "@/utils/database";
import Prompt from "@/models/Prompt";

export const GET=async(request,{params})=>{
    try{
        await connectToDB()
        const prompts= await Prompt.find({
            email:params.id
        }).populate('email')

        return new Response(JSON.stringify(prompts),{status:200})

    } catch(error){
        return new Response("failed to fetch ",{status:500})
    }
}