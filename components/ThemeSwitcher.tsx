'use client'
import { useTheme } from "next-themes"
import { FaSun } from 'react-icons/fa'
import { PiMoonStarsDuotone } from 'react-icons/pi'


const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme()

  return (
    <div onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
      {theme === 'dark' ? <PiMoonStarsDuotone/> : <FaSun/>}
    </div>
  )
}

export default ThemeSwitcher