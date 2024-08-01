import React from 'react'
import { Search, New,} from '../assets/images/Icons'
import Avatar from '../assets/images/avatar.jpg'

const Overview = () => {
  const items = [
    {
      id:1,
      title:"Unresolved",
      text:"60"
    },
    {
      id:2,
      title:"Overdue",
      text:"16"
    },
    {
      id:3,
      title:"Open",
      text:"43"
    },
    {
      id:3,
      title:"On hold",
      text:"64"
    },
  ]
  return (
    <>
    <div className='w-[1122px] mt-[30px] mx-auto flex justify-between'>
      <h2 className='text-[24px] text-[#252733] font-bold tracking-wide'>Overview</h2>
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
    <ul className='w-[1122px] flex justify-between mx-auto mt-[54px]'>
    {items.map((item, index) => (
      <li key={index} className='w-[258px] h-[134px] border-[1px] border-slate-300 rounded-md hover:border-blue-500 hover:text-[#3751FF] cursor-pointer'>
        <h3 className='text-[#9FA2B4] font-bold text-[19px] text-center mt-[24px] hover:text-[#3751FF]'>{item.title}</h3>
        <p className='text-[#252733] text-[40px] text-center font-bold hover:text-[#3751FF]'>{item.text}</p>
      </li>
    ))}
    </ul>
    </>
  )
}

export default Overview
