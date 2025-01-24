export const handleError = (error, fallback = null) => {
    console.error('Error occurred:', error)
    
    if (error.response) {
      // Handle API errors
      switch (error.response.status) {
        case 404:
          return 'Resource not found'
        case 429:
          return 'Too many requests. Please try again later'
        case 500:
          return 'Server error. Please try again later'
        default:
          return fallback || 'An unexpected error occurred'
      }
    }
    
    if (error instanceof TypeError) {
      return 'Network error. Please check your connection'
    }
    
    return fallback || 'An unexpected error occurred'
  }
  