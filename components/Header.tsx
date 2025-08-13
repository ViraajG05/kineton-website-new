'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import WaitlistModal from './WaitlistModal'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isWaitlistModalOpen, setIsWaitlistModalOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Product', href: '/products' },
    { name: 'Solution', href: '/solutions' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <>
      <nav className="fixed top-2 left-1/2 transform -translate-x-1/2 w-[98%] z-50 bg-white/70 dark:bg-[#0e0e0e]/70 backdrop-blur-md backdrop-saturate-150 border border-gray-200/40 dark:border-white/10 rounded-[10px] shadow-md transition-all duration-300 font-secondary text-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <Image src="/Logo.png" alt="Kineton Logo" width={36} height={36} />
              <span className="text-lg font-semibold text-gray-900 dark:text-white">Kineton</span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-5">
              {navItems.map(item => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-2 py-1 font-medium transition-all duration-300
  ${
    pathname === item.href
      ? 'text-gray-900 dark:text-indigo-500 after:block after:absolute after:-bottom-1 after:left-0 after:w-full after:h-1 after:bg-indigo-500 after:rounded-full after:transition-all after:duration-300'
      : 'text-gray-800 dark:text-white hover:text-indigo-500'
  }`}
                >
                  {item.name}
                  {/* Animated Underline */}
                  <span
                    className={`absolute left-0 -bottom-1 w-full h-1 rounded-full transition-all duration-300
                      ${
                        pathname === item.href
                          ? 'bg-gradient-to-r from-[#ffd84d] via-[#ffffff] to-[#4dabff] scale-x-100'
                          : 'scale-x-0 group-hover:scale-x-100 bg-indigo-500'
                      } origin-left`}
                  ></span>
                </Link>
              ))}

              <button 
                onClick={() => setIsWaitlistModalOpen(true)}
                className="btn-primary"
              >
                Join the Waitlist →
              </button>
              <Link href="/signup" className="btn-outline">Sign Up</Link>
            </div>

            {/* Mobile Toggle */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-800 dark:text-white focus:outline-none"
              >
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Nav */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 space-y-4 flex flex-col items-center">
              {navItems.map(item => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`mobile-nav-item w-full text-center py-2 transition-all duration-300 ${
                    pathname === item.href
                      ? 'bg-gradient-to-r from-[#ffd84d] via-[#ffffff] to-[#4dabff] text-white rounded-lg shadow-lg'
                      : 'text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg'
                  }`}
                >
                  {item.name}
                </Link>
              ))}

              <button 
                onClick={() => setIsWaitlistModalOpen(true)}
                className="btn-primary bg-primary w-full"
              >
                Join the Waitlist
              </button>
              <Link href="/signup" className="btn-outline w-full">Sign Up</Link>
            </div>
          )}
        </div>
      </nav>

      {/* Waitlist Modal */}
      <WaitlistModal 
        isOpen={isWaitlistModalOpen}
        onClose={() => setIsWaitlistModalOpen(false)}
      />
    </>
  )
}
