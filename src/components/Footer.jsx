import { FaInstagram, FaWhatsapp, FaTiktok } from 'react-icons/fa'

const Footer = () => {
  const socialLinks = [
    { icon: FaInstagram, url: 'https://instagram.com/ganexa.team', color: 'hover:text-pink-500' },
    { icon: FaWhatsapp, url: 'https://wa.me/6287760769086', color: 'hover:text-green-500' },
    { icon: FaTiktok, url: 'https://tiktok.com/@ganexa.team', color: 'hover:text-gray-900 dark:hover:text-white' },
  ]

  return (
    <footer className="relative z-20 backdrop-blur-xl border-t border-hyperspeed-cyan/20 py-12 mt-20 bg-gradient-to-br from-hyperspeed-cyan/5 via-transparent to-hyperspeed-pink/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-6">
          {/* Logo */}
          <img src="/logos/gt.png" alt="Ganexa" className="h-10 object-contain drop-shadow-2xl filter brightness-110" />

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
                  className={`text-2xl text-white/70 transition-all duration-300 ${social.color} hover:scale-125 hover:drop-shadow-lg`}
                >
                  <Icon />
                </a>
              )
            })}
          </div>

          {/* Copyright */}
          <p className="text-sm text-white/60 text-center">
            © 2026 Ganexa. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
