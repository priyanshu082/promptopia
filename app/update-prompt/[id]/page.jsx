'use client'
import { useEffect, useState } from "react"
import Form from "@/components/Form"
import { useRouter,useSearchParams } from "next/navigation"

const EditPrompt = ({params}) => {

  const router=useRouter();
  const searchParams=useSearchParams();
  const promptId=params.id

  //const {data: session}=useSession();

  const [submitting,setSubmitting]=useState(false)
  const [post,setPost]=useState({
    prompt:'',
    tag:'',
  })

  console.log(params.id)

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

   const updatePrompt= async (e)=>{
     e.preventDefault();
     setSubmitting(true);

     if(!promptId) return alert ("Prompt Id is not found")

     try{
       
       const res=await fetch(`/api/prompt/${promptId}`,{
         method:'PATCH',
         body:JSON.stringify({
           prompt:post.prompt,
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
    handleSubmit={updatePrompt}
    />
  )
}

export default EditPrompt;