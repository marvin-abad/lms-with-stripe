"use client";

import { Layout, Compass } from 'lucide-react'
import SidebarItem from './SidebarItem';


//creating an array of items
const guestRoutes = [
    {
        icon: Layout,
        label: "Dashboard",
        href: "/"
    },
    {
        icon: Compass,
        label: "Browse",
        href: "/search"
    }
]

const SidebarRoutes = () => {
    //creating new constant variable
    //copying the content of guestRouets into routes
    const routes = guestRoutes;

  return (
    <div className='flex flex-col w-full'>
        {/*mapping over routes to render a list of SidebarItem components.*/}
        {routes.map((route) => (
        <SidebarItem
            key={route.href}
            icon={route.icon}
            label={route.label}
            href={route.href}
          /> 
          ))} 
          
    </div>
  )
}

export default SidebarRoutes