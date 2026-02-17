import { FaInstagram, FaWhatsapp, FaTiktok } from 'react-icons/fa'

const Footer = () => {
  const socialLinks = [
    { icon: FaInstagram, url: 'https://instagram.com/ganexa.team', color: 'hover:text-pink-500' },
    { icon: FaWhatsapp, url: 'https://wa.me/6287760769086', color: 'hover:text-green-500' },
    { icon: FaTiktok, url: 'https://tiktok.com/@ganexa.team', color: 'hover:text-gray-900 dark:hover:text-white' },
  ]

  return (
    <footer className="bg-gray-50 dark:bg-[#1a1d29] border-t border-gray-200 dark:border-gray-800 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-6">
          {/* Logo */}
          <img src="/logos/gt.png" alt="Ganexa" className="h-10 object-contain" />

          {/* Social Icons */}
          <div className="flex items-center space-x-6">
            {socialLinks.map((social, index) => {
              const Icon = social.icon
              return (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-2xl text-gray-400 dark:text-gray-500 transition-all duration-300 ${social.color} hover:scale-110`}
                >
                  <Icon />
                </a>
              )
            })}
          </div>

          {/* Copyright */}
          <p className="text-sm text-gray-500 dark:text-gray-600 text-center">
            © 2026 Ganexa. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
