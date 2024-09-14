import MobileNav from "@/components/MobileNav";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = { firstName: 'Daniyal', lastName: 'Dawood', email:'sample@gmail.com' };

  return (
    <main className="flex h-screen w-full font-inter">
      <Sidebar user={loggedIn} />
      <div className="flex flex-col w-full">
        <div className="root-layout flex justify-between items-center p-4">
          <Image 
            src="/icons/fairyglowlogo.svg" 
            width={84} 
            height={30} 
            alt="logo" 
          />
         <div>
          <MobileNav user={loggedIn} />
         </div>
        </div>

            <div className="flex-1">
            {children}
            </div>
      </div>
    </main>
  );
}
