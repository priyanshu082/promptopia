import nextAuth from "next-auth";
import GoogleProvider from 'next-auth/providers/google'

import User from "@/models/user";
import { connectToDB } from "@/utils/database";
import { findDOMNode } from "react-dom";

const handler=nextAuth({
    providers:[
        GoogleProvider({
            clientId:process.env.GOOGLE_ID,
            clientSecret:process.env.GOOGLE_ID_SECRET,
        })
    ],

    async session({session}){
        const sessionUser=await User.findOne({
            email:session.user.email,
        })

        session.user.id=sesssionuser._id.toString();

        return session;
    },
    async signIn({profile}){
        try{
            await connectToDB();

            //check if user already exits 
            const userExist=await User.findOne({
                emial:profile.email
            })  
            //if not ,create a user
            if(!userExist){
                await User.create({
                    email:profile.email,
                    username:profile.name.replace(" ","").toLowerCase(),
                    image:profile.picture
                })
            }

            return true;
        } catch (error){
            console.log(error);
            return false;
        }
    }
})

export {handler as GET ,handler as POST}