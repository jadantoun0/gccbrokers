'use client'

import { useEffect, useState } from 'react'
import {Bars3Icon, XMarkIcon} from '@heroicons/react/24/outline'
import { Dialog, DialogPanel, PopoverGroup } from '@headlessui/react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'


const pages = [
  {
    name: "Products",
    href: "/products"
  },
  {
    name: "Accounts",
    href: "#"
  },
  {
    name: "Platforms",
    href: "#"
  },
  {
    name: "Partners",
    href: "#"
  },
  {
    name: "About",
    href: "#"
  },
];

interface NavbarProps {
  className?: string; 
}

export const Navbar : React.FC<NavbarProps> = ({className}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [customClassName, setCustomClassName] = useState("");
  const pathname = usePathname(); 


  const handleScroll = () => {
    if (window.scrollY > 50) {
      setCustomClassName("bg-white shadow-md border-none text-black");
    } else {
      setCustomClassName("transparent border-b text-white");
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`${className} ${customClassName} h-24 lg:h-30  z-10 fixed top-0 left-0 w-full border-gray-600`}>
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-7 lg:px-8">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">GCC Brokers</span>
            {
              customClassName?.includes('bg-white') ?
            <Image src={"/logo/logo.png"} alt='logo' width={150} height={20} /> : 
            <Image src={"/logo/logo white.png"} alt='logo' priority width={150} height={20} /> 
            }
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className={`h-8 w-8 ${customClassName?.includes('bg-white') ? "text-primaryColor" : "text-white"}`} />
          </button>
        </div>
        <PopoverGroup className={`hidden lg:flex ${customClassName?.includes('bg-white') ? "text-black" : "text-white"} lg:gap-x-12`}>
          {
            pages.map((page, index) => 
              <div key={index}>
                <Link href={page.href}>{page.name}</Link>
                {
                  pathname === page.href && <div className={`h-[1px] mt-1 ${customClassName.includes('bg-white') ? 'bg-primaryColor' : 'bg-white'}`}></div>
                }
              </div>
          )
          }
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
           <button className={`${customClassName.includes('bg-white') ? 'bg-primaryColor text-white' : 'bg-white text-[#0a0c29]'} px-6 py-3 text-sm rounded-full mr-4`}>
            Login
          </button>
            <button className={`px-6 py-3 bg-transparent border text-sm ${customClassName.includes('bg-white') ? 'border-primaryColor text-prim' : 'border-white text-white'}  rounded-full`}>
              Register
            </button>
        </div>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-20"  />
        <DialogPanel className="fixed inset-y-0 z-20 right-0 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">GCC Brokers</span>
              <Image src="/logo/logo.png" height={60} width={180} alt='logo' />
            </Link> 
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className={`py-6 flex flex-col`}>
                {
                  pages.map((page, index) => 
                    <div 
                      onClick={() => setMobileMenuOpen(false)}
                      key={index} className='border hover:bg-gray-100 active:bg-gray-50 cursor-pointer my-3 flex justify-center rounded-sm items-center'>
                      <Link href={page.href} className=' -mx-3 px-3 rounded-md py-2'>{page.name}</Link> 
                    </div>
                )
                }
              </div>
              <div className="py-6 flex flex-col gap-y-4 mx-3">
                <Link
                  href="#"
                  className="-mx-3 border rounded-sm  cursor-pointer px-3 py-2 flex items-center justify-center text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Log in
                </Link>
                <Link
                  href="#"
                  className="-mx-3 border flex items-center cursor-pointer justify-center rounded-sm px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Register
                </Link>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
