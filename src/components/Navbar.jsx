import React from 'react'
import { NavLink } from 'react-router-dom'
import { Logo, OverviewIcon, Tickets, Ideas, Contacts, Agents, Articles, Settings, Subscription } from '../assets/images/Icons'


const Navbar = () => {
  return (
    <div className='w-[20%] h-[170vh] bg-[#363740] text-[#DDE2FF] flex flex-col'>
      <a href='/' className='flex items-center gap-[12px] text-[#A4A6B3] text-[19px] mt-[37px] ml-[32px] tracking-wider'><Logo/><p>Dashboard Kit</p></a>
      <NavLink className={`flex gap-5 mt-[59px] items-center pl-[32px] py-[20px] w-full`} to={'/'}><OverviewIcon/>Overview</NavLink>
      <NavLink className={`flex gap-5 items-center pl-[32px] py-[20px] w-full`} to={'/tickets'}><Tickets/> Tickets</NavLink>
      <NavLink className={`flex gap-5 items-center pl-[32px] py-[20px] w-full`} to={'/ideas'}><Ideas/> Ideas</NavLink>
      <NavLink className={`flex gap-5 items-center pl-[32px] py-[20px] w-full`} to={'/contacts'}><Contacts/> Contacts</NavLink>
      <NavLink className={`flex gap-5 items-center pl-[32px] py-[20px] w-full`} to={'/agents'}><Agents/> Agents</NavLink>
      <NavLink className={`flex gap-5 items-center pl-[32px] py-[20px] w-full mb-[16px]`} to={'/articles'}><Articles/> Articles</NavLink>
      <div className='w-full h-[1px] bg-slate-500'></div>
      <NavLink className={`flex gap-5 items-center pl-[32px] py-[20px] w-full mt-[16px]`} to={'/settings'}><Settings/> Settings</NavLink>
      <NavLink className={`flex gap-5 items-center pl-[32px] py-[20px] w-full`} to={'/subscription'}><Subscription/> Subscription</NavLink>
    </div>
  )
}

export default Navbar 
