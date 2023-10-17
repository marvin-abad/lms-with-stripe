"use client";

import { Layout, Compass, List, BarChart } from 'lucide-react'
import SidebarItem from './SidebarItem';
import { usePathname } from 'next/navigation';


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

const teacherRoutes = [
    {
        icon: List,
        label: "Course",
        href: "/teacher/course"
    },
    {
        icon: BarChart,
        label: "Analytics",
        href: "/teacher/analytic"
    }
]

const SidebarRoutes = () => {

    const pathname = usePathname();

    const isTeacherPage = pathname?.includes("/teacher");
    //creating new constant variable
    //copying the content of guestRouets into routes
    const routes = isTeacherPage ? teacherRoutes : guestRoutes;

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