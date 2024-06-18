import prisma from '@/libs/prisma'
import React from 'react'

export default async function CommentBox({anime_mal_id}) {
    const comments = await prisma.Comment.findMany({
        where : {anime_mal_id}
    })
    console.log(comments);
  return (
        <div className='grid grid-cols-4 gap-4 my-1'>
            {comments.map((komen) => {
                return(
                    <div key={komen.id} className='bg-primary p-2 text-center border border-accent space-y-1'>
                        <p className='text-lg'>{komen.comment}</p>
                        <p className='text-xs italic'>{komen.username}</p>
                    </div>
                )
            })}
        </div>
  )
}
