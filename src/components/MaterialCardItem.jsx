import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'

const MaterialCardItem = ({item}) => {
  return (
    <div className='border shadow-md rounded-lg p-5 flex flex-col items-center'>
          <h5 className='p-1 px-2 text-sm bg-green-500 text-white rounded-full'>Ready</h5>
          <Image src={item.icon} alt={item.name} width={50} height={50} />
          <h2 className='font-medium'>{item.name}</h2>
          <p className='text-gray-500 text-sm text-center line-clamp-1'>{item.desc}</p>
      <Button className='mt-3 w-full bg-gradient-to-r from-indigo-400 to-pink-400 dark:from-indigo-300 dark:to-pink-300'> View </Button>
    </div>
  )
}

export default MaterialCardItem
