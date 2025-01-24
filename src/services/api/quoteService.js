const API_URL = import.meta.env.VITE_QUOTE_API_URL

export const quoteService = {
  async getRandomQuote() {
    try {
      const response = await fetch(API_URL)
      if (!response.ok) {
        throw new Error('Failed to fetch quotes')
      }
      const quote = await response.json()
      return {
        text: quote.quote,
        author: quote.author
      }
    } catch (error) {
      console.error('Error in quoteService:', error)
      throw error
    }
  }
}