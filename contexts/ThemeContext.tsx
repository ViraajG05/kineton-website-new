'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'

type Theme = 'light' | 'dark'

interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('dark')

  useEffect(() => {
    // Always set dark theme
    setTheme('dark')
  }, [])

  useEffect(() => {
    // Apply dark theme to document
    const root = window.document.documentElement
    root.classList.remove('light', 'dark')
    root.classList.add('dark')
    localStorage.setItem('theme', 'dark')
  }, [theme])

  const toggleTheme = () => {
    // No-op function since we only want dark theme
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
} 