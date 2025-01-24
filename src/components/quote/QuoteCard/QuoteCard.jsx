import { useClipboard } from '../../../hooks/useClipboard'
import { QuoteActions } from '../QuoteActions/QuoteActions'

export const QuoteCard = ({ quote, onNewQuote }) => {
  const { copyToClipboard } = useClipboard()

  if (!quote) {
    return (
      <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
        <p className="text-center text-gray-600 dark:text-gray-400">Loading quote...</p>
      </div>
    )
  }

  const handleCopy = () => {
    copyToClipboard(`"${quote.text}" - ${quote.author || 'Unknown'}`)
  }

  return (
    <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
      <blockquote className="text-xl font-medium text-gray-800 dark:text-gray-200 mb-4">
        "{quote.text}"
      </blockquote>
      <cite className="block text-right text-gray-600 dark:text-gray-400 mb-6">
        - {quote.author || 'Unknown'}
      </cite>
      <QuoteActions onNewQuote={onNewQuote} onCopy={handleCopy} />
    </div>
  )
}