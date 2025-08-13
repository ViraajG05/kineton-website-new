'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function SignInPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle sign in logic here
    console.log('Sign in:', { email, password })
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
            <h1 className="text-xl font-semibold text-white">Sign in</h1>
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

            {/* Password field with forgot password link */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label htmlFor="password" className="block text-sm font-medium text-white">
                  Password
                </label>
                <Link href="/forgot-password" className="text-sm text-gray-500 hover:text-gray-400 transition-colors">
                  Forgot Password?
                </Link>
              </div>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Atleast 8 characters"
                className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                required
                minLength={8}
              />
            </div>

            {/* Sign in button */}
            <button
              type="submit"
              className="w-full bg-orange-600 hover:bg-orange-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200"
            >
              SIGN IN
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
              Sign in with Google
            </button>

            {/* Microsoft */}
            <button className="w-full bg-white hover:bg-gray-50 text-gray-900 font-medium py-2 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-3 shadow-sm">
              <Image src="/microsoft.png?v=2" alt="Microsoft" width={20} height={20} />
              Sign in with Microsoft
            </button>

            {/* GitHub */}
            <button className="w-full bg-white hover:bg-gray-50 text-gray-900 font-medium py-2 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-3 shadow-sm">
              <Image src="/github.png" alt="GitHub" width={20} height={20} />
              Sign in with Github
            </button>
          </div>

          {/* Sign up link */}
          <div className="mt-4 text-center">
            <span className="text-gray-400">Don't have an account? </span>
            <Link href="/signup" className="text-orange-500 hover:text-orange-400 font-medium transition-colors">
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
