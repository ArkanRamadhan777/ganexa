import { FaWhatsapp } from 'react-icons/fa'

const FloatingWhatsApp = () => {
  const whatsappNumber = '6287760769086' // Ganexa WhatsApp primary number
  const message = encodeURIComponent('Halo Ganexa! Saya tertarik untuk membuat website 🚀')

  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:shadow-neon-blue transition-all duration-300 hover:scale-110 z-50 animate-bounce"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp className="text-3xl" />
    </a>
  )
}

export default FloatingWhatsApp
