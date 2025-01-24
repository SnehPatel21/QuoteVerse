import { useTheme } from './context/ThemeContext'
import { Header } from './components/layout/Header/Header'
import { Footer } from './components/layout/Footer/Footer'
import { QuoteCard } from './components/quote/QuoteCard/QuoteCard'
import { useQuotes } from './hooks/useQuotes'

function App() {
  const { theme } = useTheme()
  const { quote, fetchNewQuote } = useQuotes()

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'dark' : ''}`}>
      <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">
          <QuoteCard quote={quote} onNewQuote={fetchNewQuote} />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App