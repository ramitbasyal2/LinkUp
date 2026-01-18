import React from 'react'
import { menuItemsData } from '../assets/assets'
import { NavLink } from 'react-router-dom'


const MenuItem = ({setSidebarOpen}) => {
  return (
    <div className='px-6 text-gray-600 space-y-1 font-medium flex flex-col gap-2'>
         {
            menuItemsData.map(({label,to,Icon})=>(
                <NavLink key={to} to={to} end={to === '/'} onClick={()=> setSidebarOpen(false)}
                className={({isActive}) => `active flex items-center gap-3 rounded-xl 
                ${isActive ? 'bg-indigo-50 text-indigo-700' : 'hover:bg-gray-5'}`} >
                    <Icon className='w-5 h-5'/>
                    {label}

                </NavLink>
            ))
         }

    </div>
  )
}

export default MenuItem