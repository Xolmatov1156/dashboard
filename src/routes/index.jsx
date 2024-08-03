import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Agents, Articles, Contacts, Ideas, Overview, Settings, Subscription, Tickets } from '../pages'

const CustomRoutes = () => {
  return (
    <div className='w-[80%]  bg-[#F7F8FC]'>
        <Routes>
        <Route path='/' element={<Overview />} />
        <Route path='/tickets' element={<Tickets />} />
        <Route path='/ideas' element={<Ideas />} />
        <Route path='/contacts' element={<Contacts />} />
        <Route path='/agents' element={<Agents />} />
        <Route path='/articles' element={<Articles />} />
        <Route path='/settings' element={<Settings />} />
        <Route path='/subscription' element={<Subscription />} />
    </Routes>
    </div>
  )
}

export default CustomRoutes
