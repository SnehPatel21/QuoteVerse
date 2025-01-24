export const debounce = (func, wait) => {
    let timeout
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout)
        func(...args)
      }
      clearTimeout(timeout)
      timeout = setTimeout(later, wait)
    }
  }
  
  export const formatQuote = (quote) => {
    if (!quote) return null
    return {
      text: quote.text.trim(),
      author: quote.author?.trim() || 'Unknown'
    }
  }