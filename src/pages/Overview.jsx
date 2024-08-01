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
      id:4,
      title:"On hold",
      text:"64"
    },
  ]
  const trends = [
    {
      id:1,
      title:"Resolved",
      text:"440"
    },
    {
      id:2,
      title:"Received",
      text:"426"
    },
    {
      id:3,
      title:"Average first response time",
      text:"33m"
    },
    {
      id:4,
      title:"Average response time",
      text:"3h 8m"
    },
    {
      id:5,
      title:"Resolution within SLA",
      text:"94%"
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
    <div className='w-[1122px] h-[546px] border-slate-300 border-[1px] mx-auto mt-[30px] rounded-md flex'>
      <div className='w-[780px] border-slate-300 border-[1px] flex justify-between'>
        <div className='w-full px-[32px] mt-[32px]'>
            <h3 className='font-bold text-[19px]'>Today’s trends</h3>
            <p className='text-[#9FA2B4] text-[12px]'>as of 25 May 2019, 09:41 PM</p>
        </div>
        <div className='mt-[64px] flex items-center w-[172px] h-[16px]'>
        <div className='w-[16px] h-[1px] bg-blue-600 mr-[8px]'></div>
        <p className='text-[12px]'>Today</p>
        <div className='w-[16px] h-[1px] bg-slate-300 ml-[32px] mr-[8px]'></div>
        <p className=' text-[12px] pr-[22px]'>Yesterday</p>
        </div>
      </div>
      <div className='w-[342px] border-slate-300 border-[1px]'>
        <ul className='w-full flex flex-col'>
        {trends.map((item, index) => (
      <li key={index} className='w-full h-[109px] border-[1px] border-slate-300 cursor-pointer'>
        <h3 className='text-[#9FA2B4] font-bold text-[16px] text-center mt-[24px]'>{item.title}</h3>
        <p className='text-[#252733] text-[24px] text-center font-bold'>{item.text}</p>
      </li>
    ))}
        </ul>
        
      </div>
    </div>
    </>
    
  )
}

export default Overview
