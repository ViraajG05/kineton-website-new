'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import ThemeToggle from './ThemeToggle'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-transparent sticky top-0 z-50 py-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo and Title - No Box */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/Logo.png"
                alt="Kineton Logo"
                width={48}
                height={48}
                className="mr-2"
              />
              <span className="text-2xl font-bold text-gray-900 dark:text-white">Kineton</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Navigation Items in Box */}
            <div className="bg-transparent backdrop-blur-md dark:bg-transparent rounded-[10px] px-5 py-3">
              <div className="flex items-center space-x-6">
                <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-gray-700 dark:text-gray-300 hover:text-[#004AAD] dark:hover:text-[#004AAD] text-base font-medium transition-colors">
                  Home
                </button>
                <Link href="#products" className="text-gray-700 dark:text-gray-300 hover:text-[#004AAD] dark:hover:text-[#004AAD] text-base font-medium transition-colors">
                  Product
                </Link>
                <Link href="#solutions" className="text-gray-700 dark:text-gray-300 hover:text-[#004AAD] dark:hover:text-[#004AAD] text-base font-medium transition-colors">
                  Solution
                </Link>
                <Link href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-[#004AAD] dark:hover:text-[#004AAD] text-base font-medium transition-colors">
                  Contact Us
                </Link>
              </div>
            </div>

            {/* Join Waitlist Button */}
            <button className="bg-gradient-to-r from-[#004AAD] to-[#0055c7] text-white px-6 py-3 rounded-[10px] text-base font-medium hover:from-[#0055c7] hover:to-[#004AAD] transition-all duration-300 shadow-lg hover:shadow-xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 animate-shine"></div>
              <span className="relative z-10 flex items-center gap-2">
                Join the Waitlist →
              </span>
            </button>

            {/* Sign Up Button */}
            <button className="bg-transparent border border-gray-300 dark:border-white/30 text-gray-700 dark:text-white px-6 py-3 rounded-[10px] text-base font-medium hover:bg-gray-50 dark:hover:bg-white/10 hover:border-gray-400 dark:hover:border-white/50 transition-all duration-300 relative overflow-hidden group">
              <span className="relative z-10">
                Sign Up
              </span>
            </button>

            {/* Theme Toggle Button */}
            <ThemeToggle />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 focus:outline-none focus:text-blue-600 dark:focus:text-blue-400"
            >
              <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4">
            <div className="bg-transparent rounded-[10px] p-4 space-y-3">
              <div className="space-y-2">
                <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-white hover:text-blue-300 block text-sm font-medium transition-colors w-full text-left">
                  Home
                </button>
                <Link href="#products" className="text-white hover:text-blue-300 block text-sm font-medium transition-colors">
                  Product
                </Link>
                <Link href="#solutions" className="text-white hover:text-blue-300 block text-sm font-medium transition-colors">
                  Solution
                </Link>
                <Link href="#contact" className="text-white hover:text-blue-300 block text-sm font-medium transition-colors">
                  Contact Us
                </Link>
              </div>
              <div className="pt-3 border-t border-gray-200 dark:border-gray-600 space-y-2">
                <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-[10px] text-sm font-medium hover:bg-blue-700 dark:hover:bg-blue-500 transition-colors">
                  Join the Waitlist
                </button>
                <button className="w-full bg-transparent border border-white/30 text-white px-4 py-2 rounded-[10px] text-sm font-medium hover:bg-white/10 hover:border-white/50 transition-colors">
                  Sign Up
                </button>
                <div className="flex justify-center">
                  <ThemeToggle />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
} 