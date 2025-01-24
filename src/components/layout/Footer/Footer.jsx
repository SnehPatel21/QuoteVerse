export const Footer = () => {
    return (
      <footer className="bg-white dark:bg-gray-800 shadow-sm mt-auto">
        <div className="container mx-auto px-4 py-4 text-center text-gray-600 dark:text-gray-300">
          <p>© {new Date().getFullYear()} QuoteVerse. Made with ❤️</p>
        </div>
      </footer>
    )
  }