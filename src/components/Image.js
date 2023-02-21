import React from 'react'

export default function Image({imageUrl,fullImageUrl, userName, profileImage}) {
  return (
      <a href={fullImageUrl} target="_blank" className='inline-block w-5/6 justify-center place-content-center rounded-lg'>
        <img src={imageUrl}/> 
        <div className='text-left pt-1 pb-5'>{userName}</div>
        <div className='text-left pt-1 pb-5'>{profileImage}</div>
      </a>
  )
}