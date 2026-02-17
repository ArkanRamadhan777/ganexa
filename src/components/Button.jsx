const Button = ({ children, variant = 'primary', href, onClick, className = '', newTab = false }) => {
  const baseStyles = "px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 inline-block text-center"
  
  const variants = {
    primary: "bg-primary hover:bg-blue-600 text-white shadow-lg",
    outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white",
    ghost: "text-gray-600 dark:text-gray-300 hover:text-primary"
  }

  const combinedClassName = `${baseStyles} ${variants[variant]} ${className}`

  if (href) {
    return (
      <a
        href={href}
        className={combinedClassName}
        target={newTab ? '_blank' : '_self'}
        rel={newTab ? 'noopener noreferrer' : ''}
      >
        {children}
      </a>
    )
  }

  return (
    <button onClick={onClick} className={combinedClassName}>
      {children}
    </button>
  )
}

export default Button
