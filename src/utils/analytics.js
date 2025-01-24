export const analytics = {
    logEvent(eventName, params = {}) {
      if (import.meta.env.DEV) {
        console.log('Analytics Event:', eventName, params)
        return
      }
      // Add your analytics implementation here
    },
  
    logError(error, context = {}) {
      if (import.meta.env.DEV) {
        console.error('Error:', error, context)
        return
      }
      // Add your error logging implementation here
    }
  }