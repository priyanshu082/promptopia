'use client'
import React from 'react'
import { useState } from 'react'
import Image from 'next/image'
import { useSession } from 'next-auth/react'
import { usePathname,useRouter } from 'next/navigation'
import copyIcon from '../public/assests/icon/copy.svg'
import tickIcon from '../public/assests/icon/tick.svg'

const PromptCard = ({post ,handleTagClick,handleEdit,handleDelete}) => {

  const {data:session}=useSession();
  const pathName=usePathname();
  const router=useRouter

  const [copy, setCopy] = useState("")

  const handleCopy=()=>{
    setCopy(post.prompt)
    navigator.clipboard.writeText(post.prompt)
    setTimeout(() => {
      setCopy("")
    }, 3000);
  }
  return (
    <div className='flex-1 break-inside-avoid rounded-lg border border-gray-300 bg-gray-200 bg-clip-padding p-6 pb-4 backdrop-blur-lg backdrop-filter md:w-[360px] w-full h-fit'>
      <div className='flex justify-between items-start gap-5'>
        <div className='flex-1 flex justify-start items-center cursor-pointer gap-3'>
          <Image
          src={post.creator?.image}
          alt="user_image"
          width={40}
          height={40}
          className='rounded-full object-contain'
          />

          <div className='felx lfex-col'>
            <h3 className='font-satoshi font-semibold text-gray-900'>
              {post.creator?.username}
            </h3>
            <p className='font-inter text-sm text-gray-500'>
              {post.creator?.email}
            </p>
          </div>

        </div>
        <div className='copy_btn' onClick={handleCopy}>
          <Image
          src={copy===post.prompt ? tickIcon : copyIcon }
          width={20}
          height={20}
          />
        </div>
      </div>
      
      <p className='my-4 font-satoshi text-gray-700 text-sm '>
        {post.prompt}
      </p>
      <p className='font-inter text-sm blue_gradient cursor-pointer'
          onClick={()=>handleTagClick && handleTagClick(
            post.tag
          )}>
        {post.tag}
      </p>
       {session?.user.id ===post.creator?._id && pathName==='/profile' && (
          <div className='mt-5 flex-center gap-4 border-t-[1px] border-gray-200 pt-3'>
            <p className='font-inter text-sm green_gradient cursor-pointer'
            onClick={handleEdit}
            >
                Edit
            </p>
            <p className='font-inter text-sm orange_gradient cursor-pointer'
            onClick={handleDelete}
            >
                Delete
            </p>
          </div>
      )} 
    </div>
  )
}

export default PromptCard