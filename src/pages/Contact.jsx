import { FaWhatsapp, FaInstagram, FaTiktok } from 'react-icons/fa'
import Button from '../components/Button'

const Contact = () => {
  const socialMedia = [
    {
      icon: FaInstagram,
      name: 'Instagram',
      handle: '@ganexa.team',
      url: 'https://instagram.com/ganexa.team',
      color: 'from-pink-500 to-purple-500',
      hoverClass: 'hover:shadow-xl'
    },
    {
      icon: FaWhatsapp,
      name: 'WhatsApp',
      handle: '+62 877-6076-8944 / +62 877-6076-9086',
      url: 'https://wa.me/6287760769086',
      color: 'from-green-400 to-green-600',
      hoverClass: 'hover:shadow-xl'
    },
    {
      icon: FaTiktok,
      name: 'TikTok',
      handle: '@ganexa.team',
      url: 'https://tiktok.com/@ganexa.team',
      color: 'from-gray-900 to-black',
      hoverClass: 'hover:shadow-xl'
    }
  ]

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 text-primary">
            Hubungi Kami
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Mau bikin website buat organisasi sekolah kamu? Yuk chat kami! Konsultasi gratis, ada 4 paket (BASIC hingga ADVANCED) mulai dari Rp 200K.
          </p>
        </div>

        {/* WhatsApp CTA */}
        <div className="max-w-2xl mx-auto mb-16">
          <div className="bg-gradient-to-br from-green-500/20 to-green-700/20 border-2 border-green-500 rounded-2xl p-10 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,197,94,0.1),transparent_50%)]"></div>
            <div className="relative z-10">
              <FaWhatsapp className="text-6xl text-green-500 mx-auto mb-6 animate-bounce" />
              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4 text-gray-900 dark:text-white">
                Chat Langsung Via WhatsApp
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Langsung connect sama tim Ganexa. Konsultasi gratis, tanya-tanya bebas!
              </p>
              <Button 
                variant="primary"
                href="https://wa.me/6287760769086?text=Halo%20Ganexa!%20Saya%20dari%20organisasi%20sekolah%20mau%20bikin%20website%20🚀"
                newTab
                className="bg-green-500 hover:bg-green-600"
              >
                <span className="flex items-center gap-2">
                  <FaWhatsapp className="text-xl" />
                  Chat Sekarang
                </span>
              </Button>
            </div>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-heading font-bold text-center mb-10 text-primary">
            Follow Kami di Social Media
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {socialMedia.map((social, index) => {
              const Icon = social.icon
              return (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`bg-white dark:bg-[#1a1d29] border border-gray-200 dark:border-gray-800 rounded-2xl p-8 text-center transition-all duration-300 transform hover:scale-105 ${social.hoverClass} group`}
                >
                  <div className={`inline-block p-4 rounded-full bg-gradient-to-br ${social.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="text-4xl text-white" />
                  </div>
                  <h3 className="text-xl font-heading font-bold mb-2 text-gray-900 dark:text-white">{social.name}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{social.handle}</p>
                </a>
              )
            })}
          </div>
        </div>

        {/* Additional Info */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary/10 to-blue-500/10 border border-primary/30 rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-xl font-heading font-bold mb-3 text-gray-900 dark:text-white">
              💡 Tips: Siapkan Info Organisasi Kamu
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
              Biar konsultasi lebih efektif, siapkan info singkat tentang organisasi kamu (OSIS, Paskibra, PMR, dll), 
              budget yang tersedia (BASIC Rp 200K, STANDARD Rp 500K, PRO Rp 1 Juta, atau ADVANCED Rp 2 Juta), 
              dan fitur yang dibutuhin. Tapi tenang, kalau belum siap juga gapapa, kami bantu dari awal kok!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
