export const validateQuote = (quote) => {
    if (!quote) return false
    if (typeof quote.text !== 'string' || quote.text.trim().length === 0) return false
    if (quote.author && typeof quote.author !== 'string') return false
    return true
  }
  