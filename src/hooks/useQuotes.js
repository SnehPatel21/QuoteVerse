import { useState, useEffect, useCallback } from 'react'
import { quoteService } from '../services/api/quoteService'

export const useQuotes = () => {
  const [quote, setQuote] = useState(null)
  const [error, setError] = useState(null)

  const fetchNewQuote = useCallback(async () => {
    try {
      const newQuote = await quoteService.getRandomQuote()
      setQuote(newQuote)
      setError(null)
    } catch (err) {
      setError('Failed to fetch quote')
      console.error('Error fetching quote:', err)
    }
  }, [])

  useEffect(() => {
    fetchNewQuote()
  }, [fetchNewQuote])

  return { quote, error, fetchNewQuote }
}