const Button = ({ children, variant = 'primary', href, onClick, className = '', newTab = false }) => {
  const baseStyles = "px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 inline-block text-center"
  
  const variants = {
    primary: "bg-gradient-to-r from-hyperspeed-cyan to-hyperspeed-blue hover:from-hyperspeed-blue hover:to-hyperspeed-purple text-white shadow-lg shadow-hyperspeed-cyan/30",
    outline: "border-2 border-hyperspeed-cyan text-hyperspeed-cyan hover:bg-gradient-to-r hover:from-hyperspeed-cyan hover:to-hyperspeed-pink hover:text-white hover:border-transparent",
    ghost: "text-white hover:text-hyperspeed-cyan"
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
