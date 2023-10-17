"use client";

import { UserButton } from "@clerk/nextjs";
import { usePathname } from "next/navigation";

import { Button } from "./ui/button";
import { LogOut } from "lucide-react"
import Link from "next/link";

const NavbarRoutes = () => {
    const pathname = usePathname();

    const isTeacherPage = pathname?.startsWith("/teacher");
    const isPlayerPage = pathname?.includes("/chapter"); // individual course page

  return (
    <div className="flex gap-x-2 ml-auto">
        {/** Exit Button */}
        {isTeacherPage || isPlayerPage ? (
        <Link href="/"> 
            <Button size="sm" variant="ghost">
                <LogOut className="h-4 w-4 mr-2" />
                Exit
            </Button>
        </Link>
        ) : (
            // teacher mode button
            <Link href="/teacher/course"> 
                <Button size="sm" variant="ghost">
                    Teacher mode
                </Button>
            </Link>
        )}
        {/** Avatar w/ user signout button */}
        <UserButton 
            afterSignOutUrl="/"    
        />
    </div>
  )
}

export default NavbarRoutes