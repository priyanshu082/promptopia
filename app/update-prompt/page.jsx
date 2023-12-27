'use client'
import { useEffect, useState } from "react"
import { useSession } from "next-auth/react"
//import { useRouter } from "next/router"
import Form from "@/components/Form"
import { useRouter,useSearchParams } from "next/navigation"

const EditPrompt = () => {

  const router=useRouter();
  const searchParams=useSearchParams();
  const promptId=searchParams.get('id')

  //const {data: session}=useSession();

  const [submitting,setSubmitting]=useState(false)
  const [post,setPost]=useState({
    prompt:'',
    tag:'',
  })

  useEffect(()=>{
    const getPromptDetails=async()=>{
        const response= await fetch(`/api/prompt/${promptId}`)
        const data= await response.json();
        setPost({
            prompt:data.prompt,
            tag:data.tag
        })
    }
    if(promptId) getPromptDetails();
  },[promptId])

   const createPrompt=async (e)=>{
     e.preventDefault();
     setSubmitting(true);

     try{
       //const session = await getSession();
       const res=await fetch('/api/prompt/new',{
         method:'POST',
         body:JSON.stringify({
           prompt:post.prompt,
           userId:session?.user.id,
           tag:post.tag
         })
       })

       if(res.ok){
         router.push('/')
       }

     } catch(error){
       console.log(error)
     } finally{
       setSubmitting(false)
     }
   }
  return (
    <Form
    type="Edit"
    post={post}
    setPost={setPost}
    submitting={submitting}
    handleSubmit={()=>{}}
    />
  )
}

export default EditPrompt;