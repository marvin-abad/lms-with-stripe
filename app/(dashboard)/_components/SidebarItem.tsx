"use client";

import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react'
import { usePathname, useRouter } from 'next/navigation'

//Properties of an Object
interface SidebarItemProps {
    icon: LucideIcon;
    label: string;
    href: string;
}

const SidebarItem = ({
    //props
    icon: Icon,
    label,
    href,
}: SidebarItemProps) => {
    //hooks
    const pathname = usePathname(); // retrieve the current pathname or URL
    const router = useRouter(); //
    
    // navigation and highlighting the currently active item or link
    const isActive = (pathname === "/" && href === ".") ||
    pathname === href ||
    pathname?.startsWith(`${href}/`);

    // handle navigation or user clicking on a link or button
    const onClick = () => {
        router.push(href)
    }
  return (
    <button 
        title='button'
        onClick={onClick}
        type='button'
        className={cn(
            "flex items-center gap-x-2 text-slate-500 text-sm font-[500] pl-6 transition-all hover:text-slate-600 hover:bg-slate-300/20",
            isActive && "text-sky-700 bg-sky-200/20 hover:bg-sky-200/20 hover:text-sky-700" 
        )} //lib/utils
    >
        <div className='flex flex-items gap-x-2 py-4'>
            <Icon 
                size={22}
                className={cn(
                    "text-slate-500", isActive && "text-sky-700"
                )}
            />
            {/* call the props */}
            {label}
        </div>
        <div className={cn("ml-auto opacity-0 border-2 border-sky-700 h-full transition-all",
            isActive && "opacity-100"
            )}
        />
    </button>
  )
}

export default SidebarItem