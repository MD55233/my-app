'use client'

import { sidebarLinks } from '@/constants'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Sidebar = ({ user }: SiderbarProps) => {
  const pathname = usePathname();

  return (
   <section className="sidebar">
     <div className="profile-banner flex flex-col pb-8"/>
     <div className="profile">
      <div className="profile-img">
        <span className="text-5xl font-bold text-blue-500"> {user.name} </span>
      </div>
      <div className="profile-details">
        <h1 className='profile-name'>
        {user.name}
        </h1>
        <p  className="profile-email"> {user.email} </p>

      </div>
     </div>
     <nav className="flex 
     flex-col gap-4">
      
        {sidebarLinks.map((item) => {
          const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`);
          return (
            <Link
              href={item.route}
              key={item.label}
              className={cn('sidebar-link', { 'bg-bank-gradient': isActive })} // Correct class name and conditional
            >
              <div 
              className="relative size-6">
                <Image
                  src={item.imgURL}
                  alt={item.label}
                  fill
                  className={cn({
                    'brightness-[3] invert-0':isActive
                  })}                 
                  />

              </div>
              <p className={cn('sidebar-label', { '!text-white': isActive })}>
              {item.label}
              </p>

            </Link>
          );
        })}

        USER
     </nav>
     
     FOOTER
   </section>
  )
}

export default Sidebar