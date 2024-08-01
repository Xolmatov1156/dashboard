import React from 'react'
import { Search, New,} from '../assets/images/Icons'
import Avatar from '../assets/images/avatar.jpg'

const Articles = () => {
  return (
    <div className='w-[1122px] mt-[30px] mx-auto flex justify-between'>
      <h2 className='text-[24px] text-[#252733] font-bold tracking-wide'>Articles</h2>
      <div className='flex items-center'>
        <div className='flex gap-[24px]'>
        <Search/>
        <New/>
        </div>
        <div className='h-[32px] mx-[32px] w-[2px] bg-slate-400'></div>
        <p className='font-semibold text-[14px] text-[#252733]'>Jones Ferdinand</p>
        <img src={Avatar} alt="ava" height={44} width={44} className='rounded-[50%] ml-[14px]'/>
      </div>
    </div>
  )
}

export default Articles
