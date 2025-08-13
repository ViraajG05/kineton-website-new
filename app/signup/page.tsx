'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function SignUpPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle sign up logic here
    console.log('Sign up:', { email, password })
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-teal-400 via-blue-500 to-orange-400">
      {/* Blurred background overlay */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>
      
      {/* Sign up card */}
      <div className="relative z-10 w-full max-w-sm">
        <div className="bg-[#1a1a1a] rounded-lg shadow-2xl p-6 border border-gray-800">
          {/* Header */}
          <div className="text-left mb-6">
            <h1 className="text-xl font-semibold text-white">Sign in/Sign up</h1>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email field */}
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-white">
                Email ID
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Example@gmail.com"
                className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                required
              />
            </div>

            {/* Password field with toggle */}
            <div className="space-y-2">
              <label htmlFor="password" className="block text-sm font-medium text-white">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Atleast 8 characters"
                  className="w-full px-3 py-2 pr-10 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                  required
                  minLength={8}
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-300 transition-colors"
                >
                  {showPassword ? (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Sign up button */}
            <button
              type="submit"
              className="w-full bg-orange-600 hover:bg-orange-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200"
            >
              SIGN UP
            </button>
          </form>

          {/* Separator */}
          <div className="flex items-center my-4">
            <div className="flex-1 border-t border-gray-600"></div>
            <span className="px-4 text-sm text-gray-400">Or</span>
            <div className="flex-1 border-t border-gray-600"></div>
          </div>

          {/* Social login buttons */}
          <div className="space-y-2">
            {/* Google */}
            <button className="w-full bg-white hover:bg-gray-50 text-gray-900 font-medium py-2 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-3 shadow-sm">
              <Image src="/google.png" alt="Google" width={20} height={20} />
              Sign up with Google
            </button>

            {/* Microsoft */}
            <button className="w-full bg-white hover:bg-gray-50 text-gray-900 font-medium py-2 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-3 shadow-sm">
              <Image src="/microsoft.png?v=2" alt="Microsoft" width={20} height={20} />
              Sign up with Microsoft
            </button>

            {/* GitHub */}
            <button className="w-full bg-white hover:bg-gray-50 text-gray-900 font-medium py-2 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-3 shadow-sm">
              <Image src="/github.png" alt="GitHub" width={20} height={20} />
              Sign up with Github
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
