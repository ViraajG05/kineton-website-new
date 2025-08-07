'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import ThemeToggle from './ThemeToggle'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed top-2 left-1/2 transform -translate-x-1/2 w-[98%] z-50 bg-white/60 dark:bg-[#0e0e0e]/60 backdrop-blur-md backdrop-saturate-150 border border-gray-200/40 dark:border-white/10 rounded-[10px] shadow-md transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image src="/Logo.png" alt="Kineton Logo" width={36} height={36} />
            <span className="text-lg font-semibold text-gray-900 dark:text-white">Kineton</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-5">
            <Link href="#home" className="nav-item">Home</Link>
            <Link href="#products" className="nav-item">Product</Link>
            <Link href="/solutions" className="nav-item">Solution</Link>
            <Link href="#contact" className="nav-item">Contact</Link>

            <button className="btn-primary">Join the Waitlist →</button>
            <button className="btn-outline">Sign Up</button>

            <ThemeToggle />
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
          <div className="md:hidden mt-4 space-y-4">
            <Link href="/" className="mobile-nav-item">Home</Link>
            <Link href="#products" className="mobile-nav-item">Product</Link>
            <Link href="/solutions" className="mobile-nav-item">Solution</Link>
            <Link href="#contact" className="mobile-nav-item">Contact</Link>

            <button className="btn-primary bg-primary w-full">Join the Waitlist</button>
            <button className="btn-outline w-full">Sign Up</button>

            <div className="flex justify-center">
              <ThemeToggle />
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
