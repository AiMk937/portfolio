// src/components/DarkToggle.tsx
'use client'
import { useTheme } from 'next-themes'
export default function DarkToggle() {
  const { theme, setTheme } = useTheme()
  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="fixed top-4 right-4 p-2 bg-gray-200 dark:bg-gray-800 rounded-full"
    >
      {theme === 'dark' ? '🌞' : '🌙'}
    </button>
  )
}