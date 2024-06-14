import { connectToDB } from "@/utils/database";
import Prompt from "@/models/Prompt";

export const GET = async (request) => {
    try {
      await connectToDB()
      const prompts = await Prompt.find({}).populate('creator')
      return new Response(JSON.stringify(prompts), {
        status: 200,
        headers: {
          'Cache-Control': 'no-cache, no-store, must-revalidate',
          'Pragma': 'no-cache',
          'Expires': '0',
        },
      })
    } catch(error) {
      return new Response("failed to fetch", {status: 500})
    }
  }