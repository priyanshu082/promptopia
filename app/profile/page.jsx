'use client'

import React from 'react'
import { useState, useEffect,useCallback } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

import Profile from '@/components/Profile'


const page = () => {

  const router = useRouter();

  const { data: session } = useSession();

  const [posts, setPosts] = useState([])


  const fetchPosts = useCallback(async () => {
    try {
      const response = await fetch(`/api/users/${session?.user.id}/posts`);
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.error(error);
    }
  }, [session?.user.id]);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);



  const handleEdit = (post) => {
    router.push(`/update-prompt?id=${post._id}`)
  }

  const handleDelete = async (post) => {
    const hasConfirmed = confirm("Are you sure!? You want to delete your prompt");

    if (hasConfirmed) {
      try {
        await fetch(`/api/prompt/${post._id.toString()}`, {
          method: 'DELETE',
        });

        // Filter posts
        const filteredPosts = posts.filter((item) => item._id !== post._id);
        setPosts(filteredPosts);

        // Fetch posts again after updating the state
        fetchPosts();
      } catch (error) {
        console.log(error);
      }
    }
  };



  return (
    <Profile
      name="My"
      desc="Welcome to my profile"
      data={posts}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
  )
}

export default page