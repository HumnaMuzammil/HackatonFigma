"use client"
import React,{ useEffect, useState} from 'react'
import { Foods } from '../../../types/foods';
import { client } from '@/sanity/lib/client';
import { allfoods } from '@/sanity/lib/queries';
import { urlFor } from '@/sanity/lib/image';
import Image from 'next/image';
import { url } from 'inspector';
const FOODS = () => {
    const [foods,setFood]= useState<Foods []>([])
    useEffect(()=>{
      async function fetchfoods() {
      const fetchedFood: Foods[] = await client.fetch(allfoods)
      setFood(fetchedFood)
      } 
      fetchfoods()
    },[]) 
  return (
    <div className="w-full p-10 gap-4 bg-no-repeat bg-center flex justify-center">
      {foods.map((foods) =>(
        <div key={foods._id}
        className='border rounded-lg shadow-md p-4 hover:shadow-lg transition duration-200'>

          {foods.name}
          {foods.image && (
            <Image
            src={urlFor(foods.image).url()}
            alt="images"
            width={200}
            height={200}/>

          )}
          <h1 className='text-lg font-semibold mt-4'>
          {foods.price} </h1>

        </div>
      ))}
    </div>
  )
};


export default FOODS;