'use client'

import cn from 'classnames'
import { useRouter } from 'next/navigation'
import { useState, useMemo } from 'react'
import { HiOutlineBell } from 'react-icons/hi2'
import { MdOutlineLogout } from 'react-icons/md'
import { RxDashboard } from 'react-icons/rx'
import { IoTriangle } from 'react-icons/io5'
import { FaCircle } from 'react-icons/fa'

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator
} from '@/components/ui/dropdown-menu'
import ThemeSwitcher from '@/components/ThemeSwitcher'
import Link from 'next/link'

type MenuItem = {
  label: string;
  onClick: (e: React.MouseEvent) => void;
  icon?: React.ReactElement;
  divider?: boolean;
}

type MobileMenuProps = {
  menuItems: MenuItem[];
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({ menuItems, isOpen, onClose }: MobileMenuProps) => (
  <div
    className={cn(
      'fixed inset-0 top-16 z-40 overflow-y-auto bg-white p-4 transition-opacity duration-300 ease-in-out dark:bg-gray-900 md:hidden',
      {
        'opacity-100': isOpen,
        'opacity-0 pointer-events-none': !isOpen
      }
    )}
  >
    <div className="mt-16 space-y-2">
      <div className="flex w-full items-center justify-between">
        <p className="text-md py-2 font-normal text-gray-900 dark:text-gray-100">ahummel25@gmail.com</p>
        <span className="size-5 rounded-full bg-gradient-to-tr from-custom-green via-custom-blue to-custom-purple" />
      </div>
      {menuItems.map((item: MenuItem, index: number) => (
        <div key={index}>
          {item.divider && <div className="my-1 border-t border-gray-200 dark:border-gray-700"></div>}
          <button
            className="text-md flex w-full items-center justify-between py-2 text-left font-light text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-700"
            onClick={(e) => {
              item.onClick(e)
              if (item.label !== 'Theme') onClose()
            }}
          >
            <span className='text-gray-600 dark:text-gray-400'>
              {item.label}
            </span>
            {item.label === 'Theme' ? (
              <div
                className="flex items-center"
                onClick={(e) => e.stopPropagation()}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    e.stopPropagation()
                  }
                }}
                role="button"
                tabIndex={0}
              >
                {item.icon && <span className="mr-0.5 text-gray-600 dark:text-gray-400">{item.icon}</span>}
              </div>
            ) : (
              item.icon && <span className="mr-0.5 text-gray-600 dark:text-gray-400">{item.icon}</span>
            )}
          </button>
        </div>
      ))}
    </div>
  </div>
)

const Navbar = () => {
  const router = useRouter()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const menuItems: MenuItem[] = useMemo(() => [
    {
      label: 'Dashboard',
      onClick: () => router.push('/'),
      icon: <RxDashboard size="1.2em" />
    },
    {
      label: 'Account Settings',
      onClick: () => null
    },
    {
      label: 'Theme',
      onClick: (e: React.MouseEvent) => e.preventDefault(),
      divider: true,
      icon: <ThemeSwitcher />
    },
    {
      label: 'Log Out',
      onClick: () => null,
      divider: true,
      icon: <MdOutlineLogout size="1.2em" />
    }
  ], [router])

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between bg-gradient-to-r from-gray-50 via-gray-100 to-gray-50 p-4 text-gray-800 shadow-md transition-all duration-300 dark:bg-gradient-to-r dark:from-slate-900 dark:via-slate-950 dark:to-gray-900 dark:text-gray-100 dark:shadow-none">
      <div className="flex items-center md:ml-1 md:space-x-5">
        <Link
          href='/'
          className='hidden md:block'
          aria-label="Triangle"
        >
          <IoTriangle size="1.6em" />
        </Link>
        <div className="hidden h-5 w-px rotate-[28deg] bg-gray-300 dark:bg-gray-600 md:block"></div>
        <Link
          href="/"
          className="gradient-pink-orange rounded-full"
          aria-label="Circle"
        >
          <FaCircle className="fill-none" size="1.3em" />
        </Link>
        <p className="ml-2 text-sm md:ml-0">Andrew Hummel&apos;s projects</p>
      </div>

      <div className="flex items-center">
        <button
          className="relative flex size-8 items-center justify-center rounded-full border border-gray-300 dark:border-gray-500 cursor-pointer"
          aria-label="Notifications"
        >
          <HiOutlineBell className="text-gray-600 dark:text-gray-300" size="1.2em" />
        </button>

        <button
          className="relative ml-2 flex size-8 flex-col items-center justify-center rounded-full border border-gray-300 dark:border-gray-500 md:hidden"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
          aria-expanded={isMobileMenuOpen}
        >
          <span
            className={cn({
              'rotate-45 translate-y-1': isMobileMenuOpen,
              'mb-0.5': !isMobileMenuOpen,
              'block w-4 h-[0.08em] bg-gray-600 dark:bg-gray-300 transition-transform duration-300 ease-in-out': true
            })}
          />
          <span
            className={cn({
              '-rotate-45 -translate-y-[0.1em]': isMobileMenuOpen,
              'mt-0.5': !isMobileMenuOpen,
              'block w-4 h-[0.08em] bg-gray-600 dark:bg-gray-300 transition-transform duration-300 ease-in-out mt-1': true
            })}
          />
        </button>

        <div className="relative ml-2 hidden text-left md:block">
          <DropdownMenu>
            <DropdownMenuTrigger asChild className="outline-none">
              <button
                className="mr-2 hidden size-8 rounded-full gradient-green-blue-purple md:block cursor-pointer"
                aria-label="Open user menu"
              >
                <div className="flex size-8 items-center justify-center rounded-full bg-white/10" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="absolute right-0 mt-2 w-64 rounded-xl bg-white p-2 shadow-lg ring-1 ring-black/5 dark:bg-gray-900">
              {menuItems.map((item, index) => (
                <div key={index} className={cn(index === 0 ? 'pt-4' : '')}>
                  {item.divider && <DropdownMenuSeparator />}
                  <DropdownMenuItem
                    onClick={item.onClick}
                    className={cn({
                      'cursor-pointer focus:bg-gray-200 dark:focus:bg-gray-800 focus:text-gray-900 focus:rounded-lg focus:shadow-sm dark:focus:text-gray-800': item.label !== 'Theme',
                      'focus:bg-transparent': item.label === 'Theme',
                      'group flex w-full items-center h-10 justify-between px-2 py-3 text-sm font-light transition-all': true
                    })}
                  >
                    <span className={cn(
                      'text-gray-600 dark:text-gray-400',
                      {
                        'group-focus:dark:text-gray-300': item.label !== 'Theme'
                      }
                    )}>
                      {item.label}
                    </span>
                    {item.label === 'Theme' ? (
                      <div
                        className="flex items-center"
                        onClick={(e) => {
                          e.stopPropagation()
                        }}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault()
                            e.stopPropagation()
                          }
                        }}
                        role="button"
                        tabIndex={0}
                      >
                        {item.icon}
                      </div>
                    ) : (
                      item.icon && <span className="text-gray-600 dark:text-gray-400 group-focus:dark:text-gray-300">{item.icon}</span>
                    )}
                  </DropdownMenuItem>
                </div>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <MobileMenu menuItems={menuItems} isOpen={isMobileMenuOpen} onClose={toggleMobileMenu} />
      </div>
    </nav >
  )
}

export default Navbar
