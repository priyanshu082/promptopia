'use client'
import { useState } from "react"
import { useUser } from "@clerk/nextjs";
import Form from "@/components/Form"
import { useRouter } from "next/navigation"

const CreatePrompt = () => {

  const router=useRouter();

  const { user } = useUser()
  const [submitting,setSubmitting]=useState(false)
  const [post,setPost]=useState({
    prompt:'',
    tag:'',
  })

  const createPrompt=async (e)=>{
    e.preventDefault();
    setSubmitting(true);

    try{
      //const session = await getSession();
      const res=await fetch('/api/prompt/new',{
        method:'POST',
        body:JSON.stringify({
          prompt:post.prompt,
          email:user?.emailAddresses[0]?.emailAddress,
          tag:post.tag,
          image:user.imageUrl,
          name:user?.fullName
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
    type="Create"
    post={post}
    setPost={setPost}
    submitting={submitting}
    handleSubmit={createPrompt}
    />
  )
}

export default CreatePrompt