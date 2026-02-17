import { HiSun, HiMoon } from 'react-icons/hi'
import { useTheme } from '../context/ThemeContext'

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:scale-110 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300"
      aria-label="Toggle theme"
    >
      {isDark ? (
        <HiSun className="text-xl text-yellow-400" />
      ) : (
        <HiMoon className="text-xl text-gray-700" />
      )}
    </button>
  )
}

export default ThemeToggle
