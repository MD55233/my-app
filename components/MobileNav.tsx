'use client'
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation" ;
  

const MobileNav = ({user}:MobileNavProps) => {
    const pathname = usePathname();
  return (
    <section className="w-full max-w-[264px]">
      
        <Sheet>
  <SheetTrigger>
    <Image src="/icons/hamburger.svg" width={30}  height={30} alt="menu" className="cursor-pointer"/>
  </SheetTrigger>
  <SheetContent side="left" className="border-none bg-white">
  <div className="profile-banner flex flex-col pb-8"/>
     <div className="profile">
      <div className="profile-img">
        <span className="text-5xl font-bold text-blue-500"> {user.firstName[0]} </span>
      </div>
      <div className="profile-details">
        <h1 className='profile-name'>
          {user.firstName} {user.lastName}
        </h1>
        <p  className="profile-email"> {user.email} </p>

      </div>
     </div>
          <div className="mobilenev-sheet">
           <SheetClose asChild>
            <nav className="flex h-full flex-col gap-6 pt-16 text-white">
            {sidebarLinks.map((item) => {
          const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`);
          return ( 
            <SheetClose asChild key={item.route}>
                 <Link
              href={item.route}
              key={item.label}
              className={cn('mobilenav-sheet_close w-full', { 'bg-bank-gradient': isActive })} // Correct class name and conditional
            >
              
                <Image
                  src={item.imgURL}
                  alt={item.label}
                  width={20}
                  height={20}
                  className={cn({
                    'brightness-[3] invert-0':isActive
                  })}                 
                  />

           
              <p className={cn("text-16 font-semibold text-black-2", { '!text-white': isActive })}>
              {item.label}
              </p>

            </Link>
            </SheetClose>
           
          );
        })}

           USER
            </nav>
           </SheetClose>
           FOOTER 

          </div>
  </SheetContent>
</Sheet>
</section>
  )
}
export default MobileNav