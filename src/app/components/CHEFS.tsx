"use client"
import React,{ useEffect, useState} from 'react'
import { Chefs } from '../../../types/chefs';
import { client } from '@/sanity/lib/client';
import { allchefs} from '@/sanity/lib/queries';
import { urlFor } from '@/sanity/lib/image';
import Image from 'next/image';
import { url } from 'inspector';
const CHEFS = () => {
    const [chefs,setChefs]= useState<Chefs []>([])
    useEffect(()=>{
      async function fetchchefs() {
      const fetchedchefs: Chefs[] = await client.fetch(allchefs)
      setChefs(fetchedchefs)
      } 
      fetchchefs()
    },[]) 
  return (
    <div className="w-full p-10 gap-4 bg-no-repeat bg-center flex justify-center">
      {chefs.map((chefs) =>(
        <div key={chefs._id}
        className='border rounded-lg shadow-md p-4 hover:shadow-lg transition duration-200'>

          {chefs.name}
          {chefs.image && (
            <Image
            src={urlFor(chefs.image).url()}
            alt="images"
            width={200}
            height={200}/>

          )}
         
        </div>
      ))}
    </div>
  )
};


export default CHEFS;