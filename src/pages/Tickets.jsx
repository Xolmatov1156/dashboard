import React from 'react'
import { Search, More, New, Sort, Filter, User1, User2, User3, User4, User5, User6, User7, User8} from '../assets/images/Icons'
import Avatar from '../assets/images/avatar.jpg'

const Tickets = () => {
  const arr = [
    {
        id:1,
        img:<User1 />,
        details:"Contact Email not Linked",
        details_time: "Updated 1 day ago",
        customer:"Tom Cruise",
        customer_time:"on 24.05.2019",
        date:"May 26, 2019",
        date_time:"6:30 PM",
        buttonType:"1"
    },
    {
      id:2,
      img:<User2/>,
      details:"Adding Images to Featured Posts",
      details_time: "Updated 1 day ago",
      customer:"Matt Damon",
      customer_time:"on 24.05.2019",
      date:"May 26, 2019",
      date_time:"8:00 AM",
      buttonType:"3"
    },
    {
      id:3,
      img:<User3/>,
      details:"When will I be charged this month?",
      details_time: "Updated 1 day ago",
      customer:"Robert Downey",
      customer_time:"on 24.05.2019",
      date:"May 26, 2019",
      date_time:"8:00 AM",
      buttonType:"3"
    },
    {
      id:4,
      img:<User4/>,
      details:"Payment not going through",
      details_time: "Updated 1 day ago",
      customer:"Christian Bale",
      customer_time:"on 24.05.2019",
      date:"May 26, 2019",
      date_time:"8:00 AM",
      buttonType:"2"
    },
    {
      id:5,
      img:<User5/>,
      details:"Unable to add replies",
      details_time: "Updated 1 day ago",
      customer:"Henry Cavil",
      customer_time:"on 24.05.2019",
      date:"May 26, 2019",
      date_time:"8:00 AM",
      buttonType:"3"
    },
    {
      id:6,
      img:<User6/>,
      details:"Downtime since last week",
      details_time: "Updated 1 day ago",
      customer:"Chris Evans",
      customer_time:"on 24.05.2019",
      date:"May 26, 2019",
      date_time:"8:00 AM",
      buttonType:"2"
    },
    {
      id:7,
      img:<User7/>,
      details:"Referral Bonus",
      details_time: "Updated 1 day ago",
      customer:"Sam Smith",
      customer_time:"on 24.05.2019",
      date:"May 26, 2019",
      date_time:"8:00 AM",
      buttonType:"1"
    },
    {
      id:8,
      img:<User8/>,
      details:"How do I change my password?",
      details_time: "Updated 1 day ago",
      customer:"Steve Rogers",
      customer_time:"on 24.05.2019",
      date:"May 26, 2019",
      date_time:"8:00 AM",
      buttonType:"2"
    },
]


  return (
    <>
    <div className='w-[1122px] mt-[30px] mx-auto flex justify-between'>
      <h2 className='text-[24px] text-[#252733] font-bold tracking-wide'>Tickets</h2>
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
    <div className='w-[1122px] mx-auto border-[1px] bg-white border-slate-400 h-[880px] mt-[54px] rounded-md'>
      <div className='flex justify-between px-[32px] mt-[32px] items-center'>
        <h3 className='text-[20px] text-[#252733] font-semibold'>All tickets</h3>
        <div className='flex space-x-[32px]'>
          <button className='flex items-center space-x-[8px]'>
            <Sort/>
            <p>Sort</p>
          </button>
          <button className='flex items-center space-x-[8px]'>
            <Filter/>
            <p>Filter</p>
          </button>
        </div>
      </div>
      <div className='flex pl-[32px] mt-[48px] gap-[40px] text-[14px] font-mono text-[#9FA2B4] pb-[12px] border-b-[1px] border-[#9FA2B4]'>
        <p className='w-[400px]'>Ticket details</p>
        <p className='w-[200px]'>Customer name</p>
        <p className='w-[140px]'>Date</p>
        <p className='w-[104px]'>Priority</p>
      </div>
      <ul className=''>
        {arr.map(item => 
        <li key={item.id} className='h-[92px] border-b-[1px] border-[#9FA2B4] px-[31px] flex'>
        {item.img && <div className='mr-[24px] mt-[27px]'>{item.img}</div>}
        <div className='mt-[26px]  w-[372px]'>
          <p className='text-[16px]'>{item.details}</p>
          <span className='text-[#9FA2B4] text-[14px]'>{item.details_time}</span>
        </div>
        <div className='mt-[26px] w-[208px]'>
          <p className='text-[16px]'>{item.customer}</p>
          <span className='text-[#9FA2B4] text-[14px]'>{item.customer_time}</span>
        </div>
        <div className='mt-[26px] text-center w-[140px]'>
          <p className='text-[16px]'>{item.date}</p>
          <span className='text-[#9FA2B4] text-[14px]'>{item.date_time}</span>
        </div>
        <p className={`w-[76px] text-center text-[14px] rounded-lg my-auto text-white h-[24px] ml-[70px] ${item.buttonType == "1" ? "bg-[#F12B2C]" : ""} ${item.buttonType == "2" ? "bg-[#29CC97]" : ""} ${item.buttonType == "3" ? "bg-[#FEC400]" : ""} `}>
        {item.buttonType == "1" ? "HIGH" : ""}
        {item.buttonType == "2" ? "NORMAL" : ""}
        {item.buttonType == "3" ? "LOW" : ""}
        </p>
        <div className='my-auto ml-[72px]'><button><More/></button></div>
    </li>
        )}
      </ul>
    </div>
    </>
    
  )
}

export default Tickets
