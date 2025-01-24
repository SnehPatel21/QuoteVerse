export const Button = ({ children, onClick, variant = 'primary' }) => {
    const baseStyles = "px-4 py-2 rounded-lg font-medium transition-colors duration-200"
    const variants = {
      primary: "bg-primary-light text-white hover:bg-primary-dark dark:bg-primary-dark dark:hover:bg-primary-light",
      secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
    }
  
    return (
      <button 
        className={`${baseStyles} ${variants[variant]}`}
        onClick={onClick}
      >
        {children}
      </button>
    )
  }