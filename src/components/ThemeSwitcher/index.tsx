import cn from 'classnames'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { PiDevicesLight } from 'react-icons/pi'
import { WiDaySunny } from 'react-icons/wi'
import { IoMoonOutline } from 'react-icons/io5'

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const handleThemeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation()
    e.preventDefault()
    setTheme(e.target.value)
  }

  return (
    <div className="flex items-center">
      <fieldset className="flex space-x-4">
        <legend className="sr-only">Select a display theme:</legend>

        <div className="relative flex h-8 items-center justify-around rounded-full border border-gray-300 p-1 dark:border-gray-600 sm:h-6 sm:w-[5em]">
          {/* System Theme */}
          <label className="relative cursor-pointer">
            <input
              type="radio"
              name="theme"
              value="system"
              className="sr-only"
              checked={theme === 'system'}
              onChange={handleThemeChange}
            />
            <div
              className={cn(
                'm-[-0.29em] flex size-8 items-center justify-center rounded-full transition-all sm:mx-[-0.6em] sm:size-6',
                theme === 'system' ? 'rounded-full border border-gray-300 bg-transparent dark:border-gray-600' : ''
              )}
            >
              <PiDevicesLight
                className={cn(
                  'size-5 sm:size-4',
                  theme === 'system' ? 'text-black dark:text-white' : 'text-gray-500 dark:text-gray-400'
                )}
              />
              <span className="sr-only">System</span>
            </div>
          </label>

          {/* Light Theme */}
          <label className="relative cursor-pointer">
            <input
              type="radio"
              name="theme"
              value="light"
              className="sr-only"
              checked={theme === 'light'}
              onChange={handleThemeChange}
            />
            <div
              className={cn(
                'flex size-8 items-center justify-center rounded-full transition-all sm:size-6',
                theme === 'light' ? 'rounded-full border border-gray-300 bg-transparent dark:border-gray-600' : ''
              )}
            >
              <WiDaySunny
                className={cn(
                  'size-5 sm:size-4',
                  theme === 'light' ? 'text-black dark:text-white' : 'text-gray-500 dark:text-gray-400'
                )}
              />
              <span className="sr-only">Light</span>
            </div>
          </label>

          {/* Dark Theme */}
          <label className="relative cursor-pointer">
            <input
              type="radio"
              name="theme"
              value="dark"
              className="sr-only"
              checked={theme === 'dark'}
              onChange={handleThemeChange}
            />
            <div
              className={cn(
                'm-[-0.3em] flex size-8 items-center justify-center rounded-full transition-all sm:mx-[-0.6em] sm:size-6',
                theme === 'dark' ? 'rounded-full border border-gray-300 bg-transparent dark:border-gray-600' : ''
              )}
            >
              <IoMoonOutline
                className={cn(
                  'size-5 sm:size-4',
                  theme === 'dark' ? 'text-black dark:text-white' : 'text-gray-500 dark:text-gray-400'
                )}
              />
              <span className="sr-only">Dark</span>
            </div>
          </label>
        </div>
      </fieldset>
    </div>
  )
}
