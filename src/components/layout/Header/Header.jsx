import { ThemeToggle } from '../../common/ThemeToggle/ThemeToggle'

export const Header = () => {
  return (
    <header className="bg-white dark:bg-gray-800 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">QuoteVerse</h1>
        <ThemeToggle />
      </div>
    </header>
  )
}
