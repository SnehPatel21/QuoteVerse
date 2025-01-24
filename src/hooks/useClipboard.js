export const useClipboard = () => {
    const copyToClipboard = async (text) => {
      try {
        await navigator.clipboard.writeText(text)
        // You could add toast notification here
        console.log('Copied to clipboard')
      } catch (err) {
        console.error('Failed to copy:', err)
      }
    }
  
    return { copyToClipboard }
  }