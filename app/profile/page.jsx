'use client'
import React from 'react'
import { useState, useEffect,useCallback } from 'react'
import { useUser } from "@clerk/nextjs";
import Profile from '@/components/Profile'


const page = () => {

  const { user } = useUser()

  const [posts, setPosts] = useState([])

  console.log(user?.emailAddresses[0]?.emailAddress)

  const fetchPosts = useCallback(async () => {
    try {
      const response = await fetch(`/api/users/${user?.emailAddresses[0]?.emailAddress}/posts`);
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.error(error);
    }
  }, [user]);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);


  const handleDelete = async (post) => {
    const hasConfirmed = confirm("Are you sure!? You want to delete your prompt");

    if (hasConfirmed) {
      try {
        await fetch(`/api/prompt/${post}`, {
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
      name={user?.fullName}
      desc="Welcome to my profile"
      data={posts}
      handleDelete={handleDelete}
    />
  )
}

export default page